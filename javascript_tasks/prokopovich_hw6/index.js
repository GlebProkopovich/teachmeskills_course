"use strict";

// Normal level

// Task 1

const colors = ['red', 'green', 'blue']

console.log(colors.length);

// Task 2

const animals = ['monkey', 'dog', 'cat']

console.log(animals[animals.length - 1]);
// console.log(animals.at(-1));

// Task 3

const numbers = [5, 43, 63, 23, 90]

numbers.pop();
numbers.pop();
numbers.pop();
numbers.pop();
numbers.pop();

console.log("После пяти pop():", numbers);

numbers.splice(0, 5);

console.log("После одного splice():", numbers);

// Task 4

const students = ['Polina', 'Dasha', 'Masha']

students.splice(2, 1, "Borya");

console.log(students);

students.splice(0, 1, "Andrey");

console.log(students);

// Task 5

const cats = ['Gachito', 'Tom', 'Batman']

for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}

for (let cat of cats) {
  console.log(cat);
}

// Task 6

const evenNumbers = [2, 4, 6, 8, 10]
const oddNumbers = [1, 3, 5, 7, 9]

const allNumbers = evenNumbers.concat(oddNumbers);

console.log(allNumbers.indexOf(8));

// Task 7

const binary = [0, 0, 0, 0]

console.log(binary.join(1));

// Advanced level

// Task 1

function checkOnPolindrome(word) {
  return console.log(word.toLowerCase() === word.split("").reverse().join("").toLowerCase() ? true : false)
}

checkOnPolindrome("шАлАШ");

// Task 2

const matrix = [
  [12, 98, 78, 65, 23],
  [54, 76, 98, 43, 65],
  [13, 324, 65, 312],
  [9092, 22, 45, 90000],
]

let sum = 0;
let amount = 0;

for (let i of matrix) {
  for (let j of i) {
    sum += j;
    amount++;
  }
}

console.log(sum/amount);

// Task 3

const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]

const positiveNumbers = [];
const negativeNumbers = [];

for (let el of mixedNumbers) {
  if (el >= 0) positiveNumbers.push(el);
  else negativeNumbers.push(el);
}

console.log(positiveNumbers);
console.log(negativeNumbers);

// Task 4

const array = [6, 9, 2, 4, 23, 1];
const userArray = [];

for (let el of array) {
  userArray.push(Math.pow(el, 3));
}

console.log(array);
console.log(userArray);