"use strict";

// Normal level 

// Task 1

let human = {
  isFriendly: true,
  age: 25
}

delete human.isFriendly;
delete human.age;

// Task 2

let animal = {
  isBig: false,
  age: 5
}

console.log("isBig" in animal);

// Task 3

const student = {
  name: 'John',
  age: 19,
  isHappy: true
}

for(let key in student) {
  console.log(key);
  console.log(student[key]);
}

// Task 4

const colors = {
  'ru pum pu ru rum': {
      red: 'красный',
      green: 'зеленый',
      blue: 'синий'
  }
}

console.log(colors["ru pum pu ru rum"].red);
console.log(colors["ru pum pu ru rum"].blue);

// Task 5

let salaries = {
  andrey: 500,
  sveta: 413,
  anton: 987,
  andrey: 664,
  alexandra: 199
}

let sum = 0;

for(let key in salaries) {
sum += salaries[key];
}

sum /= 4;

// Task 6

let confirmation = false;

while (confirmation === false) {

let requestLogin = prompt("Введите ваш логин");
let requestPassword = prompt("Введите ваш пароль");

let user = {
  requestLogin,
  requestPassword
}

confirmation = confirm(`Нажмите "ОК", если все введено правильно`);

confirmation === true ? alert("Добро пожаловать") : alert("Введите заново корректно");
}

// Advanced level 

// Task 1

let score = {
  0: "Нуль",
  1: "Один",
  2: "Два",
  3: "Три",
  4: "Четыре",
  5: "Пять",
  6: "Шесть",
  7: "Семь",
  8: "Восемь",
  9: "Девять"
}

function getScoreInWords(scoreInNumbers) {
  let firstNumber = +(String(scoreInNumbers).slice(0, 1));
  let secondNumber = +(String(scoreInNumbers).slice(2));
  let result = function() {
    firstNumber = score[firstNumber];
    secondNumber = score[secondNumber];
    return console.log(`${firstNumber} : ${secondNumber}`);
  }
  if (firstNumber <= 9 && secondNumber <= 9 && firstNumber >= 0 && secondNumber >= 0) {
    result();
  } else console.log("Счет введен некорректно");
}

getScoreInWords("0:4");

// Task 2

let student1 = {
  name: 'Polina',
  age: 27,
}

let student2 = {
  name: 'Polina',
  age: 27,
}

console.log(JSON.stringify(student1) === JSON.stringify(student2));

// Task 3

const animals = {
  cat: {
    name: "Енчик",
    age: 3,
  },
  dog: {
    name: "Орео",
    age: 2,
  },
}

console.log(animals?.birds?.name);