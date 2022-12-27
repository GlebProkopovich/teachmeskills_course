"use strict";

// Normal level
// Task 1

let isAdult = "true";
let isTeenager = false;
let userAge = 17;
let userName = undefined;
let userStatus = null;

console.log(typeof isAdult, typeof isTeenager, typeof userAge, typeof userName, typeof userStatus);

// Task 2

let height = 15;
let width = 20;

if (height > width) {
  console.log(height);
} else {
  console.log(width);
}

// Task 3

for (let i = 1; i < 20; i++) {
  if (i % 3 === 0) console.log(i);
}

// Task 4

let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;

let shouldGoToWork = key && documents && pen && (apple || orange);


// Task 5

let userNumber = prompt("Введите число", "");

if (userNumber % 3 === 0 && userNumber % 5 === 0) {
  alert("FizBuz");
} else if (userNumber % 5 === 0) {
  alert("Fiz");
} else if (userNumber % 3 === 0) {
  alert("Buz");
}

// Task 6

userAge = prompt("Напишите ваш возраст", "");

if (userAge >= 16 && userAge < 18) {
  alert("Можешь выкурить сигаретку, только маме не говори");
} else if (userAge >= 18) {
  alert("Попей пивка");
} else {
  alert("Пей колу");
}

// Task 7

let getSideOfTheWorld = prompt("В какую сторону света вы хотели бы отправиться?", "");

let correctedSideOfTheWorld = getSideOfTheWorld.toLowerCase();

switch (correctedSideOfTheWorld) {
  case "юг" :
    console.log("На юг пойдешь счастье найдешь");
    break;
  case "север" :
    console.log("На север пойдешь много денег найдешь");
    break;
  case "запад" :
    console.log("На запад пойдешь верного друга найдешь");
    break;
  case "восток" :
    console.log("На восток пойдешь разработчиком станешь");
    break;
  default :
    console.log("Попробуйте еще раз");
}


// Advanced level
// Task 1

let showUserName = prompt("Напишите ваши имя и фамилию", "");

let spaceIndex = showUserName.indexOf(" ");

alert(`Привет, ${showUserName.charAt(0).toUpperCase() + showUserName.slice(1, spaceIndex).toLowerCase() + " " 
+ showUserName.charAt(spaceIndex + 1).toUpperCase() + showUserName.slice(spaceIndex + 2).toLowerCase()}!`);

// Task 2

const greetingToUser = confirm("Последовательно указывайте числа с которыми будут произведены определенные манипуляции, указанные далее");

let startNumber = +prompt("С какого числа начнем?", "");
let minusNumber = +prompt("Сколько отнимем?");
let plusNumber = +prompt("Сколько прибавим?");
let multiplyNumber = +prompt("На сколько умножим?");
let divideNumber = +prompt("На сколько разделить?");

let result = (((startNumber - minusNumber) + plusNumber) * multiplyNumber) / divideNumber;

alert(`(((${startNumber} - ${minusNumber}) + ${plusNumber}) * ${multiplyNumber}) / ${divideNumber} = ${result}`);

// Task 3

let hashtag = "";

for (let i = 0; i < 6; i++) {
    hashtag += "#";
    console.log(hashtag);
  }



