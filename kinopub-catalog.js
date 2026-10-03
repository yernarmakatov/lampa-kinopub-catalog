(function(){
'use strict';
if(window.kinopub_catalog_ready||typeof Lampa==='undefined')return;
window.kinopub_catalog_ready=true;
var V='0.2.0',C='kinopub_catalog_list',HOST='https://api.service-kp.com',KEY='kp_token',PER=30;
function n(t){try{Lampa.Noty.show(t)}catch(e){}}
function token(){return Lampa.Storage.get(KEY,'')||''}
function api(net,path,p,ok,fail){
 p=p||{}; p.access_token=token(); var q=[];
 for(var k in p)if(p[k]!==undefined&&p[k]!==null&&p[k]!=='')q.push(encodeURIComponent(k)+'='+encodeURIComponent(p[k]));
 net.timeout(20000);
 net.silent(HOST+'/v1'+path+'?'+q.join('&'),function(d){if(typeof d==='string')try{d=JSON.parse(d)}catch(e){};ok(d)},function(x,s){if(fail)fail(x||{},s)});
}
function root(){
 return [
 {title:'Продолжить фильмы',m:'wm'},{title:'Новые / недосмотренные серии',m:'ws'},
 {title:'Свежие фильмы',m:'fm'},{title:'Свежие сериалы',m:'fs'},
 {title:'Популярные фильмы',m:'pm'},{title:'Популярные сериалы',m:'ps'},
 {title:'Горячие фильмы',m:'hm'},{title:'Все фильмы',m:'movie'},{title:'Все сериалы',m:'serial'},
 {title:'Мультфильмы',m:'cartoon'},{title:'Аниме',m:'anime'},
 {title:'Документальные фильмы',m:'documovie'},{title:'Документальные сериалы',m:'docuserial'},
 {title:'ТВ-шоу',m:'tvshow'},{title:'Концерты',m:'concert'},
 {title:'Подборки KinoPub',a:'collections'},{title:'Закладки KinoPub',a:'bookmarks'},{title:'История KinoPub',m:'history'}
 ];}
function noauth(){
 Lampa.Select.show({title:'KinoPub',items:[{title:'Нужно один раз авторизовать KinoPub в Lampa'},{title:'После авторизации вернитесь сюда'}],onBack:function(){try{Lampa.Controller.toggle('menu')}catch(e){}}});
}
function menu(){
 if(!token())return noauth();
 Lampa.Select.show({title:'KinoPub — каталог',items:root(),onSelect:function(a){if(!a)return;if(a.a==='collections')collections(1);else if(a.a==='bookmarks')bookmarks();else open(a.m,a.title,{})},onBack:function(){try{Lampa.Controller.toggle('menu')}catch(e){}}});
}
function collections(page){
 var net=new Lampa.Reguest();
 api(net,'/collections',{page:page,perpage:50,sort:'updated-'},function(d){
  var src=(d&&d.items)||[],arr=src.map(function(x){return{title:x.title||('Подборка #'+x.id),id:x.id}});
  if(src.length===50)arr.push({title:'Следующая страница →',next:page+1});
  Lampa.Select.show({title:'Подборки KinoPub',items:arr,onSelect:function(a){if(a.next)collections(a.next);else if(a.id)open('collection',a.title,{id:a.id})},onBack:menu});
 },function(){n('Не удалось загрузить подборки')});
}
function bookmarks(){
 var net=new Lampa.Reguest();
 api(net,'/bookmarks',{},function(d){
  var src=(d&&d.items)||[],arr=src.map(function(x){return{title:x.title||('Папка #'+x.id),id:x.id}});
  if(!arr.length)arr=[{title:'Закладок пока нет'}];
  Lampa.Select.show({title:'Закладки KinoPub',items:arr,onSelect:function(a){if(a.id)open('bookmark',a.title,{id:a.id})},onBack:menu});
 },function(){n('Не удалось загрузить закладки')});
}
function open(m,title,extra){Lampa.Activity.push({url:'',title:title,component:C,page:1,kp_mode:m,kp_extra:extra||{}})}
function endpoint(o){
 var m=o.kp_mode,page=Math.max(1,parseInt(o.page||1,10)),x=o.kp_extra||{},path='/items',p={page:page,perpage:PER,sort:'updated-'};
 if(m==='wm'){path='/watching/movies';p={}}
 else if(m==='ws'){path='/watching/serials';p={}}
 else if(m==='fm'){path='/items/fresh';p={type:'movie',page:page-1,perpage:PER}}
 else if(m==='fs'){path='/items/fresh';p={type:'serial',page:page-1,perpage:PER}}
 else if(m==='pm'){path='/items/popular';p={type:'movie',page:page-1,perpage:PER}}
 else if(m==='ps'){path='/items/popular';p={type:'serial',page:page-1,perpage:PER}}
 else if(m==='hm'){path='/items/hot';p={type:'movie',page:page-1,perpage:PER}}
 else if(m==='movie'||m==='serial'||m==='documovie'||m==='docuserial'||m==='tvshow'||m==='concert')p.type=m
 else if(m==='history'){path='/history';p={page:page,perpage:PER}}
 else if(m==='collection'){path='/collections/view';p={id:x.id}}
 else if(m==='bookmark'){path='/bookmarks/'+x.id;p={page:page,perpage:PER}}
 return{path:path,p:p,page:page};
}
function items(mode,d){
 if(!d)return[];
 if(mode==='history'){
  var h=d.history||d.items||[];
  return h.map(function(x){return x.item||x}).filter(Boolean);
 }
 return d.items||d.results||[];
}
function kind(i){var t=String(i.type||'').toLowerCase();return(t==='serial'||t==='docuserial'||t==='tvshow')?'tv':'movie'}
function norm(s){return String(s||'').toLowerCase().replace(/ё/g,'е').replace(/[^a-zа-я0-9]+/gi,' ').trim().replace(/\s+/g,' ')}
function titles(i){var a=[];[i.title,i.original_title,i.title_original].forEach(function(x){x=String(x||'').trim();if(x&&a.indexOf(x)<0)a.push(x)});return a}
function best(i,res){
 if(!res||!res.length)return null;var ts=titles(i).map(norm),y=parseInt(i.year,10)||0,b=null,bs=-999;
 res.forEach(function(r){var rt=[r.title,r.original_title,r.name,r.original_name].map(norm),s=0;
  ts.forEach(function(a){rt.forEach(function(c){if(a&&c){if(a===c)s=Math.max(s,100);else if(a.indexOf(c)>=0||c.indexOf(a)>=0)s=Math.max(s,60)}})});
  var ry=parseInt(String(r.release_date||r.first_air_date||'').slice(0,4),10)||0;if(y&&ry){var d=Math.abs(y-ry);if(d===0)s+=35;else if(d===1)s+=15;else if(d>3)s-=30}
  if(s>bs){bs=s;b=r}
 });return bs>=45?b:null;
}
function search(i,title,done){
 var k=kind(i),p={url:'search/'+k,query:encodeURIComponent(title),page:1};
 try{
  var t=Lampa.Api&&Lampa.Api.sources&&Lampa.Api.sources.tmdb;
  if(!t||!t.list)return done(null);
  t.list(p,function(d){done(best(i,(d&&d.results)||[]))},function(){done(null)});
 }catch(e){done(null)}
}
function resolve(i,done){
 var ts=titles(i),z=0;
 function nx(){if(z>=ts.length)return done(null);search(i,ts[z++],function(r){if(r){r.source='tmdb';r.kp_id=i.id;done(r)}else nx()})}nx();
}
function mapall(a,done){
 if(!a.length)return done([]);var out=new Array(a.length),next=0,active=0,fin=0;
 function pump(){while(active<5&&next<a.length)(function(ix){active++;next++;resolve(a[ix],function(r){out[ix]=r;active--;fin++;if(fin===a.length)done(out.filter(Boolean));else pump()})})(next)}pump();
}
function genre(net,o,next){
 if(o.kp_mode!=='cartoon'&&o.kp_mode!=='anime')return next();
 var type=o.kp_mode==='cartoon'?'movie':'serial',needle=o.kp_mode==='cartoon'?'мульт':'аниме';
 api(net,'/genres',{type:type},function(d){var a=(d&&d.items)||d||[],g=null;for(var i=0;i<a.length;i++)if(String(a[i].title||'').toLowerCase().indexOf(needle)>=0){g=a[i];break}o._type=type;o._genre=g&&g.id;next()},next);
}
var A={full:function(o,ok,err){
 if(!token()){noauth();return err&&err()}
 var net=new Lampa.Reguest();
 genre(net,o,function(){
  var e=endpoint(o);
  if(o.kp_mode==='cartoon'||o.kp_mode==='anime'){e.p.type=o._type;if(o._genre)e.p.genre=o._genre}
  api(net,e.path,e.p,function(d){var raw=items(o.kp_mode,d);mapall(raw,function(mapped){ok({secuses:true,page:e.page,total_pages:mapped.length>=PER?e.page+1:e.page,results:mapped})})},function(){if(err)err()});
 });
}};
function component(o){
 var c=new Lampa.InteractionCategory(o);
 c.create=function(){A.full(o,this.build.bind(this),this.empty.bind(this))};
 c.nextPageReuest=function(no,ok,er){if(!no.kp_mode)no.kp_mode=o.kp_mode;if(!no.kp_extra)no.kp_extra=o.kp_extra;A.full(no,ok.bind(c),er.bind(c))};
 return c;
}
function addMenu(){
 if($('.menu__item[data-action="kinopub_catalog"]').length)return;
 var b=$('<li class="menu__item selector" data-action="kinopub_catalog"><div class="menu__ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" stroke-width="1.8"/><path d="m9 8 6 4-6 4V8Z" fill="currentColor"/></svg></div><div class="menu__text">KinoPub</div></li>');
 b.on('hover:enter',menu);$('.menu .menu__list').eq(0).append(b);
}
Lampa.Component.add(C,component);
Lampa.Manifest.plugins={type:'other',version:V,name:'KinoPub Catalog',description:'Каталог KinoPub; просмотр остаётся через MODS'};
if(window.appready)addMenu();else Lampa.Listener.follow('app',function(e){if(e.type==='ready')addMenu()});
console.log('[KinoPub Catalog] '+V+' ready');
})();