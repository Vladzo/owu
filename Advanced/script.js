// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!

// function isDegreeOfTwo(N) {
//   let i = 0;
//   let count = 1;
//   while (count <= N) {
//       if (count === N) {
//           console.log('Yes');
//           return;
//       }
//       count *= 2;
//   }
//     console.log('No');
// }
//
// isDegreeOfTwo(128);


// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій

// const person = {
//     name: 'Victor',
//     age: 25,
//     car: true,
//     job: [
//         {
//             title: 'developer',
//             description: 'Middle Node.js developer '
//         },
//         {
//             title: 'teacher',
//             description: 'Basic JS and Node.js'
//         }
//     ],
//     school: 'oktenweb'
// }
//
// function deepCopy(obj) {
//     const obj2 = {};
//     for (let key in obj) {
//         if (typeof obj[key] === "object") {
//             deepCopy(obj[key]);
//         }
//         obj2[key] = obj[key];
//     }
//     return obj2;
// }
//
// const newObj = deepCopy(person);
// console.log(newObj);


// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
const arr = [1,3, ['Hello', 'Wordd', [9,6,1]], ['oops'], 9];


function inSingleLevel(arr) {
    let count = 0;
    if (count === 0) {

    }
        count++;
    for (let item of arr) {
        if (typeof item === 'object') {
            inSingleLevel(item);
        }
        arr2.push(item);
    }
    return arr2;
}
console.log(inSingleLevel(arr));