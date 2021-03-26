/*
--створити масив та вивести його в консоль:
- з 5 числових значень
- з 5 стічкових значень
- з 5 значень стрічкового, числового та булевого типу */
// const arr1 = [3, 5, 25, -32, 0];
// const arr2 = ['owu', 'js', 'array', 'hello', 'buy'];
// const arr3 = ['4', 'string', 25, -32, true];
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

/* -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль.
 */
// arr = [];
// arr[0] = 'Vlad', arr[1] = 'Vashchuk', arr[2] = 21, arr[3] = true;

/* За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині */
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, ut, voluptatem?</div>`);
// }

/* За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині */
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>Довільний текст з індексом ${i} всередині</div>`);
// }

/* - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині. */
// let i = 0;
// while (i < 20) {
//     document.write(`<h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor doloribus eaque et.</h1>`);
//     i++;
// }

/* - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині. */
// let i = 0;
// while (i < 20) {
//     document.write(`<h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor doloribus eaque et. ${i}</h1>`);
//     i++;
// }

/* - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі. */
// const arr = [1, 4, 23, -34, 0, 55, 233, -232, 32, 34];
// for (let element of arr) {
//     console.log(element);
// }

/* - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі. */
// const arr = ['string', 'arr', 'true', 'false', '0', '-232', 'owu', 'js', '32', 'hello'];
// for (let element of arr) {
//     console.log(element);
// }

/* - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі. */
// const arr = ['string', true, 34, '43', 'arr', false, 32, -65, 1, 0];
// for (let elem of arr) {
//     console.log(elem);
// }

/* - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки
  булеві елементи  */
// const arr = ['string', true, 34, '43', 'arr', false, 32, -65, 1, 0];
// for (let item of arr) {
//     if (typeof item === "boolean") {
//         console.log(item);
//     }
// }

/* - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки
числові елементи */
// const arr = ['string', true, 34, '43', 'arr', false, 32, -65, 1, 0];
// let i = 0;
// do {
//     if (typeof arr[i] === 'number') {
//         console.log(arr[i]);
//     }
//     i++;
// } while (i < arr.length)

/* - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки
рядкові елементи */
// const arr = ['string', true, 34, '43', 'arr', false, 32, -65, 1, 0];
// let i = 0;
// while (i < arr.length) {
//     if (typeof arr[i] === 'string') {
//         console.log(arr[i]);
//     }
//     i++;
// }

/* - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write */
// for (let i = 0; i < 10; i++) {
//     console.log('номер кроку - ' + (i+1));
//     document.write(`<h2>номер кроку - ${i+1}</h2>`);
// }

/* - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write */
// for (let i = 1; i <= 100; i++) {
//     console.log('номер кроку - ' + i);
//     document.write(`<h2>номер кроку - ${i}</h2>`);
// }

/* - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write */
// let count = 0;
// for (let i = 1; i <= 100; i+=2) {
//     count++;
//     console.log('номер кроку - ' + count);
//     document.write(`<h2>номер кроку - ${count}</h2>`);
// }

/* - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write */
// for (let i = 2; i <= 100; i+=2) {
//     console.log('номер кроку - ' + i);
//     document.write(`<h2>номер кроку - ${i}</h2>`);
// }

/* - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write */
// for (let i = 1; i <= 100; i+=2) {
//     console.log('номер кроку - ' + i);
//     document.write(`<h2>номер кроку - ${i}</h2>`);
// }

/* - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди) */
// for (let i = 0; i < 2; i++) {
//     for (let j = 0; j < 60; j++) {
//         console.log(`${i} хвилина ${j} секунда`);
//     }
// }
// console.log('Пройшло 2 хвилини');

/* - Відтворити роботу годинника, відрахувавши  2 години  (3 цикли! 1й - години, 2й - хвилини, 3й - секунди) */
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 60; j++) {
        for (let k = 0; k < 60; k++) {
            document.write(`<div>${i} година ${j} хвилина ${k} секунда</div>`);
        }
    }
}
document.write(`<div>Пройшло 2 години</div>`);
