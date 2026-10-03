(function(){
'use strict';
if(window.yernar_big_collections_ready||typeof Lampa==='undefined')return;
window.yernar_big_collections_ready=true;

var VERSION='1.0.0';
var COMPONENT='yernar_big_collection_list';
var PER_PAGE=14;
var CACHE_KEY='yernar_big_collections_tmdb_cache_v1';

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
])
];

function cache(){var c=Lampa.Storage.get(CACHE_KEY,{});return c&&typeof c==='object'?c:{}}
function cacheSet(k,v){var c=cache();c[k]=v;var ks=Object.keys(c);if(ks.length>700)ks.slice(0,ks.length-600).forEach(function(x){delete c[x]});Lampa.Storage.set(CACHE_KEY,c)}
function norm(s){return String(s||'').toLowerCase().replace(/ё/g,'е').replace(/[^a-zа-я0-9]+/gi,' ').trim().replace(/\s+/g,' ')}
function yr(r){return parseInt(String(r.release_date||r.first_air_date||'').slice(0,4),10)||0}
function best(e,res){
 var target=norm(e.q),b=null,bs=-999;
 (res||[]).forEach(function(r){
  var s=0;[r.title,r.original_title,r.name,r.original_name].forEach(function(n){n=norm(n);if(!n)return;if(n===target)s=Math.max(s,100);else if(n.indexOf(target)>=0||target.indexOf(n)>=0)s=Math.max(s,60)});
  var y=yr(r);if(e.year&&y){var d=Math.abs(e.year-y);if(d===0)s+=35;else if(d===1)s+=12;else if(d>3)s-=30}
  if(s>bs){bs=s;b=r}
 });
 return bs>=40?b:null;
}
function search(e,kind,done){
 try{
  var src=Lampa.Api&&Lampa.Api.sources&&Lampa.Api.sources.tmdb;
  if(!src||!src.list)return done(null);
  src.list({url:'search/'+kind,query:encodeURIComponent(e.q),page:1},function(d){done(best(e,(d&&d.results)||[]))},function(){done(null)})
 }catch(x){done(null)}
}
function decorate(r,e,num){
 r.source='tmdb';
 var t=(num<9?'00':num<99?'0':'')+num+' · '+e.ru;
 r.title=t;r.name=t;
 var pre='ПОДБОРКА · '+e.ru+(e.season?' · сезон '+e.season:'');
 r.overview=pre+(r.overview?'\n\n'+r.overview:'');
 return r;
}
function resolve(e,num,done){
 var k=e.q+'|'+e.year+'|'+e.type,c=cache();
 if(c[k])return done(decorate(JSON.parse(JSON.stringify(c[k])),e,num));
 function finish(r){if(!r)return done(null);r.source='tmdb';cacheSet(k,r);done(decorate(JSON.parse(JSON.stringify(r)),e,num))}
 if(e.type==='tv')search(e,'tv',finish);else search(e,'movie',function(r){if(r)finish(r);else search(e,'tv',finish)})
}
function fetchList(o,ok,err){
 var cat=CATS[o.cat],g=cat&&cat.groups[o.group];if(!g)return err&&err();
 var page=Math.max(1,parseInt(o.page||1,10)),start=(page-1)*PER_PAGE,rows=g.items.slice(start,start+PER_PAGE);
 if(!rows.length)return ok({results:[],page:page,total_pages:page});
 var out=new Array(rows.length),next=0,active=0,fin=0,LIM=4;
 function pump(){while(active<LIM&&next<rows.length)(function(i){active++;next++;resolve(rows[i],start+i+1,function(r){out[i]=r;active--;fin++;if(fin===rows.length)ok({secuses:true,page:page,total_pages:Math.ceil(g.items.length/PER_PAGE),total_results:g.items.length,results:out.filter(Boolean)});else pump()})})(next)}
 pump();
}
function component(o){
 var c=new Lampa.InteractionCategory(o);
 c.create=function(){fetchList(o,this.build.bind(this),this.empty.bind(this))};
 c.nextPageReuest=function(n,ok,er){n.cat=o.cat;n.group=o.group;fetchList(n,ok.bind(c),er.bind(c))};
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
 Lampa.Select.show({title:'БОЛЬШОЙ КАТАЛОГ ПОДБОРОК',items:items,onSelect:function(a){if(a.clear){Lampa.Storage.set(CACHE_KEY,{});return Lampa.Noty.show('Кэш подборок очищен')}showCategory(a.i)},onBack:function(){try{Lampa.Controller.toggle('menu')}catch(e){}}});
}
function addMenu(){
 if($('.menu__item[data-action="big_collections"]').length)return;
 var icon='<svg viewBox="0 0 24 24" fill="none"><path d="M4 5h16v4H4zM4 10h16v4H4zM4 15h16v4H4z" fill="currentColor"/></svg>';
 var item=$('<li class="menu__item selector" data-action="big_collections"><div class="menu__ico">'+icon+'</div><div class="menu__text">ПОДБОРКИ</div></li>');
 item.on('hover:enter',showMain);
 var catalog=$('.menu .menu__list .menu__item[data-action="catalog"]');if(catalog.length)catalog.before(item);else $('.menu .menu__list').eq(0).append(item);
}
function init(){
 Lampa.Component.add(COMPONENT,component);
 Lampa.Manifest.plugins={type:'other',version:VERSION,name:'Большой каталог подборок',description:'Франшизы и тематические подборки; просмотр остаётся через MODS'};
 addMenu();
 console.log('[Big Collections] v'+VERSION+' ready');
}
if(window.appready)init();else Lampa.Listener.follow('app',function(e){if(e.type==='ready')init()});
})();