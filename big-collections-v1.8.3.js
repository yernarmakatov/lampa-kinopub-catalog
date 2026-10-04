(function(){
'use strict';
if(window.yernar_big_collections_ready_183||typeof Lampa==='undefined')return;
window.yernar_big_collections_ready_162=true;

var VERSION='1.8.3';
var COMPONENT='yernar_big_collection_list_v183';
var HOME_COMPONENT='yernar_big_collections_home_v183';
var HUB_COMPONENT='yernar_big_collections_hub_v183';
var PER_PAGE=14;
var CACHE_KEY='yernar_big_collections_tmdb_cache_v4';

function E(s){
  var a=String(s).split('|');
  return {q:a[0],year:parseInt(a[1]||'0',10)||0,type:a[2]||'movie',ru:a[3]||a[0],season:parseInt(a[4]||'0',10)||0};
}
function G(title,items,note){return{title:title,items:items.map(E),note:note||''};}
function C(title,groups){return{title:title,groups:groups};}

var CATS=[
C('1. Смертельные игры, отбор и социальные триллеры',[
 G('Пила — полная антология',[
  'Saw|2004|movie|Пила: Игра на выживание','Saw II|2005|movie|Пила 2','Saw III|2006|movie|Пила 3','Saw IV|2007|movie|Пила 4','Saw V|2008|movie|Пила 5','Saw VI|2009|movie|Пила 6','Saw 3D|2010|movie|Пила 3D','Jigsaw|2017|movie|Пила 8','Spiral: From the Book of Saw|2021|movie|Пила: Спираль','Saw X|2023|movie|Пила 10'
 ]),
 G('Пункт назначения — полная франшиза',[
  'Final Destination|2000|movie|Пункт назначения','Final Destination 2|2003|movie|Пункт назначения 2','Final Destination 3|2006|movie|Пункт назначения 3','The Final Destination|2009|movie|Пункт назначения 4','Final Destination 5|2011|movie|Пункт назначения 5','Final Destination Bloodlines|2025|movie|Пункт назначения: Узы крови'
 ]),
 G('Куб',[
  'Cube|1997|movie|Куб','Cube 2: Hypercube|2002|movie|Куб 2: Гиперкуб','Cube Zero|2004|movie|Куб Зеро','Cube|2021|movie|Куб — японский ремейк'
 ]),
 G('Судная ночь',[
  'The Purge|2013|movie|Судная ночь','The Purge: Anarchy|2014|movie|Судная ночь 2: Анархия','The Purge: Election Year|2016|movie|Судная ночь 3: Год выборов','The First Purge|2018|movie|Судная ночь. Начало','The Forever Purge|2021|movie|Судная ночь навсегда','The Purge|2018|tv|Судная ночь — сериал'
 ]),
 G('Голодные игры',[
  'The Hunger Games|2012|movie|Голодные игры','The Hunger Games: Catching Fire|2013|movie|И вспыхнет пламя','The Hunger Games: Mockingjay - Part 1|2014|movie|Сойка-пересмешница. Часть 1','The Hunger Games: Mockingjay - Part 2|2015|movie|Сойка-пересмешница. Часть 2','The Hunger Games: The Ballad of Songbirds & Snakes|2023|movie|Баллада о змеях и певчих птицах'
 ]),
 G('Бегущий в лабиринте',[
  'The Maze Runner|2014|movie|Бегущий в лабиринте','Maze Runner: The Scorch Trials|2015|movie|Испытание огнем','Maze Runner: The Death Cure|2018|movie|Лекарство от смерти'
 ]),
 G('Дивергент',[
  'Divergent|2014|movie|Дивергент','The Divergent Series: Insurgent|2015|movie|Инсургент','Allegiant|2016|movie|За стеной'
 ]),
 G('Королевская битва',[
  'Battle Royale|2000|movie|Королевская битва','Battle Royale II: Requiem|2003|movie|Королевская битва 2'
 ]),
 G('Клаустрофобы',[
  'Escape Room|2019|movie|Клаустрофобы','Escape Room: Tournament of Champions|2021|movie|Клаустрофобы 2: Лига выживших'
 ]),
 G('Платформа',[
  'The Platform|2019|movie|Платформа','The Platform 2|2024|movie|Платформа 2'
 ]),
 G('Смертельная гонка',[
  'Death Race|2008|movie|Смертельная гонка','Death Race 2|2010|movie|Смертельная гонка 2: Франкенштейн жив','Death Race: Inferno|2013|movie|Смертельная гонка 3: Ад','Death Race: Beyond Anarchy|2018|movie|Смертельная гонка 4: Вне анархии'
 ]),
 G('Одиночные фильмы жанра',[
  'Exam|2009|movie|Экзамен','As the Gods Will|2014|movie|Страшная воля богов','13 Sins|2014|movie|13 грехов','13 Tzameti|2005|movie|Тринадцать','The Hunt|2020|movie|Охота','The Belko Experiment|2016|movie|Эксперимент «Офис»','Das Experiment|2001|movie|Эксперимент','Circle|2015|movie|Круг','Would You Rather|2012|movie|Что бы вы сделали...','Fermat\'s Room|2007|movie|Западня Ферма','House of 9|2005|movie|Смертельный лабиринт','The Running Man|1987|movie|Бегущий человек','The Game|1997|movie|Игра','Funny Games|1997|movie|Забавные игры','Nerve|2016|movie|Нерв'
 ]),
 G('Сериалы жанра',[
  'Игра на выживание|2020|tv|Игра на выживание','Squid Game|2021|tv|Игра в кальмара','Alice in Borderland|2020|tv|Алиса в Пограничье','The 8 Show|2024|tv|Шоу восьми','3%|2016|tv|3%','Pyramid Game|2024|tv|Игра пирамиды','Liar Game|2007|tv|Игра лжецов — Япония','Liar Game|2014|tv|Игра лжецов — Корея','Panic|2021|tv|Паника','Night Has Come|2023|tv|Ночь логики'
 ])
]),
C('2. Зомби-апокалипсис, пандемии и заражение',[
 G('Обитель зла',[
  'Resident Evil|2002|movie|Обитель зла','Resident Evil: Apocalypse|2004|movie|Обитель зла 2: Апокалипсис','Resident Evil: Extinction|2007|movie|Обитель зла 3: Вымирание','Resident Evil: Afterlife|2010|movie|Обитель зла 4: Жизнь после смерти','Resident Evil: Retribution|2012|movie|Обитель зла 5: Возмездие','Resident Evil: The Final Chapter|2016|movie|Обитель зла: Последняя глава','Resident Evil: Welcome to Raccoon City|2021|movie|Обитель зла: Раккун-Сити','Resident Evil|2022|tv|Обитель зла — сериал'
 ]),
 G('28 дней спустя — обновлённая полная линейка',[
  '28 Days Later|2002|movie|28 дней спустя','28 Weeks Later|2007|movie|28 недель спустя','28 Years Later|2025|movie|28 лет спустя','28 Years Later: The Bone Temple|2026|movie|28 лет спустя: Храм костей'
 ]),
 G('Поезд в Пусан',[
  'Seoul Station|2016|movie|Станция «Сеул»','Train to Busan|2016|movie|Поезд в Пусан','Peninsula|2020|movie|Поезд в Пусан 2: Полуостров'
 ]),
 G('[REC] + Quarantine',[
  '[REC]|2007|movie|Репортаж','[REC]²|2009|movie|Репортаж из преисподней','[REC]³ Genesis|2012|movie|Репортаж со свадьбы','[REC] 4: Apocalypse|2014|movie|Репортаж: Апокалипсис','Quarantine|2008|movie|Карантин','Quarantine 2: Terminal|2011|movie|Карантин 2: Терминал'
 ]),
 G('Zомбилэнд',[
  'Zombieland|2009|movie|Добро пожаловать в Zомбилэнд','Zombieland: Double Tap|2019|movie|Zомбилэнд: Контрольный выстрел'
 ]),
 G('Классика Джорджа Ромеро + Dawn of the Dead',[
  'Night of the Living Dead|1968|movie|Ночь живых мертвецов','Dawn of the Dead|1978|movie|Рассвет мертвецов','Day of the Dead|1985|movie|День мертвецов','Land of the Dead|2005|movie|Земля мертвых','Diary of the Dead|2007|movie|Дневники мертвецов','Dawn of the Dead|2004|movie|Рассвет мертвецов — ремейк Зака Снайдера'
 ]),
 G('Ключевые зомби-фильмы и пандемии',[
  'I Am Legend|2007|movie|Я — легенда','World War Z|2013|movie|Война миров Z','Shaun of the Dead|2004|movie|Зомби по имени Шон','The Girl with All the Gifts|2016|movie|Новая эра Z','#Alive|2020|movie|#Живой','Contagion|2011|movie|Заражение','The Crazies|2010|movie|Безумцы','Warm Bodies|2013|movie|Тепло наших тел','The Night Eats the World|2018|movie|Ночь пожирает мир','The Sadness|2021|movie|Грусть','Blindness|2008|movie|Слепота','Carriers|2009|movie|Носители','Flu|2013|movie|Вирус','Army of the Dead|2021|movie|Армия мертвецов','Army of Thieves|2021|movie|Армия воров','Overlord|2018|movie|Оверлорд','Maggie|2015|movie|Мэгги','The Dead Don\'t Die|2019|movie|Мертвые не умирают'
 ]),
 G('The Walking Dead Universe',[
  'The Walking Dead|2010|tv|Ходячие мертвецы','Fear the Walking Dead|2015|tv|Бойтесь ходячих мертвецов','The Walking Dead: World Beyond|2020|tv|Мир за пределами','Tales of the Walking Dead|2022|tv|Истории ходячих мертвецов','The Walking Dead: Dead City|2023|tv|Мертвый город','The Walking Dead: Daryl Dixon|2023|tv|Дэрил Диксон','The Walking Dead: The Ones Who Live|2024|tv|Выжившие'
 ]),
 G('Другие сериалы о заражениях и зомби',[
  'The Last of Us|2023|tv|Одни из нас','All of Us Are Dead|2022|tv|Мы все мертвы','Kingdom|2019|tv|Королевство','Kingdom: Ashin of the North|2021|movie|Королевство: Ашин с Севера','Happiness|2021|tv|Счастье','Black Summer|2019|tv|Черное лето','Z Nation|2014|tv|Нация Z','Эпидемия|2019|tv|Эпидемия','The Strain|2014|tv|Штамм','Sweet Home|2020|tv|Милый дом','Helix|2014|tv|Спираль','The Hot Zone|2019|tv|Горячая зона'
 ])
]),
C('3. Умный Sci-Fi: время, парадоксы и Первый контакт',[
 G('Бегущий по лезвию',[
  'Blade Runner|1982|movie|Бегущий по лезвию','2036: Nexus Dawn|2017|movie|2036: Возрождение Nexus','2048: Nowhere to Run|2017|movie|2048: Некуда бежать','Blade Runner: Black Out 2022|2017|movie|Бегущий по лезвию: Блэкаут 2022','Blade Runner 2049|2017|movie|Бегущий по лезвию 2049','Blade Runner: Black Lotus|2021|tv|Бегущий по лезвию: Черный лотос'
 ]),
 G('Кловерфилд',[
  'Cloverfield|2008|movie|Монстро','10 Cloverfield Lane|2016|movie|Кловерфилд, 10','The Cloverfield Paradox|2018|movie|Парадокс Кловерфилда'
 ]),
 G('Бенсон и Мурхед',[
  'Resolution|2012|movie|Ломка','Spring|2014|movie|Весна','The Endless|2017|movie|Параненормальное','Synchronic|2019|movie|Синхроник'
 ]),
 G('Первый контакт и внеземной разум',[
  'Arrival|2016|movie|Прибытие','Contact|1997|movie|Контакт','District 9|2009|movie|Район №9','Close Encounters of the Third Kind|1977|movie|Близкие контакты третьей степени','Interstellar|2014|movie|Интерстеллар','Signs|2002|movie|Знаки','The Abyss|1989|movie|Бездна','Sphere|1998|movie|Сфера','Annihilation|2018|movie|Аннигиляция','Solaris|1972|movie|Солярис — Тарковский','Solaris|2002|movie|Солярис — Содерберг','Stalker|1979|movie|Сталкер','K-PAX|2001|movie|Планета Ка-Пэкс'
 ]),
 G('Петли времени и квантовые парадоксы',[
  'Coherence|2013|movie|Связь','Triangle|2009|movie|Треугольник','Primer|2004|movie|Детонатор','Edge of Tomorrow|2014|movie|Грань будущего','Looper|2012|movie|Петля времени','Predestination|2014|movie|Патруль времени','Source Code|2011|movie|Исходный код','Palm Springs|2020|movie|Палм-Спрингс','Tenet|2020|movie|Довод','Timecrimes|2007|movie|Временная петля','Time Lapse|2014|movie|Ошибка времени','Twelve Monkeys|1995|movie|12 обезьян','Donnie Darko|2001|movie|Донни Дарко','Mr. Nobody|2009|movie|Господин Никто','The Butterfly Effect|2004|movie|Эффект бабочки','The Butterfly Effect 2|2006|movie|Эффект бабочки 2','The Butterfly Effect 3: Revelations|2009|movie|Эффект бабочки 3: Откровения','Groundhog Day|1993|movie|День сурка'
 ]),
 G('ИИ, космос и изоляция',[
  'Ex Machina|2014|movie|Из машины','Gattaca|1997|movie|Гаттака','Moon|2009|movie|Луна 2112','The Martian|2015|movie|Марсианин','Gravity|2013|movie|Гравитация','Sunshine|2007|movie|Пекло','Event Horizon|1997|movie|Сквозь горизонт','The Man from Earth|2007|movie|Человек с Земли','The Man from Earth: Holocene|2017|movie|Человек с Земли: Голоцен','I Am Mother|2019|movie|Дитя робота','The Creator|2023|movie|Создатель'
 ]),
 G('Сериалы умного Sci-Fi',[
  'Dark|2017|tv|Тьма','Severance|2022|tv|Разделение','3 Body Problem|2024|tv|Задача трех тел','The Expanse|2015|tv|Экспансия','Russian Doll|2019|tv|Жизни матрешки','Travelers|2016|tv|Путешественники','Continuum|2012|tv|Континуум','12 Monkeys|2015|tv|12 обезьян — сериал','The Peripheral|2022|tv|Периферийные устройства','Resident Alien|2021|tv|Засланец из космоса','Constellation|2024|tv|Созвездие','Archive 81|2022|tv|Архив 81'
 ])
]),
C('4. Герметичные триллеры: замкнутое пространство',[
 G('Транспорт: автомобиль, самолет, поезд, лайнер',[
  'Locke|2013|movie|Лок','The Guilty|2018|movie|Виновный — Дания','The Guilty|2021|movie|Виновный — США','Speed|1994|movie|Скорость','Speed 2: Cruise Control|1997|movie|Скорость 2: Контроль над круизом','Red Eye|2005|movie|Ночной рейс','Non-Stop|2014|movie|Воздушный маршал','Flightplan|2005|movie|Иллюзия полета','Hijack|2023|tv|Захваченный рейс','Brake|2012|movie|Тормоз','Into the Night|2020|tv|В ночь'
 ]),
 G('Экстремальная изоляция',[
  'Buried|2010|movie|Погребенный заживо','Oxygen|2021|movie|Кислород','Phone Booth|2002|movie|Телефонная будка','127 Hours|2010|movie|127 часов','Fall|2022|movie|Вышка','Frozen|2010|movie|Замерзшие','The Shallows|2016|movie|Отмель','Open Water|2003|movie|Открытое море','Open Water 2: Adrift|2006|movie|Дрейф','The Reef|2010|movie|Открытое море: Новые жертвы','The Canyon|2009|movie|Каньон'
 ]),
 G('Подводные лодки',[
  'Das Boot|1981|movie|Подводная лодка','Crimson Tide|1995|movie|Багровый прилив','K-19: The Widowmaker|2002|movie|К-19','The Hunt for Red October|1990|movie|Охота за «Красным Октябрем»','U-571|2000|movie|Ю-571','Hunter Killer|2018|movie|Хантер Киллер','Black Sea|2014|movie|Черное море'
 ]),
 G('Одно здание, квартира, бункер или комната',[
  '12 Angry Men|1957|movie|12 разгневанных мужчин','12|2007|movie|12','Rear Window|1954|movie|Окно во двор','Rope|1948|movie|Веревка','Carnage|2011|movie|Резня','Perfect Strangers|2016|movie|Идеальные незнакомцы','Громкая связь|2019|movie|Громкая связь','Room|2015|movie|Комната','Panic Room|2002|movie|Комната страха','Don\'t Breathe|2016|movie|Не дыши','Don\'t Breathe 2|2021|movie|Не дыши 2','The Hateful Eight|2015|movie|Омерзительная восьмерка','Reservoir Dogs|1992|movie|Бешеные псы','Devil|2010|movie|Дьявол','Misery|1990|movie|Мизери','The Collector|2009|movie|Коллекционер','The Collection|2012|movie|Коллекционер 2','Identity|2003|movie|Идентификация','Mindhunters|2004|movie|Охотники за разумом','The Thing|1982|movie|Нечто','The Thing|2011|movie|Нечто — приквел','Mute Witness|1995|movie|Немой свидетель','The Strangers|2008|movie|Незнакомцы','The Strangers: Prey at Night|2018|movie|Незнакомцы: Жестокие игры','The Divide|2011|movie|Судный день'
 ])
]),
C('5. Мини-сериалы на одни выходные',[
 G('Криминал, суды и расследования',[
  'Chernobyl|2019|tv|Чернобыль','Mare of Easttown|2021|tv|Мейр из Исттауна','The Night Of|2016|tv|Однажды ночью','Unbelievable|2019|tv|Невероятное','Defending Jacob|2020|tv|Защищая Джейкоба','The Undoing|2020|tv|Отыграть назад','Sharp Objects|2018|tv|Острые предметы','Presumed Innocent|2024|tv|Презумпция невиновности','Black Bird|2022|tv|Черная птица','Under the Banner of Heaven|2022|tv|Под знаменем небес','The Staircase|2022|tv|Лестница','Love & Death|2023|tv|Любовь и смерть','The Thing About Pam|2022|tv|Кое-что о Пэм','The Chestnut Man|2021|tv|Каштановый человечек','Behind Her Eyes|2021|tv|В её глазах','The Stranger|2020|tv|Незнакомка','Safe|2018|tv|Безопасность','Fool Me Once|2024|tv|Единожды солгав','Ripley|2024|tv|Рипли','The Serpent|2021|tv|Змей','Dublin Murders|2019|tv|Дублинские убийства','The Outsider|2020|tv|Чужак','And Then There Were None|2015|tv|И никого не стало','A Murder at the End of the World|2023|tv|Убийство на краю света'
 ]),
 G('Реальные драмы, история и биографии',[
  'The Queen\'s Gambit|2020|tv|Ход королевы','Dopesick|2021|tv|Ломка','Band of Brothers|2001|tv|Братья по оружию','The Pacific|2010|tv|Тихий океан','Masters of the Air|2024|tv|Властелины воздуха','Generation Kill|2008|tv|Поколение убийц','When They See Us|2019|tv|Когда они нас увидят','Escape at Dannemora|2018|tv|Побег из тюрьмы Даннемора','The Loudest Voice|2019|tv|Самый громкий голос','Five Days at Memorial|2022|tv|Пять дней после катастрофы','The Dropout|2022|tv|Дроп','We Own This City|2022|tv|Мы владеем этим городом','Unorthodox|2020|tv|Неортодоксальная','Maid|2021|tv|Уборщица. История матери-одиночки','Patrick Melrose|2018|tv|Патрик Мелроуз','Baby Reindeer|2024|tv|Оленёнок','Beef|2023|tv|Грызня','Trust|2018|tv|Доверие'
 ]),
 G('Саспенс, мистика и триллеры',[
  'Midnight Mass|2021|tv|Полуночная месса','The Haunting of Hill House|2018|tv|Призраки дома на холме','The Haunting of Bly Manor|2020|tv|Призраки усадьбы Блай','The Fall of the House of Usher|2023|tv|Падение дома Ашеров','The Terror|2018|tv|Террор — сезон 1','11.22.63|2016|tv|11.22.63','The Night Manager|2016|tv|Ночной администратор','Bodyguard|2018|tv|Телохранитель','The Little Drummer Girl|2018|tv|Маленькая барабанщица','The English|2022|tv|Англичанка'
 ])
]),
C('6. MonsterVerse: Godzilla & Kong',[
 G('MonsterVerse — хронологический порядок',[
  'Kong: Skull Island|2017|movie|Конг: Остров черепа','Skull Island|2023|tv|Остров черепа','Godzilla|2014|movie|Годзилла','Monarch: Legacy of Monsters|2023|tv|Монарх: Наследие монстров','Godzilla: King of the Monsters|2019|movie|Годзилла 2: Король монстров','Godzilla vs. Kong|2021|movie|Годзилла против Конга','Godzilla x Kong: The New Empire|2024|movie|Годзилла и Конг: Новая империя'
 ]),
 G('Японская классика и альтернативы',[
  'Godzilla Minus One|2023|movie|Годзилла: Минус один','Shin Godzilla|2016|movie|Годзилла: Возрождение','Godzilla|1998|movie|Годзилла — 1998','King Kong|2005|movie|Кинг-Конг','Pacific Rim|2013|movie|Тихоокеанский рубеж','Pacific Rim: Uprising|2018|movie|Тихоокеанский рубеж 2','Pacific Rim: The Black|2021|tv|Тихоокеанский рубеж: Темная зона'
 ])
]),
C('7. Star Wars — Canon Timeline',[
 G('Полная основная каноническая хронология',[
  'Star Wars: Tales of the Jedi|2022|tv|Сказания о джедаях','The Acolyte|2024|tv|Аколит','Star Wars: Episode I - The Phantom Menace|1999|movie|Эпизод I: Скрытая угроза','Star Wars: Episode II - Attack of the Clones|2002|movie|Эпизод II: Атака клонов','Star Wars: The Clone Wars|2008|movie|Войны клонов — фильм','Star Wars: The Clone Wars|2008|tv|Войны клонов — мультсериал','Star Wars: Episode III - Revenge of the Sith|2005|movie|Эпизод III: Месть ситхов','Star Wars: The Bad Batch|2021|tv|Бракованная партия','Solo: A Star Wars Story|2018|movie|Хан Соло','Obi-Wan Kenobi|2022|tv|Оби-Ван Кеноби','Star Wars Rebels|2014|tv|Повстанцы','Andor|2022|tv|Андор — сезоны 1–2','Rogue One: A Star Wars Story|2016|movie|Изгой-один','Star Wars: Episode IV - A New Hope|1977|movie|Эпизод IV: Новая надежда','Star Wars: Episode V - The Empire Strikes Back|1980|movie|Эпизод V: Империя наносит ответный удар','Star Wars: Episode VI - Return of the Jedi|1983|movie|Эпизод VI: Возвращение джедая','The Mandalorian|2019|tv|Мандалорец — сезоны 1–2|1','The Book of Boba Fett|2021|tv|Книга Бобы Фетта','The Mandalorian|2019|tv|Мандалорец — сезон 3|3','Ahsoka|2023|tv|Асока','Star Wars: Skeleton Crew|2024|tv|Опорная команда','Star Wars Resistance|2018|tv|Сопротивление','Star Wars: Episode VII - The Force Awakens|2015|movie|Эпизод VII: Пробуждение силы','Star Wars: Episode VIII - The Last Jedi|2017|movie|Эпизод VIII: Последние джедаи','Star Wars: Episode IX - The Rise of Skywalker|2019|movie|Эпизод IX: Скайуокер. Восход'
 ]),
 G('Канонические антологии — дополнение',[
  'Star Wars: Tales of the Empire|2024|tv|Сказания об Империи','Star Wars: Tales of the Underworld|2025|tv|Сказания преступного мира'
 ],'Эти антологии охватывают несколько разных эпох, поэтому вынесены отдельно, чтобы не ломать линейный порядок.')
]),
C('8. DC: DCEU + Elseworlds',[
 G('DCEU — хронологический порядок',[
  'Wonder Woman|2017|movie|Чудо-женщина','Wonder Woman 1984|2020|movie|Чудо-женщина 1984','Man of Steel|2013|movie|Человек из стали','Batman v Superman: Dawn of Justice|2016|movie|Бэтмен против Супермена','Suicide Squad|2016|movie|Отряд самоубийц','Zack Snyder\'s Justice League|2021|movie|Лига справедливости Зака Снайдера','Aquaman|2018|movie|Аквамен','Shazam!|2019|movie|Шазам!','Birds of Prey|2020|movie|Хищные птицы','The Suicide Squad|2021|movie|Отряд самоубийц: Миссия навылет','Peacemaker|2022|tv|Миротворец','Black Adam|2022|movie|Черный Адам','Shazam! Fury of the Gods|2023|movie|Шазам! Ярость богов','The Flash|2023|movie|Флэш','Blue Beetle|2023|movie|Синий Жук','Aquaman and the Lost Kingdom|2023|movie|Аквамен и потерянное царство'
 ]),
 G('DC Elseworlds',[
  'Batman Begins|2005|movie|Бэтмен: Начало','The Dark Knight|2008|movie|Тёмный рыцарь','The Dark Knight Rises|2012|movie|Тёмный рыцарь: Возрождение легенды','Joker|2019|movie|Джокер','Joker: Folie à Deux|2024|movie|Джокер: Безумие на двоих','The Batman|2022|movie|Бэтмен','The Penguin|2024|tv|Пингвин','Constantine|2005|movie|Константин: Повелитель тьмы','Watchmen|2009|movie|Хранители','Watchmen|2019|tv|Хранители — сериал'
 ]),
 G('Новый DCU — отдельная новая вселенная',[
  'Creature Commandos|2024|tv|Монстры-коммандос','Superman|2025|movie|Супермен','Peacemaker|2022|tv|Миротворец — сезон 2|2'
 ],'Новый DCU Джеймса Ганна не смешан с завершённым DCEU.')
]),
C('9. Alien & Predator — космический хоррор',[
 G('Alien — основная сага + сериал',[
  'Alien|1979|movie|Чужой','Aliens|1986|movie|Чужие','Alien 3|1992|movie|Чужой 3','Alien: Resurrection|1997|movie|Чужой 4: Воскрешение','Prometheus|2012|movie|Прометей','Alien: Covenant|2017|movie|Чужой: Завет','Alien: Romulus|2024|movie|Чужой: Ромул','Alien: Earth|2025|tv|Чужой: Земля'
 ],'Показан релизный порядок: он лучше сохраняет открытия франшизы.'),
 G('Predator — полная линейка',[
  'Predator|1987|movie|Хищник','Predator 2|1990|movie|Хищник 2','Predators|2010|movie|Хищники','The Predator|2018|movie|Хищник','Prey|2022|movie|Добыча','Predator: Killer of Killers|2025|movie|Хищник: Убийца убийц','Predator: Badlands|2025|movie|Хищник: Планета смерти'
 ]),
 G('Alien vs. Predator — кроссоверы',[
  'AVP: Alien vs. Predator|2004|movie|Чужой против Хищника','Aliens vs. Predator: Requiem|2007|movie|Чужие против Хищника: Реквием'
 ])
]),
C('10. Terminator — полная вселенная',[
 G('Терминатор — все фильмы',[
  'The Terminator|1984|movie|Терминатор','Terminator 2: Judgment Day|1991|movie|Терминатор 2: Судный день','Terminator 3: Rise of the Machines|2003|movie|Терминатор 3: Восстание машин','Terminator Salvation|2009|movie|Терминатор: Да придёт спаситель','Terminator Genisys|2015|movie|Терминатор: Генезис','Terminator: Dark Fate|2019|movie|Терминатор: Тёмные судьбы'
 ]),
 G('Терминатор — сериалы',[
  'Terminator: The Sarah Connor Chronicles|2008|tv|Терминатор: Битва за будущее','Terminator Zero|2024|tv|Терминатор Зеро'
 ],'Сериалы являются альтернативными ветками и вынесены отдельно.')
]),
C('11. Matrix — полная сага',[
 G('Матрица — порядок просмотра',[
  'The Matrix|1999|movie|Матрица','The Matrix Reloaded|2003|movie|Матрица: Перезагрузка','The Animatrix|2003|movie|Аниматрица','The Matrix Revolutions|2003|movie|Матрица: Революция','The Matrix Resurrections|2021|movie|Матрица: Воскрешение'
 ])
]),
C('12. Jurassic Park / Jurassic World',[
 G('Jurassic — все полнометражные фильмы',[
  'Jurassic Park|1993|movie|Парк юрского периода','The Lost World: Jurassic Park|1997|movie|Парк юрского периода 2: Затерянный мир','Jurassic Park III|2001|movie|Парк юрского периода 3','Jurassic World|2015|movie|Мир юрского периода','Jurassic World: Fallen Kingdom|2018|movie|Мир юрского периода 2','Jurassic World Dominion|2022|movie|Мир юрского периода: Господство','Jurassic World Rebirth|2025|movie|Мир юрского периода: Возрождение'
 ]),
 G('Jurassic — сериалы',[
  'Jurassic World: Camp Cretaceous|2020|tv|Мир юрского периода: Лагерь Мелового периода','Jurassic World: Chaos Theory|2024|tv|Мир юрского периода: Теория хаоса'
 ])
]),
C('13. Wizarding World — Harry Potter + Fantastic Beasts',[
 G('Wizarding World — сюжетная хронология',[
  'Fantastic Beasts and Where to Find Them|2016|movie|Фантастические твари и где они обитают','Fantastic Beasts: The Crimes of Grindelwald|2018|movie|Фантастические твари: Преступления Грин-де-Вальда','Fantastic Beasts: The Secrets of Dumbledore|2022|movie|Фантастические твари: Тайны Дамблдора','Harry Potter and the Philosopher\'s Stone|2001|movie|Гарри Поттер и философский камень','Harry Potter and the Chamber of Secrets|2002|movie|Гарри Поттер и Тайная комната','Harry Potter and the Prisoner of Azkaban|2004|movie|Гарри Поттер и узник Азкабана','Harry Potter and the Goblet of Fire|2005|movie|Гарри Поттер и Кубок огня','Harry Potter and the Order of the Phoenix|2007|movie|Гарри Поттер и Орден Феникса','Harry Potter and the Half-Blood Prince|2009|movie|Гарри Поттер и Принц-полукровка','Harry Potter and the Deathly Hallows: Part 1|2010|movie|Гарри Поттер и Дары Смерти: Часть I','Harry Potter and the Deathly Hallows: Part 2|2011|movie|Гарри Поттер и Дары Смерти: Часть II'
 ]),
 G('Harry Potter — 8 фильмов отдельно',[
  'Harry Potter and the Philosopher\'s Stone|2001|movie|Гарри Поттер и философский камень','Harry Potter and the Chamber of Secrets|2002|movie|Гарри Поттер и Тайная комната','Harry Potter and the Prisoner of Azkaban|2004|movie|Гарри Поттер и узник Азкабана','Harry Potter and the Goblet of Fire|2005|movie|Гарри Поттер и Кубок огня','Harry Potter and the Order of the Phoenix|2007|movie|Гарри Поттер и Орден Феникса','Harry Potter and the Half-Blood Prince|2009|movie|Гарри Поттер и Принц-полукровка','Harry Potter and the Deathly Hallows: Part 1|2010|movie|Дары Смерти: Часть I','Harry Potter and the Deathly Hallows: Part 2|2011|movie|Дары Смерти: Часть II'
 ])
]),
C('14. Middle-earth — Властелин колец и Хоббит',[
 G('Средиземье — сюжетный порядок фильмов',[
  'The Lord of the Rings: The War of the Rohirrim|2024|movie|Властелин колец: Война рохирримов','The Hobbit: An Unexpected Journey|2012|movie|Хоббит: Нежданное путешествие','The Hobbit: The Desolation of Smaug|2013|movie|Хоббит: Пустошь Смауга','The Hobbit: The Battle of the Five Armies|2014|movie|Хоббит: Битва пяти воинств','The Lord of the Rings: The Fellowship of the Ring|2001|movie|Властелин колец: Братство Кольца','The Lord of the Rings: The Two Towers|2002|movie|Властелин колец: Две крепости','The Lord of the Rings: The Return of the King|2003|movie|Властелин колец: Возвращение короля'
 ]),
 G('Кольца власти — отдельная телевизионная адаптация',[
  'The Lord of the Rings: The Rings of Power|2022|tv|Властелин колец: Кольца власти'
 ],'События происходят во Вторую эпоху, задолго до фильмов, но сериал — отдельная телевизионная адаптация.')
]),
C('15. John Wick Universe',[
 G('John Wick — сюжетный порядок',[
  'The Continental: From the World of John Wick|2023|tv|Континенталь — приквел','John Wick|2014|movie|Джон Уик','John Wick: Chapter 2|2017|movie|Джон Уик 2','John Wick: Chapter 3 - Parabellum|2019|movie|Джон Уик 3','Ballerina|2025|movie|Балерина','John Wick: Chapter 4|2023|movie|Джон Уик 4'
 ],'Балерина происходит между третьим и четвёртым фильмами.')
]),
C('16. Mission: Impossible',[
 G('Миссия невыполнима — все фильмы',[
  'Mission: Impossible|1996|movie|Миссия невыполнима','Mission: Impossible II|2000|movie|Миссия невыполнима 2','Mission: Impossible III|2006|movie|Миссия невыполнима 3','Mission: Impossible - Ghost Protocol|2011|movie|Протокол Фантом','Mission: Impossible - Rogue Nation|2015|movie|Племя изгоев','Mission: Impossible - Fallout|2018|movie|Последствия','Mission: Impossible - Dead Reckoning Part One|2023|movie|Смертельная расплата. Часть первая','Mission: Impossible - The Final Reckoning|2025|movie|Финальная расплата'
 ])
]),
C('17. Fast & Furious',[
 G('Форсаж — сюжетная хронология',[
  'The Fast and the Furious|2001|movie|Форсаж','2 Fast 2 Furious|2003|movie|Двойной форсаж','Fast & Furious|2009|movie|Форсаж 4','Fast Five|2011|movie|Форсаж 5','Fast & Furious 6|2013|movie|Форсаж 6','The Fast and the Furious: Tokyo Drift|2006|movie|Тройной форсаж: Токийский дрифт','Furious 7|2015|movie|Форсаж 7','The Fate of the Furious|2017|movie|Форсаж 8','Fast & Furious Presents: Hobbs & Shaw|2019|movie|Хоббс и Шоу','F9|2021|movie|Форсаж 9','Fast X|2023|movie|Форсаж 10'
 ])
]),
C('18. Planet of the Apes',[
 G('Классическая сага 1968–1973',[
  'Planet of the Apes|1968|movie|Планета обезьян','Beneath the Planet of the Apes|1970|movie|Под планетой обезьян','Escape from the Planet of the Apes|1971|movie|Бегство с планеты обезьян','Conquest of the Planet of the Apes|1972|movie|Завоевание планеты обезьян','Battle for the Planet of the Apes|1973|movie|Битва за планету обезьян'
 ]),
 G('Современная сага Цезаря и Ноа',[
  'Rise of the Planet of the Apes|2011|movie|Восстание планеты обезьян','Dawn of the Planet of the Apes|2014|movie|Планета обезьян: Революция','War for the Planet of the Apes|2017|movie|Планета обезьян: Война','Kingdom of the Planet of the Apes|2024|movie|Планета обезьян: Новое царство'
 ]),
 G('Отдельный ремейк',[
  'Planet of the Apes|2001|movie|Планета обезьян — Тим Бёртон'
 ])
]),
C('19. The Conjuring Universe',[
 G('Заклятие — хронология событий',[
  'The Nun|2018|movie|Проклятие монахини','Annabelle: Creation|2017|movie|Проклятие Аннабель: Зарождение зла','The Nun II|2023|movie|Проклятие монахини 2','Annabelle|2014|movie|Проклятие Аннабель','The Conjuring|2013|movie|Заклятие','Annabelle Comes Home|2019|movie|Проклятие Аннабель 3','The Conjuring 2|2016|movie|Заклятие 2','The Conjuring: The Devil Made Me Do It|2021|movie|Заклятие 3: По воле дьявола','The Conjuring: Last Rites|2025|movie|Заклятие 4: Последний обряд'
 ]),
 G('Связанный, но не основной канон',[
  'The Curse of La Llorona|2019|movie|Проклятие плачущей'
 ],'Связи с персонажами есть, но Warner считает Last Rites девятым фильмом основной киновселенной, поэтому La Llorona вынесена отдельно.')
]),
C('20. Франшизы целиком — быстрый каталог',[
 G('Назад в будущее',[
  'Back to the Future|1985|movie|Назад в будущее','Back to the Future Part II|1989|movie|Назад в будущее 2','Back to the Future Part III|1990|movie|Назад в будущее 3'
 ]),
 G('Пираты Карибского моря',[
  'Pirates of the Caribbean: The Curse of the Black Pearl|2003|movie|Проклятие Чёрной жемчужины','Pirates of the Caribbean: Dead Man\'s Chest|2006|movie|Сундук мертвеца','Pirates of the Caribbean: At World\'s End|2007|movie|На краю света','Pirates of the Caribbean: On Stranger Tides|2011|movie|На странных берегах','Pirates of the Caribbean: Dead Men Tell No Tales|2017|movie|Мертвецы не рассказывают сказки'
 ]),
 G('Индиана Джонс — сюжетный порядок',[
  'Indiana Jones and the Temple of Doom|1984|movie|Индиана Джонс и храм судьбы','Raiders of the Lost Ark|1981|movie|В поисках утраченного ковчега','Indiana Jones and the Last Crusade|1989|movie|Индиана Джонс и последний крестовый поход','Indiana Jones and the Kingdom of the Crystal Skull|2008|movie|Королевство хрустального черепа','Indiana Jones and the Dial of Destiny|2023|movie|Индиана Джонс и Колесо судьбы'
 ]),
 G('Джейсон Борн',[
  'The Bourne Identity|2002|movie|Идентификация Борна','The Bourne Supremacy|2004|movie|Превосходство Борна','The Bourne Ultimatum|2007|movie|Ультиматум Борна','The Bourne Legacy|2012|movie|Эволюция Борна','Jason Bourne|2016|movie|Джейсон Борн'
 ]),
 G('Рэмбо',[
  'First Blood|1982|movie|Рэмбо: Первая кровь','Rambo: First Blood Part II|1985|movie|Рэмбо: Первая кровь 2','Rambo III|1988|movie|Рэмбо 3','Rambo|2008|movie|Рэмбо IV','Rambo: Last Blood|2019|movie|Рэмбо: Последняя кровь'
 ]),
 G('Rocky + Creed',[
  'Rocky|1976|movie|Рокки','Rocky II|1979|movie|Рокки 2','Rocky III|1982|movie|Рокки 3','Rocky IV|1985|movie|Рокки 4','Rocky V|1990|movie|Рокки 5','Rocky Balboa|2006|movie|Рокки Бальбоа','Creed|2015|movie|Крид: Наследие Рокки','Creed II|2018|movie|Крид 2','Creed III|2023|movie|Крид 3'
 ]),
 G('Крепкий орешек',[
  'Die Hard|1988|movie|Крепкий орешек','Die Hard 2|1990|movie|Крепкий орешек 2','Die Hard with a Vengeance|1995|movie|Крепкий орешек 3: Возмездие','Live Free or Die Hard|2007|movie|Крепкий орешек 4.0','A Good Day to Die Hard|2013|movie|Крепкий орешек: Хороший день, чтобы умереть'
 ]),
 G('Transformers — игровая линейка',[
  'Transformers|2007|movie|Трансформеры','Transformers: Revenge of the Fallen|2009|movie|Месть падших','Transformers: Dark of the Moon|2011|movie|Тёмная сторона Луны','Transformers: Age of Extinction|2014|movie|Эпоха истребления','Transformers: The Last Knight|2017|movie|Последний рыцарь','Bumblebee|2018|movie|Бамблби','Transformers: Rise of the Beasts|2023|movie|Восхождение Звероботов'
 ]),
 G('TRON',[
  'TRON|1982|movie|Трон','TRON: Legacy|2010|movie|Трон: Наследие','Tron: Ares|2025|movie|Трон: Арес'
 ])
]),
C('21. Mad Max — пустошь',[
 G('Mad Max — вся киносага по выходу',[
  'Mad Max|1979|movie|Безумный Макс','Mad Max 2|1981|movie|Безумный Макс 2: Воин дороги','Mad Max Beyond Thunderdome|1985|movie|Безумный Макс 3: Под куполом грома','Mad Max: Fury Road|2015|movie|Безумный Макс: Дорога ярости','Furiosa: A Mad Max Saga|2024|movie|Фуриоса: Хроники Безумного Макса'
 ])
]),
C('22. A Quiet Place — Тихое место',[
 G('Тихое место — по выходу',[
  'A Quiet Place|2018|movie|Тихое место','A Quiet Place Part II|2020|movie|Тихое место 2','A Quiet Place: Day One|2024|movie|Тихое место: День первый'
 ])
]),
C('23. Scream — Крик',[
 G('Крик — все фильмы по выходу',[
  'Scream|1996|movie|Крик','Scream 2|1997|movie|Крик 2','Scream 3|2000|movie|Крик 3','Scream 4|2011|movie|Крик 4','Scream|2022|movie|Крик 5','Scream VI|2023|movie|Крик 6','Scream 7|2026|movie|Крик 7'
 ]),
 G('Крик — сериал отдельно',[
  'Scream|2015|tv|Крик — сериал'
 ])
]),
C('24. Halloween — Майкл Майерс',[
 G('Halloween — все фильмы по выходу',[
  'Halloween|1978|movie|Хэллоуин','Halloween II|1981|movie|Хэллоуин 2','Halloween III: Season of the Witch|1982|movie|Хэллоуин 3: Время ведьм','Halloween 4: The Return of Michael Myers|1988|movie|Хэллоуин 4: Возвращение Майкла Майерса','Halloween 5: The Revenge of Michael Myers|1989|movie|Хэллоуин 5: Месть Майкла Майерса','Halloween: The Curse of Michael Myers|1995|movie|Хэллоуин 6: Проклятие Майкла Майерса','Halloween H20: 20 Years Later|1998|movie|Хэллоуин: 20 лет спустя','Halloween: Resurrection|2002|movie|Хэллоуин: Воскрешение','Halloween|2007|movie|Хэллоуин — Роб Зомби','Halloween II|2009|movie|Хэллоуин 2 — Роб Зомби','Halloween|2018|movie|Хэллоуин','Halloween Kills|2021|movie|Хэллоуин убивает','Halloween Ends|2022|movie|Хэллоуин заканчивается'
 ])
]),
C('25. Friday the 13th — Пятница, 13-е',[
 G('Пятница, 13-е — все фильмы по выходу',[
  'Friday the 13th|1980|movie|Пятница, 13-е','Friday the 13th Part 2|1981|movie|Пятница, 13-е. Часть 2','Friday the 13th Part III|1982|movie|Пятница, 13-е. Часть 3','Friday the 13th: The Final Chapter|1984|movie|Пятница, 13-е: Последняя глава','Friday the 13th: A New Beginning|1985|movie|Пятница, 13-е: Новое начало','Friday the 13th Part VI: Jason Lives|1986|movie|Пятница, 13-е. Часть 6: Джейсон жив','Friday the 13th Part VII: The New Blood|1988|movie|Пятница, 13-е. Часть 7: Новая кровь','Friday the 13th Part VIII: Jason Takes Manhattan|1989|movie|Пятница, 13-е. Часть 8: Джейсон штурмует Манхэттен','Jason Goes to Hell: The Final Friday|1993|movie|Джейсон отправляется в ад','Jason X|2001|movie|Джейсон X','Freddy vs. Jason|2003|movie|Фредди против Джейсона','Friday the 13th|2009|movie|Пятница, 13-е — перезапуск'
 ]),
 G('Crystal Lake — сериал-приквел',[
  'Crystal Lake|2026|tv|Хрустальное озеро'
 ])
]),
C('26. A Nightmare on Elm Street — Кошмар на улице Вязов',[
 G('Фредди Крюгер — все фильмы',[
  'A Nightmare on Elm Street|1984|movie|Кошмар на улице Вязов','A Nightmare on Elm Street 2: Freddy\'s Revenge|1985|movie|Кошмар на улице Вязов 2: Месть Фредди','A Nightmare on Elm Street 3: Dream Warriors|1987|movie|Кошмар на улице Вязов 3: Воины сна','A Nightmare on Elm Street 4: The Dream Master|1988|movie|Кошмар на улице Вязов 4: Повелитель сна','A Nightmare on Elm Street 5: The Dream Child|1989|movie|Кошмар на улице Вязов 5: Дитя сна','Freddy\'s Dead: The Final Nightmare|1991|movie|Фредди мёртв: Последний кошмар','Wes Craven\'s New Nightmare|1994|movie|Кошмар Уэса Крэйвена','Freddy vs. Jason|2003|movie|Фредди против Джейсона','A Nightmare on Elm Street|2010|movie|Кошмар на улице Вязов — ремейк'
 ]),
 G('Freddy\'s Nightmares — сериал',[
  'Freddy\'s Nightmares|1988|tv|Кошмары Фредди'
 ])
]),
C('27. Evil Dead — Зловещие мертвецы',[
 G('Evil Dead — фильмы по выходу',[
  'The Evil Dead|1981|movie|Зловещие мертвецы','Evil Dead II|1987|movie|Зловещие мертвецы 2','Army of Darkness|1992|movie|Армия тьмы','Evil Dead|2013|movie|Зловещие мертвецы — 2013','Evil Dead Rise|2023|movie|Восстание зловещих мертвецов','Evil Dead Burn|2026|movie|Evil Dead Burn'
 ]),
 G('Ash vs Evil Dead — сериал',[
  'Ash vs Evil Dead|2015|tv|Эш против зловещих мертвецов'
 ])
]),
C('28. Insidious — Астрал',[
 G('Астрал — все фильмы по выходу',[
  'Insidious|2010|movie|Астрал','Insidious: Chapter 2|2013|movie|Астрал: Глава 2','Insidious: Chapter 3|2015|movie|Астрал: Глава 3','Insidious: The Last Key|2018|movie|Астрал 4: Последний ключ','Insidious: The Red Door|2023|movie|Астрал 5: Красная дверь','Insidious: Out of the Further|2026|movie|Астрал: За гранью'
 ])
]),
C('29. Paranormal Activity',[
 G('Паранормальное явление — все вышедшие фильмы',[
  'Paranormal Activity|2007|movie|Паранормальное явление','Paranormal Activity 2|2010|movie|Паранормальное явление 2','Paranormal Activity 3|2011|movie|Паранормальное явление 3','Paranormal Activity 4|2012|movie|Паранормальное явление 4','Paranormal Activity: The Marked Ones|2014|movie|Паранормальное явление: Метка Дьявола','Paranormal Activity: The Ghost Dimension|2015|movie|Паранормальное явление 5: Призраки в 3D','Paranormal Activity: Next of Kin|2021|movie|Паранормальное явление: Ближайший родственник'
 ])
]),
C('30. The Godfather — Крёстный отец',[
 G('Крёстный отец — трилогия',[
  'The Godfather|1972|movie|Крёстный отец','The Godfather Part II|1974|movie|Крёстный отец 2','The Godfather Part III|1990|movie|Крёстный отец 3'
 ]),
 G('Альтернативный монтаж третьей части',[
  'Mario Puzo\'s The Godfather, Coda: The Death of Michael Corleone|2020|movie|Крёстный отец. Эпилог: Смерть Майкла Корлеоне'
 ])
]),
C('31. Hannibal Lecter',[
 G('Ганнибал — фильмы по выходу',[
  'Manhunter|1986|movie|Охотник на людей','The Silence of the Lambs|1991|movie|Молчание ягнят','Hannibal|2001|movie|Ганнибал','Red Dragon|2002|movie|Красный дракон','Hannibal Rising|2007|movie|Ганнибал: Восхождение'
 ],'Manhunter и Red Dragon — две разные экранизации одного романа.'),
 G('Основная кинохронология',[
  'Hannibal Rising|2007|movie|Ганнибал: Восхождение','Red Dragon|2002|movie|Красный дракон','The Silence of the Lambs|1991|movie|Молчание ягнят','Hannibal|2001|movie|Ганнибал'
 ]),
 G('Телевизионные версии',[
  'Hannibal|2013|tv|Ганнибал — сериал','Clarice|2021|tv|Кларисса'
 ])
]),
C('32. James Bond — Агент 007',[
 G('James Bond — 25 официальных фильмов EON',[
  'Dr. No|1962|movie|Доктор Ноу','From Russia with Love|1963|movie|Из России с любовью','Goldfinger|1964|movie|Голдфингер','Thunderball|1965|movie|Шаровая молния','You Only Live Twice|1967|movie|Живёшь только дважды','On Her Majesty\'s Secret Service|1969|movie|На секретной службе Её Величества','Diamonds Are Forever|1971|movie|Бриллианты навсегда','Live and Let Die|1973|movie|Живи и дай умереть','The Man with the Golden Gun|1974|movie|Человек с золотым пистолетом','The Spy Who Loved Me|1977|movie|Шпион, который меня любил','Moonraker|1979|movie|Лунный гонщик','For Your Eyes Only|1981|movie|Только для твоих глаз','Octopussy|1983|movie|Осьминожка','A View to a Kill|1985|movie|Вид на убийство','The Living Daylights|1987|movie|Искры из глаз','Licence to Kill|1989|movie|Лицензия на убийство','GoldenEye|1995|movie|Золотой глаз','Tomorrow Never Dies|1997|movie|Завтра не умрёт никогда','The World Is Not Enough|1999|movie|И целого мира мало','Die Another Day|2002|movie|Умри, но не сейчас','Casino Royale|2006|movie|Казино Рояль','Quantum of Solace|2008|movie|Квант милосердия','Skyfall|2012|movie|007: Координаты «Скайфолл»','Spectre|2015|movie|007: Спектр','No Time to Die|2021|movie|Не время умирать'
 ]),
 G('Неофициальные фильмы Bond',[
  'Casino Royale|1967|movie|Казино Рояль — 1967','Never Say Never Again|1983|movie|Никогда не говори «никогда»'
 ])
]),
C('33. Kingsman',[
 G('Kingsman — по выходу',[
  'Kingsman: The Secret Service|2014|movie|Kingsman: Секретная служба','Kingsman: The Golden Circle|2017|movie|Kingsman: Золотое кольцо','The King\'s Man|2021|movie|King\'s Man: Начало'
 ])
]),
C('34. The Equalizer — Великий уравнитель',[
 G('Великий уравнитель — кинотрилогия',[
  'The Equalizer|2014|movie|Великий уравнитель','The Equalizer 2|2018|movie|Великий уравнитель 2','The Equalizer 3|2023|movie|Великий уравнитель 3'
 ]),
 G('The Equalizer — сериалы отдельно',[
  'The Equalizer|1985|tv|Уравнитель — сериал 1985','The Equalizer|2021|tv|Великий уравнитель — сериал 2021'
 ])
]),
C('35. Джеки Чан — все фильмы по дате выхода',[
 {title:'Джеки Чан — полная фильмография',items:[],dynamic:'actor',actor:'Jackie Chan',actor_ru:'Джеки Чан',person_id:18897,note:'Актёрские кинокредиты по дате выхода, от ранних к новым.'}
]),
C('36. Легенды экшена — фильмографии по годам',[
 {title:'Джет Ли — все фильмы',items:[],dynamic:'actor',actor:'Jet Li',actor_ru:'Джет Ли',person_id:1336},
 {title:'Арнольд Шварценеггер — все фильмы',items:[],dynamic:'actor',actor:'Arnold Schwarzenegger',actor_ru:'Арнольд Шварценеггер',person_id:1100},
 {title:'Жан-Клод Ван Дамм — все фильмы',items:[],dynamic:'actor',actor:'Jean-Claude Van Damme',actor_ru:'Жан-Клод Ван Дамм',person_id:15111},
 {title:'Донни Йен — все фильмы',items:[],dynamic:'actor',actor:'Donnie Yen',actor_ru:'Донни Йен',person_id:1341},
 {title:'Брюс Уиллис — все фильмы',items:[],dynamic:'actor',actor:'Bruce Willis',actor_ru:'Брюс Уиллис',person_id:62},
 {title:'Сильвестр Сталлоне — все фильмы',items:[],dynamic:'actor',actor:'Sylvester Stallone',actor_ru:'Сильвестр Сталлоне',person_id:16483},
 {title:'Джейсон Стэйтем — все фильмы',items:[],dynamic:'actor',actor:'Jason Statham',actor_ru:'Джейсон Стэйтем',person_id:976},
 {title:'Киану Ривз — все фильмы',items:[],dynamic:'actor',actor:'Keanu Reeves',actor_ru:'Киану Ривз',person_id:6384},
 {title:'Дуэйн Джонсон — все фильмы',items:[],dynamic:'actor',actor:'Dwayne Johnson',actor_ru:'Дуэйн «Скала» Джонсон',person_id:18918},
 {title:'Лиам Нисон — все фильмы',items:[],dynamic:'actor',actor:'Liam Neeson',actor_ru:'Лиам Нисон',person_id:3896},
 {title:'Харрисон Форд — все фильмы',items:[],dynamic:'actor',actor:'Harrison Ford',actor_ru:'Харрисон Форд',person_id:3},
 {title:'Том Круз — все фильмы',items:[],dynamic:'actor',actor:'Tom Cruise',actor_ru:'Том Круз',person_id:500},
 {title:'Уэсли Снайпс — все фильмы',items:[],dynamic:'actor',actor:'Wesley Snipes',actor_ru:'Уэсли Снайпс',person_id:10814},
 {title:'Дольф Лундгрен — все фильмы',items:[],dynamic:'actor',actor:'Dolph Lundgren',actor_ru:'Дольф Лундгрен',person_id:16644},
 {title:'Тони Джа — все фильмы',items:[],dynamic:'actor',actor:'Tony Jaa',actor_ru:'Тони Джа',person_id:57207},
 {title:'Ико Увайс — все фильмы',items:[],dynamic:'actor',actor:'Iko Uwais',actor_ru:'Ико Увайс',person_id:113732},
 {title:'Брюс Ли — все фильмы',items:[],dynamic:'actor',actor:'Bruce Lee',actor_ru:'Брюс Ли'},
 {title:'Стивен Сигал — все фильмы',items:[],dynamic:'actor',actor:'Steven Seagal',actor_ru:'Стивен Сигал'},
 {title:'Чак Норрис — все фильмы',items:[],dynamic:'actor',actor:'Chuck Norris',actor_ru:'Чак Норрис'},
 {title:'Скотт Эдкинс — все фильмы',items:[],dynamic:'actor',actor:'Scott Adkins',actor_ru:'Скотт Эдкинс'},
 {title:'Мэл Гибсон — все фильмы',items:[],dynamic:'actor',actor:'Mel Gibson',actor_ru:'Мэл Гибсон'},
 {title:'Николас Кейдж — все фильмы',items:[],dynamic:'actor',actor:'Nicolas Cage',actor_ru:'Николас Кейдж'},
 {title:'Вин Дизель — все фильмы',items:[],dynamic:'actor',actor:'Vin Diesel',actor_ru:'Вин Дизель'},
 {title:'Марк Дакаскос — все фильмы',items:[],dynamic:'actor',actor:'Mark Dacascos',actor_ru:'Марк Дакаскос'},
 {title:'Чоу Юнь-Фат — все фильмы',items:[],dynamic:'actor',actor:'Chow Yun-fat',actor_ru:'Чоу Юнь-Фат'},
 {title:'Мишель Йео — все фильмы',items:[],dynamic:'actor',actor:'Michelle Yeoh',actor_ru:'Мишель Йео'},
 {title:'Клинт Иствуд — все фильмы',items:[],dynamic:'actor',actor:'Clint Eastwood',actor_ru:'Клинт Иствуд'},
 {title:'Уилл Смит — все фильмы',items:[],dynamic:'actor',actor:'Will Smith',actor_ru:'Уилл Смит'},
 {title:'Марк Уолберг — все фильмы',items:[],dynamic:'actor',actor:'Mark Wahlberg',actor_ru:'Марк Уолберг'},
 {title:'Джерард Батлер — все фильмы',items:[],dynamic:'actor',actor:'Gerard Butler',actor_ru:'Джерард Батлер'},
 {title:'Дензел Вашингтон — все фильмы',items:[],dynamic:'actor',actor:'Denzel Washington',actor_ru:'Дензел Вашингтон'},
 {title:'Сэмюэл Л. Джексон — все фильмы',items:[],dynamic:'actor',actor:'Samuel L. Jackson',actor_ru:'Сэмюэл Л. Джексон'}
]),
C('37. ФБР и спецрасследования — сериалы',[
 G('FBI Universe / Dick Wolf',[
  'FBI|2018|tv|FBI',
  'FBI: Most Wanted|2020|tv|FBI: Самые разыскиваемые',
  'FBI: International|2021|tv|FBI: За границей'
 ]),
 G('Профайлеры ФБР и серийные убийцы',[
  'Criminal Minds|2005|tv|Мыслить как преступник',
  'Mindhunter|2017|tv|Охотник за разумом',
  'Hannibal|2013|tv|Ганнибал',
  'The Following|2013|tv|Последователи',
  'Clarice|2021|tv|Кларисса',
  'Manhunt|2017|tv|Охота / Manhunt',
  'Profiler|1996|tv|Профайлер',
  'The Inside|2005|tv|Внутри'
 ]),
 G('Агенты, оперативники и спецгруппы',[
  'The Blacklist|2013|tv|Чёрный список',
  'Quantico|2015|tv|Куантико',
  'Fringe|2008|tv|Грань',
  'White Collar|2009|tv|Белый воротничок',
  'Numb3rs|2005|tv|Числа',
  'Bones|2005|tv|Кости',
  'Graceland|2013|tv|Грейсленд',
  'The Night Agent|2023|tv|Ночной агент',
  'Blindspot|2015|tv|Слепая зона',
  'Limitless|2015|tv|Области тьмы'
 ])
]),
C('38. Сериалы — TOP 100 сейчас',[
 {title:'🔥 TOP 100 сериалов в тренде сейчас',items:[],dynamic:'tmdb',tmdb_url:'trending/tv/week',media:'tv',pages:5,label:'TOP СЕЙЧАС'},
 {title:'⭐ TOP 100 сериалов по рейтингу',items:[],dynamic:'tmdb',tmdb_url:'discover/tv?vote_count.gte=300&sort_by=vote_average.desc',media:'tv',pages:5,label:'ВЫСОКИЙ РЕЙТИНГ'}
]),
C('39. Корея — лучшие сериалы и фильмы',[
 {title:'🇰🇷 K-Drama — популярные сейчас',items:[],dynamic:'tmdb',tmdb_url:'discover/tv?with_original_language=ko&sort_by=popularity.desc',media:'tv',pages:5,label:'K-DRAMA'},
 {title:'⭐ K-Drama — лучшие по рейтингу',items:[],dynamic:'tmdb',tmdb_url:'discover/tv?with_original_language=ko&vote_count.gte=100&sort_by=vote_average.desc',media:'tv',pages:5,label:'K-DRAMA TOP'},
 {title:'🎬 Корейские фильмы — популярные сейчас',items:[],dynamic:'tmdb',tmdb_url:'discover/movie?with_original_language=ko&sort_by=popularity.desc',media:'movie',pages:5,label:'K-MOVIE'},
 {title:'🏆 Корейские фильмы — лучшие по рейтингу',items:[],dynamic:'tmdb',tmdb_url:'discover/movie?with_original_language=ko&vote_count.gte=150&sort_by=vote_average.desc',media:'movie',pages:5,label:'K-MOVIE TOP'},
 G('Корейские триллеры и криминал — избранное',[
  'Oldboy|2003|movie|Олдбой',
  'Memories of Murder|2003|movie|Воспоминания об убийстве',
  'The Chaser|2008|movie|Преследователь',
  'I Saw the Devil|2010|movie|Я видел дьявола',
  'The Man from Nowhere|2010|movie|Человек из ниоткуда',
  'The Yellow Sea|2010|movie|Жёлтое море',
  'New World|2013|movie|Новый мир',
  'A Hard Day|2014|movie|Трудный день',
  'The Handmaiden|2016|movie|Служанка',
  'The Wailing|2016|movie|Вопль',
  'The Outlaws|2017|movie|Криминальный город',
  'Forgotten|2017|movie|Забытый',
  'Burning|2018|movie|Пылающий',
  'Parasite|2019|movie|Паразиты',
  'The Call|2020|movie|Звонок из прошлого',
  'Decision to Leave|2022|movie|Решение уйти',
  'The Roundup|2022|movie|Криминальный город 2'
 ]),
 G('K-Drama — проверенная классика и хиты',[
  'Squid Game|2021|tv|Игра в кальмара',
  'Kingdom|2019|tv|Королевство',
  'Crash Landing on You|2019|tv|Аварийная посадка любви',
  'My Mister|2018|tv|Мой мистер',
  'Reply 1988|2015|tv|Ответ в 1988',
  'Signal|2016|tv|Сигнал',
  'Stranger|2017|tv|Незнакомец',
  'Flower of Evil|2020|tv|Цветок зла',
  'Vincenzo|2021|tv|Винченцо',
  'Move to Heaven|2021|tv|На пути к небесам',
  'Weak Hero Class 1|2022|tv|Слабый герой',
  'The Glory|2022|tv|Слава',
  'Moving|2023|tv|Движение',
  'A Shop for Killers|2024|tv|Магазин для убийц'
 ])
]),
C('40. ANIME — рейтинги, тренды и жанры',[
 {title:'🔥 TOP 100 аниме сейчас',items:[],dynamic:'tmdb',tmdb_url:'discover/tv?with_origin_country=JP&with_genres=16&sort_by=popularity.desc',media:'tv',pages:5,label:'ANIME СЕЙЧАС'},
 {title:'🏆 TOP 100 аниме всех времён',items:[],dynamic:'tmdb',tmdb_url:'discover/tv?with_origin_country=JP&with_genres=16&vote_count.gte=100&sort_by=vote_average.desc',media:'tv',pages:5,label:'ANIME TOP'},
 {title:'🆕 Новинки текущего сезона',items:[],dynamic:'tmdb',tmdb_url:'discover/tv?with_origin_country=JP&with_genres=16&first_air_date.gte=2026-10-01&first_air_date.lte=2026-12-31&sort_by=popularity.desc',media:'tv',pages:5,label:'ANIME ОСЕНЬ 2026'},
 G('✅ Лучшие завершённые аниме',[
  'Fullmetal Alchemist: Brotherhood|2009|tv|Стальной алхимик: Братство',
  'Attack on Titan|2013|tv|Атака титанов',
  'Death Note|2006|tv|Тетрадь смерти',
  'Steins;Gate|2011|tv|Врата Штейна',
  'Monster|2004|tv|Монстр',
  'Cowboy Bebop|1998|tv|Ковбой Бибоп',
  'Code Geass|2006|tv|Код Гиас',
  'Neon Genesis Evangelion|1995|tv|Евангелион',
  'Samurai Champloo|2004|tv|Самурай Чамплу',
  'Erased|2016|tv|Город, в котором меня нет',
  'Parasyte -the maxim-|2014|tv|Паразит',
  'Your Lie in April|2014|tv|Твоя апрельская ложь',
  'Violet Evergarden|2018|tv|Вайолет Эвергарден',
  'Mob Psycho 100|2016|tv|Моб Психо 100',
  'Odd Taxi|2021|tv|Такси Одда'
 ]),
 {title:'🎬 Лучшие аниме-фильмы',items:[],dynamic:'tmdb',tmdb_url:'discover/movie?with_origin_country=JP&with_genres=16&vote_count.gte=50&sort_by=vote_average.desc',media:'movie',pages:5,label:'ANIME MOVIES'},
 {title:'⚔️ Экшен / сёнен',items:[],dynamic:'tmdb',tmdb_url:'discover/tv?with_origin_country=JP&with_genres=16,10759&sort_by=popularity.desc',media:'tv',pages:5,label:'ACTION ANIME'},
 G('🧠 Психология / mindfuck',[
  'Death Note|2006|tv|Тетрадь смерти',
  'Monster|2004|tv|Монстр',
  'Steins;Gate|2011|tv|Врата Штейна',
  'Serial Experiments Lain|1998|tv|Эксперименты Лэйн',
  'Paranoia Agent|2004|tv|Агент паранойи',
  'Psycho-Pass|2012|tv|Психопаспорт',
  'Erased|2016|tv|Город, в котором меня нет',
  'Neon Genesis Evangelion|1995|tv|Евангелион'
 ]),
 G('👻 Хоррор',[
  'Another|2012|tv|Иная',
  'Higurashi When They Cry|2006|tv|Когда плачут цикады',
  'Shiki|2010|tv|Усопшие',
  'Devilman Crybaby|2018|tv|Человек-дьявол: Плакса',
  'Parasyte -the maxim-|2014|tv|Паразит',
  'Tokyo Ghoul|2014|tv|Токийский гуль',
  'Elfen Lied|2004|tv|Эльфийская песнь'
 ]),
 G('❤️ Романтика',[
  'Your Lie in April|2014|tv|Твоя апрельская ложь',
  'Toradora!|2008|tv|Торадора!',
  'Kaguya-sama: Love Is War|2019|tv|Госпожа Кагуя: в любви как на войне',
  'Horimiya|2021|tv|Хоримия',
  'Fruits Basket|2019|tv|Корзинка фруктов',
  'Clannad|2007|tv|Кланнад',
  'My Dress-Up Darling|2022|tv|Эта фарфоровая кукла влюбилась'
 ]),
 {title:'😂 Комедия',items:[],dynamic:'tmdb',tmdb_url:'discover/tv?with_origin_country=JP&with_genres=16,35&sort_by=popularity.desc',media:'tv',pages:5,label:'COMEDY ANIME'},
 {title:'🚀 Sci-Fi',items:[],dynamic:'tmdb',tmdb_url:'discover/tv?with_origin_country=JP&with_genres=16,10765&sort_by=popularity.desc',media:'tv',pages:5,label:'SCI-FI ANIME'},
 G('🤖 Меха',[
  'Neon Genesis Evangelion|1995|tv|Евангелион',
  'Code Geass|2006|tv|Код Гиас',
  'Gurren Lagann|2007|tv|Гуррен-Лаганн',
  'Mobile Suit Gundam: The Witch from Mercury|2022|tv|Гандам: Ведьма с Меркурия',
  '86 EIGHTY-SIX|2021|tv|Восемьдесят шесть'
 ]),
 G('🌀 Исекай',[
  'Re:ZERO -Starting Life in Another World-|2016|tv|Re:Zero',
  'Mushoku Tensei: Jobless Reincarnation|2021|tv|Реинкарнация безработного',
  'That Time I Got Reincarnated as a Slime|2018|tv|О моём перерождении в слизь',
  'Overlord|2015|tv|Повелитель',
  'Konosuba: God’s Blessing on This Wonderful World!|2016|tv|Этот замечательный мир!',
  'The Rising of the Shield Hero|2019|tv|Восхождение героя щита'
 ]),
 G('🥋 Боевые искусства',[
  'Baki|2018|tv|Боец Баки',
  'Baki Hanma|2021|tv|Баки Ханма',
  'Kengan Ashura|2019|tv|Кэнган Асура',
  'Hajime no Ippo|2000|tv|Первый шаг',
  'Kenichi: The Mightiest Disciple|2006|tv|Сильнейший в истории ученик Кэнъити'
 ]),
 {title:'🕵 Детектив / Mystery',items:[],dynamic:'tmdb',tmdb_url:'discover/tv?with_origin_country=JP&with_genres=16,9648&sort_by=vote_average.desc&vote_count.gte=50',media:'tv',pages:5,label:'MYSTERY ANIME'},
 G('🌑 Тёмное фэнтези',[
  'Berserk|1997|tv|Берсерк',
  'Attack on Titan|2013|tv|Атака титанов',
  'Made in Abyss|2017|tv|Созданный в Бездне',
  'Claymore|2007|tv|Клеймор',
  'Dororo|2019|tv|Дороро',
  'Dorohedoro|2020|tv|Дорохедоро'
 ])
]),
C('41. ANIME — большие франшизы и порядок просмотра',[
 G('Dragon Ball — основная линия',[
  'Dragon Ball|1986|tv|Dragon Ball',
  'Dragon Ball Z|1989|tv|Dragon Ball Z',
  'Dragon Ball GT|1996|tv|Dragon Ball GT',
  'Dragon Ball Z Kai|2009|tv|Dragon Ball Z Kai',
  'Dragon Ball Z: Battle of Gods|2013|movie|Dragon Ball Z: Битва богов',
  'Dragon Ball Z: Resurrection F|2015|movie|Dragon Ball Z: Воскрешение F',
  'Dragon Ball Super|2015|tv|Dragon Ball Super',
  'Dragon Ball Super: Broly|2018|movie|Dragon Ball Super: Broly',
  'Dragon Ball Super: Super Hero|2022|movie|Dragon Ball Super: Super Hero',
  'Dragon Ball Daima|2024|tv|Dragon Ball Daima'
 ]),
 G('Naruto / Boruto — основная линия',[
  'Naruto|2002|tv|Наруто',
  'Naruto Shippuden|2007|tv|Наруто: Ураганные хроники',
  'The Last: Naruto the Movie|2014|movie|Последний: Наруто',
  'Boruto: Naruto the Movie|2015|movie|Боруто: Наруто. Фильм',
  'Boruto: Naruto Next Generations|2017|tv|Боруто: Новое поколение Наруто'
 ]),
 G('Bleach — основная линия',[
  'Bleach|2004|tv|Блич',
  'Bleach the Movie: Memories of Nobody|2006|movie|Блич: Воспоминания ни о ком',
  'Bleach the Movie: The DiamondDust Rebellion|2007|movie|Блич: Восстание алмазной пыли',
  'Bleach the Movie: Fade to Black|2008|movie|Блич: Исчезая во тьме',
  'Bleach the Movie: Hell Verse|2010|movie|Блич: Глава ада',
  'Bleach: Thousand-Year Blood War|2022|tv|Блич: Тысячелетняя кровавая война'
 ]),
 G('Attack on Titan',[
  'Attack on Titan|2013|tv|Атака титанов',
  'Attack on Titan: Crimson Bow and Arrow|2014|movie|Атака титанов: Багровый лук и стрела',
  'Attack on Titan: Wings of Freedom|2015|movie|Атака титанов: Крылья свободы',
  'Attack on Titan: Roar of Awakening|2018|movie|Атака титанов: Рёв пробуждения',
  'Attack on Titan: Chronicle|2020|movie|Атака титанов: Хроника'
 ]),
 G('Demon Slayer',[
  'Demon Slayer: Kimetsu no Yaiba|2019|tv|Клинок, рассекающий демонов',
  'Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train|2020|movie|Поезд «Бесконечный»',
  'Demon Slayer: Kimetsu no Yaiba -To the Swordsmith Village-|2023|movie|В деревню кузнецов',
  'Demon Slayer: Kimetsu no Yaiba -To the Hashira Training-|2024|movie|На тренировку столпов'
 ]),
 G('Jujutsu Kaisen',[
  'Jujutsu Kaisen|2020|tv|Магическая битва',
  'Jujutsu Kaisen 0|2021|movie|Магическая битва 0'
 ]),
 G('My Hero Academia',[
  'My Hero Academia|2016|tv|Моя геройская академия',
  'My Hero Academia: Two Heroes|2018|movie|Два героя',
  'My Hero Academia: Heroes Rising|2019|movie|Восхождение героев',
  'My Hero Academia: World Heroes Mission|2021|movie|Миссия мировых героев',
  'My Hero Academia: You’re Next|2024|movie|Ты следующий'
 ]),
 G('Evangelion — сериал + End + Rebuild',[
  'Neon Genesis Evangelion|1995|tv|Евангелион',
  'Neon Genesis Evangelion: The End of Evangelion|1997|movie|Конец Евангелиона',
  'Evangelion: 1.0 You Are (Not) Alone|2007|movie|Евангелион 1.11',
  'Evangelion: 2.0 You Can (Not) Advance|2009|movie|Евангелион 2.22',
  'Evangelion: 3.0 You Can (Not) Redo|2012|movie|Евангелион 3.33',
  'Evangelion: 3.0+1.0 Thrice Upon a Time|2021|movie|Евангелион 3.0+1.01'
 ]),
 G('Ghost in the Shell',[
  'Ghost in the Shell|1995|movie|Призрак в доспехах',
  'Ghost in the Shell: Stand Alone Complex|2002|tv|Призрак в доспехах: Синдром одиночки',
  'Ghost in the Shell 2: Innocence|2004|movie|Призрак в доспехах 2: Невинность',
  'Ghost in the Shell: Stand Alone Complex - Solid State Society|2006|movie|Синдром одиночки: Сообщество прочного государства',
  'Ghost in the Shell: Arise|2013|tv|Призрак в доспехах: У истоков',
  'Ghost in the Shell: SAC_2045|2020|tv|Призрак в доспехах: SAC_2045'
 ]),
 G('Fate — рекомендуемый порядок',[
  'Fate/stay night|2006|tv|Fate/stay night',
  'Fate/Zero|2011|tv|Fate/Zero',
  'Fate/stay night: Unlimited Blade Works|2014|tv|Unlimited Blade Works',
  'Fate/stay night: Heaven’s Feel I. presage flower|2017|movie|Heaven’s Feel I',
  'Fate/stay night: Heaven’s Feel II. lost butterfly|2019|movie|Heaven’s Feel II',
  'Fate/stay night: Heaven’s Feel III. spring song|2020|movie|Heaven’s Feel III'
 ]),
 G('Fullmetal Alchemist',[
  'Fullmetal Alchemist|2003|tv|Стальной алхимик',
  'Fullmetal Alchemist the Movie: Conqueror of Shamballa|2005|movie|Завоеватель Шамбалы',
  'Fullmetal Alchemist: Brotherhood|2009|tv|Стальной алхимик: Братство',
  'Fullmetal Alchemist: The Sacred Star of Milos|2011|movie|Священная звезда Милоса'
 ]),
 G('Berserk',[
  'Berserk|1997|tv|Берсерк',
  'Berserk: The Golden Age Arc I - The Egg of the King|2012|movie|Золотой век I',
  'Berserk: The Golden Age Arc II - The Battle for Doldrey|2012|movie|Золотой век II',
  'Berserk: The Golden Age Arc III - The Advent|2013|movie|Золотой век III',
  'Berserk|2016|tv|Берсерк — 2016',
  'Berserk: The Golden Age Arc – Memorial Edition|2022|tv|Золотой век: Мемориальное издание'
 ]),
 G('Hunter x Hunter',[
  'Hunter x Hunter|1999|tv|Hunter x Hunter — 1999',
  'Hunter x Hunter|2011|tv|Hunter x Hunter — 2011',
  'Hunter x Hunter: Phantom Rouge|2013|movie|Призрачная алость',
  'Hunter x Hunter: The Last Mission|2013|movie|Последняя миссия'
 ])
]),
C('42. Казахстан 🇰🇿 — кино и сериалы',[
 {title:'🔥 Казахстанские фильмы — популярные',items:[],dynamic:'tmdb',tmdb_url:'discover/movie?with_origin_country=KZ&sort_by=popularity.desc',media:'movie',pages:5,label:'KAZAKHSTAN'},
 {title:'⭐ Казахстанские фильмы — лучшие по рейтингу',items:[],dynamic:'tmdb',tmdb_url:'discover/movie?with_origin_country=KZ&vote_count.gte=10&sort_by=vote_average.desc',media:'movie',pages:5,label:'KAZAKHSTAN TOP'},
 {title:'📺 Казахстанские сериалы',items:[],dynamic:'tmdb',tmdb_url:'discover/tv?with_origin_country=KZ&sort_by=popularity.desc',media:'tv',pages:5,label:'KAZAKHSTAN TV'},
 G('Казахстанское кино — избранное',[
  'Tulpan|2008|movie|Тюльпан',
  'Harmony Lessons|2013|movie|Уроки гармонии',
  'The Owners|2014|movie|Хозяева',
  'The Gentle Indifference of the World|2018|movie|Ласковое безразличие мира',
  'Tomiris|2019|movie|Томирис',
  'A Dark, Dark Man|2019|movie|Чёрный, чёрный человек',
  'Yellow Cat|2020|movie|Жёлтая кошка'
 ])
]),
C('43. Режиссёры — фильмографии по годам',[
 {title:'Кристофер Нолан',items:[],dynamic:'director',director:'Christopher Nolan',director_ru:'Кристофер Нолан',person_id:525},
 {title:'Квентин Тарантино',items:[],dynamic:'director',director:'Quentin Tarantino',director_ru:'Квентин Тарантино',person_id:138},
 {title:'Дэвид Финчер',items:[],dynamic:'director',director:'David Fincher',director_ru:'Дэвид Финчер',person_id:7467},
 {title:'Мартин Скорсезе',items:[],dynamic:'director',director:'Martin Scorsese',director_ru:'Мартин Скорсезе',person_id:1032},
 {title:'Стивен Спилберг',items:[],dynamic:'director',director:'Steven Spielberg',director_ru:'Стивен Спилберг',person_id:488},
 {title:'Джеймс Кэмерон',items:[],dynamic:'director',director:'James Cameron',director_ru:'Джеймс Кэмерон',person_id:2710},
 {title:'Ридли Скотт',items:[],dynamic:'director',director:'Ridley Scott',director_ru:'Ридли Скотт',person_id:578},
 {title:'Дени Вильнёв',items:[],dynamic:'director',director:'Denis Villeneuve',director_ru:'Дени Вильнёв',person_id:137427},
 {title:'Гай Ричи',items:[],dynamic:'director',director:'Guy Ritchie',director_ru:'Гай Ричи',person_id:956},
 {title:'Роберт Родригес',items:[],dynamic:'director',director:'Robert Rodriguez',director_ru:'Роберт Родригес',person_id:2294},
 {title:'Пак Чхан-ук',items:[],dynamic:'director',director:'Park Chan-wook',director_ru:'Пак Чхан-ук',person_id:10099},
 {title:'Пон Джун-хо',items:[],dynamic:'director',director:'Bong Joon-ho',director_ru:'Пон Джун-хо',person_id:21684},
 {title:'Гильермо дель Торо',items:[],dynamic:'director',director:'Guillermo del Toro',director_ru:'Гильермо дель Торо',person_id:10828},
 {title:'Даррен Аронофски',items:[],dynamic:'director',director:'Darren Aronofsky',director_ru:'Даррен Аронофски',person_id:6431},
 {title:'Дэвид Линч',items:[],dynamic:'director',director:'David Lynch',director_ru:'Дэвид Линч',person_id:5602}
]),
C('44. Фильмы — TOP 100 сейчас',[
 {title:'🔥 TOP 100 фильмов в тренде сейчас',items:[],dynamic:'tmdb',tmdb_url:'trending/movie/week',media:'movie',pages:5,label:'MOVIES TRENDING'},
 {title:'⭐ TOP 100 фильмов по рейтингу',items:[],dynamic:'tmdb',tmdb_url:'discover/movie?vote_count.gte=500&sort_by=vote_average.desc',media:'movie',pages:5,label:'MOVIES TOP'},
 {title:'🆕 Популярные новые фильмы',items:[],dynamic:'tmdb',tmdb_url:'discover/movie?sort_by=popularity.desc&primary_release_date.gte=2025-01-01',media:'movie',pages:5,label:'NEW MOVIES'}
])
];

function cache(){var c=Lampa.Storage.get(CACHE_KEY,{});return c&&typeof c==='object'?c:{}}
function cacheSet(k,v){var c=cache();c[k]=v;var ks=Object.keys(c);if(ks.length>700)ks.slice(0,ks.length-600).forEach(function(x){delete c[x]});Lampa.Storage.set(CACHE_KEY,c)}
function norm(s){return String(s||'').toLowerCase().replace(/ё/g,'е').replace(/[^a-zа-я0-9]+/gi,' ').trim().replace(/\s+/g,' ')}
function yr(r){return parseInt(String(r.release_date||r.first_air_date||'').slice(0,4),10)||0}
function bestScored(e,res){
 var targets=[norm(e.q),norm(e.ru)].filter(Boolean);
 var b=null,bs=-999;

 (res||[]).forEach(function(r){
  var names=[r.title,r.original_title,r.name,r.original_name].map(norm).filter(Boolean);
  var s=-40;

  targets.forEach(function(target){
   names.forEach(function(n){
    var score=0;

    if(n===target) score=320;
    else if(n.indexOf(target)===0){
     var extra=n.length-target.length;
     score=extra<=8?180:95;
    }
    else if(target.indexOf(n)===0){
     var extra2=target.length-n.length;
     score=extra2<=8?140:70;
    }
    else if(n.indexOf(target)>=0 || target.indexOf(n)>=0) score=55;

    if(score>s)s=score;
   });
  });

  var joined=names.join(' ');
  var queryJoined=targets.join(' ');
  if(/ocean cut|fan edit|fan made|recap|compilation|summary|digest/.test(joined) &&
     !/ocean cut|fan edit|fan made|recap|compilation|summary|digest/.test(queryJoined)){
    return;
  }

  var y=yr(r);
  if(e.year&&y){
   var d=Math.abs(e.year-y);
   if(d===0)s+=120;
   else if(d===1)s+=45;
   else if(d===2)s+=15;
   else if(d>3)s-=100;
   if(d>10)s-=100;
  }

  var pop=parseFloat(r.popularity||0);
  if(pop>0)s+=Math.min(35,Math.log(pop+1)/Math.LN2*4);

  if(s>bs){bs=s;b=r}
 });

 return {item:bs>=70?b:null,score:bs};
}
function best(e,res){
 return bestScored(e,res).item;
}
function search(e,kind,done){
 try{
  var src=Lampa.Api&&Lampa.Api.sources&&Lampa.Api.sources.tmdb;
  if(!src||!src.list)return done(null);

  var aliases={
   'naruto':['NARUTO -ナルト-','Наруто'],
   'naruto shippuden':['NARUTO -ナルト- 疾風伝','Наруто: Ураганные хроники'],
   'attack on titan':['進撃の巨人','Атака титанов'],
   'demon slayer: kimetsu no yaiba':['鬼滅の刃','Клинок, рассекающий демонов'],
   'jujutsu kaisen':['呪術廻戦','Магическая битва'],
   'bleach':['BLEACH','Блич'],
   'my hero academia':['僕のヒーローアカデミア','Моя геройская академия'],
   'dragon ball':['ドラゴンボール'],
   'hunter x hunter':['HUNTER×HUNTER'],
   'neon genesis evangelion':['新世紀エヴァンゲリオン'],
   'fullmetal alchemist: brotherhood':['鋼の錬金術師 FULLMETAL ALCHEMIST']
  };
  var queries=[];
  [e.q,e.ru].concat(aliases[norm(e.q)]||[]).forEach(function(q){
   q=String(q||'').trim();
   if(q&&queries.indexOf(q)<0)queries.push(q);
  });
  if(!queries.length)return done(null);

  var results=[],seen={};

  function add(rows){
   (rows||[]).forEach(function(r){
    var k=String(r.id||'')+'|'+String(r.media_type||kind);
    if(!seen[k]){seen[k]=1;results.push(r)}
   });
  }

  function run(list,page,after){
   var left=list.length;
   if(!left)return after();

   list.forEach(function(q){
    src.list({url:'search/'+kind,query:encodeURIComponent(q),page:page},function(d){
     add((d&&d.results)||[]);
     left--;
     if(!left)after();
    },function(){
     left--;
     if(!left)after();
    });
   });
  }

  run(queries,1,function(){
   var first=bestScored(e,results);
   if(first.item&&first.score>=300)return done(first.item);

   run(queries,2,function(){
    done(best(e,results));
   });
  });
 }catch(x){done(null)}
}
function decorate(r,e,num){
 r.source='tmdb';
 var t=(num<9?'00':num<99?'0':'')+num+' · '+e.ru;

 // Lampa determines detail type by presence of card.name:
 // name => TV, no name => movie. Never set both.
 if(e.type==='tv'){
  r.name=t;
  if(r.title) delete r.title;
 }else{
  r.title=t;
  if(r.name) delete r.name;
 }

 var pre='ПОДБОРКА · '+e.ru+(e.season?' · сезон '+e.season:'');
 r.overview=pre+(r.overview?'\n\n'+r.overview:'');
 return r;
}
function resolve(e,num,done){
 var k=e.q+'|'+e.year+'|'+e.type,c=cache();
 if(c[k])return done(decorate(JSON.parse(JSON.stringify(c[k])),e,num));
 function finish(r){
  if(!r)return done(null);
  r.source='tmdb';
  cacheSet(k,r);
  done(decorate(JSON.parse(JSON.stringify(r)),e,num));
 }
 if(e.type==='tv') search(e,'tv',finish);
 else search(e,'movie',finish);
}
function actorIdCache(){
 var x=Lampa.Storage.get('big_collections_actor_ids_v1',{});
 return x&&typeof x==='object'?x:{};
}
function saveActorId(name,id){
 var x=actorIdCache();x[name]=id;Lampa.Storage.set('big_collections_actor_ids_v1',x);
}
function resolveActorId(g,src,ok,err){
 if(g.person_id)return ok(g.person_id);

 var cached=actorIdCache()[g.actor];
 if(cached)return ok(cached);

 src.list({url:'search/person',query:encodeURIComponent(g.actor),page:1},function(d){
  var rows=(d&&d.results)||[],target=norm(g.actor),exact=[],i;
  for(i=0;i<rows.length;i++){
   if(norm(rows[i].name)===target)exact.push(rows[i]);
  }
  var pool=exact.length?exact:rows;
  pool.sort(function(a,b){return (parseFloat(b.popularity)||0)-(parseFloat(a.popularity)||0)});
  var p=pool[0];
  if(!p||!p.id)return err&&err();
  saveActorId(g.actor,p.id);
  ok(p.id);
 },err);
}
function isNoiseCredit(r){
 var ch=norm(r&&r.character||'');
 var title=norm((r&&r.title)||(r&&r.original_title)||'');

 if(ch==='self'||ch.indexOf('self ')===0||ch==='himself'||ch==='herself'||ch.indexOf('archive footage')>=0){
   return true;
 }

 if(/^(wwe|wwf|ufc)\b/.test(title))return true;
 if(title.indexOf('making of ')===0||title.indexOf('behind the scenes')>=0)return true;
 if(title.indexOf('golden globe')>=0||title.indexOf('mtv movie awards')>=0)return true;

 return false;
}
function actorCredits(g,ok,err){
 try{
  var src=Lampa.Api&&Lampa.Api.sources&&Lampa.Api.sources.tmdb;
  if(!src||!src.list)return err&&err();

  resolveActorId(g,src,function(personId){
   src.list({url:'person/'+personId+'/movie_credits',page:1},function(d){
    var arr=(d&&d.cast)||[],now=new Date(),seen={};

    arr=arr.filter(function(r){
     if(!r||!r.id||isNoiseCredit(r))return false;

     var dt=r.release_date?new Date(r.release_date+'T00:00:00'):null;
     if(dt&&!isNaN(dt.getTime())&&dt>now)return false;

     var k=String(r.id);
     if(seen[k])return false;
     seen[k]=1;
     return true;
    });

    arr.sort(function(a,b){
     var da=String(a.release_date||'9999-99-99');
     var db=String(b.release_date||'9999-99-99');
     if(da<db)return-1;
     if(da>db)return 1;
     return (a.id||0)-(b.id||0);
    });

    if(!arr.length)return err&&err();
    ok(arr);
   },err);
  },err);
 }catch(e){if(err)err()}
}

function directorIdCache(){
 var x=Lampa.Storage.get('big_collections_director_ids_v2',{});
 return x&&typeof x==='object'?x:{};
}
function saveDirectorId(name,id){
 var x=directorIdCache();x[name]=id;Lampa.Storage.set('big_collections_director_ids_v2',x);
}
function resolveDirectorId(g,src,ok,err){
 if(g.person_id)return ok(g.person_id);
 var cached=directorIdCache()[g.director];
 if(cached)return ok(cached);

 src.list({url:'search/person',query:encodeURIComponent(g.director),page:1},function(d){
  var rows=(d&&d.results)||[],target=norm(g.director),exact=[];
  rows.forEach(function(p){if(norm(p.name)===target)exact.push(p)});
  var pool=exact.length?exact:rows;
  pool.sort(function(a,b){return (parseFloat(b.popularity)||0)-(parseFloat(a.popularity)||0)});
  var p=pool[0];
  if(!p||!p.id)return err&&err();
  saveDirectorId(g.director,p.id);
  ok(p.id);
 },err);
}
function directorCredits(g,ok,err){
 try{
  var src=Lampa.Api&&Lampa.Api.sources&&Lampa.Api.sources.tmdb;
  if(!src||!src.list)return err&&err();

  resolveDirectorId(g,src,function(personId){
   src.list({url:'person/'+personId+'/movie_credits',page:1},function(d){
    var arr=(d&&d.crew)||[],now=new Date(),seen={};

    arr=arr.filter(function(r){
     if(!r||!r.id)return false;
     if(String(r.job||'').toLowerCase()!=='director')return false;

     var dt=r.release_date?new Date(r.release_date+'T00:00:00'):null;
     if(dt&&!isNaN(dt.getTime())&&dt>now)return false;

     var k=String(r.id);
     if(seen[k])return false;
     seen[k]=1;
     return true;
    });

    arr.sort(function(a,b){
     var da=String(a.release_date||'9999-99-99');
     var db=String(b.release_date||'9999-99-99');
     if(da<db)return-1;
     if(da>db)return 1;
     return (a.id||0)-(b.id||0);
    });

    if(!arr.length)return err&&err();
    ok(arr);
   },err);
  },err);
 }catch(e){if(err)err()}
}
function decorateDynamicDirector(r,num,g){
 var x=ensureCardImage(JSON.parse(JSON.stringify(r)));
 x.source='tmdb';
 var y=yr(x),name=x.title||x.original_title||'Без названия';
 var p=(num<10?'00':num<100?'0':'')+num;
 x.title=p+' · '+name+(y?' ('+y+')':'');
 if(x.name)delete x.name;
 x.overview=(g.director_ru||g.director)+' · режиссёрская фильмография'+
  (x.overview?'\\n\\n'+x.overview:'');
 return x;
}
function decorateDynamicActor(r,num,g){
 var x=JSON.parse(JSON.stringify(r));
 x.source='tmdb';
 var y=yr(x),name=x.title||x.original_title||'Без названия';
 var p=(num<9?'00':num<99?'0':'')+num;

 x.title=p+' · '+name+(y?' ('+y+')':'');
 // movie_credits are movies; a name field makes Lampa open a TV record.
 if(x.name) delete x.name;

 x.overview=(g.actor_ru||g.actor)+' · фильмография по дате выхода'+
  (x.character?' · роль: '+x.character:'')+
  (x.overview?'\\n\\n'+x.overview:'');
 return x;
}
function decorateDynamicTmdb(r,num,g){
 var x=JSON.parse(JSON.stringify(r));
 x.source='tmdb';

 var base=x.name||x.title||x.original_name||x.original_title||'Без названия';
 var p=(num<10?'00':num<100?'0':'')+num;
 var label=p+' · '+base;

 if(g.media==='tv'){
  x.name=label;
  if(x.title)delete x.title;
 }else{
  x.title=label;
  if(x.name)delete x.name;
 }

 x.overview=(g.label||'ПОДБОРКА')+' · обновляется автоматически'+
  (x.overview?'\\n\\n'+x.overview:'');
 return x;
}
function tmdbDynamic(g,page,ok,err){
 try{
  var src=Lampa.Api&&Lampa.Api.sources&&Lampa.Api.sources.tmdb;
  if(!src||!src.list)return err&&err();

  src.list({url:g.tmdb_url,page:page},function(d){
   var rows=(d&&d.results)||[];
   var start=(page-1)*20;

   ok({
    secuses:true,
    page:page,
    total_pages:g.pages||5,
    total_results:(g.pages||5)*20,
    results:rows.map(function(r,i){return decorateDynamicTmdb(r,start+i+1,g)})
   });
  },err);
 }catch(e){if(err)err()}
}

function htmlPlain(s){
 return String(s||'')
  .replace(/<br\s*\/?>/gi,'\n')
  .replace(/<[^>]*>/g,'')
  .replace(/&nbsp;/g,' ')
  .replace(/&amp;/g,'&')
  .replace(/&quot;/g,'"')
  .replace(/&#39;/g,"'")
  .trim();
}
function animeSeasonNow(){
 var d=new Date(),m=d.getMonth()+1;
 return {
  season:m<=3?'WINTER':m<=6?'SPRING':m<=9?'SUMMER':'FALL',
  year:d.getFullYear()
 };
}
function anilistRequest(query,variables,ok,err){
 try{
  fetch('https://graphql.anilist.co',{
   method:'POST',
   headers:{'Content-Type':'application/json','Accept':'application/json'},
   body:JSON.stringify({query:query,variables:variables||{}})
  }).then(function(r){
   if(!r.ok)throw new Error('AniList HTTP '+r.status);
   return r.json();
  }).then(function(j){
   if(j&&j.errors&&j.errors.length)throw new Error(j.errors[0].message||'AniList error');
   ok(j&&j.data?j.data:j);
  }).catch(function(e){if(err)err(e)});
 }catch(e){if(err)err(e)}
}
function animeTitle(m){
 return (m.title&&(m.title.english||m.title.romaji||m.title.native))||'Без названия';
}
function animeToCard(m,num,g){
 var title=animeTitle(m);
 var p=(num<10?'00':num<100?'0':'')+num;
 var year=m.startDate&&m.startDate.year||0;
 var isMovie=m.format==='MOVIE';
 var score=(parseFloat(m.averageScore||m.meanScore||0)/10)||0;

 var x={
  id:'anilist_'+m.id,
  source:'anilist',
  poster:(m.coverImage&&(m.coverImage.extraLarge||m.coverImage.large||m.coverImage.medium))||'',
  backdrop_path:'',
  poster_path:'',
  vote_average:score,
  overview:(g.label||'ANIME')+
   (m.averageScore?' · AniList '+m.averageScore+'/100':'')+
   (m.episodes?' · '+m.episodes+' эп.':'')+
   (m.genres&&m.genres.length?' · '+m.genres.slice(0,3).join(', '):'')+
   (m.description?'\\n\\n'+htmlPlain(m.description):''),
  release_date:year?year+'-01-01':'',
  first_air_date:year?year+'-01-01':'',
  anilist_id:m.id,
  anilist_score:m.averageScore||m.meanScore||0,
  anilist_popularity:m.popularity||0,
  anilist_trending:m.trending||0,
  anilist_episodes:m.episodes||0,
  anilist_status:m.status||'',
  anilist_format:m.format||'',
  anilist_genres:m.genres||[],
  anilist_titles:[
   m.title&&m.title.english||'',
   m.title&&m.title.romaji||'',
   m.title&&m.title.native||''
  ].filter(Boolean),
  anime_year:year,
  anime_media:isMovie?'movie':'tv'
 };

 if(isMovie)x.title=p+' · '+title;
 else x.name=p+' · '+title;

 return x;
}

function animeCardFromTmdb(tmdb,m,num,g){
 var x=cloneCard(tmdb);
 x.source='tmdb';

 var p=(num<10?'00':num<100?'0':'')+num;
 var base=x.name||x.title||x.original_name||x.original_title||animeTitle(m);
 var isMovie=m.format==='MOVIE';

 if(isMovie){
  x.title=p+' · '+base;
  if(x.name)delete x.name;
 }else{
  x.name=p+' · '+base;
  if(x.title)delete x.title;
 }

 x.anilist_id=m.id;
 x.anilist_score=m.averageScore||m.meanScore||0;
 x.anilist_popularity=m.popularity||0;
 x.anilist_trending=m.trending||0;
 x.anilist_episodes=m.episodes||0;
 x.anilist_status=m.status||'';
 x.anilist_format=m.format||'';
 x.anilist_genres=m.genres||[];
 x.anilist_titles=[
  m.title&&m.title.english||'',
  m.title&&m.title.romaji||'',
  m.title&&m.title.native||''
 ].filter(Boolean);
 x.anime_year=m.startDate&&m.startDate.year||0;
 x.anime_media=isMovie?'movie':'tv';
 x.anime_tmdb_resolved=true;

 var prefix=(g.label||'ANIME')+
  (x.anilist_score?' · AniList '+x.anilist_score+'/100':'')+
  (x.anilist_episodes?' · '+x.anilist_episodes+' эп.':'')+
  (x.anilist_genres.length?' · '+x.anilist_genres.slice(0,3).join(', '):'');

 x.overview=prefix+(x.overview?'\\n\\n'+x.overview:'');
 return x;
}
function resolveAnimeTmdb(m,num,g,done){
 var kind=m.format==='MOVIE'?'movie':'tv';
 var year=m.startDate&&m.startDate.year||0;
 var titles=[
  m.title&&m.title.english||'',
  m.title&&m.title.romaji||'',
  m.title&&m.title.native||''
 ].filter(Boolean);
 var i=0;

 function next(){
  if(i>=titles.length){
   var fallback=animeToCard(m,num,g);
   fallback.anime_tmdb_resolved=false;
   return done(fallback);
  }

  var q=titles[i++];
  search({q:q,year:year,type:kind},kind,function(r){
   if(r)return done(animeCardFromTmdb(r,m,num,g));
   next();
  });
 }
 next();
}
function mapAnimeTmdb(media,start,g,done){
 if(!media.length)return done([]);

 var out=new Array(media.length),next=0,active=0,finished=0,LIMIT=5;
 function pump(){
  while(active<LIMIT&&next<media.length){
   (function(i){
    active++;next++;
    resolveAnimeTmdb(media[i],start+i+1,g,function(card){
     out[i]=card;
     active--;finished++;
     if(finished===media.length)done(out.filter(Boolean));
     else pump();
    });
   })(next);
  }
 }
 pump();
}
function animePreviewSpec(g){
 var t=String(g&&g.title||'');
 if(t.indexOf('🔥 TOP 100 аниме сейчас')===0)return{q:'Solo Leveling',year:2024,type:'tv'};
 if(t.indexOf('🏆 TOP 100 аниме')===0)return{q:'Fullmetal Alchemist: Brotherhood',year:2009,type:'tv'};
 if(t.indexOf('🆕 Новинки')===0)return{q:'Frieren: Beyond Journey’s End',year:2023,type:'tv'};
 if(t.indexOf('✅ Лучшие завершённые')===0)return{q:'Attack on Titan',year:2013,type:'tv'};
 if(t.indexOf('🎬 Лучшие аниме-фильмы')===0)return{q:'Spirited Away',year:2001,type:'movie'};
 if(t.indexOf('⚔️ Экшен')===0)return{q:'Demon Slayer: Kimetsu no Yaiba',year:2019,type:'tv'};
 if(t.indexOf('🧠 Психология')===0)return{q:'Death Note',year:2006,type:'tv'};
 if(t.indexOf('👻 Хоррор')===0)return{q:'Another',year:2012,type:'tv'};
 if(t.indexOf('❤️ Романтика')===0)return{q:'Your Lie in April',year:2014,type:'tv'};
 if(t.indexOf('😂 Комедия')===0)return{q:'Spy x Family',year:2022,type:'tv'};
 if(t.indexOf('🚀 Sci-Fi')===0)return{q:'Steins;Gate',year:2011,type:'tv'};
 if(t.indexOf('🤖 Меха')===0)return{q:'Neon Genesis Evangelion',year:1995,type:'tv'};
 if(t.indexOf('🌀 Исекай')===0)return{q:'Re:ZERO -Starting Life in Another World-',year:2016,type:'tv'};
 if(t.indexOf('🥋 Боевые искусства')===0)return{q:'Baki',year:2018,type:'tv'};
 if(t.indexOf('🕵 Детектив')===0)return{q:'Monster',year:2004,type:'tv'};
 if(t.indexOf('🌑 Тёмное')===0)return{q:'Berserk',year:1997,type:'tv'};
 return null;
}
function anilistDynamic(g,page,ok,err){
 var q='query($page:Int,$perPage:Int,$sort:[MediaSort],$genre:String,$tag:String,$status:MediaStatus,$format:MediaFormat,$season:MediaSeason,$seasonYear:Int){Page(page:$page,perPage:$perPage){pageInfo{currentPage lastPage hasNextPage}media(type:ANIME,isAdult:false,sort:$sort,genre:$genre,tag:$tag,status:$status,format:$format,season:$season,seasonYear:$seasonYear){id title{romaji english native}startDate{year month day}averageScore meanScore popularity trending status format episodes genres description(asHtml:false)coverImage{extraLarge large medium}}}}';
 var season=g.seasonal?animeSeasonNow():null;
 var vars={
  page:page,
  perPage:20,
  sort:g.sort||['POPULARITY_DESC'],
  genre:g.genre||null,
  tag:g.tag||null,
  status:g.status||null,
  format:g.format||null,
  season:season?season.season:null,
  seasonYear:season?season.year:null
 };

 anilistRequest(q,vars,function(data){
  var media=data&&data.Page&&data.Page.media||[];
  var start=(page-1)*20;

  mapAnimeTmdb(media,start,g,function(cards){
   ok({
    secuses:true,
    page:page,
    total_pages:g.pages||5,
    total_results:(g.pages||5)*20,
    results:cards
   });
  });
 },err);
}
function openAnimeCard(data){
 var titles=(data.anilist_titles||[]).slice();
 if(!titles.length)return Lampa.Noty.show('ANIME: не удалось определить название');

 var media=data.anime_media||'tv';
 var year=data.anime_year||0;
 var i=0;

 try{Lampa.Loading.start()}catch(e){}

 function done(found){
  try{Lampa.Loading.stop()}catch(e){}
  if(!found)return Lampa.Noty.show('ANIME: карточка TMDB не найдена');
  found.source='tmdb';
  Lampa.Activity.push({
   url:found.url,
   component:'full',
   id:found.id,
   method:found.name?'tv':'movie',
   card:found,
   source:'tmdb'
  });
 }
 function next(){
  if(i>=titles.length)return done(null);
  var q=titles[i++];
  search({q:q,year:year,type:media},media,function(r){
   if(r)return done(r);
   next();
  });
 }
 next();
}
function animeInfoHtml(data,reviews){
 var title=(data.anilist_titles&&data.anilist_titles[0])||data.title||data.name||'Anime';
 var html='<div style="padding:1em 1.2em;line-height:1.45">'+
  '<div style="font-size:1.45em;font-weight:700;margin-bottom:.8em">'+$('<div>').text(title).html()+'</div>'+
  '<div><b>AniList:</b> '+(data.anilist_score?data.anilist_score+'/100':'—')+'</div>'+
  '<div><b>Популярность:</b> '+(data.anilist_popularity||'—')+'</div>'+
  '<div><b>Эпизоды:</b> '+(data.anilist_episodes||'—')+'</div>'+
  '<div><b>Статус:</b> '+$('<span>').text(data.anilist_status||'—').html()+'</div>'+
  '<div><b>Формат:</b> '+$('<span>').text(data.anilist_format||'—').html()+'</div>'+
  '<div><b>Жанры:</b> '+$('<span>').text((data.anilist_genres||[]).join(', ')||'—').html()+'</div>';

 if(reviews&&reviews.length){
  html+='<div style="font-size:1.15em;font-weight:700;margin-top:1.3em;margin-bottom:.5em">Отзывы AniList</div>';
  reviews.forEach(function(r){
   var summary=htmlPlain(r.summary||r.body||'');
   if(summary.length>420)summary=summary.slice(0,420)+'…';
   html+='<div style="padding:.75em 0;border-top:1px solid rgba(255,255,255,.12)">'+
    '<b>'+$('<span>').text(r.user&&r.user.name||'Пользователь').html()+'</b>'+
    (r.ratingAmount?'<span style="opacity:.6"> · 👍 '+r.rating+'/'+r.ratingAmount+'</span>':'')+
    '<div style="margin-top:.35em;opacity:.86">'+$('<div>').text(summary).html()+'</div>'+
   '</div>';
  });
 }else{
  html+='<div style="margin-top:1em;opacity:.65">Отзывы не найдены или AniList временно не ответил.</div>';
 }
 html+='</div>';
 return $(html);
}
function showAnimeInfo(data){
 var q='query($mediaId:Int,$page:Int,$perPage:Int){Page(page:$page,perPage:$perPage){reviews(mediaId:$mediaId,sort:[RATING_DESC]){id summary body rating ratingAmount user{name}}}}';
 anilistRequest(q,{mediaId:data.anilist_id,page:1,perPage:5},function(r){
  var reviews=r&&r.Page&&r.Page.reviews||[];
  Lampa.Modal.open({
   title:'⭐ Рейтинг и отзывы',
   html:animeInfoHtml(data,reviews),
   size:'large',
   mask:true,
   onBack:function(){Lampa.Modal.close();try{Lampa.Controller.toggle('content')}catch(e){}}
  });
 },function(){
  Lampa.Modal.open({
   title:'⭐ Рейтинг и отзывы',
   html:animeInfoHtml(data,[]),
   size:'large',
   mask:true,
   onBack:function(){Lampa.Modal.close();try{Lampa.Controller.toggle('content')}catch(e){}}
  });
 });
}
function fetchList(o,ok,err){
 var cat=CATS[o.cat],g=cat&&cat.groups[o.group];if(!g)return err&&err();
 var page=Math.max(1,parseInt(o.page||1,10));

 if(g.dynamic==='tmdb'){
  if(page>(g.pages||5))return ok({results:[],page:page,total_pages:g.pages||5});
  return tmdbDynamic(g,page,ok,err);
 }

 if(g.dynamic==='anilist'){
  if(page>(g.pages||5))return ok({results:[],page:page,total_pages:g.pages||5});
  return anilistDynamic(g,page,ok,err);
 }

 if(g.dynamic==='director'){
  return directorCredits(g,function(all){
    var start=(page-1)*PER_PAGE,rows=all.slice(start,start+PER_PAGE);
    ok({
      secuses:true,
      page:page,
      total_pages:Math.max(1,Math.ceil(all.length/PER_PAGE)),
      total_results:all.length,
      results:rows.map(function(r,i){return decorateDynamicDirector(r,start+i+1,g)})
    });
  },err);
 }

 if(g.dynamic==='actor'){
  return actorCredits(g,function(all){
    var start=(page-1)*PER_PAGE,rows=all.slice(start,start+PER_PAGE);
    ok({
      secuses:true,
      page:page,
      total_pages:Math.max(1,Math.ceil(all.length/PER_PAGE)),
      total_results:all.length,
      results:rows.map(function(r,i){return decorateDynamicActor(r,start+i+1,g)})
    });
  },err);
 }

 var start=(page-1)*PER_PAGE,rows=g.items.slice(start,start+PER_PAGE);
 if(!rows.length)return ok({results:[],page:page,total_pages:page});
 var out=new Array(rows.length),next=0,active=0,fin=0,LIM=4;
 function pump(){while(active<LIM&&next<rows.length)(function(i){active++;next++;resolve(rows[i],start+i+1,function(r){out[i]=r;active--;fin++;if(fin===rows.length)ok({secuses:true,page:page,total_pages:Math.ceil(g.items.length/PER_PAGE),total_results:g.items.length,results:out.filter(Boolean)});else pump()})})(next)}
 pump();
}

function showTmdbInfo(data){
 try{
  var src=Lampa.Api&&Lampa.Api.sources&&Lampa.Api.sources.tmdb;
  if(!src||!src.list)return Lampa.Noty.show('Отзывы TMDB недоступны');
  var type=data.name?'tv':'movie';
  src.list({url:type+'/'+data.id+'/reviews',page:1},function(d){
   var rows=(d&&d.results)||[];
   var html='<div style="padding:1em 1.2em;line-height:1.45">'+
    '<div><b>TMDB:</b> '+(data.vote_average?Number(data.vote_average).toFixed(1)+'/10':'—')+
    (data.vote_count?' · '+data.vote_count+' голосов':'')+'</div>';

   if(rows.length){
    html+='<div style="font-size:1.15em;font-weight:700;margin-top:1.2em">Отзывы TMDB</div>';
    rows.slice(0,5).forEach(function(r){
     var txt=htmlPlain(r.content||'');
     if(txt.length>550)txt=txt.slice(0,550)+'…';
     html+='<div style="padding:.7em 0;border-top:1px solid rgba(255,255,255,.12)">'+
      '<b>'+$('<span>').text(r.author||'Пользователь').html()+'</b>'+
      '<div style="margin-top:.3em;opacity:.86">'+$('<div>').text(txt).html()+'</div></div>';
    });
   }else html+='<div style="margin-top:1em;opacity:.65">Пользовательских отзывов TMDB пока нет.</div>';

   html+='</div>';
   Lampa.Modal.open({
    title:'⭐ Рейтинг и отзывы',
    html:$(html),
    size:'large',
    mask:true,
    onBack:function(){Lampa.Modal.close();try{Lampa.Controller.toggle('content')}catch(e){}}
   });
  },function(){Lampa.Noty.show('Не удалось загрузить отзывы TMDB')});
 }catch(e){Lampa.Noty.show('Не удалось открыть отзывы')}
}
function component(o){
 var c=new Lampa.InteractionCategory(o);
 c.create=function(){fetchList(o,this.build.bind(this),this.empty.bind(this))};
 c.nextPageReuest=function(n,ok,er){n.cat=o.cat;n.group=o.group;fetchList(n,ok.bind(c),er.bind(c))};
 c.cardRender=function(object,element,card){
  if(!element)return;

  if(element.anilist_id){
   if(!element.anime_tmdb_resolved){
    card.onEnter=function(target,data){
     openAnimeCard(data||element);
    };
   }
   card.onMenuShow=function(menu,target,data){
    menu.unshift({
     title:'⭐ AniList '+((data||element).anilist_score?((data||element).anilist_score+'/100'):'—')+' · рейтинг и отзывы',
     anilist_info:true
    });
   };
   card.onMenuSelect=function(a,target,data){
    if(a&&a.anilist_info)showAnimeInfo(data||element);
   };
   return;
  }

  card.onMenuShow=function(menu,target,data){
   var d=data||element;
   menu.unshift({
    title:'⭐ TMDB '+(d.vote_average?Number(d.vote_average).toFixed(1)+'/10':'—')+' · рейтинг и отзывы',
    tmdb_info:true
   });
  };
  card.onMenuSelect=function(a,target,data){
   if(a&&a.tmdb_info)showTmdbInfo(data||element);
  };
 };
 return c;
}
function openGroup(ci,gi){
 var g=CATS[ci].groups[gi];
 Lampa.Activity.push({url:'',title:g.title,component:COMPONENT,page:1,cat:ci,group:gi});
}
function showCategory(ci){
 var cat=CATS[ci],items=cat.groups.map(function(g,i){return{title:g.title+(g.items&&g.items.length?' · '+g.items.length:''),i:i}});
 Lampa.Select.show({title:cat.title,items:items,onSelect:function(a){openGroup(ci,a.i)},onBack:showMain});
}
function showMain(){
 var items=CATS.map(function(c,i){return{title:c.title,i:i}});
 items.push({title:'🧹 Очистить кэш карточек',clear:true});
 Lampa.Select.show({title:'БОЛЬШОЙ КАТАЛОГ ПОДБОРОК',items:items,onSelect:function(a){if(a.clear){Lampa.Storage.set(CACHE_KEY,{});Lampa.Storage.set('big_collections_actor_ids_v1',{});Lampa.Storage.set('big_collections_director_ids_v2',{});return Lampa.Noty.show('Кэш подборок очищен')}showCategory(a.i)},onBack:function(){try{Lampa.Controller.toggle('menu')}catch(e){}}});
}

/* ===================== COLLECTIONS HOME ===================== */

function hubBack(){
 try{ Lampa.Controller.toggle('content'); }catch(e){}
}

function showCategoryRefs(title, refs){
 var items=[];
 refs.forEach(function(ref){
  var ci=ref.ci, cat=CATS[ci];
  if(!cat)return;
  items.push({title:ref.title||cat.title,ci:ci});
 });
 Lampa.Select.show({
  title:title,
  items:items,
  onSelect:function(a){ showCategory(a.ci); },
  onBack:hubBack
 });
}

function showGroupRefs(title, refs){
 var items=[];
 refs.forEach(function(ref){
  var cat=CATS[ref.ci],g=cat&&cat.groups[ref.gi];
  if(!g)return;
  items.push({title:ref.title||g.title,ci:ref.ci,gi:ref.gi});
 });
 Lampa.Select.show({
  title:title,
  items:items,
  onSelect:function(a){ openGroup(a.ci,a.gi); },
  onBack:hubBack
 });
}

function catIndexStarts(prefix){
 for(var i=0;i<CATS.length;i++){
  if(String(CATS[i].title).indexOf(prefix)===0)return i;
 }
 return -1;
}

function groupRef(catPrefix,groupPrefix,label){
 var ci=catIndexStarts(catPrefix);
 if(ci<0)return null;
 var groups=CATS[ci].groups||[];
 for(var gi=0;gi<groups.length;gi++){
  if(String(groups[gi].title).indexOf(groupPrefix)===0){
   return {ci:ci,gi:gi,title:label||groups[gi].title};
  }
 }
 return null;
}

function cleanRefs(arr){return arr.filter(function(x){return !!x})}

function actorRefs(){
 var refs=[];
 var jack=catIndexStarts('35.');
 if(jack>=0) refs.push({ci:jack,gi:0,title:'Джеки Чан'});
 var legends=catIndexStarts('36.');
 if(legends>=0){
  (CATS[legends].groups||[]).forEach(function(g,gi){
   refs.push({ci:legends,gi:gi,title:g.actor_ru||g.title});
  });
 }
 return refs;
}

function franchiseCategoryRefs(){
 var refs=[];
 // First two thematic hubs contain many full franchises.
 [0,1].forEach(function(ci){ if(CATS[ci]) refs.push({ci:ci}); });
 // From MonsterVerse through Equalizer are mostly franchise-focused sections.
 for(var i=5;i<=33 && i<CATS.length;i++) refs.push({ci:i});
 return refs;
}

function seriesRefs(){
 return cleanRefs([
  groupRef('2.','The Walking Dead Universe','The Walking Dead Universe'),
  groupRef('2.','Другие сериалы','Зомби и заражения — сериалы'),
  groupRef('3.','Сериалы умного Sci-Fi','Умный Sci-Fi — сериалы'),
  groupRef('5.','Криминал','Мини-сериалы: криминал'),
  groupRef('5.','Реальные драмы','Мини-сериалы: реальные истории'),
  groupRef('5.','Саспенс','Мини-сериалы: мистика и триллер'),
  groupRef('7.','Полная основная','Star Wars — сериалы внутри таймлайна'),
  groupRef('8.','DCEU','DC — фильмы и сериалы'),
  groupRef('9.','Alien —','Alien Universe'),
  groupRef('12.','Jurassic — сериалы','Jurassic — сериалы'),
  groupRef('14.','Кольца власти','Кольца власти'),
  groupRef('15.','John Wick','John Wick Universe')
 ]);
}

function horrorRefs(){
 return cleanRefs([
  groupRef('1.','Пила','Пила'),
  groupRef('1.','Пункт назначения','Пункт назначения'),
  groupRef('1.','Куб','Куб'),
  groupRef('19.','Заклятие','The Conjuring Universe'),
  groupRef('23.','Крик','Крик'),
  groupRef('24.','Halloween','Halloween'),
  groupRef('25.','Пятница','Friday the 13th'),
  groupRef('26.','Фредди','Кошмар на улице Вязов'),
  groupRef('27.','Evil Dead','Evil Dead'),
  groupRef('28.','Астрал','Insidious / Астрал'),
  groupRef('29.','Паранормальное','Paranormal Activity')
 ]);
}

function scifiRefs(){
 return cleanRefs([
  groupRef('3.','Бегущий по лезвию','Blade Runner'),
  groupRef('3.','Кловерфилд','Cloverfield'),
  groupRef('3.','Первый контакт','Первый контакт'),
  groupRef('3.','Петли времени','Петли времени'),
  groupRef('3.','ИИ, космос','ИИ, космос и изоляция'),
  groupRef('9.','Alien —','Alien'),
  groupRef('10.','Терминатор — все фильмы','Terminator'),
  groupRef('11.','Матрица','Matrix'),
  groupRef('18.','Современная сага','Planet of the Apes')
 ]);
}

function actionRefs(){
 return cleanRefs([
  groupRef('15.','John Wick','John Wick'),
  groupRef('16.','Миссия','Mission: Impossible'),
  groupRef('17.','Форсаж','Fast & Furious'),
  groupRef('32.','James Bond','James Bond'),
  groupRef('33.','Kingsman','Kingsman'),
  groupRef('34.','Великий уравнитель','The Equalizer'),
  groupRef('20.','Джейсон Борн','Jason Bourne'),
  groupRef('20.','Рэмбо','Rambo'),
  groupRef('20.','Rocky','Rocky / Creed'),
  groupRef('20.','Крепкий орешек','Die Hard')
 ]);
}

function weekendRefs(){
 return cleanRefs([
  groupRef('5.','Криминал','Криминал, суды и расследования'),
  groupRef('5.','Реальные драмы','Реальные драмы и биографии'),
  groupRef('5.','Саспенс','Саспенс, мистика и триллеры')
 ]);
}

function hubTitle(kind){
 var map={
  franchises:'ФРАНШИЗЫ',
  actors:'АКТЁРЫ',
  genres:'ЖАНРЫ И ТЕМЫ',
  series:'СЕРИАЛЫ',
  korea:'КОРЕЯ',
  anime:'ANIME',
  kazakhstan:'КАЗАХСТАН',
  directors:'РЕЖИССЁРЫ',
  movies:'ФИЛЬМЫ',
  horror:'ХОРРОР',
  scifi:'SCI-FI',
  action:'ЭКШЕН'
 };
 return map[kind]||'ПОДБОРКИ';
}
function showHub(kind){
 if(kind==='all') return showMain();
 Lampa.Activity.push({
  url:'',
  title:hubTitle(kind),
  component:HUB_COMPONENT,
  hub_kind:kind,
  page:1
 });
}

var HOME_TILES=[
 {id:'franchises',ico:'🎞',title:'Франшизы',sub:'Полные саги и вселенные'},
 {id:'actors',ico:'🎭',title:'Актёры',sub:'Фильмографии по годам'},
 {id:'genres',ico:'🎬',title:'Жанры',sub:'Триллеры, sci-fi, выживание'},
 {id:'series',ico:'📺',title:'Сериалы',sub:'Саги и мини-сериалы'},
 {id:'korea',ico:'🇰🇷',title:'Корея',sub:'K-Drama и корейское кино'},
 {id:'anime',ico:'⛩️',title:'ANIME',sub:'TOP 100, жанры, отзывы'},
 {id:'kazakhstan',ico:'🇰🇿',title:'Казахстан',sub:'Кино и сериалы'},
 {id:'directors',ico:'🎥',title:'Режиссёры',sub:'Фильмографии по годам'},
 {id:'movies',ico:'🍿',title:'Фильмы',sub:'TOP 100 и новинки'},
 {id:'horror',ico:'👻',title:'Хоррор',sub:'Культовые вселенные'},
 {id:'scifi',ico:'🚀',title:'Sci-Fi',sub:'Космос, время, ИИ'},
 {id:'action',ico:'⚡',title:'Экшен',sub:'Боевики и агенты'},
 {id:'all',ico:'🗂',title:'Все подборки',sub:'Полный каталог'}
];

var HOME_SHELVES=[
 {
  title:'Популярные франшизы',
  items:cleanRefs([
   groupRef('15.','John Wick','John Wick'),
   groupRef('16.','Миссия','Mission: Impossible'),
   groupRef('17.','Форсаж','Fast & Furious'),
   groupRef('9.','Alien —','Alien'),
   groupRef('11.','Матрица','Matrix'),
   groupRef('12.','Jurassic — все','Jurassic World'),
   groupRef('13.','Wizarding World','Harry Potter / Wizarding World'),
   groupRef('14.','Средиземье','Middle-earth'),
   groupRef('32.','James Bond','James Bond')
  ])
 },
 {
  title:'Легенды экшена',
  items:(function(){
   var a=actorRefs(),want=['Джеки Чан','Джет Ли','Арнольд Шварценеггер','Жан-Клод Ван Дамм','Донни Йен','Брюс Уиллис','Сильвестр Сталлоне','Джейсон Стэйтем','Киану Ривз'];
   var out=[];
   want.forEach(function(n){
    for(var i=0;i<a.length;i++) if(a[i].title===n){out.push(a[i]);break}
   });
   return out;
  })()
 },
 {
  title:'Хоррор-вселенные',
  items:horrorRefs().slice(0,10)
 },
 {
  title:'Умный Sci-Fi',
  items:scifiRefs().slice(0,9)
 },
 {
  title:'На одни выходные',
  items:weekendRefs()
 }
];


function titleClean(s){
 return String(s||'').replace(/^\d+\.\s*/,'');
}

function refsFromCategory(ci){
 var cat=CATS[ci];
 if(!cat)return[];
 return (cat.groups||[]).map(function(g,gi){
  return {ci:ci,gi:gi,title:g.title};
 });
}

function pickActorRefs(names){
 var all=actorRefs(),out=[];
 names.forEach(function(name){
  for(var i=0;i<all.length;i++){
   if(all[i].title===name){out.push(all[i]);break}
  }
 });
 return out;
}

function fantasyAdventureRefs(){
 return cleanRefs([
  groupRef('13.','Wizarding World','Wizarding World'),
  groupRef('14.','Средиземье','Middle-earth'),
  groupRef('6.','MonsterVerse','MonsterVerse'),
  groupRef('7.','Полная основная','Star Wars'),
  groupRef('8.','DCEU','DC'),
  groupRef('12.','Jurassic — все','Jurassic'),
  groupRef('18.','Современная сага','Planet of the Apes'),
  groupRef('20.','Пираты','Пираты Карибского моря'),
  groupRef('20.','Transformers','Transformers')
 ]);
}

function classicFranchiseRefs(){
 return cleanRefs([
  groupRef('20.','Назад в будущее','Назад в будущее'),
  groupRef('30.','Крёстный отец','Крёстный отец'),
  groupRef('31.','Ганнибал — фильмы','Hannibal Lecter'),
  groupRef('32.','James Bond','James Bond'),
  groupRef('10.','Терминатор — все фильмы','Terminator'),
  groupRef('11.','Матрица','Matrix')
 ]);
}

function hubRowSpecs(kind){
 if(kind==='franchises') return [
  {title:'Экшен-франшизы',refs:actionRefs()},
  {title:'Хоррор-франшизы',refs:horrorRefs()},
  {title:'Sci-Fi вселенные',refs:scifiRefs()},
  {title:'Фэнтези и большие вселенные',refs:fantasyAdventureRefs()},
  {title:'Классика франшиз',refs:classicFranchiseRefs()}
 ];

 if(kind==='actors') return [
  {title:'Боевые искусства',refs:pickActorRefs([
   'Джеки Чан','Джет Ли','Донни Йен','Тони Джа','Ико Увайс','Брюс Ли','Чоу Юнь-Фат','Мишель Йео','Марк Дакаскос','Скотт Эдкинс'
  ])},
  {title:'Легенды 80–90-х',refs:pickActorRefs([
   'Арнольд Шварценеггер','Жан-Клод Ван Дамм','Брюс Уиллис','Сильвестр Сталлоне','Дольф Лундгрен','Стивен Сигал','Чак Норрис','Мэл Гибсон','Клинт Иствуд','Уэсли Снайпс'
  ])},
  {title:'Современные звёзды экшена',refs:pickActorRefs([
   'Джейсон Стэйтем','Киану Ривз','Дуэйн «Скала» Джонсон','Лиам Нисон','Том Круз','Вин Дизель','Джерард Батлер','Марк Уолберг','Дензел Вашингтон','Сэмюэл Л. Джексон','Николас Кейдж','Харрисон Форд','Уилл Смит'
  ])}
 ];

 if(kind==='genres') return [
  {title:titleClean(CATS[0].title),refs:refsFromCategory(0)},
  {title:titleClean(CATS[1].title),refs:refsFromCategory(1)},
  {title:titleClean(CATS[2].title),refs:refsFromCategory(2)},
  {title:titleClean(CATS[3].title),refs:refsFromCategory(3)},
  {title:titleClean(CATS[4].title),refs:refsFromCategory(4)}
 ];

 if(kind==='series') return [
  {title:'ФБР и спецрасследования',refs:refsFromCategory(catIndexStarts('37.'))},
  {title:'TOP 100 сериалов сейчас',refs:refsFromCategory(catIndexStarts('38.'))},
  {title:'Корейские сериалы',refs:cleanRefs([
   groupRef('39.','🇰🇷 K-Drama — популярные сейчас','K-Drama — популярные сейчас'),
   groupRef('39.','⭐ K-Drama — лучшие по рейтингу','K-Drama — лучшие по рейтингу'),
   groupRef('39.','K-Drama — проверенная','K-Drama — классика и хиты')
  ])},
  {title:'Зомби и заражения',refs:cleanRefs([
   groupRef('2.','The Walking Dead Universe','The Walking Dead Universe'),
   groupRef('2.','Другие сериалы','Другие сериалы о заражениях')
  ])},
  {title:'Мини-сериалы на выходные',refs:weekendRefs()},
  {title:'Фантастика и большие вселенные',refs:seriesRefs()}
 ];

 if(kind==='korea') return [
  {title:'Корейские сериалы',refs:cleanRefs([
   groupRef('39.','🇰🇷 K-Drama — популярные сейчас','K-Drama — популярные сейчас'),
   groupRef('39.','⭐ K-Drama — лучшие по рейтингу','K-Drama — лучшие по рейтингу'),
   groupRef('39.','K-Drama — проверенная','K-Drama — классика и хиты')
  ])},
  {title:'Корейское кино',refs:cleanRefs([
   groupRef('39.','🎬 Корейские фильмы — популярные сейчас','Корейские фильмы — популярные сейчас'),
   groupRef('39.','🏆 Корейские фильмы — лучшие по рейтингу','Корейские фильмы — лучшие по рейтингу'),
   groupRef('39.','Корейские триллеры','Корейские триллеры и криминал')
  ])}
 ];

 if(kind==='anime') return [
  {title:'TOP и новинки',refs:cleanRefs([
   groupRef('40.','🔥 TOP 100 аниме сейчас','TOP 100 сейчас'),
   groupRef('40.','🏆 TOP 100 аниме всех времён','TOP 100 всех времён'),
   groupRef('40.','🆕 Новинки','Новинки сезона'),
   groupRef('40.','✅ Лучшие завершённые','Завершённые'),
   groupRef('40.','🎬 Лучшие аниме-фильмы','Аниме-фильмы')
  ])},
  {title:'По жанрам',refs:cleanRefs([
   groupRef('40.','⚔️ Экшен','Экшен / сёнен'),
   groupRef('40.','🧠 Психология','Психология / mindfuck'),
   groupRef('40.','👻 Хоррор','Хоррор'),
   groupRef('40.','❤️ Романтика','Романтика'),
   groupRef('40.','😂 Комедия','Комедия'),
   groupRef('40.','🚀 Sci-Fi','Sci-Fi'),
   groupRef('40.','🤖 Меха','Меха'),
   groupRef('40.','🌀 Исекай','Исекай'),
   groupRef('40.','🥋 Боевые искусства','Боевые искусства'),
   groupRef('40.','🕵 Детектив','Mystery'),
   groupRef('40.','🌑 Тёмное','Тёмное фэнтези')
  ])},
  {title:'Большие аниме-франшизы',refs:refsFromCategory(catIndexStarts('41.'))}
 ];

 if(kind==='kazakhstan') return [
  {title:'Казахстан 🇰🇿',refs:refsFromCategory(catIndexStarts('42.'))}
 ];

 if(kind==='directors') return [
  {title:'Лучшие режиссёры',refs:refsFromCategory(catIndexStarts('43.'))}
 ];

 if(kind==='movies') return [
  {title:'TOP 100 и новинки',refs:refsFromCategory(catIndexStarts('44.'))}
 ];

 if(kind==='horror') return [
  {title:'Хоррор-вселенные',refs:horrorRefs()},
  {title:'Зомби и заражение',refs:refsFromCategory(1)}
 ];

 if(kind==='scifi') return [
  {title:'Умный Sci-Fi',refs:scifiRefs()},
  {title:'Большие фантастические вселенные',refs:cleanRefs([
   groupRef('9.','Alien —','Alien'),
   groupRef('10.','Терминатор — все фильмы','Terminator'),
   groupRef('11.','Матрица','Matrix'),
   groupRef('18.','Современная сага','Planet of the Apes'),
   groupRef('6.','MonsterVerse','MonsterVerse')
  ])}
 ];

 if(kind==='action') return [
  {title:'Экшен-франшизы',refs:actionRefs()},
  {title:'Боевые искусства',refs:pickActorRefs([
   'Джеки Чан','Джет Ли','Донни Йен','Жан-Клод Ван Дамм','Тони Джа','Ико Увайс','Скотт Эдкинс'
  ])}
 ];

 return [];
}

function cloneCard(x){
 try{return JSON.parse(JSON.stringify(x))}
 catch(e){var y={};for(var k in x)y[k]=x[k];return y}
}

function setPreviewLabel(card,label){
 if(card.name){
  card.name=label;
  if(card.title)delete card.title;
 }else{
  card.title=label;
  if(card.name)delete card.name;
 }
 return card;
}

function ensureCardImage(x){
 if(!x)return x;
 if(!x.poster_path&&!x.profile_path&&!x.poster&&x.backdrop_path){
  try{x.poster=Lampa.Api.img(x.backdrop_path,'w500')}catch(e){}
 }
 return x;
}

function fallbackPreview(label,ref){
 return {
  id:'bc_'+String(ref&&ref.ci||0)+'_'+String(ref&&ref.gi||0)+'_'+norm(label),
  title:label,
  source:'tmdb',
  poster:'./img/img_broken.svg',
  bc_action:'group',
  bc_ci:ref&&ref.ci,
  bc_gi:ref&&ref.gi
 };
}

function actorPreview(ref,g,done){
 try{
  var src=Lampa.Api&&Lampa.Api.sources&&Lampa.Api.sources.tmdb;
  if(!src||!src.list)return done(fallbackPreview(ref.title,ref));

  resolveActorId(g,src,function(personId){
   src.list({url:'person/'+personId,page:1},function(p){
    if(!p||!p.id)return done(fallbackPreview(ref.title,ref));
    done({
     id:p.id,
     title:ref.title||g.actor_ru||g.actor,
     profile_path:p.profile_path||'',
     source:'tmdb',
     gender:p.gender,
     bc_action:'group',
     bc_ci:ref.ci,
     bc_gi:ref.gi
    });
   },function(){done(fallbackPreview(ref.title,ref))});
  },function(){done(fallbackPreview(ref.title,ref))});
 }catch(e){done(fallbackPreview(ref.title,ref))}
}

function groupPreview(ref,done){
 var cat=CATS[ref.ci],g=cat&&cat.groups[ref.gi];
 if(!g)return done(fallbackPreview(ref.title||'Подборка',ref));

 if(g.dynamic==='director'){
  try{
   directorCredits(g,function(all){
    var candidates=(all||[]).filter(function(m){return m&&m.poster_path});
    if(!candidates.length)candidates=(all||[]).filter(function(m){return m&&m.backdrop_path});
    if(!candidates.length)return done(fallbackPreview(ref.title||g.title,ref));

    candidates.sort(function(a,b){
     var av=(parseFloat(a.vote_average)||0)*Math.log((parseFloat(a.vote_count)||0)+2);
     var bv=(parseFloat(b.vote_average)||0)*Math.log((parseFloat(b.vote_count)||0)+2);
     return bv-av;
    });

    var x=ensureCardImage(cloneCard(candidates[0]));
    x.source='tmdb';
    setPreviewLabel(x,ref.title||g.director_ru||g.director);
    x.bc_action='group';
    x.bc_ci=ref.ci;
    x.bc_gi=ref.gi;
    done(x);
   },function(){done(fallbackPreview(ref.title||g.title,ref))});
  }catch(e){done(fallbackPreview(ref.title||g.title,ref))}
  return;
 }

 if(g.dynamic==='actor')return actorPreview(ref,g,done);

 if(g.dynamic==='director'){
  try{
   var src=Lampa.Api&&Lampa.Api.sources&&Lampa.Api.sources.tmdb;
   if(!src||!src.list)return done(fallbackPreview(ref.title||g.title,ref));
   resolveDirectorId(g,src,function(personId){
    src.list({url:'person/'+personId,page:1},function(p){
     if(!p||!p.id)return done(fallbackPreview(ref.title||g.title,ref));
     done({
      id:p.id,
      title:ref.title||g.director_ru||g.director,
      profile_path:p.profile_path||'',
      source:'tmdb',
      gender:p.gender,
      bc_action:'group',
      bc_ci:ref.ci,
      bc_gi:ref.gi
     });
    },function(){done(fallbackPreview(ref.title||g.title,ref))});
   },function(){done(fallbackPreview(ref.title||g.title,ref))});
  }catch(e){done(fallbackPreview(ref.title||g.title,ref))}
  return;
 }

 if(g.dynamic==='anilist'){
  var spec=animePreviewSpec(g);
  if(!spec)return done(fallbackPreview(ref.title||g.title,ref));

  search(spec,spec.type,function(r){
   if(!r)return done(fallbackPreview(ref.title||g.title,ref));
   var x=cloneCard(r);
   x.source='tmdb';
   setPreviewLabel(x,ref.title||g.title);
   x.bc_action='group';
   x.bc_ci=ref.ci;
   x.bc_gi=ref.gi;
   done(x);
  });
  return;
 }

 if(g.dynamic==='tmdb'){
  try{
   var src=Lampa.Api&&Lampa.Api.sources&&Lampa.Api.sources.tmdb;
   if(!src||!src.list)return done(fallbackPreview(ref.title||g.title,ref));
   src.list({url:g.tmdb_url,page:1},function(d){
    var r=d&&d.results&&d.results[0];
    if(!r)return done(fallbackPreview(ref.title||g.title,ref));
    var x=cloneCard(r);
    x.source='tmdb';
    setPreviewLabel(x,ref.title||g.title);
    x.bc_action='group';x.bc_ci=ref.ci;x.bc_gi=ref.gi;
    done(x);
   },function(){done(fallbackPreview(ref.title||g.title,ref))});
  }catch(e){done(fallbackPreview(ref.title||g.title,ref))}
  return;
 }

 var candidates=(g.items||[]).slice(0,6);
 if(!candidates.length)return done(fallbackPreview(ref.title||g.title,ref));

 var ci=0;
 function tryNext(){
  if(ci>=candidates.length)return done(fallbackPreview(ref.title||g.title,ref));
  var e=candidates[ci++];
  search(e,e.type==='tv'?'tv':'movie',function(r){
   if(!r)return tryNext();

   var x=ensureCardImage(cloneCard(r));
   if(!x.poster_path&&!x.poster&&!x.backdrop_path)return tryNext();

   x.source='tmdb';
   setPreviewLabel(x,ref.title||g.title);
   x.bc_action='group';
   x.bc_ci=ref.ci;
   x.bc_gi=ref.gi;
   done(x);
  });
 }
 tryNext();
}

function mapPreviews(refs,done){
 refs=refs||[];
 if(!refs.length)return done([]);

 var out=new Array(refs.length),next=0,active=0,finished=0,LIMIT=5;

 function pump(){
  while(active<LIMIT&&next<refs.length){
   (function(i){
    active++;next++;
    groupPreview(refs[i],function(card){
     out[i]=card;
     active--;finished++;
     if(finished===refs.length)done(out.filter(Boolean));
     else pump();
    });
   })(next);
  }
 }
 pump();
}

function buildRows(specs,done){
 specs=specs||[];
 var rows=new Array(specs.length),next=0;

 function step(){
  if(next>=specs.length)return done(rows.filter(Boolean));
  (function(i){
   var spec=specs[i];
   mapPreviews(spec.refs,function(cards){
    rows[i]={
     title:spec.title,
     results:cards,
     nomore:true,
     bc_native:true
    };
    next++;
    step();
   });
  })(next);
 }
 step();
}

function hubPreviewRef(id){
 var map={
  franchises:groupRef('15.','John Wick','Франшизы'),
  actors:(actorRefs()[0]||null),
  genres:groupRef('3.','Петли времени','Жанры'),
  series:groupRef('38.','🔥 TOP 100 сериалов','Сериалы'),
  korea:groupRef('39.','🇰🇷 K-Drama — популярные сейчас','Корея'),
  anime:groupRef('40.','🔥 TOP 100 аниме сейчас','ANIME'),
  kazakhstan:groupRef('42.','🔥 Казахстанские фильмы','Казахстан'),
  directors:groupRef('43.','Кристофер Нолан','Режиссёры'),
  movies:groupRef('44.','🔥 TOP 100 фильмов','Фильмы'),
  horror:groupRef('19.','Заклятие','Хоррор'),
  scifi:groupRef('3.','Бегущий по лезвию','Sci-Fi'),
  action:groupRef('16.','Миссия','Экшен'),
  all:groupRef('13.','Wizarding World','Все подборки')
 };
 return map[id]||null;
}

function buildHubCards(done){
 var tiles=HOME_TILES||[],out=new Array(tiles.length),next=0;

 function step(){
  if(next>=tiles.length)return done(out.filter(Boolean));
  var tile=tiles[next],ref=hubPreviewRef(tile.id),idx=next;
  next++;

  if(!ref){
   out[idx]={id:'hub_'+tile.id,title:tile.title,source:'tmdb',poster:'./img/img_broken.svg',bc_action:'hub',bc_hub:tile.id};
   return step();
  }

  groupPreview(ref,function(card){
   setPreviewLabel(card,tile.title);
   card.bc_action='hub';
   card.bc_hub=tile.id;
   out[idx]=card;
   step();
  });
 }
 step();
}

function homeRowSpecs(){
 return [
  {title:'Популярные франшизы',refs:HOME_SHELVES[0].items},
  {title:'Легенды экшена',refs:HOME_SHELVES[1].items},
  {title:'Хоррор-вселенные',refs:HOME_SHELVES[2].items},
  {title:'Умный Sci-Fi',refs:HOME_SHELVES[3].items},
  {title:'Сериалы сейчас',refs:cleanRefs([
   groupRef('38.','🔥 TOP 100 сериалов','TOP 100 сериалов сейчас'),
   groupRef('37.','FBI Universe','FBI Universe'),
   groupRef('39.','🇰🇷 K-Drama — популярные сейчас','K-Drama сейчас')
  ])},
  {title:'ANIME сейчас',refs:cleanRefs([
   groupRef('40.','🔥 TOP 100 аниме сейчас','TOP 100 аниме сейчас'),
   groupRef('40.','🏆 TOP 100 аниме всех времён','TOP 100 всех времён'),
   groupRef('40.','🆕 Новинки','Новинки сезона'),
   groupRef('40.','🎬 Лучшие аниме-фильмы','Аниме-фильмы')
  ])},
  {title:'Фильмы сейчас',refs:cleanRefs([
   groupRef('44.','🔥 TOP 100 фильмов','TOP 100 фильмов сейчас'),
   groupRef('44.','⭐ TOP 100 фильмов','TOP 100 по рейтингу'),
   groupRef('44.','🆕 Популярные новые','Новые фильмы')
  ])},
  {title:'Казахстан 🇰🇿',refs:cleanRefs([
   groupRef('42.','🔥 Казахстанские фильмы','Популярные фильмы'),
   groupRef('42.','⭐ Казахстанские фильмы','Лучшие фильмы'),
   groupRef('42.','📺 Казахстанские сериалы','Сериалы'),
   groupRef('42.','Казахстанское кино','Избранное')
  ])},
  {title:'Режиссёры',refs:cleanRefs([
   groupRef('43.','Кристофер Нолан','Кристофер Нолан'),
   groupRef('43.','Квентин Тарантино','Квентин Тарантино'),
   groupRef('43.','Дэвид Финчер','Дэвид Финчер'),
   groupRef('43.','Дени Вильнёв','Дени Вильнёв'),
   groupRef('43.','Гай Ричи','Гай Ричи')
  ])},
  {title:'На одни выходные',refs:HOME_SHELVES[4].items}
 ];
}

function nativeRoute(card){
 if(!card)return;
 if(card.bc_action==='hub')return showHub(card.bc_hub);
 if(card.bc_action==='group')return openGroup(parseInt(card.bc_ci,10),parseInt(card.bc_gi,10));
}

function attachNativeSelect(line){
 line.onSelect=function(target,card){
  nativeRoute(card);
 };
}

function HomeComponent(object){
 var comp=new Lampa.InteractionMain(object);

 comp.create=function(){
  this.activity.loader(true);
  var self=this;

  buildHubCards(function(hubs){
   buildRows(homeRowSpecs(),function(rows){
    rows.unshift({
     title:'Разделы',
     results:hubs,
     nomore:true,
     bc_native:true
    });
    self.build(rows);
   });
  });

  return this.render();
 };

 comp.onAppend=function(line,row){
  attachNativeSelect(line);
 };

 return comp;
}

function HubComponent(object){
 var comp=new Lampa.InteractionMain(object);

 comp.create=function(){
  this.activity.loader(true);
  var self=this;
  buildRows(hubRowSpecs(object.hub_kind),function(rows){
   if(rows.length)self.build(rows);
   else self.empty();
  });
  return this.render();
 };

 comp.onAppend=function(line,row){
  attachNativeSelect(line);
 };

 return comp;
}

function openCollectionsHome(){
 Lampa.Activity.push({url:'',title:'ПОДБОРКИ',component:HOME_COMPONENT,page:1});
}

function addMenu(){
 // Replace any menu button left by an older build. This prevents an old
 // CUB-synced plugin from winning the race and opening the legacy Select menu.
 $('.menu__item[data-action="big_collections"]').remove();

 var icon='<svg viewBox="0 0 24 24" fill="none"><path d="M4 5h16v4H4zM4 10h16v4H4zM4 15h16v4H4z" fill="currentColor"/></svg>';
 var item=$('<li class="menu__item selector" data-action="big_collections"><div class="menu__ico">'+icon+'</div><div class="menu__text">ПОДБОРКИ</div></li>');
 item.on('hover:enter',openCollectionsHome);

 var catalog=$('.menu .menu__list .menu__item[data-action="catalog"]');
 if(catalog.length)catalog.before(item);
 else $('.menu .menu__list').eq(0).append(item);
}
function init(){
 Lampa.Component.add(COMPONENT,component);
 Lampa.Component.add(HOME_COMPONENT,HomeComponent);
 Lampa.Component.add(HUB_COMPONENT,HubComponent);
 Lampa.Manifest.plugins={type:'other',version:VERSION,name:'Большой каталог подборок',description:'Collections Home: франшизы, актёры, жанры, сериалы и тематические полки; просмотр через MODS'};
 addMenu();
 console.log('[Big Collections] v'+VERSION+' ready');
}
if(window.appready)init();else Lampa.Listener.follow('app',function(e){if(e.type==='ready')init()});
})();