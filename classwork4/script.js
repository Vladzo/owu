/*   1. Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
  При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean. */

let str = 'Привет';
let num = 123;
let flag = true;
let txt = 'true';
console.log(typeof str);
console.log(typeof num);
console.log(typeof flag);
console.log(typeof txt);

/* 2. Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.) найдите
      значения выражений:
    5 + 3,
    5 - 3,
    5 * 3,
    5 / 3,
    5 % 3
    поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3. */

// let a1 = 5 + 3, a2 = 5 - 3, a3 = 5 * 3, a4 = 5 / 3, a5 = 5 % 3;

/* 3. Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
    5 % 3,
    3 % 5,
    5 + '3',
    '5' - 3,
    75 + 'кг' */

// let a6 = 5 % 3, a7 = 3 % 5, a8 = 5 + '3', a9 = '5' - 3, a10 = 75 + 'кг';

/* 4. Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
  шириной 10см (переменная width), значение площади должно хранится в числовой переменной s. */

// let height = 23, width = 10;
// let s = height * width;
// console.log(s, 'см');

/* 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
результат поместите в переменную v. */

// let heightC = 10, dC = 4;
// let v = 3.14 * (dC / 2) ** 2 * heightC;
// console.log(v, 'м');

/* 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
  Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения
   в степень ** ). */

// let n = 3, m = 4;
// let k = Math.pow((n**2 + m **2), 1/2);
// console.log(k);

/* 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert
 и console.log */

// let str = 'Hello world';
// document.write(str);
// alert(str);
// console.log(str);

/* 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби
(каждой на новой строки спомощью \n). */

// let name = 'Vlad', lastName = 'Vashchuk', middleName = 'Igorovich', age = 21, hobby = 'football';
// let outPut = name + '\n' + lastName + '\n' + middleName + '\n' + age +'\n' + hobby;
// alert(outPut);

/* 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
  Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
  Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
  Вывести в документ содержимое переменной concatenation спомощью document.write */

// let str1 = 'Кто', str2 = 'ты', str3 = 'такой?';
// let concatenation = str1 + str2 + str3;
// document.write(concatenation);

/* 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
    let str = "20";
     let a = 5;
     document.write(str + a + "<br/>");
     document.write(str - a + "<br/>");
     document.write(str * "2" + "<br/>");
     document.write(str / 2 + "<br/>"); */

// '205' (рядок) відбудеться конкатенація str з а. а - приведеться то рядка;
//  15 (число) відбудеться перетворення str в число;
//  40 (число) відбудеться приведення до числа;
//  10 (число) відбудеться приведення до числа;

/* 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
    parseInt("3.14")
    parseInt("-7.875")
    parseInt("435")
    parseInt("Вася") */
// 3
// -7
// 435
// Nan

/* 12. С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться
      далее, повторите код ниже
    let str = prompt("Enter something", "ho-ho")
    console.log(str); */

// let str = prompt("Enter something", "ho-ho")
// console.log(str);

/* 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода
    alert */

// let num1 = parseInt(prompt("number1 = ", '1'));
// let num2 = parseInt(prompt("number2 = ", '2'));
// alert(num1 + num2);

/* 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
      Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert */

// let name = prompt("What is your name?", "Иван");
// let surName = prompt("What is your surname?", "Иванов");
// let age = parseInt(prompt("How old are you?", "32"));
//
// let str = `Доброго вечера ${name} ${surName}, мои поздравления что вам ${age}`;
// alert(str);

// =====================
// ======ДОП============
// =====================

/* . Три різних числа вводяться через prompt().
За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню) */

// let num1 = parseInt(prompt("num1 = ", '1'));
// let num2 = parseInt(prompt("num2 = ", '2'));
// let num3 = parseInt(prompt("num3 = ", '3'));
//
// let first, second, third;
//
// if (num1 <= num2 && num1 <= num3) {
//     first = num1;
//     if (num2 <= num3) {
//         second = num2;
//         third = num3;
//     } else {
//         second = num3;
//         third = num2;
//     }
// } else if (num2 <= num1 && num2 <= num3) {
//     first = num2;
//     if (num1 <= num3) {
//         second = num1;
//         third = num3;
//     } else {
//         second = num3;
//         third = num1;
//     }
// } else {
//     first = num3;
//     if (num1 < num2) {
//         second = num1;
//         third = num2;
//     } else {
//         second = num2;
//         third = num1;
//     }
// }
// console.log(first);
// console.log(second);
// console.log(third);

/* 2.
Все параматры получаем с клавиатуры!!!!
Имитируем поведение пешехода на перекстке.
Если светофор зеленый - вывести "иди".
Если светофор желтый - вывести "подожди".
Если светофор красный - вывести "стой".
Если светофор в аварийном режиме вывести "делай что хочешь"! */

// let trafficLight = prompt("какого цвета светофор?", "светофор в аварийном режиме");
// if (trafficLight === 'зеленый') {
//     alert('иди');
// } else if (trafficLight === 'желтый') {
//     alert('подожди');
// } else if (trafficLight === 'красный') {
//     alert('стой');
// } else alert('делай что хочешь!')

/* 3
Все параметры получаем с клавиатуры!!!!(prompt , confirm)
Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
Улучшаем предыдущее задание.
Если светофор зеленый и машин нет - вывести "иди".
Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
Если светофор желтый и машины есть - вывести "жди".
Если светофор желтый и машин нет - вывести "все рано жди".
Если светофор красный и машин нет- вывести "стой все рано".
Если светофор красный - и машины есть вывести "стой и жди".
Если светофор в аварийном режиме вывести "делай что хочешь"! */

// let trafficLight = prompt("какого цвета светофор?", "светофор в аварийном режиме");
// let isRoadClear =confirm('На дороге есть машины?');
//
// if (trafficLight === 'зеленый' && isRoadClear === false) {
//     alert('иди');
// } else if (trafficLight === 'зеленый' && isRoadClear === true) {
//     alert('подожди пока нарушители проедут');
// } else if (trafficLight === 'желтый' && isRoadClear === true) {
//     alert('жди');
// } else if (trafficLight === 'желтый' && isRoadClear === false) {
//     alert('все рано жди');
// } else if (trafficLight === 'красный' && isRoadClear === false) {
//     alert('стой все рано');
// } else if (trafficLight === 'красный' && isRoadClear === true) {
//     alert('стой и жди');
// } else alert('делай что хочешь!')