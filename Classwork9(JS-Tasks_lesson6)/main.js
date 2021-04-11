// const cars = [
//     {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//     {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//     {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//     {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//     {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//     {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//     {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//     {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//     {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//     {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//     {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//     {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
//     {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
// ];

// Відфільтрувати масив за наступними крітеріями :
//     - двигун більше 3х літрів
//console.log(cars.filter(value => value.volume > 3));

// - двигун = 2л
//console.log(cars.filter(value => value.volume === 2));

// - виробник мерс
//console.log(cars.filter(value => value.producer === 'mercedes'))

// - двигун більше 3х літрів + виробник мерседес
//console.log(cars.filter(value => value.volume > 3 && value.producer === 'mercedes'));

// - двигун більше 3х літрів + виробник субару
//console.log(cars.filter(value => value.volume > 3 && value.producer === 'subaru'));

// - сили більше ніж 300
//console.log(cars.filter(value => value.power > 300))

// - сили більше ніж 300 + виробник субару
//console.log(cars.filter(value => value.power > 300 && value.producer === 'subaru'));

// - мотор серіі ej
//console.log(cars.filter(value => value.engine.startsWith('ej')));

// - сили більше ніж 300 + виробник субару + мотор серіі ej
//console.log(cars.filter(value => value.power > 300 && value.producer === 'subaru' && value.engine.startsWith('ej')));

// - двигун меньше 3х літрів + виробник мерседес
//console.log(cars.filter(value => value.volume < 3 && value.producer === 'mercedes'));

// - двигун більше 2л + сили більше 250
//console.log(cars.filter(value => value.volume > 2 && value.power > 250));

// - сили більше 250  + виробник бмв
//console.log(cars.filter(value => value.power > 250 && value.producer === 'bmw'));


//- взять слдующий массив
const usersWithAddress = [
    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
    {id: 6, name: 'anya', age: 31, isMarried: true, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
];
let copyOfUsers = JSON.parse(JSON.stringify(usersWithAddress));

// -- Відсортувати їх по ID
//console.log(copyOfUsers.sort((a, b) => a.id - b.id));

// -- Відсортувати їх по ID в зворотньому порядку
//console.log(copyOfUsers.sort((a, b) => b.id - a.id));

// -- Відсортувати по віку
//console.log(copyOfUsers.sort((a, b) => a.age - b.age));

// -- Відсортувати по віку в зворотньому порядку
//console.log(copyOfUsers.sort((a, b) => b.age - a.age));

// -- Відсорутвати по імені
// console.log(copyOfUsers.sort((a, b) => {
//     if (a.name > b.name) {
//         return 1;
//     }
//     return -1;
// }));

// -- Відсорутвати по назві вулиці
// console.log(copyOfUsers.sort((a, b) => {
//     if (a.address.street > b.address.street) {
//         return 1;
//     }
//     return -1;
// }));

// -- Відсорутвати по номеру будинку
// console.log(copyOfUsers.sort((a, b) => {
//     if (a.address.number > b.address.number) {
//         return 1;
//     }
//     return -1;
// }));

// -- Залигити тільки тих, хто молодший ніж 30 (filter)
//console.log(copyOfUsers.filter(value => value.age < 30));

// -- Залишити тільки одружених
//console.log(copyOfUsers.filter(value => value.isMarried === true));

// -- Залишити тільки одружених, які молодні за 30
//console.log(copyOfUsers.filter(value => value.isMarried === true && value.age < 30));

// -- Залишити лише тих, в кого парні номери будинків.
//console.log(copyOfUsers.filter(value => value.address.number % 2 === 0));

// -- Порахувати загальний вік всіх людей. (reduce)
// console.log(copyOfUsers.reduce( (acc, value) => {
//     return acc + value.age;
// }, 0))

// -- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)
// copyOfUsers = copyOfUsers.reduce( (acc, value) => {
//     if (value.isMarried && value.age > 30) {
//         value.child = { child: true };
//         acc.push(value);
//     }
//     return acc;
// }, []);
// console.log(copyOfUsers);

// ______________________________________________________________________________________________________________________________________________________
//                                                           Додатково
// ______________________________________________________________________________________________________________________________________________________



// Задача: дан отсортированный по возрастанию массив целых чисел.
//     Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
//     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

// function foo(arr, elem) {
//     let firstIndex = arr.indexOf(elem);
//     let lastIndex = arr.lastIndexOf(elem);
//     if (firstIndex !== -1) {
//         console.log(`MinIndex = ${firstIndex}`);
//         console.log(`MaxIndex = ${lastIndex}`);
//     } else console.log('-1');
// }
//
// foo([1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14], 1);
// foo([1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14], 4);

// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.

// class Car {
//     constructor(producer, power, owner, price, year) {
//         this.producer = producer;
//         this.power = power;
//         this.owner = owner;
//         this.price = price;
//         this.year = year;
//     }
//     addPower() {
//         this.power += Math.round((this.power * 0.1));
//     }
//     changeDriver(driver) {
//         this.owner = driver;
//     }
//     increasePrice() {
//         this.price += Math.round((this.price * 0.05));
//     }
// }
//
// class Owner {
//     constructor(name, age, driveExperience) {
//         this.name = name;
//         this.age = age;
//         this.driveExperience = driveExperience;
//     }
// }
//
// const owner1 = new Owner('Victor', 25, 3);
// const owner2 = new Owner('Vlad', 21, 2);
// const owner3 = new Owner('Olya', 35, 1);
// const owner4 = new Owner('John', 29, 7);
// const owner5 = new Owner('Timur', 42, 10);
// const owner6 = new Owner('Olecksiy', 19, 1);
// const owner7 = new Owner('Den', 24, 4);
//
// const car1 = new Car('Mercedes', 250, owner1, 5000, 1999);
// const car2 = new Car('BMW', 300, owner2, 4000, 1998);
// const car3 = new Car('Lada', 350, owner3, 6300, 2004);
// const car4 = new Car('Audi', 250, owner4, 3900, 1990);
// const car5 = new Car('Tesla', 200, owner5, 10000, 2008);
// const car6 = new Car('Mercedes', 250, owner6, 3000, 1987);
// const car7 = new Car('Lada', 100, owner7, 1000, 1976);
//
// //     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// // На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
//
// car1.addPower();
// car1.changeDriver(owner5)
//
// car2.addPower();
// car2.changeDriver(owner6)
//
// car3.addPower();
// car3.changeDriver(owner7)
//
// // Для початку вкладіть всі наші створені автомобілі в масив cars.
// const cars = [];
// cars.push(car1, car2, car3, car4, car5, car6, car7);
//
// //     Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
//
// for (let i = 0; i < cars.length; i+=2) {
//     cars[i].addPower();
//     cars[i].increasePrice();
// }
// // Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
// //     то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//
// for (let item of cars) {
//     if (item.driveExperience < 5 && item.age > 25) {
//         item.driveExperience++;
//     }
// }
// //     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
//
// let sum = 0;
// for (let item of cars) {
//     sum += item.price;
// }
// console.log(sum);
