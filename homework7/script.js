//1) створити функцію яка приймає масив та виводить його
// function showArray(arr) {
//     console.log(arr);
// }
// const arr = [1, 5, 10, 'hi', 'owu', true];
// showArray(arr);

//2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
// function insertRandomNumbers(arr) {
//     for (let i = 0; i < 10; i++) {
//         arr.push(parseInt(Math.random() * 100));
//     }
//     showArray(arr);
// }
// insertRandomNumbers(arr);

//3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function printMinNumber(num1, num2, num3) {
//     if (num2 >= num1 && num1 <= num3){
//         console.log(num1);
//     } else if(num1 >= num2 && num2 <= num3) {
//         console.log(num2);
//     } else console.log(num3);
// }
// printMinNumber(5, 20, 10);

//4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function printMaxNumber(num1, num2, num3) {
//     if (num2 <= num1 && num1 >= num3){
//         console.log(num1);
//     } else if(num1 <= num2 && num2 >= num3) {
//         console.log(num2);
//     } else console.log(num3);
// }
// printMaxNumber(50, 20, 100);

//5) створити функцію яка повертає найбільше число з масиву
// const max = arr => {
//     let maxNumber = arr[0];
//     for (let item of arr) {
//         maxNumber = item > maxNumber ? item : maxNumber;
//     }
//     return maxNumber;
// }
// let arr = [0, 5, 34, -5, 100, 34];
// console.log(max(arr));

//6) створити функцію яка повертає найменьше число з масиву
// const min = arr => {
//     let minNumber = arr[0];
//     for (let item of arr) {
//         minNumber = item < minNumber ? item : minNumber;
//     }
//     return minNumber;
// }
// let arr = [0, 5, 34, -5, 100, 34];
// console.log(min(arr));

//7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// const arr = [3, 5, 3, 6, 8, 10];
// function sumArray(arr) {
//     let sum = 0;
//     for (let item of arr) {
//         sum += item;
//     }
//     return sum;
// }
// console.log(sumArray(arr));

//8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// const arr = [3, 5, 3, 6, 8, 10, 0];
// function arithmeticMean(arr) {
//     let sum = 0;
//     for (let item of arr) {
//         sum += item;
//     }
//     return sum / arr.length;
// }
// console.log(arithmeticMean(arr));

//9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// function arrOfKey(arr) {
//     const arr2 = [];
//     for (let item of arr) {
//         for (let key in item) {
//             arr2.push(key);
//         }
//     }
//     return arr2;
// }
//
// const arr = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// console.log(arrOfKey(arr));

//10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// function arrOfValue(arr) {
//     const arr2 = [];
//     for (let item of arr) {
//         for (let keyOfValue in item) {
//             arr2.push(item[keyOfValue]);
//         }
//     }
//     return arr2;
// }
//
// const arr = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// console.log(arrOfValue(arr));

//11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// function sumElementsByIndex (arr, arr2) {
//     const arr3 = [];
//     for (let i = 0; i < arr.length; i++) {
//         arr3[i] = arr[i] + arr2[i];
//     }
//     return arr3;
// }
//
// console.log(sumElementsByIndex([1, 2, 3, 4], [2, 3, 4, 5]));

//============================================================================================

//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// (Math використовувати заборонено);
// function returnMinPrintMax() {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (let item of arguments) {
//         if (item < min) {
//             min = item;
//         } else if(item > max) {
//             max = item;
//         }
//     }
//     console.log('Max is ', max);
//     return min;
// }
// let a = returnMinPrintMax(1, 5, 10, -78, 60, 100);
// console.log('Return ', a);

//- Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.  Що б я міг сам вибрати повернути мені
// масив ключів чи масив значень.
// function arrOfKeys(arr) {
//     const arr2 = [];
//     for (let item of arr) {
//         for (let key in item) {
//             arr2.push(key);
//         }
//     }
//     return arr2;
// }
//
// function arrOfValues(arr) {
//     const arr2 = [];
//     for (let item of arr) {
//         for (let keyOfValue in item) {
//             arr2.push(item[keyOfValue]);
//         }
//     }
//     return arr2;
// }
// const arr = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// function arrOfKeysOrValues (arr, str) {
//     if (str === 'keys') {
//         return arrOfKeys(arr);
//     } else if (str === 'values') {
//         return arrOfValues(arr);
//     } else return ('Try again');
// }
//
// console.log(arrOfKeysOrValues(arr, 'values'));
// console.log(arrOfKeysOrValues(arr, 'keys'));
// console.log(arrOfKeysOrValues(arr, 'daveaerae'));

//Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// EXAMPLE:
// console.log(foo([9, 8, 0, 4], 0)) // ==> [ 8, 9, 0, 4 ]
// console.log(foo([9, 8, 0, 4], 1)) // ==> [ 9 ,0, 8, 4 ]
// console.log(foo([9, 8, 0, 4], 2)) // ==> [ 9, 8, 4, 0 ]
//
// function foo(arr, i) {
//     let temp = arr[i];
//     arr[i] = arr[i + 1];
//     arr[i + 1] = temp;
//     return arr;
// }

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//     Двожина масиву від 2 до 100
// EXAMPLE:
//     [1,0,6,0,3] => [1,6,3,0,0]
//     [0,1,2,3,4] => [1,2,3,4,0]
//     [0,0,1,0]   => [1,0,0,0]
// function move0(arr) {
//     if (arr.length < 2 || arr.length > 100) {
//         return;
//     }
//     const arr2 = [];
//     let count = 0;
//     for (let item of arr) {
//         if (item !== 0) {
//             arr2.push(item);
//         } else count++;
//     }
//     for(let i = 0; i < count; i++) {
//         arr2.push(0);
//     }
//     return arr2;
// }
//
// console.log(move0([1, 0, 6, 0, 3]));
// console.log(move0([0, 1, 2, 3, 4]));
// console.log(move0([0, 0, 1, 0]));

// - Дано список імен.
//     let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let n1 = '                 Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// const nameNormalize = (name) => {
//
//     // First try
//     // name = name.replaceAll(' ', '').split('');
//     // let lastName = [];
//     // for (let i = 1; i < name.length; i++) {
//     //     if (name[i] === name[i].toUpperCase()) {
//     //        for (let j = i; j < name.length; j++) {
//     //            lastName.push(name[j]);
//     //        }
//     //         name = name.slice(0, i);
//     //     }
//     // }
//     // name = name.join('');
//     // lastName = lastName.join('');
//     // name = name + ' ' + lastName;
//     // return name;
//
//     //Second try
//     // name = name.trim();
//     // let firstSpace = name.indexOf(' ');
//     // let lastSpace = name.lastIndexOf(' ');
//     // let substr = name.slice(firstSpace, lastSpace);
//     // name = name.replace(substr, '');
//     // return name;
// }
//
// console.log(nameNormalize(n1));
// console.log(nameNormalize(n2));
// console.log(nameNormalize(n3));

// ******************* НАЗАД В МИНУЛЕ *********************** //
// Створити функцію яка :
//     - Додає в боді блок з текстом "Hello owu"
// function addText() {
//     const text = document.createElement('div');
//     text.innerText = 'Hello owu';
//     document.body.appendChild(text);
// }
// addText();

//- Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// function addText2 (tag, text) {
//     const element = document.createElement(tag);
//     element.innerText = text;
//     document.body.appendChild(element);
// }
//
// addText2('h1', 'Hello world!');

//- приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати
// список цих автомобілів.

// const cars = [
//     {id: 1, model: 'Reno', country: 'France'},
//     {id: 2, model: 'bmw', country: 'Germany'},
//     {id: 3, model: 'Toyota', country: 'Japan'},
//     {id: 4, model: 'Mercedes', country: 'Germany'}
// ];
//
// const addCarsOnPage = (cars, id) => {
//     const div = document.getElementById(id);
//     div.style.backgroundColor = 'pink';
//     div.style.padding = '20px';
//
//     for (const car of cars) {
//         const carDiv = document.createElement('div');
//         carDiv.innerHTML = `
//             ID: ${car.id} <br>
//             Model: ${car.model} <br>
//             Country: ${car.country} <br>
//         `;
//         carDiv.style.margin = '20px';
//         carDiv.style.backgroundColor = 'blue';
//         div.appendChild(carDiv);
//     }
// }
// addCarsOnPage(cars, 'cars')

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//     Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
//     Для кожної властивості створити всередені блока автомоблія свій блок

// const cars = [
//     {id: 1, model: 'Reno', country: 'France'},
//     {id: 2, model: 'bmw', country: 'Germany'},
//     {id: 3, model: 'Toyota', country: 'Japan'},
//     {id: 4, model: 'Mercedes', country: 'Germany'}
// ];
//
// const addCarsOnPage2 = (cars, id) => {
//     const div = document.getElementById(id);
//     div.style.backgroundColor = 'pink';
//     div.style.padding = '20px';
//
//     for (const car of cars) {
//         const carDiv = document.createElement('div');
//         carDiv.style.backgroundColor = 'blue';
//         for (const key in car) {
//             const divOfField = document.createElement('p');
//             divOfField.innerText = key + ':  ' + car[key];
//             carDiv.appendChild(divOfField);
//         }
//         div.appendChild(carDiv);
//     }
// }
// addCarsOnPage2(cars, 'cars')