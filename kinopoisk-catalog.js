(function(){
'use strict';

if(window.yernar_kinopoisk_catalog_ready || typeof Lampa === 'undefined') return;
window.yernar_kinopoisk_catalog_ready = true;

var VERSION = '0.1.0';
var KP_SOURCE_URL = 'https://cdn.jsdelivr.net/gh/nb557/plugins@main/kp_source.js';
var MENU_ACTION = 'yernar_kinopoisk_catalog';

function noty(t){ try{ Lampa.Noty.show(t); }catch(e){} }

function haveKP(){
  return !!(Lampa.Api && Lampa.Api.sources && Lampa.Api.sources.KP);
}

function waitKP(done, tries){
  tries = tries || 0;
  if(haveKP()) return done();
  if(tries > 60) return noty('Кинопоиск: источник KP не загрузился');
  setTimeout(function(){ waitKP(done, tries + 1); }, 200);
}

function loadSource(done){
  if(haveKP()) return done();

  if(window.kp_source_plugin){
    return waitKP(done);
  }

  try{
    Lampa.Utils.putScript([KP_SOURCE_URL], function(){
      waitKP(done);
    }, function(){
      noty('Кинопоиск: ошибка загрузки источника');
    }, null, false);
  }catch(e){
    var s = document.createElement('script');
    s.src = KP_SOURCE_URL;
    s.async = true;
    s.onload = function(){ waitKP(done); };
    s.onerror = function(){ noty('Кинопоиск: ошибка загрузки источника'); };
    document.body.appendChild(s);
  }
}

function openList(url, title){
  loadSource(function(){
    Lampa.Activity.push({
      url: url,
      title: title,
      component: 'category_full',
      source: 'KP',
      page: 1,
      card_type: true
    });
  });
}

function getFilters(cb){
  loadSource(function(){
    try{
      Lampa.Api.sources.KP.kpFilters({}, function(genres, countries, genresMap, countriesMap){
        cb({
          genres: genres || [],
          countries: countries || [],
          genresMap: genresMap || {},
          countriesMap: countriesMap || {}
        });
      });
    }catch(e){
      noty('Кинопоиск: не удалось получить жанры и страны');
    }
  });
}

function openCountry(country, type){
  getFilters(function(f){
    var id = f.countriesMap[country];
    if(!id){
      noty('Кинопоиск: страна «' + country + '» не найдена в API');
      return;
    }
    var url = 'api/v2.2/films?order=NUM_VOTE&countries=' + id;
    if(type) url += '&type=' + type;
    openList(url, country + (type === 'TV_SERIES' ? ' — сериалы' : type === 'FILM' ? ' — фильмы' : ''));
  });
}

function openGenre(title, type){
  getFilters(function(f){
    var key = String(title || '').toLowerCase();
    var id = null;

    Object.keys(f.genresMap).some(function(k){
      if(String(k).toLowerCase() === key){
        id = f.genresMap[k];
        return true;
      }
      return false;
    });

    if(!id){
      noty('Кинопоиск: жанр «' + title + '» не найден');
      return;
    }

    var url = 'api/v2.2/films?order=NUM_VOTE&genres=' + id;
    if(type) url += '&type=' + type;
    openList(url, title);
  });
}

function showGenres(){
  getFilters(function(f){
    var items = f.genres
      .filter(function(g){ return g && !g.hide && !g.separator && g.id; })
      .map(function(g){ return {title: g.title, id: g.id}; });

    Lampa.Select.show({
      title: 'Кинопоиск — жанры',
      items: items,
      onSelect: function(a){
        openList('api/v2.2/films?order=NUM_VOTE&genres=' + a.id, 'Кинопоиск — ' + a.title);
      },
      onBack: showMenu
    });
  });
}

function showCountries(){
  getFilters(function(f){
    var items = f.countries
      .filter(function(c){ return c && !c.hide && !c.separator && c.id; })
      .map(function(c){ return {title: c.title, id: c.id}; });

    Lampa.Select.show({
      title: 'Кинопоиск — страны',
      items: items,
      onSelect: function(a){
        openList('api/v2.2/films?order=NUM_VOTE&countries=' + a.id, 'Кинопоиск — ' + a.title);
      },
      onBack: showMenu
    });
  });
}

function showMenu(){
  loadSource(function(){
    var items = [
      {title:'🔥 Сейчас смотрят — фильмы', url:'api/v2.2/films/collections?type=TOP_POPULAR_MOVIES'},
      {title:'🔥 Сейчас смотрят — сериалы', url:'api/v2.2/films/collections?type=POPULAR_SERIES'},
      {title:'🎬 Все фильмы', url:'api/v2.2/films?order=NUM_VOTE&type=FILM'},
      {title:'📺 Все сериалы', url:'api/v2.2/films?order=NUM_VOTE&type=TV_SERIES'},
      {title:'🎞 Мини-сериалы', url:'api/v2.2/films?order=NUM_VOTE&type=MINI_SERIES'},
      {title:'📡 Телешоу', url:'api/v2.2/films?order=NUM_VOTE&type=TV_SHOW'},
      {title:'🏆 TOP-250 фильмов', url:'api/v2.2/films/collections?type=TOP_250_MOVIES'},
      {title:'🏆 TOP-250 сериалов', url:'api/v2.2/films/collections?type=TOP_250_TV_SHOWS'},
      {title:'🇰🇿 Казахстанские фильмы', country:'Казахстан', type:'FILM'},
      {title:'🇰🇿 Казахстанские сериалы', country:'Казахстан', type:'TV_SERIES'},
      {title:'👶 Мультфильмы', genre:'мультфильм'},
      {title:'🇯🇵 Аниме', genre:'аниме'},
      {title:'🎭 Все жанры', action:'genres'},
      {title:'🌍 Все страны', action:'countries'}
    ];

    Lampa.Select.show({
      title:'Кинопоиск',
      items:items,
      onSelect:function(a){
        if(a.url) return openList(a.url, 'Кинопоиск — ' + a.title.replace(/^[^А-ЯA-Z0-9]+/i,''));
        if(a.country) return openCountry(a.country, a.type);
        if(a.genre) return openGenre(a.genre);
        if(a.action === 'genres') return showGenres();
        if(a.action === 'countries') return showCountries();
      },
      onBack:function(){ try{ Lampa.Controller.toggle('menu'); }catch(e){} }
    });
  });
}

function addMenu(){
  if($('.menu__item[data-action="'+MENU_ACTION+'"]').length) return;

  var icon = '<svg viewBox="0 0 24 24" fill="none">'+
    '<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/>'+
    '<path d="M8 7v10M8 12l8-5M8 12l8 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'+
    '</svg>';

  var item = $('<li class="menu__item selector" data-action="'+MENU_ACTION+'">'+
    '<div class="menu__ico">'+icon+'</div>'+
    '<div class="menu__text">Кинопоиск</div></li>');

  item.on('hover:enter', showMenu);

  var catalog = $('.menu .menu__list .menu__item[data-action="catalog"]');
  if(catalog.length) catalog.before(item);
  else $('.menu .menu__list').eq(0).append(item);
}

function init(){
  Lampa.Manifest.plugins = {
    type:'other',
    version:VERSION,
    name:'Кинопоиск — каталог',
    description:'Каталог и фильтры Кинопоиска; просмотр остаётся через MODS'
  };

  loadSource(function(){
    addMenu();
    console.log('[Yernar Kinopoisk Catalog] v'+VERSION+' ready');
  });
}

if(window.appready) init();
else Lampa.Listener.follow('app', function(e){ if(e.type === 'ready') init(); });

})();