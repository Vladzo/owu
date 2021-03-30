/* 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або
document.getElementsByTagName :
 */

//a) отримує текст з параграфа з id "content"
// const a = document.getElementById('content').innerText;
// console.log(a);

//b) отримує текст з блоку з id "rules"
// const b = document.getElementById('rules').innerText;
// console.log(b);

//c) замініть текст параграфа з id 'content' на будь-який інший
//document.getElementById('content').innerText = 'Будь-який інший текст..............';

//d) замініть текст параграфа з id 'rules' на будь-який інший
//document.getElementById('rules').innerText = 'Будь-який інший текст..............';

//e) змініть кожному елементу колір фону на червоний
// document.getElementById('content').style.backgroundColor = 'red';
// document.getElementById('rules').style.backgroundColor = 'red';
// const li = document.getElementsByTagName('li');
// for (let item of li) {
//     item.style.backgroundColor = 'red';
// }
// const ul = document.getElementsByTagName('ul');
// for (let item of ul) {
//     item.style.backgroundColor = 'red';
// }

//f) змініть кожному елементу колір тексту на синій
// document.getElementById('content').style.color = 'blue';
// document.getElementById('rules').style.color = 'blue';
// const li = document.getElementsByClassName('fc_rules');
// for (let item of li) {
//     item.style.color = 'blue';
// }
// const ul = document.getElementsByTagName('ul');
// for (let item of ul) {
//     item.style.color = 'blue';
// }

//g) отримати весь список класів елемента з id=rules і вивести їх в console.log
// const rules = document.getElementById('rules').classList;
// console.log(rules);

//h) отримати всі елементи з класом fc_rules
// const rules = document.getElementsByClassName('fc_rules');
// console.log(rules);

//i) поміняти колір тексту у всіх елементів fc_rules на червоний
// const rules = document.getElementsByClassName('fc_rules');
// for (let item of rules) {
//     item.style.color = 'red';
// }

/* 2) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
   Вставити цей блок на сторінку */
let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
}, {
    name: 'max',
    age: 30,
    status: true,
    address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
}, {
    name: 'max',
    age: 31,
    status: true,
    address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
}];

// 2)
// for (let item of users) {
//     let user = document.createElement('div');
//     user.innerHTML = `Hello my name is ${item.name}. <br> I'am ${item.age} years old.<br> I live in ${item.address.city} <hr>`;
//     user.style.color = 'blue';
//     document.body.appendChild(user);
// }

/* 3) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
   Блок з адресою зробити окремим блоком, з блоками для кожної властивості */
// for (let item of users) {
//     let user = document.createElement('div');
//     user.innerHTML = `Hello my name is ${item.name}. <br> I'am ${item.age} years old.`;
//     let address = document.createElement('div');
//     address.innerHTML = `
//         <div>Country: ${item.address.country}</div>
//         <div>City: ${item.address.city}</div>
//         <div>Number of house: ${item.address.houseNumber}</div>`;
//     address.style.backgroundColor = 'orange';
//     address.style.border = '1px solid red';
//     user.appendChild(address);
//     user.style.color = 'blue';
//     document.body.appendChild(user);
// }