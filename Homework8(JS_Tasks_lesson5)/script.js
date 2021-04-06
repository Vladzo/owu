// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select

// function Tag(name, description, attributes) {
//     this.name = name;
//     this.description = description;
//     this.attributes = attributes;
// }
//
// function Attribute (name, description) {
//     this.name = name;
//     this.description = description;
// }
// // Attributes
// const titleDescription = 'Описывает содержимое элемента в виде всплывающей подсказки, которая появляется при наведении' +
//     ' курсора на элемент. Вид такой подсказки зависит от браузера, настроек операционной системы и не может быть изменен' +
//     ' с помощью HTML-кода или стилей.';
// const title = new Attribute('title', titleDescription);
//
// const styleDescription = 'В качестве значений указываются стилевые правила: вначале следует имя стилевого ' +
//     'свойства, затем через двоеточие его значение. Стилевые свойства разделяются между собой точкой с запятой.';
// const style = new Attribute('style', styleDescription);
//
// const altDescription = 'Атрибут alt устанавливает альтернативный текст для изображений. Такой текст позволяет получить' +
//     ' текстовую информацию о рисунке при отключенной в браузере загрузке изображений. Поскольку загрузка изображений ' +
//     'происходит после получения браузером информации о нем, то замещающий рисунок текст появляется раньше.' +
//     ' А уже по мере загрузки текст будет сменяться изображением.';
// const alt = new Attribute('alt', altDescription);
// // Attributes --------->
//
// const aDescription = 'Тег является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости ' +
//     'от присутствия атрибутов name или href тег устанавливает ссылку или якорь. Якорем называется закладка внутри ' +
//     'страницы, которую можно указать в качестве цели ссылки.' +
//     ' При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.';
// const a = new Tag('<a>', aDescription, [title, style]);
//
// const tagDiv = new Tag('<div>', 'Элемент является блочным элементом и предназначен' +
//     ' для выделения фрагмента документа с целью изменения вида содержимого.', [style]);
// const h1 = new Tag('<h1>', 'Заголовок первого уровня', [style, alt]);
// const span = new Tag('<span>', 'Тег предназначен для определения строчных элементов документа.', [style, title]);
// const input = new Tag('<input>', 'Тег является одним из разносторонних элементов формы и ' +
//     'позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.', [style, alt]);
// const form = new Tag('<form>', 'Тег устанавливает форму на веб-странице', [style, title, alt]);
// const option = new Tag('<option>', 'Тег определяет отдельные пункты списка, создаваемого с помощью ' +
//     'контейнера <select>. ', [style, alt]);
// const select = new Tag('<select>', 'Тег позволяет создать элемент интерфейса в ' +
//     'виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. ',
//     [style, alt]);


// -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select

// class Tag {
//     constructor(name, description, attributes) {
//         this.name = name;
//         this.description = description;
//         this.attributes = attributes;
//     }
// }
//
// class Attribute {
//     constructor(name, description) {
//         this.name = name;
//         this.description = description;
//     }
// }
// // Attributes
// const titleDescription = 'Описывает содержимое элемента в виде всплывающей подсказки, которая появляется при наведении' +
//     ' курсора на элемент. Вид такой подсказки зависит от браузера, настроек операционной системы и не может быть изменен' +
//     ' с помощью HTML-кода или стилей.';
// const title = new Attribute('title', titleDescription);
//
// const styleDescription = 'В качестве значений указываются стилевые правила: вначале следует имя стилевого ' +
//     'свойства, затем через двоеточие его значение. Стилевые свойства разделяются между собой точкой с запятой.';
// const style = new Attribute('style', styleDescription);
//
// const altDescription = 'Атрибут alt устанавливает альтернативный текст для изображений. Такой текст позволяет получить' +
//     ' текстовую информацию о рисунке при отключенной в браузере загрузке изображений. Поскольку загрузка изображений ' +
//     'происходит после получения браузером информации о нем, то замещающий рисунок текст появляется раньше.' +
//     ' А уже по мере загрузки текст будет сменяться изображением.';
// const alt = new Attribute('alt', altDescription);
// // Attributes --------->
//
// const aDescription = 'Тег является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости ' +
//     'от присутствия атрибутов name или href тег устанавливает ссылку или якорь. Якорем называется закладка внутри ' +
//     'страницы, которую можно указать в качестве цели ссылки.' +
//     ' При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.';
// const a = new Tag('<a>', aDescription, [title, style]);
//
// const tagDiv = new Tag('<div>', 'Элемент является блочным элементом и предназначен' +
//     ' для выделения фрагмента документа с целью изменения вида содержимого.', [style]);
// const h1 = new Tag('<h1>', 'Заголовок первого уровня', [style, alt]);
// const span = new Tag('<span>', 'Тег предназначен для определения строчных элементов документа.', [style, title]);
// const input = new Tag('<input>', 'Тег является одним из разносторонних элементов формы и ' +
//     'позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.', [style, alt]);
// const form = new Tag('<form>', 'Тег устанавливает форму на веб-странице', [style, title, alt]);
// const option = new Tag('<option>', 'Тег определяет отдельные пункты списка, создаваемого с помощью ' +
//     'контейнера <select>. ', [style, alt]);
// const select = new Tag('<select>', 'Тег позволяет создать элемент интерфейса в ' +
//     'виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. ',
//     [style, alt]);
// console.log(select)


// -- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// const car = {
//     model: 'BMW',
//     year: 1998,
//     maxSpeed: 200,
//     engineCapacity: 3.5,
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     },
//     info() {
//         console.log(this)
//     },
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed = newSpeed;
//     },
//     changeYear(newValue) {
//         this.year = newValue;
//     },
//     addDriven(driver) {
//         this.driver = driver;
//     }
// }
//
// const driver = {
//     name: 'Victor',
//     age: 25,
//     rights: true
// }
//
// car.drive();
// car.increaseMaxSpeed(23232)
// car.changeYear(2005)
// car.addDriven(driver);
// car.info()


//                   РОБОТА В АУДИТОРІЇ /////////

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// function CreateCar(model, year, maxSpeed, engineCapacity) {
//     this.model = model;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineCapacity = engineCapacity;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     this.info = function () {
//         console.log(this)
//     }
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = newSpeed;
//     }
//
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//
//     this.addDriven = function (driver) {
//         this.driver = driver;
//     }
// }
//
// const driver = {
//     name: 'Victor',
//     age: 25,
//     rights: true
// }
//
// const BMW = new CreateCar('BMW', 1998, 250, 3);
//
// BMW.drive();
// BMW.increaseMaxSpeed(23232)
// BMW.changeYear(2005)
// BMW.addDriven(driver);
// BMW.info()


// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// class Car {
//     constructor (model, year, maxSpeed, engineCapacity) {
//         this.model = model;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//     info() {
//         console.log(this)
//     }
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed = newSpeed;
//     }
//     changeYear(newValue) {
//         this.year = newValue;
//     }
//     addDriven(driver) {
//         this.driver = driver;
//     }
// }
//
// const driver = {
//     name: 'Victor',
//     age: 25,
//     rights: true
// }
//
// const BMW = new Car('BMW', 1998, 250, 3);
//
// BMW.drive();
// BMW.increaseMaxSpeed(23232)
// BMW.changeYear(2005)
// BMW.addDriven(driver);
// BMW.info()


// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

// class Cinderella {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = name;
//         this.footSize = footSize;
//     }
// }
//
// let girls = [
//     new Cinderella('Ira', 18, 39),
//     new Cinderella('Olya', 21, 40),
//     new Cinderella('Dasha', 25, 37),
//     new Cinderella('Natalie', 30, 36),
//     new Cinderella('Roksa', 19, 41),
//     new Cinderella('Kate', 20, 42),
//     new Cinderella('Nastya', 18, 38),
//     new Cinderella('Marta', 19, 39),
//     new Cinderella('Lilia', 35, 37),
//     new Cinderella('Vika', 26, 36),
// ];
//
// class Human {
//     constructor(name, age, slipper) {
//         this.name = name;
//         this.age = age;
//         this.slipper = slipper;
//     }
// }
//
// class Prince extends Human {
//     constructor(name, age, slipper) {
//         super(name, age, slipper);
//     }
//
//     greet() {
//         console.log('Hello I am Prince');
//     }
// }
//
// const prince = new Prince('Victor', '25', 37);
//
// for (let item of girls) {
//     if (item.footSize === prince.slipper) {
//         console.log(item.name)
//         break;
//     }
// }


// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

// function createCinderella(name, age, footSize) {
//     this.name = name;
//     this.age = name;
//     this.footSize = footSize;
// }
//
// let girls = [
//     new createCinderella('Ira', 18, 39),
//     new createCinderella('Olya', 21, 40),
//     new createCinderella('Dasha', 25, 37),
//     new createCinderella('Natalie', 30, 36),
//     new createCinderella('Roksa', 19, 41),
//     new createCinderella('Kate', 20, 42),
//     new createCinderella('Nastya', 18, 38),
//     new createCinderella('Marta', 19, 39),
//     new createCinderella('Lilia', 35, 37),
//     new createCinderella('Vika', 26, 36),
// ];
//
// function createPrince (name, age, slipper) {
//     this.name = name;
//     this.age = age;
//     this.slipper = slipper;
//
//     const greet = function () {
//         console.log('Hello I am Prince');
//     }
// }
//
// const prince = new createPrince('Victor', '25', 37);
//
// for (let item of girls) {
//     if (item.footSize === prince.slipper) {
//         console.log(item.name)
//         break;
//     }
// }