(function(){
'use strict';

if(window.tvteam_lampa_ready || typeof Lampa === 'undefined') return;
window.tvteam_lampa_ready = true;

var VERSION = '0.1.0';
var COMPONENT = 'tvteam_main';
var KEY_URL = 'tvteam_m3u_url';
var KEY_CACHE = 'tvteam_filtered_cache_v1';
var KEY_CACHE_TS = 'tvteam_filtered_cache_ts_v1';
var CACHE_MS = 6 * 60 * 60 * 1000;

var state = {
  channels: [],
  active: 'Кино',
  body: null,
  loading: false
};

function esc(s){
  return String(s == null ? '' : s)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

function hash(str){
  var h = 5381, i;
  for(i=0;i<str.length;i++) h = ((h << 5) + h) + str.charCodeAt(i);
  return Math.abs(h >>> 0).toString(36);
}

function getUrl(){ return Lampa.Storage.get(KEY_URL, '') || ''; }
function setUrl(v){
  Lampa.Storage.set(KEY_URL, v || '');
  Lampa.Storage.set(KEY_CACHE, []);
  Lampa.Storage.set(KEY_CACHE_TS, 0);
}

function categoryFor(group){
  var g = String(group || '').toLowerCase();

  if(/кинозал|cinema/.test(g)) return 'Кинозалы';
  if(/спорт|sport/.test(g)) return 'Спорт';

  // TV.TEAM uses a separate Movies/Кино group.
  if(/кино|movie/.test(g)) return 'Кино';

  return '';
}

function parseM3U(text){
  var lines = String(text || '').split(/\r?\n/);
  var out = [];
  var i, line, next, tvgId, name, logo, group, cat, id;

  for(i=0;i<lines.length;i++){
    line = (lines[i] || '').trim();
    if(line.indexOf('#EXTINF:') !== 0) continue;

    next = '';
    var j = i + 1;
    while(j < lines.length){
      var t = (lines[j] || '').trim();
      if(!t){ j++; continue; }
      if(t.charAt(0) === '#'){ j++; continue; }
      next = t;
      break;
    }
    if(!next) continue;

    tvgId = ((line.match(/tvg-id="([^"]*)"/i) || [,''])[1] || '').trim();
    logo  = ((line.match(/tvg-logo="([^"]*)"/i) || [,''])[1] || '').trim();
    group = ((line.match(/group-title="([^"]*)"/i) || [,''])[1] || '').trim();
    name  = ((line.match(/,(.+)$/) || [,''])[1] || 'Канал').trim();

    cat = categoryFor(group);
    if(!cat) continue;

    id = tvgId || hash(name + '|' + next);

    out.push({
      id: id,
      name: name,
      url: next,
      logo: logo,
      group: group,
      category: cat
    });
  }

  return out;
}

function readCache(){
  var ts = parseInt(Lampa.Storage.get(KEY_CACHE_TS, 0), 10) || 0;
  var arr = Lampa.Storage.get(KEY_CACHE, []);
  if(Date.now() - ts < CACHE_MS && arr && arr.length) return arr;
  return null;
}

function saveCache(arr){
  try{
    Lampa.Storage.set(KEY_CACHE, arr);
    Lampa.Storage.set(KEY_CACHE_TS, Date.now());
  }catch(e){}
}

function fetchText(url, ok, fail){
  // Prefer fetch; fallback to Lampa.Reguest for older builds.
  try{
    fetch(url, {cache:'no-store'}).then(function(r){
      if(!r.ok) throw new Error('HTTP ' + r.status);
      return r.text();
    }).then(ok).catch(function(){
      var net = new Lampa.Reguest();
      net.timeout(25000);
      net.silent(url, function(data){
        if(typeof data === 'string') ok(data);
        else fail(new Error('Плейлист вернулся не как текст'));
      }, function(){ fail(new Error('Не удалось загрузить M3U')); });
    });
  }catch(e){
    var net2 = new Lampa.Reguest();
    net2.timeout(25000);
    net2.silent(url, function(data){
      if(typeof data === 'string') ok(data);
      else fail(new Error('Плейлист вернулся не как текст'));
    }, function(){ fail(new Error('Не удалось загрузить M3U')); });
  }
}

function load(force, done){
  if(state.loading) return;
  var url = getUrl();

  if(!url){
    Lampa.Noty.show('TV.TEAM: укажите M3U URL в настройках');
    openSettings();
    return;
  }

  if(!force){
    var cached = readCache();
    if(cached){
      state.channels = cached;
      if(done) done();
      return;
    }
  }

  state.loading = true;
  renderLoading('Загружаю TV.TEAM…');

  fetchText(url, function(text){
    state.loading = false;
    var arr = parseM3U(text);

    if(!arr.length){
      renderError('Не нашёл группы Кино / Кинозалы / Спорт. Пришли мне названия групп из твоего плейлиста — подстрою фильтр.');
      return;
    }

    state.channels = arr;
    saveCache(arr);
    if(done) done();
    else render();
  }, function(err){
    state.loading = false;
    renderError('Ошибка загрузки плейлиста: ' + (err && err.message ? err.message : 'неизвестная ошибка'));
  });
}

function counts(){
  var c = {'Кино':0,'Кинозалы':0,'Спорт':0};
  state.channels.forEach(function(ch){ if(c[ch.category] !== undefined) c[ch.category]++; });
  return c;
}

function visible(){
  return state.channels.filter(function(ch){ return ch.category === state.active; });
}

function renderLoading(text){
  if(!state.body) return;
  state.body.empty().append('<div class="tvteam-message">'+esc(text)+'</div>');
}

function renderError(text){
  if(!state.body) return;
  state.body.empty().append(
    '<div class="tvteam-message">'+esc(text)+'</div>'+
    '<div class="tvteam-actions">'+
      '<div class="tvteam-button selector" data-action="reload">Повторить</div>'+
      '<div class="tvteam-button selector" data-action="settings">Настройки</div>'+
    '</div>'
  );
  state.body.find('[data-action="reload"]').on('hover:enter',function(){ load(true); });
  state.body.find('[data-action="settings"]').on('hover:enter',openSettings);
  try{ Lampa.Controller.toggle('content'); }catch(e){}
}

function channelHtml(ch){
  var logo = ch.logo
    ? '<img class="tvteam-logo" src="'+esc(ch.logo)+'" onerror="this.style.display=\'none\'">'
    : '<div class="tvteam-logo tvteam-logo-empty"></div>';

  return '<div class="tvteam-channel selector" data-id="'+esc(ch.id)+'">'+
    logo+
    '<div class="tvteam-channel-info">'+
      '<div class="tvteam-channel-name">'+esc(ch.name)+'</div>'+
      '<div class="tvteam-channel-group">'+esc(ch.group)+'</div>'+
    '</div>'+
  '</div>';
}

function play(ch){
  if(!ch) return;
  try{
    Lampa.Player.play({url:ch.url,title:ch.name,iptv:true});
  }catch(e){
    Lampa.Noty.show('Не удалось запустить канал');
  }
}

function render(){
  if(!state.body) return;

  var c = counts();
  var list = visible();

  var tabs = ['Кино','Кинозалы','Спорт'].map(function(name){
    return '<div class="tvteam-tab selector'+(name===state.active?' active':'')+'" data-cat="'+esc(name)+'">'+
      esc(name)+' <span>'+c[name]+'</span></div>';
  }).join('');

  var channels = list.length
    ? list.map(channelHtml).join('')
    : '<div class="tvteam-message">В этой категории каналов не найдено</div>';

  state.body.empty().append(
    '<div class="tvteam-wrap">'+
      '<div class="tvteam-head">'+
        '<div class="tvteam-title">TV.TEAM</div>'+
        '<div class="tvteam-refresh selector" data-action="refresh">↻ Обновить</div>'+
      '</div>'+
      '<div class="tvteam-tabs">'+tabs+'</div>'+
      '<div class="tvteam-list">'+channels+'</div>'+
    '</div>'
  );

  state.body.find('[data-cat]').on('hover:enter',function(){
    state.active = $(this).attr('data-cat');
    render();
  });

  state.body.find('[data-action="refresh"]').on('hover:enter',function(){ load(true); });

  state.body.find('[data-id]').on('hover:enter',function(){
    var id = String($(this).attr('data-id'));
    var ch = state.channels.find(function(x){ return String(x.id) === id; });
    play(ch);
  });

  try{ Lampa.Controller.toggle('content'); }catch(e){}
}

function promptUrl(){
  var current = getUrl();
  if(Lampa.Keypad && typeof Lampa.Keypad.show === 'function'){
    Lampa.Keypad.show({
      title:'TV.TEAM — M3U URL',
      value:current,
      confirm:function(v){
        v = String(v || '').trim();
        if(!v) return;
        setUrl(v);
        Lampa.Noty.show('TV.TEAM: плейлист сохранён');
        if(state.body) load(true);
      }
    });
  }else{
    var v = window.prompt('TV.TEAM — M3U URL', current);
    if(v !== null && String(v).trim()){
      setUrl(String(v).trim());
      Lampa.Noty.show('TV.TEAM: плейлист сохранён');
      if(state.body) load(true);
    }
  }
}

function openSettings(){
  try{
    Lampa.Activity.push({component:'settings',url:'',title:'Настройки'});
    setTimeout(function(){
      try{ Lampa.SettingsApi.selectComponent('tvteam'); }catch(e){}
    },200);
  }catch(e){
    promptUrl();
  }
}

function addSettings(){
  if(!Lampa.SettingsApi) return;

  try{
    Lampa.SettingsApi.addComponent({
      component:'tvteam',
      name:'TV.TEAM',
      icon:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"/></svg>'
    });

    Lampa.SettingsApi.addParam({
      component:'tvteam',
      param:{name:'tvteam_m3u_button',type:'button'},
      field:{
        name:'M3U плейлист TV.TEAM',
        description:getUrl() ? 'Сохранён. Ссылка скрыта для безопасности.' : 'Нажмите и вставьте персональную M3U-ссылку'
      },
      onChange:promptUrl
    });

    Lampa.SettingsApi.addParam({
      component:'tvteam',
      param:{name:'tvteam_refresh_button',type:'button'},
      field:{name:'Обновить плейлист',description:'Перезагрузить каналы и очистить кэш'},
      onChange:function(){ Lampa.Storage.set(KEY_CACHE_TS,0); if(state.body) load(true); else Lampa.Noty.show('Кэш TV.TEAM очищен'); }
    });

    Lampa.SettingsApi.addParam({
      component:'tvteam',
      param:{type:'title'},
      field:{name:'Показываются только: Кино · Кинозалы · Спорт'}
    });
  }catch(e){}
}

function addStyles(){
  var css = ''+
  '.tvteam-wrap{padding:1.5em 2em 3em}'+
  '.tvteam-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:1.2em}'+
  '.tvteam-title{font-size:1.7em;font-weight:700}'+
  '.tvteam-refresh,.tvteam-button{padding:.7em 1em;border-radius:.5em;background:rgba(255,255,255,.1)}'+
  '.tvteam-tabs{display:flex;gap:.7em;margin-bottom:1.3em;overflow-x:auto}'+
  '.tvteam-tab{padding:.75em 1.1em;border-radius:.6em;background:rgba(255,255,255,.08);white-space:nowrap}'+
  '.tvteam-tab span{opacity:.6;margin-left:.35em}'+
  '.tvteam-tab.active{background:rgba(255,255,255,.22)}'+
  '.tvteam-list{display:grid;grid-template-columns:repeat(auto-fill,minmax(18em,1fr));gap:.65em}'+
  '.tvteam-channel{display:flex;align-items:center;gap:.9em;padding:.75em;border-radius:.65em;background:rgba(255,255,255,.06);min-height:4.2em}'+
  '.tvteam-channel.focus,.tvteam-channel.hover,.tvteam-tab.focus,.tvteam-refresh.focus,.tvteam-button.focus{background:rgba(255,255,255,.22);transform:scale(1.01)}'+
  '.tvteam-logo{width:3.8em;height:3.2em;object-fit:contain;flex:0 0 auto}'+
  '.tvteam-logo-empty{background:rgba(255,255,255,.06);border-radius:.35em}'+
  '.tvteam-channel-name{font-size:1.05em;font-weight:600;line-height:1.2}'+
  '.tvteam-channel-group{font-size:.8em;opacity:.5;margin-top:.3em}'+
  '.tvteam-message{padding:3em 1em;text-align:center;font-size:1.1em;opacity:.8}'+
  '.tvteam-actions{display:flex;gap:1em;justify-content:center}';

  $('<style id="tvteam-lampa-style">'+css+'</style>').appendTo('head');
}

function Main(object){ this.activity = object; }
Main.prototype.create = function(){
  this.html = $('<div class="tvteam-root"></div>');
  state.body = this.html;
  var cached = readCache();
  if(cached){
    state.channels = cached;
    render();
  }else{
    renderLoading('Загружаю TV.TEAM…');
    load(false);
  }
  return this.html[0];
};
Main.prototype.render = function(){ return this.create(); };
Main.prototype.start = function(){};
Main.prototype.pause = function(){};
Main.prototype.stop = function(){};
Main.prototype.destroy = function(){ if(state.body === this.html) state.body = null; };

function addMenu(){
  if($('.menu__item[data-action="tvteam"]').length) return;

  var icon = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 5h16v11H4zM8 19h8v2H8z"/></svg>';
  var item = $('<li class="menu__item selector" data-action="tvteam">'+
    '<div class="menu__ico">'+icon+'</div>'+
    '<div class="menu__text">TV.TEAM</div></li>');

  item.on('hover:enter',function(){
    Lampa.Activity.push({component:COMPONENT,url:'',title:'TV.TEAM'});
  });

  var settings = $('.menu .menu__list .menu__item[data-action="settings"]');
  if(settings.length) settings.before(item);
  else $('.menu .menu__list').eq(0).append(item);
}

function init(){
  addStyles();
  addSettings();
  Lampa.Component.add(COMPONENT,Main);
  Lampa.Manifest.plugins = {
    type:'other',
    version:VERSION,
    name:'TV.TEAM Lite',
    description:'Только Кино, Кинозалы и Спорт'
  };
  addMenu();
  console.log('[TV.TEAM Lite] v'+VERSION+' ready');
}

if(window.appready) init();
else Lampa.Listener.follow('app',function(e){ if(e.type==='ready') init(); });

})();