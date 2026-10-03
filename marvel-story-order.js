(function(){
'use strict';

if(window.marvel_story_order_ready || typeof Lampa === 'undefined') return;
window.marvel_story_order_ready = true;

var VERSION = '1.0.1';
var COMPONENT = 'marvel_story_order';
var PER_PAGE = 12;
var CACHE_KEY = 'marvel_story_order_tmdb_cache_v1';

/*
 * Curated MARVEL Story Order.
 * Main MCU follows Disney+/Marvel timeline logic.
 * Legacy Spider-Man is inserted immediately before No Way Home.
 * Fox X-Men is inserted immediately before Deadpool & Wolverine in release/story order,
 * because that continuity branches via time travel and has no single clean calendar order.
 */
var ORDER = [
  {q:'Eyes of Wakanda',year:2025,type:'tv',ru:'Очи Ваканды',tag:'MCU · ПРОЛОГ',note:'Антология разных исторических эпох Ваканды.'},
  {q:'Captain America: The First Avenger',year:2011,type:'movie',ru:'Первый мститель',tag:'MCU'},
  {q:'Agent Carter',year:2015,type:'tv',ru:'Агент Картер — сезон 1',tag:'MCU · СЕРИАЛ',season:1},
  {q:'Agent Carter',year:2015,type:'tv',ru:'Агент Картер — сезон 2',tag:'MCU · СЕРИАЛ',season:2},
  {q:'Captain Marvel',year:2019,type:'movie',ru:'Капитан Марвел',tag:'MCU'},
  {q:'Iron Man',year:2008,type:'movie',ru:'Железный человек',tag:'MCU'},
  {q:'Iron Man 2',year:2010,type:'movie',ru:'Железный человек 2',tag:'MCU'},
  {q:'The Incredible Hulk',year:2008,type:'movie',ru:'Невероятный Халк',tag:'MCU'},
  {q:'Thor',year:2011,type:'movie',ru:'Тор',tag:'MCU'},
  {q:'The Avengers',year:2012,type:'movie',ru:'Мстители',tag:'MCU'},
  {q:'Thor: The Dark World',year:2013,type:'movie',ru:'Тор 2: Царство тьмы',tag:'MCU'},
  {q:'Iron Man 3',year:2013,type:'movie',ru:'Железный человек 3',tag:'MCU'},
  {q:'Captain America: The Winter Soldier',year:2014,type:'movie',ru:'Первый мститель: Другая война',tag:'MCU'},
  {q:'Guardians of the Galaxy',year:2014,type:'movie',ru:'Стражи Галактики',tag:'MCU'},
  {q:'Guardians of the Galaxy Vol. 2',year:2017,type:'movie',ru:'Стражи Галактики. Часть 2',tag:'MCU'},
  {q:'I Am Groot',year:2022,type:'tv',ru:'Я есть Грут — сезон 1',tag:'MCU · СЕРИАЛ',season:1},
  {q:'I Am Groot',year:2022,type:'tv',ru:'Я есть Грут — сезон 2',tag:'MCU · СЕРИАЛ',season:2},
  {q:'Daredevil',year:2015,type:'tv',ru:'Сорвиголова — сезон 1',tag:'DEFENDERS · КАНОН',season:1},
  {q:'Jessica Jones',year:2015,type:'tv',ru:'Джессика Джонс — сезон 1',tag:'DEFENDERS · КАНОН',season:1},
  {q:'Avengers: Age of Ultron',year:2015,type:'movie',ru:'Мстители: Эра Альтрона',tag:'MCU'},
  {q:'Ant-Man',year:2015,type:'movie',ru:'Человек-муравей',tag:'MCU'},
  {q:'Daredevil',year:2015,type:'tv',ru:'Сорвиголова — сезон 2',tag:'DEFENDERS · КАНОН',season:2},
  {q:'Luke Cage',year:2016,type:'tv',ru:'Люк Кейдж — сезон 1',tag:'DEFENDERS · КАНОН',season:1},
  {q:'Iron Fist',year:2017,type:'tv',ru:'Железный кулак — сезон 1',tag:'DEFENDERS · КАНОН',season:1},
  {q:'The Defenders',year:2017,type:'tv',ru:'Защитники',tag:'DEFENDERS · КАНОН'},
  {q:'Captain America: Civil War',year:2016,type:'movie',ru:'Первый мститель: Противостояние',tag:'MCU'},
  {q:'Black Widow',year:2021,type:'movie',ru:'Чёрная вдова',tag:'MCU'},
  {q:'Black Panther',year:2018,type:'movie',ru:'Чёрная пантера',tag:'MCU'},
  {q:'Spider-Man: Homecoming',year:2017,type:'movie',ru:'Человек-паук: Возвращение домой',tag:'MCU'},
  {q:'The Punisher',year:2017,type:'tv',ru:'Каратель — сезон 1',tag:'DEFENDERS · КАНОН',season:1},
  {q:'Doctor Strange',year:2016,type:'movie',ru:'Доктор Стрэндж',tag:'MCU'},
  {q:'Jessica Jones',year:2015,type:'tv',ru:'Джессика Джонс — сезон 2',tag:'DEFENDERS · КАНОН',season:2},
  {q:'Luke Cage',year:2016,type:'tv',ru:'Люк Кейдж — сезон 2',tag:'DEFENDERS · КАНОН',season:2},
  {q:'Iron Fist',year:2017,type:'tv',ru:'Железный кулак — сезон 2',tag:'DEFENDERS · КАНОН',season:2},
  {q:'Daredevil',year:2015,type:'tv',ru:'Сорвиголова — сезон 3',tag:'DEFENDERS · КАНОН',season:3},
  {q:'Thor: Ragnarok',year:2017,type:'movie',ru:'Тор: Рагнарёк',tag:'MCU'},
  {q:'The Punisher',year:2017,type:'tv',ru:'Каратель — сезон 2',tag:'DEFENDERS · КАНОН',season:2},
  {q:'Jessica Jones',year:2015,type:'tv',ru:'Джессика Джонс — сезон 3',tag:'DEFENDERS · КАНОН',season:3},
  {q:'Ant-Man and the Wasp',year:2018,type:'movie',ru:'Человек-муравей и Оса',tag:'MCU'},
  {q:'Avengers: Infinity War',year:2018,type:'movie',ru:'Мстители: Война бесконечности',tag:'MCU'},
  {q:'Avengers: Endgame',year:2019,type:'movie',ru:'Мстители: Финал',tag:'MCU'},
  {q:'Loki',year:2021,type:'tv',ru:'Локи — сезон 1',tag:'MCU · MULTIVERSE',season:1},
  {q:'What If...?',year:2021,type:'tv',ru:'Что, если...? — сезон 1',tag:'MCU · MULTIVERSE',season:1},
  {q:'Marvel Zombies',year:2025,type:'tv',ru:'Marvel Zombies — сезон 1',tag:'MCU · MULTIVERSE',season:1},
  {q:'WandaVision',year:2021,type:'tv',ru:'Ванда/Вижн',tag:'MCU · СЕРИАЛ'},
  {q:'Shang-Chi and the Legend of the Ten Rings',year:2021,type:'movie',ru:'Шан-Чи и легенда десяти колец',tag:'MCU'},
  {q:'The Falcon and the Winter Soldier',year:2021,type:'tv',ru:'Сокол и Зимний солдат',tag:'MCU · СЕРИАЛ'},
  {q:'Spider-Man: Far From Home',year:2019,type:'movie',ru:'Человек-паук: Вдали от дома',tag:'MCU'},

  {q:'Spider-Man',year:2002,type:'movie',ru:'Человек-паук',tag:'SPIDER-MAN · LEGACY',note:'Подготовка к No Way Home.'},
  {q:'Spider-Man 2',year:2004,type:'movie',ru:'Человек-паук 2',tag:'SPIDER-MAN · LEGACY'},
  {q:'Spider-Man 3',year:2007,type:'movie',ru:'Человек-паук 3',tag:'SPIDER-MAN · LEGACY'},
  {q:'The Amazing Spider-Man',year:2012,type:'movie',ru:'Новый Человек-паук',tag:'SPIDER-MAN · LEGACY'},
  {q:'The Amazing Spider-Man 2',year:2014,type:'movie',ru:'Новый Человек-паук: Высокое напряжение',tag:'SPIDER-MAN · LEGACY'},
  {q:'Spider-Man: No Way Home',year:2021,type:'movie',ru:'Человек-паук: Нет пути домой',tag:'MCU · MULTIVERSE'},

  {q:'Eternals',year:2021,type:'movie',ru:'Вечные',tag:'MCU'},
  {q:'Doctor Strange in the Multiverse of Madness',year:2022,type:'movie',ru:'Доктор Стрэндж: В мультивселенной безумия',tag:'MCU · MULTIVERSE'},
  {q:'Hawkeye',year:2021,type:'tv',ru:'Соколиный глаз',tag:'MCU · СЕРИАЛ'},
  {q:'Moon Knight',year:2022,type:'tv',ru:'Лунный рыцарь',tag:'MCU · СЕРИАЛ'},
  {q:'Black Panther: Wakanda Forever',year:2022,type:'movie',ru:'Чёрная пантера: Ваканда навеки',tag:'MCU'},
  {q:'Echo',year:2024,type:'tv',ru:'Эхо',tag:'MCU · СЕРИАЛ'},
  {q:'She-Hulk: Attorney at Law',year:2022,type:'tv',ru:'Женщина-Халк: Адвокат',tag:'MCU · СЕРИАЛ'},
  {q:'Ms. Marvel',year:2022,type:'tv',ru:'Мисс Марвел',tag:'MCU · СЕРИАЛ'},
  {q:'Thor: Love and Thunder',year:2022,type:'movie',ru:'Тор: Любовь и гром',tag:'MCU'},
  {q:'Ironheart',year:2025,type:'tv',ru:'Железное сердце',tag:'MCU · СЕРИАЛ'},
  {q:'Werewolf by Night',year:2022,type:'any',ru:'Ночной оборотень',tag:'MCU · SPECIAL'},
  {q:'The Guardians of the Galaxy Holiday Special',year:2022,type:'any',ru:'Стражи Галактики: Праздничный спецвыпуск',tag:'MCU · SPECIAL'},
  {q:'Ant-Man and the Wasp: Quantumania',year:2023,type:'movie',ru:'Человек-муравей и Оса: Квантомания',tag:'MCU'},
  {q:'Guardians of the Galaxy Vol. 3',year:2023,type:'movie',ru:'Стражи Галактики. Часть 3',tag:'MCU'},
  {q:'Secret Invasion',year:2023,type:'tv',ru:'Секретное вторжение',tag:'MCU · СЕРИАЛ'},
  {q:'The Marvels',year:2023,type:'movie',ru:'Капитан Марвел 2 / The Marvels',tag:'MCU'},
  {q:'Loki',year:2021,type:'tv',ru:'Локи — сезон 2',tag:'MCU · MULTIVERSE',season:2},
  {q:'What If...?',year:2021,type:'tv',ru:'Что, если...? — сезон 2',tag:'MCU · MULTIVERSE',season:2},

  {q:'X-Men',year:2000,type:'movie',ru:'Люди Икс',tag:'X-MEN · FOX LEGACY',note:'Начало Fox/X-Men блока. Для этой ветки используем сюжетно-релизный порядок из-за разветвлённой хронологии.'},
  {q:'X2',year:2003,type:'movie',ru:'Люди Икс 2',tag:'X-MEN · FOX LEGACY'},
  {q:'X-Men: The Last Stand',year:2006,type:'movie',ru:'Люди Икс: Последняя битва',tag:'X-MEN · FOX LEGACY'},
  {q:'X-Men Origins: Wolverine',year:2009,type:'movie',ru:'Люди Икс: Начало. Росомаха',tag:'X-MEN · FOX LEGACY'},
  {q:'X-Men: First Class',year:2011,type:'movie',ru:'Люди Икс: Первый класс',tag:'X-MEN · FOX LEGACY'},
  {q:'The Wolverine',year:2013,type:'movie',ru:'Росомаха: Бессмертный',tag:'X-MEN · FOX LEGACY'},
  {q:'X-Men: Days of Future Past',year:2014,type:'movie',ru:'Люди Икс: Дни минувшего будущего',tag:'X-MEN · FOX LEGACY'},
  {q:'Deadpool',year:2016,type:'movie',ru:'Дэдпул',tag:'X-MEN · FOX LEGACY'},
  {q:'X-Men: Apocalypse',year:2016,type:'movie',ru:'Люди Икс: Апокалипсис',tag:'X-MEN · FOX LEGACY'},
  {q:'Logan',year:2017,type:'movie',ru:'Логан',tag:'X-MEN · FOX LEGACY'},
  {q:'Deadpool 2',year:2018,type:'movie',ru:'Дэдпул 2',tag:'X-MEN · FOX LEGACY'},
  {q:'Dark Phoenix',year:2019,type:'movie',ru:'Люди Икс: Тёмный Феникс',tag:'X-MEN · FOX LEGACY'},
  {q:'The New Mutants',year:2020,type:'movie',ru:'Новые мутанты',tag:'X-MEN · FOX LEGACY'},
  {q:'Deadpool & Wolverine',year:2024,type:'movie',ru:'Дэдпул и Росомаха',tag:'MCU · MULTIVERSE / X-MEN'},

  {q:'Agatha All Along',year:2024,type:'tv',ru:'Это всё Агата',tag:'MCU · СЕРИАЛ'},
  {q:'What If...?',year:2021,type:'tv',ru:'Что, если...? — сезон 3',tag:'MCU · MULTIVERSE',season:3},
  {q:'Daredevil: Born Again',year:2025,type:'tv',ru:'Сорвиголова: Рождённый заново — сезон 1',tag:'MCU · СЕРИАЛ',season:1},
  {q:'Captain America: Brave New World',year:2025,type:'movie',ru:'Капитан Америка: Новый мир',tag:'MCU'},
  {q:'Thunderbolts*',year:2025,type:'movie',ru:'Громовержцы*',tag:'MCU'},
  {q:'The Fantastic Four: First Steps',year:2025,type:'movie',ru:'Фантастическая четвёрка: Первые шаги',tag:'MCU · MULTIVERSE'},
  {q:'Wonder Man',year:2026,type:'tv',ru:'Чудо-человек — сезон 1',tag:'MCU · СЕРИАЛ',season:1},
  {q:'Daredevil: Born Again',year:2025,type:'tv',ru:'Сорвиголова: Рождённый заново — сезон 2',tag:'MCU · СЕРИАЛ',season:2},
  {q:'The Punisher: One Last Kill',year:2026,type:'any',ru:'Каратель: Последнее убийство',tag:'MCU · SPECIAL'},
  {q:'Spider-Man: Brand New Day',year:2026,type:'movie',ru:'Человек-паук: Новый день',tag:'MCU',note:'Последний вышедший фильм перед Avengers: Doomsday на 4 октября 2026.'}
];

function pad(n){ return ('000'+n).slice(-3); }

function clone(o){
  try{ return JSON.parse(JSON.stringify(o)); }
  catch(e){ var x={}; for(var k in o) x[k]=o[k]; return x; }
}

function cache(){
  var c = Lampa.Storage.get(CACHE_KEY, {});
  return c && typeof c === 'object' ? c : {};
}

function cacheSet(key, val){
  var c = cache();
  c[key] = val;
  var keys = Object.keys(c);
  if(keys.length > 250){
    keys.slice(0, keys.length - 220).forEach(function(k){ delete c[k]; });
  }
  Lampa.Storage.set(CACHE_KEY, c);
}

function yearOf(item){
  return parseInt(String(item.release_date || item.first_air_date || '').slice(0,4),10) || 0;
}

function norm(s){
  return String(s || '').toLowerCase()
    .replace(/ё/g,'е')
    .replace(/[^a-zа-я0-9]+/gi,' ')
    .trim().replace(/\s+/g,' ');
}

function choose(entry, results){
  if(!results || !results.length) return null;
  var target = norm(entry.q);
  var best = null, score = -999;

  results.forEach(function(r){
    var names = [r.title,r.original_title,r.name,r.original_name].map(norm);
    var s = 0;
    names.forEach(function(n){
      if(!n) return;
      if(n === target) s = Math.max(s,100);
      else if(n.indexOf(target) >= 0 || target.indexOf(n) >= 0) s = Math.max(s,65);
    });

    var y = yearOf(r);
    if(entry.year && y){
      var d = Math.abs(entry.year - y);
      if(d === 0) s += 35;
      else if(d === 1) s += 12;
      else if(d > 3) s -= 30;
    }

    if(s > score){ score = s; best = r; }
  });

  return score >= 40 ? best : null;
}

function tmdbSearch(entry, kind, done){
  try{
    var src = Lampa.Api && Lampa.Api.sources && Lampa.Api.sources.tmdb;
    if(!src || !src.list) return done(null);

    src.list({
      url:'search/' + kind,
      query:encodeURIComponent(entry.q),
      page:1
    }, function(data){
      done(choose(entry, (data && data.results) || []));
    }, function(){ done(null); });
  }catch(e){ done(null); }
}

function resolve(entry, globalIndex, done){
  var key = entry.q + '|' + entry.year + '|' + entry.type;
  var c = cache();
  if(c[key]){
    return done(decorate(clone(c[key]), entry, globalIndex));
  }

  function saveAndDone(found){
    if(found){
      found.source = 'tmdb';
      cacheSet(key, found);
      done(decorate(clone(found), entry, globalIndex));
    }else done(null);
  }

  if(entry.type === 'any'){
    tmdbSearch(entry,'movie',function(a){
      if(a) saveAndDone(a);
      else tmdbSearch(entry,'tv',saveAndDone);
    });
  }else{
    tmdbSearch(entry, entry.type, saveAndDone);
  }
}

function decorate(item, entry, globalIndex){
  item.source = 'tmdb';
  item.marvel_order = globalIndex + 1;
  item.marvel_tag = entry.tag || 'MARVEL';
  item.marvel_season = entry.season || 0;

  var display = pad(globalIndex + 1) + ' · ' + entry.ru;
  if(entry.type === 'tv'){
    item.name = display;
    if(item.title) delete item.title;
  }else{
    item.title = display;
    if(item.name) delete item.name;
  }

  var intro = 'MARVEL STORY ORDER #' + pad(globalIndex + 1) + ' · ' + (entry.tag || 'MARVEL');
  if(entry.season) intro += ' · сезон ' + entry.season;
  if(entry.note) intro += '\n' + entry.note;

  item.overview = intro + (item.overview ? '\n\n' + item.overview : '');
  return item;
}

function mapPage(start, slice, done){
  if(!slice.length) return done([]);

  var out = new Array(slice.length);
  var next = 0, active = 0, finished = 0;
  var LIMIT = 4;

  function pump(){
    while(active < LIMIT && next < slice.length){
      (function(localIndex){
        active++;
        next++;
        resolve(slice[localIndex], start + localIndex, function(result){
          out[localIndex] = result;
          active--;
          finished++;
          if(finished === slice.length) done(out.filter(Boolean));
          else pump();
        });
      })(next);
    }
  }
  pump();
}

function filtered(mode){
  if(mode === 'movies') return ORDER.map(function(e,i){return {e:e,i:i};}).filter(function(x){return x.e.type === 'movie' || x.e.type === 'any';});
  if(mode === 'series') return ORDER.map(function(e,i){return {e:e,i:i};}).filter(function(x){return x.e.type === 'tv';});
  if(mode === 'xmen') return ORDER.map(function(e,i){return {e:e,i:i};}).filter(function(x){return /X-MEN/.test(x.e.tag || '');});
  if(mode === 'spider') return ORDER.map(function(e,i){return {e:e,i:i};}).filter(function(x){return /SPIDER-MAN/.test(x.e.tag || '') || /Spider-Man/.test(x.e.q || '');});
  return ORDER.map(function(e,i){return {e:e,i:i};});
}

function fetchOrder(object, complete, error){
  var mode = object.marvel_mode || 'all';
  var list = filtered(mode);
  var page = Math.max(1, parseInt(object.page || 1,10));
  var start = (page - 1) * PER_PAGE;
  var rows = list.slice(start, start + PER_PAGE);

  if(!rows.length) return complete({results:[],page:page,total_pages:page});

  // Preserve GLOBAL order numbers even in filtered views.
  var entries = rows.map(function(x){ return x.e; });
  var indices = rows.map(function(x){ return x.i; });

  var out = new Array(entries.length);
  var next = 0, active = 0, finished = 0, LIMIT = 4;

  function pump(){
    while(active < LIMIT && next < entries.length){
      (function(local){
        active++; next++;
        resolve(entries[local], indices[local], function(r){
          out[local] = r;
          active--; finished++;
          if(finished === entries.length){
            complete({
              secuses:true,
              page:page,
              total_pages:Math.ceil(list.length / PER_PAGE),
              total_results:list.length,
              results:out.filter(Boolean)
            });
          }else pump();
        });
      })(next);
    }
  }
  pump();
}

function component(object){
  var comp = new Lampa.InteractionCategory(object);
  comp.create = function(){
    fetchOrder(object, this.build.bind(this), this.empty.bind(this));
  };
  comp.nextPageReuest = function(nextObject, resolveNext, rejectNext){
    if(!nextObject.marvel_mode) nextObject.marvel_mode = object.marvel_mode || 'all';
    fetchOrder(nextObject, resolveNext.bind(comp), rejectNext.bind(comp));
  };
  return comp;
}

function open(mode, title){
  Lampa.Activity.push({
    url:'',
    title:title,
    component:COMPONENT,
    page:1,
    marvel_mode:mode
  });
}

function showMenu(){
  Lampa.Select.show({
    title:'MARVEL — порядок просмотра',
    items:[
      {title:'▶ Полный Story Order · ' + ORDER.length + ' позиций',mode:'all',name:'MARVEL — полный порядок'},
      {title:'🎬 Только фильмы',mode:'movies',name:'MARVEL — фильмы'},
      {title:'📺 Только сериалы и сезоны',mode:'series',name:'MARVEL — сериалы'},
      {title:'🧬 X-Men / Fox Legacy',mode:'xmen',name:'MARVEL — X-Men'},
      {title:'🕷 Spider-Man — все связанные фильмы',mode:'spider',name:'MARVEL — Spider-Man'},
      {title:'🧹 Очистить кэш карточек',action:'clear'}
    ],
    onSelect:function(a){
      if(a.action === 'clear'){
        Lampa.Storage.set(CACHE_KEY,{});
        return Lampa.Noty.show('MARVEL: кэш карточек очищен');
      }
      open(a.mode,a.name);
    },
    onBack:function(){ try{Lampa.Controller.toggle('menu');}catch(e){} }
  });
}

function addMenu(){
  if($('.menu__item[data-action="marvel_story_order"]').length) return;

  var icon = '<svg viewBox="0 0 24 24" fill="none">'+
    '<path d="M3 18V6h4l5 7 5-7h4v12h-3V10l-6 8-6-8v8H3Z" fill="currentColor"/>'+
    '</svg>';

  var item = $('<li class="menu__item selector" data-action="marvel_story_order">'+
    '<div class="menu__ico">'+icon+'</div>'+
    '<div class="menu__text">MARVEL</div></li>');

  item.on('hover:enter',showMenu);

  var catalog = $('.menu .menu__list .menu__item[data-action="catalog"]');
  if(catalog.length) catalog.before(item);
  else $('.menu .menu__list').eq(0).append(item);
}

function init(){
  Lampa.Component.add(COMPONENT,component);
  Lampa.Manifest.plugins = {
    type:'other',
    version:VERSION,
    name:'MARVEL Story Order',
    description:'MCU + Defenders + Spider-Man Legacy + X-Men/Fox в строгом порядке просмотра; просмотр остаётся через MODS'
  };
  addMenu();
  console.log('[MARVEL Story Order] v'+VERSION+' ready, '+ORDER.length+' entries');
}

if(window.appready) init();
else Lampa.Listener.follow('app',function(e){ if(e.type === 'ready') init(); });

})();