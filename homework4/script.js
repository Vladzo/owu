//- присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16,
// true, false Вывести каждую при помощи console.log , alert, document.write
let greeting = 'hello';
let courses = 'owu';
let domain = 'com';
let countryDomain = 'ua';
let firstNumber = 1;
let secondNumber = 10;
let thirdNumber = -999;
let foursNumber = 123;
let pi = 3.14;
let fifthNumber = 2.7;
let sixthNumber = 16;
let isTrue = true;
let isFalse = false;

console.log(`${greeting}; ${courses}; ${domain}; ${countryDomain}; ${firstNumber}; ${secondNumber}; ${thirdNumber};
${foursNumber}; ${pi}; ${fifthNumber}; ${sixthNumber}; ${isTrue}; ${isFalse}`);

alert(greeting);
alert(courses);
alert(domain);
alert(countryDomain);
alert(firstNumber);
alert(secondNumber);
alert(thirdNumber);
alert(foursNumber);
alert(pi);
alert(fifthNumber);
alert(sixthNumber);
alert(isTrue);
alert(isFalse);

document.write(`${greeting} ${courses} ${domain} ${countryDomain} ${firstNumber} ${secondNumber} ${thirdNumber}
${foursNumber} ${pi} ${fifthNumber} ${sixthNumber} ${isTrue} ${isFalse}`);

//*********************************************************************************************************
//- переопределить каждую переменную из задания 1 дав им произвольные значения Вывести каждую при помощи console.log , alert, document.write
/*
document.write('<br><hr>');
console.log('       ***********');
greeting = 'Hi';
courses = 'SoftServe';
domain = 'org';
countryDomain = 'uk';
firstNumber = 12;
secondNumber = 40;
thirdNumber = 999;
foursNumber = 23;
pi = '3.14';
fifthNumber = 2;
sixthNumber = 66;
isTrue = false;
isFalse = true;

console.log(`${greeting}; ${courses}; ${domain}; ${countryDomain}; ${firstNumber}; ${secondNumber}; ${thirdNumber};
${foursNumber}; ${pi}; ${fifthNumber}; ${sixthNumber}; ${isTrue}; ${isFalse}`);

alert(greeting);
alert(courses);
alert(domain);
alert(countryDomain);
alert(firstNumber);
alert(secondNumber);
alert(thirdNumber);
alert(foursNumber);
alert(pi);
alert(fifthNumber);
alert(sixthNumber);
alert(isTrue);
alert(isFalse);

document.write(`${greeting} ${courses} ${domain} ${countryDomain} ${firstNumber} ${secondNumber} ${thirdNumber}
${foursNumber} ${pi} ${fifthNumber} ${sixthNumber} ${isTrue} ${isFalse}`); */

//*********************************************************************************************************
//- Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write

/*
document.write('<br><hr>');
console.log('       ***********');
const firstConst = 1;
const secondConst = 2;
const thirdConst = 3;
const fourthConst = 'First const';
const fifthConst = 'Second const';
const sixthConst = 'Third const';

console.log(`${firstConst}; ${secondConst}; ${thirdConst}; ${fourthConst}; ${fifthConst}; ${sixthConst}`);

alert(fifthConst);
alert(secondConst);
alert(thirdConst);
alert(fourthConst);
alert(fifthConst);
alert(sixthConst);

document.write(`${firstConst} ${secondConst} ${thirdConst} ${fourthConst} ${fifthConst} ${sixthConst}`) */

//*******************************************************************
//- при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. Для фамилии имени и отчества создать
// разные переменные. Вывести каждую при помощи console.log , alert, document.write
/*
document.write('<br><hr>');
console.log('       ***********');
let surname = prompt('Your surname?');
let name = prompt('Your name?');
let middleName = prompt('Your middle name?');
console.log(surname);
console.log(name);
console.log(middleName);
alert(surname);
alert(name);
alert(middleName);
document.write(surname + "  ");
document.write(name + "  ");
document.write(middleName + " "); */

//**********************************************************
//- Взять переменные из задания 4 и сконкатенировать их в одной переменной person.
/*
document.write('<br><hr>');
console.log('       ***********');
let person = surname + name + middleName; */

//*************************************************************
//Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.
/*
document.write('<br><hr>');
console.log('       ***********');
let motherSurname = prompt('Your mother\'s name?');
let motherName = prompt('Your mother\'s surname?');
let motherMiddleName = prompt('Your mother\'s middle name?');
console.log(motherSurname);
console.log(motherName);
console.log(motherMiddleName);
alert(motherSurname);
alert(motherName);
alert(motherMiddleName);
document.write(motherSurname + "  ");
document.write(motherName + "  ");
document.write(motherMiddleName + " ");

document.write('<br>');
let fatherSurname = prompt('Your father\'s name?');
let fatherName = prompt('Your father\'s surname?');
let fatherMiddleName = prompt('Your father\'s middle name?');
console.log(fatherSurname);
console.log(fatherName);
console.log(fatherMiddleName);
alert(fatherSurname);
alert(fatherName);
alert(fatherMiddleName);
document.write(fatherSurname + "  ");
document.write(fatherName + "  ");
document.write(fatherMiddleName + " "); */

//********************************************************************
//- при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.
/*
console.log('       ***********');
let number1 = + prompt('Number1 = ');
let number2 = + prompt('Number2 = ');
let number3 = + prompt('Number3 = ');
console.log(number1);
console.log(number2);
console.log(number3); */

//********************************************************************
//- при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt. Сложить их между собой
// записав результат в переменную result и вывести в консоль браузера
/*
console.log('       ***********');
let number4 = parseInt(prompt('Number4 = '));
let number5 = parseInt(prompt('Number5 = '));
let number6 = parseInt(prompt('Number6 = '));
let number7 = parseInt(prompt('Number7 = '));
let result = number4 + number5 + number6 + number7;
console.log(result); */

//***********************************************************************
//- при помощи prompt()  получить 3 числа с плавающей точекой. при помощи parseFloat привести их к соответсвующему типу.
// Сложить их между собой записав результат в переменную result и вывести в консоль браузера
/*
console.log('       ***********');
let float1 = parseFloat(prompt('Float1 = '));
let float2 = parseFloat(prompt('Float2 = '));
let float3 = parseFloat(prompt('Float3 = '));
result = float1 + float2 + float3;
console.log(result);

//***************************************************
//- при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round Сложить их между собой
// записав результат в переменную  и вывести в консоль браузера
console.log('       ***********');
float1 = Math.round(float1);
float2 = Math.round(float2);
float3 = Math.round(float3);
result = float1 + float2 + float3;
console.log(result); */

//******************************************************
//- при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу. Первое число - это число которое
// будут возводить в степень. Второе число - это число которое является степенью. При помощи Math.pow возвести первое
// число в степень второго числа.
/*
console.log('       ************');
let number8 = parseInt(prompt('Number8 = '));
let number9 = parseInt(prompt('Number9 = '));
console.log(Math.pow(number8, number9)); */

//********************************************************
//при помощи оператора опредеоения типа typeof определить типы следующих переменных и вывести их в консоль let a = 100;
// let b = '100'; let c = true; let d = undefined;
/*
console.log('       ***********');
let a = 100;
let b = '100';
let c = true;
let d = undefined;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d); */

//**********************************************************
//- Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат. В одинаковых выражениях
// в задании не использовать два одинаковых оператора. Каждое выражение вложить в свою переменную
/*
let var1 = 5 < 6;
let var2 = 5 > 6;
let var3 = 5 == 6;
let var4 = 5 === 6;
let var5 = 10 === 10;
let var6 = 10 == 10;
let var7 = 10 > 10;
let var8 = 10 < 10;
let var9 = 10 != 10;
let var10 = 123 === '123';
let var11 = 123 == '123';

console.log(var1);
console.log(var2);
console.log(var3);
console.log(var4);
console.log(var5);
console.log(var6);
console.log(var7);
console.log(var8);
console.log(var9);
console.log(var10);
console.log(var11); */