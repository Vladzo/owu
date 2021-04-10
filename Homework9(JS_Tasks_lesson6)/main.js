//1) Створити масив з 20 чисел та:
const arr = [4, 6, 2, -5, 8, 9, 10, 33, 102, -324, 12, 3, 54, 12, 4, 12, 345, 43, 23, 23];

// a) відсортувати його від меншого до більшого.
//console.log(arr.sort((a, b) => a - b));

// b) відсортувати його від більшого до меншого.
//console.log(arr.sort((a, b) => b - a));

//c) Відфілтрувати числа які є кратними 3.
//console.log(arr.filter((value => value % 3 === 0)));

// d) Відфілтрувати числа які є більшими за 10.
//console.log(arr.filter(value => value > 10))

//e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
//arr.forEach(value => document.write(`<h3>${value}</h3>`));

// f) За допомогою map збільшити кожен елемент в масиві в три рази.
//console.log(arr.map(value => value * 3));

// g) Порахувати загальну суму всіх елментів у масиві (reduce)
//console.log(arr.reduce((acc, value) => acc + value));


//2) Створити масив з 20 стрічок та:
// const arrStr = ['OWU', 'true', 'js', 'JS', 'false', '15', 'Victor', '25', 'car', 'BMW', 'Viktoria', 'Vlad', '21', 'vlad',
//     '13', '14', '15', '50', 'love', 'Java', 'Python', 'Pascal'];

// a) Відсортувати його в алфавітному порядку
// console.log(arrStr.sort((a, b) => {
//     const strA = a.toUpperCase();
//     const strB = b.toUpperCase();
//     if (strA < strB) {
//         return -1;
//     }
//     return 1;
// }));

// b) Відсортувати в зворотньому порядку
// console.log(arrStr.sort((a, b) => {
//     const strA = a.toUpperCase();
//     const strB = b.toUpperCase();
//     if (strA > strB) {
//         return -1;
//     }
//     return 1;
// }));

// c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
// const arr3 = (arrStr.filter(value => value.length > 4));
// console.log(arr3);

// d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
//console.log(arrStr.map(value => `Sam says ${value}`));


// 3) Все робити тільки за допомогою методів масивів!
//     Дано масив :
const users = [
    {name: 'vasya', age: 31, isMarried: false},
    {name: 'petya', age: 30, isMarried: true},
    {name: 'kolya', age: 29, isMarried: true},
    {name: 'olya', age: 28, isMarried: false},
    {name: 'max', age: 30, isMarried: true},
    {name: 'anya', age: 31, isMarried: false},
    {name: 'oleg', age: 28, isMarried: false},
    {name: 'andrey', age: 29, isMarried: true},
    {name: 'masha', age: 30, isMarried: true},
    {name: 'olya', age: 31, isMarried: false},
    {name: 'max', age: 31, isMarried: true}
];

//a) відсортувати його за  віком (зростання , а потім окремо спадання)
// console.log(users.sort( (a, b) => {
//     return a.age - b.age;
// })); //зростання
// console.log(users.sort((a, b) => b.age - a.age)); //спадання

//b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// console.log(users.sort((a, b) => a.name.length - b.name.length));
// console.log(users.sort((a, b) => b.name.length - a.name.length));

//c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу
// його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)

// const tempUsers = JSON.parse(JSON.stringify(users));
// const newUsers = tempUsers.map(((value, index) => {
//     value.id = ++index;
//     return value;
// }));
//
// console.log(newUsers);
// console.log(users);

//d) відсортувати його за індентифікатором
//console.log(newUsers.sort((a, b) => a.id - b.id));

//e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)
// const marriedUsers = JSON.parse(JSON.stringify(users));
// console.log(marriedUsers.reduce((acc, value) => {
//     if (value.isMarried) {
//         value.appartment = true;
//         acc.push(value);
//     }
//     return acc;
// }, []));
// console.log(users)