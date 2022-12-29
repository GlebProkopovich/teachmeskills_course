"use strict";

// Normal level

// Task 1

let number = 0;
function getSum(a) {
    for (let i = 0; i <= a; i++) {
        number += i;
    }
    console.log(number);
}

// Task 2

function getResultsOverpayment(sumCredit) {
  let overpayment = sumCredit * 0.17 * 5;
  console.log(overpayment);
}

alert(`Сумма переплаты по кредиту за 5 лет составит ${getResultsOverpayment(sumCredit)}$`);

// Task 3

function trimString(userString, valueFrom, valueTo) {
  let result = userString.slice(valueFrom, valueTo);
  return alert(result);
}

// Task 4

function getSomeNumbers(num) {
  num = String(num);
  let result = 0;

  for(let i = 0; i < num.length; i++) {
    result += +num[i];
  }
  return result;
}

alert(getSomeNumbers(num));

// Task 5

let a = +prompt("Введите первое целое число");
let b = +prompt("Введите второе целое число");

function getSum(a, b) {
  let sum = 0;
  if (Number.isInteger(a) === false || Number.isInteger(b) === false) {
    return alert("Вы ввели не целые числа, их нужно поменять");
  } else {
    for(let i = a; i <= b; i++) {
    sum += i;
  }} return alert(sum);
}

getSum(a, b);

// Task 6

let foo = function() {
  console.log("foo");
}

let boo = function() {
  console.log("boo");
}

function fooboo(booleanReceived, foo, boo) {
  if (!!booleanReceived === true) return foo();
  else return boo();
}

fooboo(" ", foo, boo);

// Advanced level

// Task 1

// Способ без приведения к целому числу

// function checkTriangle(a, b, c) {
//   if (Number.isInteger(a) === false || Number.isInteger(b) === false || Number.isInteger(c) === false) {
//     return alert("Введите целое число");
//   } else if (a < b + c && b < a + c && c < a + b) {
//     return true;
//   } else false;
// }

// Способ с приведением к целому числу

function checkTriangle(a, b, c) {
  let firstSideTriangle = +(String(a).slice(0, String(a).indexOf(" ")));
  let secondSideTriangle = +(String(b).slice(0, String(b).indexOf(" ")));
  let thirdSideTriangle = +(String(c).slice(0, String(c).indexOf(" ")));

  if (firstSideTriangle < secondSideTriangle + thirdSideTriangle && secondSideTriangle < firstSideTriangle + thirdSideTriangle && thirdSideTriangle < firstSideTriangle + secondSideTriangle) return true;
  else return false;
}

// Task 2

function normalBreak(n, m) {
  return n !== 0 && m !== 0 && n * m - 1
}
console.log(normalBreak(9, 2));

// Task 3

function sumOfPurchase() {
  let telephonePrice = +prompt('Укажите стоимость телефона', 0);
  let accessoryPrice = +prompt('Укажите стоимость аксессуара', 0);;
  let balance = +prompt('Укажите сумму денег на счете', 0);
  let sum = 0;
  let purchase = (telephonePrice + accessoryPrice + (telephonePrice + accessoryPrice) * 0.2);
  // console.log(telephonePrice); console.log(accessoryPrice); console.log(balance);
  console.log(`Сумма покупки ${purchase.toFixed(2)} BYN`);
  alert(`Сумма покупки ${purchase.toFixed(2)} BYN`);
  if (balance / purchase > 0 && balance / purchase < 1) {
    alert('недостаточно денег для покупки этого телефона');
    return 0
  }
  else if (balance <= 0) {
    alert('на счете нет денег');
    return 0
  }
  else if (telephonePrice <= 0) {
    alert('стоимость телефона указана неверно');
    return 0
  }
  else {
    let i = 1;
    while (i <= balance / purchase) {
      i++;
      sum += purchase;
    }
    return sum.toFixed(2);
  }
}
console.log(`Общая стоимость покупки ${sumOfPurchase()} BYN.`);