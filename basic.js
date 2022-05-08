console.log('Hello Welcome to JavaScript Course.');
// console.log('This is Aamir Shahab');

let firstName = 'Aamir';
let lastName = 'Shahab';
// console.log('This is ' + firstName + ' ' + lastName);
let fullName = `This is ${firstName} ${lastName}`;

console.log(fullName);

const email = 'aamir.shahab@gmail.com';

// email = 'aadil.shahab@gmail.com';

console.log('My email is ' + email);

// Data Types

// let num1 = 123;
// let num2 = 12.09;

// let bool = true;
// let bool2 = false;

// let test;

// console.log(num1 + num2);
// console.log(bool);
// console.log(bool2);
// console.log(test);

// console.log(typeof num2);
// console.log(typeof bool2);
// console.log(typeof test);

console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(fullName.length);

let message = "It's Ok.";

console.log(message);

// let num1 = 120;
// let num2 = 5;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 ** num2);
// console.log(num1 % num2);
// console.log(num1++);
// console.log(num2--);
// console.log(num1, num2);

// Array

let fruitList = ['Apple', 'Mango', 'Banana'];
let programmingLanguage = ['JavaScript', 'Python', 'Go', 'Shell'];

console.log(fruitList);
console.log(programmingLanguage);

fruitList.push('Kiwi');
console.log(fruitList);
fruitList.unshift('Orange');
console.log(fruitList);
fruitList.pop();
console.log(fruitList);
console.log(fruitList.shift());
console.log(fruitList);
console.log(fruitList.splice(4));
