/* Додатково
- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово. */
// let arr1 = ['a', 'b', 'c'];
// let arr2 = ['a', 'b', 'c'];
// let arr3 = ['a', 'b', 'c'];
//
// let word1 = '', word2 = '', word3 = '';
// //////
//
// for (let i = 0; i < arr1.length; i++) {
//     word1 += arr1[i];
// }
// console.log(word1);
//
// /////
// let i = 0;
// while (i < arr2.length) {
//     word2 += arr2[i];
//     i++;
// }
// console.log(word2);
// ///////
//
// for (let elem of arr3) {
//     word3 += elem;
// }
// console.log(word3);

/* Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу. */
// let arr = ['a', 'b', 'c'];
// let i = 1;
// while (i <= 3) {
//     arr.push(i);
//     i++;
// }
// console.log(arr);

/* Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1]. */
// let arr = [1, 2, 3];
// let arr2 = [];
// let j = 0;
// for (let i = arr.length - 1; i >= 0; i--) {
//     arr2[j] = arr[i];
//     j++;
// }
// console.log(arr2);

/* Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6. */
// let arr = [1, 2, 3];
// for (let i = 4; i <=6; i++) {
//     arr.push(i);
// }
// console.log(arr);

/* Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6. */
// let arr = [1, 2, 3];
// for (let i = 6; i >= 4; i--) {
//     arr.unshift(i);
// }
// console.log(arr);

/* Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift() */
// let arr = ['js', 'css', 'jq'];
// alert(arr.shift());

/* Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop() */
// let arr = ['js', 'css', 'jq'];
// alert(arr.pop());

/* Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5]. */
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(3));

/* Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].  */
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(0, 2));

/* Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5]. */
// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2);
// console.log(arr);

/* Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5]. */
// let arr = [1, 2, 3, 4, 5];
// arr.splice(3, 0, 'a', 'b', 'c');
// console.log(arr);

/* Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].*/
// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 0, 'a', 'b');
// arr.splice(6, 0, 'c');
// arr.push('e');
// console.log(arr);

/* Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними. */
// let arr = [1, 6, 4, 23, 100, 43, 30, 10, 0, 5];
// for (let item of arr) {
//     if (item % 2 === 0 && item !== 0) {
//         console.log(item);
//     }
// }

/* Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push ()
скопіювати значення одного масиву в інший
 */
// let arr = [1, 6, 4, 23, 100, 43, 30, 10, 0, 5];
// let arr2 = [];
// for (let item of arr) {
//     arr2.push(item);
// }
// console.log(arr2);

/* Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати
значення одного масиву в інший.
 */
// let arr = [1, 6, 4, 23, 100, 43, 30, 10, 0, 5];
// let arr2 = [];
// let count = 0;
// for (let item of arr) {
//     arr2[count] = item;
//     count++;
// }
// console.log(arr2);

/* зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та: */

//1. перебрати його циклом while
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 0;
// while (i < arr.length) {
//     console.log(arr[i]);
//     i++;
// }

//2. перебрати його циклом for
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

//3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 1;
// while (i < arr.length) {
//     console.log(arr[i]);
//     i+=2;
// }

//4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 1; i < arr.length; i+=2) {
//     console.log(arr[i]);
// }

//5. перебрати циклом while та вивести  числа тільки парні  значення
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 0;
// while (i < arr.length) {
//     if (arr[i] % 2 === 0 && arr[i] !== 0)
//         console.log(arr[i]);
//     i++;
// }

//6. перебрати циклом for та вивести  числа тільки парні  значення
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0 && arr[i] !== 0) {
//         console.log(arr[i]);
//     }
// }

//7. замінити кожне число кратне 3 на слово "okten"
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 === 0 && arr[i] !== 0) {
//         arr[i] = 'okten';
//     }
//     console.log(arr[i]);
// }

//8. вивести масив в зворотньому порядку.
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }

//9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// 1. перебрати його циклом while
// let i = arr.length - 1;
// while (i >= 0) {
//     console.log(arr[i]);
//     i--;
// }
// 2. перебрати його циклом for
// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i = 1;
// let count = arr.length - 1;
// while (count >= 1) {
//     if (i % 2 !== 0) {
//         console.log(arr[count]);
//     }
//     count--;
//     i++;
// }
//4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let index = 0;
// for (let i = arr.length - 1; i >= 0; i-- ) {
//     if (index % 2 !== 0) {
//         console.log(arr[index]);
//     }
//     index++;
// }
//5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = arr.length - 1;
// while (i >= 0) {
//     if (arr[i] % 2 === 0 && arr[i] !== 0)
//         console.log(arr[i]);
//     i--;
// }
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] % 2 === 0 && arr[i] !== 0) {
//         console.log(arr[i]);
//     }
// }
//7. замінити кожне число кратне 3 на слово "okten"
// for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] % 3 === 0 && arr[i] !== 0) {
//         arr[i] = 'okten';
//     }
//     console.log(arr[i]);
// }