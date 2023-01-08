"use strict";

// Normal level

// Task 1

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

fibonacci.forEach(function getItem(item){
  console.log(item);
});

fibonacci.forEach(item => console.log(item));

// Task 2

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];

const updatedOne = users.map(function addValue(item){
  return `member ${users.indexOf(item) + 1}: ${item}`;
});

const updatedTwo = users.map(item => `member ${users.indexOf(item) + 1}: ${item}`);

// Task 3

const numbers = [7, -4, 32, -90, 54, 32, -21];

const numbersOne = numbers.filter(function getFilteredItems(item) {
  return item >= 0;
});

const numberTwo = numbers.filter(item => item >= 0);

// Task 4

console.log(fibonacci.reduce(function sumOfArr(acc, item) {
  return acc + item;
}));

console.log(fibonacci.reduce((acc, item) => acc + item));

// Task 5

const userNumbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

console.log(userNumbers.find(function getEvenNumber(item) {
  return item % 2 === 0;
}));

console.log(userNumbers.find(item => item % 2 === 0));

// Advanced level

// Task 1

function Student(salary, rate, userName){
  this.salary = salary;
  this.rate = rate;
  this.name = userName;
  this.getCredit = (() => {
    if (this.rate === "A") return salary * 12;
    else if (this.rate === "B") return salary * 9;
    else if (this.rate === "C") return salary * 6;
    else if (this.rate === "D") return 0;
  })();
}

const jane = new Student(800, "A", "Jane");
const viktoria = new Student(1200, "C", "Viktoria");
const egor = new Student (10000, "B", "Egoriy");
const soviet = new Student (700, "B", "Soviet");
const killreal = new Student (500, "D", "Killreal");

const students = [jane, viktoria, egor, soviet, killreal];

function getSumCredit(arr) {
  return console.log(arr.reduce((acc, item) => acc + item.getCredit, 0));
}

getSumCredit(students);

// Task 2

function getConsonants(str){
  const vowels = ["a", "A", "e", "E", "o", "O", "u", "U", "i", "I"];
  return console.log(str.split("").filter(item => !vowels.includes(item)).join(""));
}

// Task 3

function getSeparation(str) {
  return console.log(str.toLowerCase().split("").map(function(item) {
    return item.toUpperCase() + item.repeat(str.toLowerCase().indexOf(item))
  }).join("-"))
}

getSeparation("RqaEzty");


// Task 4

function getHighAndLow(str) {
  return console.log(`${Math.max(...str.split(" "))} ${Math.min(...str.split(" "))}`);
}

getHighAndLow("1 2 -3 4 5");

// Task 5

function isIsogram(str) {
  const arr = str.toLowerCase().split("").map((item, index) => str.toLowerCase().slice(index + 1).includes(item));
  return console.log(!arr.find(item => item === true));
}

isIsogram("moOse");

// Task 6

function getSome(str) {
  const total1 = str.split("").map((item, index) => str.charCodeAt(index)).join("");

  const total2 = total1.split("").map(item => {
    if (item === "7") return item = "1";
    else return item;
  }).join("");

  return console.log(total1.split("").reduce((acc, item) => acc + item, 0) - total2.split("").reduce((acc, item) => acc + item, 0));
}

getSome("fsdaga");

// Task 7

function getNewStr(str) {
  const arr = str.toLowerCase().split("").map((item, index) => {
    if(str.toLowerCase().slice(index + 1).includes(item) === true || str.toLowerCase().split("").reverse().slice(str.length - index).includes(item) === true) return item = ")";
    else if (str.toLowerCase().slice(index + 1).includes(item) === false) return item = "(";
  });

  return console.log(arr.join(""));
}

getNewStr("(( @");

