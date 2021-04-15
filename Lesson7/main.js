//- Створити довільний елемент с id = text. використовуючи JavaScript, зробіть так, щоб при кліку на кнопку зникавл елемент с id="text".
// const textHiddenButton = document.getElementById('text-hiden');
// textHiddenButton.onclick = () => {
//     document.getElementById('text').style.display = 'none';
// }

//- Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.
// const textHiddenButton = document.getElementById('text-hiden');
// textHiddenButton.onclick = () => {
//     document.getElementById('text-hiden').style.display = 'none';
// }

//- Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача
// document.forms.form.submit.onclick = () => {
//     const input = document.form.age.value;
//     parseInt(input) >= 18 ? alert("Welcome") : alert("Go away!!!");
// }

// - Створіть меню, яке розгортається/згортається при клику
// let hidden = false;
// const button2 = document.getElementById('button2');
// button2.onclick = () => {
//     let menu = document.getElementById('menu');
//     if (!hidden) {
//         menu.style.display = 'none';
//         hidden = true;
//         button2.value = 'Розгорнути';
//         return;
//     }
//     hidden = false;
//     menu.style.display = 'block';
//     button2.value = 'Згорнути';
// }

// - Створіть список коментарів , приклад об'єкту коментаря - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вивести список коментарів в документ, кожний в своєму блоці.
//     Додайте кожному коментарю по кнопці для згортання його body.

// const comments = [
//     {title : 'First comment sdfweagrfg WGRW EFWEFQEwdv  dfds fEW f', author: 'Pupkin'},
//     {title : 'Secont comment WEW WEQF EWFQ      EWF  WEF', author: 'Victor'},
//     {title : 'lorem ipsum dolo sit ameti', author: 'Vlad'},
//     {title : 'ipsum dolo sit ametiipsum dolo sit ameti', author: 'Vika'},
//     {title : 'fvaefdvavfadfvdafda comment', author: 'anonimus'}
// ];
//
// for (let item of comments) {
//     document.write(`<hr>`);
//     let block = document.createElement('div');
//     block.innerHTML = `<div class= 'comment'><p>${item.title}</p><h2>${item.author}</h2></div>`;
//     const button = document.createElement('input');
//     button.setAttribute('type', 'submit');
//     button.setAttribute('value', 'Згорнути');
//     document.body.appendChild(block);
//     document.body.appendChild(button);
//     button.onclick = function () {
//         block.classList.toggle('hide');
//     }
//
// }


// - Створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// const btn = document.getElementById('btn');
// btn.onclick = function () {
//     for (let form of document.forms) {
//         for (let input of form) {
//             console.log(input.value);
//         }
//     }
// }


// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кількість ячейок в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.

// const block = document.getElementsByClassName('table')[0];
//
// function createTable(row, col, el) {
//     const table = document.createElement('table');
//     let count = 0;
//     for (let i = 0; i < row; i++) {
//         const tr = document.createElement('tr');
//         for (let j = 0; j < col; j++) {
//             let td = document.createElement('td');
//             td.innerHTML = `<td> ${count} </td>`;
//             count++;
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
//     el.appendChild(table);
// }
//
// createTable(3, 3, block);

// - Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.

// const images = ['https://upload.wikimedia.org/wikipedia/commons/3/34/Nokia_3310_3G_%2820180116%29.jpg',
//     'https://www.zdnet.com/a/hub/i/2021/01/07/a20ae151-6384-47c4-a75e-802455021c41/apple-iphone-12-best-phones-review.png',
//     'https://images-na.ssl-images-amazon.com/images/I/519rB1n%2Bn8L._AC_SX679_.jpg',
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjukP-x9cNBdrgLzeM1sS1msCwtXLVOnFVYg&usqp=CAU'
// ];
// const img = document.getElementById('img');
// function turnRight () {
//     let index = images.indexOf(img.src);
//     if (index < images.length - 1) {
//         index++;
//         img.src = images[index];
//         return;
//     }
//     img.src = images[0];
// }
// function turnLeft () {
//     let index = images.indexOf(img.src);
//     if (index > 0) {
//         index--;
//         img.src = images[index];
//         return;
//     }
//     img.src = images[images.length-1];
// }
//
// document.getElementById('left').onclick = turnLeft;
// document.getElementById('right').onclick = turnRight;
//
//
//     ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
//
// - Сворити масив нецензцрних слів.
//const words = ['Fuck', 'Deff', 'Peff', 'aaa'];
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві нецензурних слів кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
// const inp1 = document.getElementById('CWinput1');
// const btn = document.querySelector('#checkWords');
// btn.onclick = function () {
//     if (words.includes(inp1.value)) {
//         alert("Change a word!");
//     }
// }

// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
// const inp1 = document.getElementById('CWinput1');
// const btn = document.querySelector('#checkWords');
// btn.onclick = function () {
//     const inputStr = inp1.value.split(' ');
//     for (let word of words) {
//         if (inputStr.includes(word)) {
//             alert("Change your input");
//             return;
//         }
//     }
// }

// -- Створити скрипт, котрий бере зчитує на сторінці (rules.html) текст і робить збоку меню-зміст по всіх заголовках які є в тексті.
//     При кліку на пункт заголовку ви маєте відправлятись  до цього пункту в тексті

//Перевірка чи це rules.html
// const title = document.getElementsByTagName('title')[0].innerText;
// if (title !== 'Fight Club') {
//     throw new Error("Something went badly wrong!"); //Не знав як зупинити скрипт, найшов це на стековерфлоу
// }
//
// const h = document.getElementsByTagName('h2');
// const menu = document.createElement('ul');
// document.getElementById('content').appendChild(menu);
// let count = 0;
// for (let item of h) {
//     const li = document.createElement('li');
//     let a = document.createElement('a');
//     a.innerText = item.innerText;
//     a.setAttribute('href', '#href' + count);
//     li.appendChild(a);
//     menu.appendChild(li);
//     let a2 = document.createElement('a');
//     h[count].appendChild(a2);
//     a2.setAttribute('name', 'href' + count);
//     count++;
// }


// -- Взяти масив юзерів
// const usersWithAddress = [
//     {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
//     {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
//     {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
//     {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
//     {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
//     {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
//     {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
//     {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
//     {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
//     {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
// ];
// Створити три чекбокси. Кожний з них активує фільтр для вищевказаного масиву. Фільтри можуть працювати як разом так і окремо.
// 1й - відфільтровує юзерів зі статусом false (залишає зі статусом false)
// 2й - залишає старших 29 років включно
// 3й - залишає тих в кого місто Київ
// Дані виводить в документ
// const inp1 = document.getElementById('inp1');
// const inp2 = document.getElementById('inp2');
// const inp3 = document.getElementById('inp3');
//
// let usersCopy = JSON.parse(JSON.stringify(usersWithAddress));
// document.getElementById('sort').onclick = function() {
//     if (inp1.checked) {
//         usersCopy = usersCopy.filter(value => value.isMarried === false);
//     }
//     if (inp2.checked) {
//         usersCopy = usersCopy.filter(value => value.age >= 29);
//     }
//     if (inp3.checked) {
//         usersCopy = usersCopy.filter(value => value.address.city === 'Kyiv');
//     }
//     for (let user of usersCopy) {
//         document.write(`<div>Id: ${user.id} Name: ${user.name} Age: ${user.age} Married: ${user.isMarried} City: ${user.address.city}</div>`)
//     }
// }




