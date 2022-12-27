"use strict";

// Normal level

// Task 1

let userNumber = +prompt("Введите число", "");
let calculatedNumber;

function getSum(userNumber) {
  calculatedNumber = userNumber;
  for (let i = 0; i < userNumber; i++) {
    calculatedNumber += i;
  }
  return calculatedNumber;
}

alert(getSum(userNumber));

// Task 2

let sumCredit = +prompt("Введите сумму кредита, которую вы бы хотели получить в $", "");
let coefficientOfInterestRate = 17/100;
let ages = 5;

function getResultsOverpayment(sumCredit) {
  let overpayment = (sumCredit * coefficientOfInterestRate) * ages;
  return overpayment.toFixed(0);
}

alert(`Сумма переплаты по кредиту за 5 лет составит ${getResultsOverpayment(sumCredit)}$`);

// Task 3

let userString = prompt("Введите любое предложение", "");
let valueFrom = +prompt("Введите номер символа с которого начинать обрезать", "");
let valueTo = +prompt("И номер символа по какой нужно обрезать", "");

function trimString(userString, valueFrom, valueTo) {
  let result = userString.slice(valueFrom, valueTo);
  return alert(result);
}

trimString(userString, valueFrom, valueTo);

// Task 4

let num = prompt("Введите любое число","");

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

let a = +prompt("Введите первое целое число", "");
let b = +prompt("Введите второе целое число", "");

function getSum(a, b) {
  let sum = 0;
  if (Number.isInteger(a) === false || Number.isInteger(b) === false) {
    return alert("Вы ввели не целые числа, их нужно поменять");
  } else if (a === b) {
    return alert(`${a} Since both are same`);
  } else for(let i = a; i <= b; i++) {
    sum += i;
  } return alert(sum);
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

// a = +prompt("Введите длину первой стороны", "");
// b = +prompt("Введите длину второй стороны", "");
// c = +prompt("Введите длину третьей стороны", "");

// function checkTriangle(a, b, c) {
//   if (Number.isInteger(a) === false || Number.isInteger(b) === false || Number.isInteger(c) === false) {
//     return alert("Введите целое число");
//   } else if (a < b + c && b < a + c && c < a + b) {
//     return alert("true");
//   } else return alert("false");
// }

// checkTriangle(a, b, c);

// Способ с приведением к целому числу

a = prompt("Введите длину первой стороны", "");
b = prompt("Введите длину второй стороны", "");
c = prompt("Введите длину третьей стороны", "");

function checkTriangle(a, b, c) {
  let firstSideTriangle = +(String(a).slice(0, String(a).indexOf(" ")));
  let secondSideTriangle = +(String(b).slice(0, String(b).indexOf(" ")));
  let thirdSideTriangle = +(String(c).slice(0, String(c).indexOf(" ")));

  if (firstSideTriangle < secondSideTriangle + thirdSideTriangle && secondSideTriangle < firstSideTriangle + thirdSideTriangle && thirdSideTriangle < firstSideTriangle + secondSideTriangle) return alert("true");
  else return alert("false");
}

checkTriangle(a, b, c);

// Task 2

let n;
let m;

  do {
    n = +prompt("Введите длину одной стороны шоколадки, число должно быть целым и положительным", "");
    m = +prompt("Введите длину второй стороны шоколадки, число должно быть целым и положительным", "");

    if (!!n === false || !!m === false || Math.sign(n) === -1 || Math.sign(m) === -1 || Number.isInteger(n) === false || Number.isInteger(m) === false) alert("Параметры введены некорректно! Попробуйте еще раз.");
    else calcFractureSquare(n, m);
    
    function calcFractureSquare(n, m) {
      let verticalFracture = 0;
      let horizontalFracture = 0;

        for(let i = 1; i < n; i++) {
          verticalFracture += 1;
        }
        verticalFracture *= m;
        for(let i = 1; i < m; i++) {
          horizontalFracture += 1;
        }
        horizontalFracture *= n;
      return alert(`Нужно сделать ${verticalFracture + horizontalFracture} надломов!`);
    }
  } while (!!n === false || !!m === false || Math.sign(n) === -1 || Math.sign(m) === -1 || Number.isInteger(n) === false || Number.isInteger(m) === false);

  // Task 3

let bankBalance;
let correctChoosenPhone;
let correctAccessories;

let getPriceOfTheTax = function(correctChoosenPhone, correctAccessories, tax = 0.02) {
  let priceOfTheTax = (correctChoosenPhone + correctAccessories) * tax;
  return priceOfTheTax;
}

function getFullPriceOfThePurchase(correctChoosenPhone, correctAccessories, getPriceOfTheTax) {
  let fullPriceOfThePurchase = correctChoosenPhone + correctAccessories - getPriceOfTheTax(correctChoosenPhone, correctAccessories);
  return fullPriceOfThePurchase.toFixed(2);
}

do {
  const priceOfTheIphone = 1050;
  const priceOfTheIphoneSe = 800;
  const priceOfTheSamsung = 500;
  const priceOfThePhoneCase = 10;
  const priceOfTheHeadPhones = 200;

  confirm("Давайте посчитаем общую сумму затрат на покупку выбранного телефона и, как итог, поймем подходит ли вам финансово этот вариант");

  confirm("В наличии есть Iphone 14 и его стоимость составляет 1050$, Iphone SE стоимостью 800$ и Samsung Galaxy за 500$");
  
  let choosenPhone = prompt("Напишите модель, которую вы бы хотели", "Iphone 14");

  correctChoosenPhone = choosenPhone.toLowerCase();

  if (correctChoosenPhone === "iphone 14") {
    correctChoosenPhone = priceOfTheIphone;
    } else if (correctChoosenPhone === "iphone se") {
    correctChoosenPhone = priceOfTheIphoneSe;
    } else if (correctChoosenPhone === "samsung galaxy") {
    correctChoosenPhone = priceOfTheSamsung;
    } else alert("Нет в наличии данной модели телефона");


  bankBalance = +prompt("Введите сумму средств на вашем банковском счете", "");
  
  confirm("Так же вы можете приобрести у нас чехол за 10$ и наушники AirPods за 200$");
  
  let answerAboutAccessories = prompt("Ответьте да/нет в зависимости от ваших пожеланий", "да");

  correctAccessories = answerAboutAccessories.toLowerCase();

  if (correctAccessories === "да") {
    correctAccessories = priceOfThePhoneCase + priceOfTheHeadPhones;
    } else if (correctAccessories === "нет") {
    correctAccessories = 0;
    } else alert("Ответ некорректен");

  alert(`Полная стоимость покупки с учетом налога в 2% будет ${getFullPriceOfThePurchase(correctChoosenPhone, correctAccessories, getPriceOfTheTax)}`);

  if (bankBalance < getFullPriceOfThePurchase(correctChoosenPhone, correctAccessories, getPriceOfTheTax)) {
    alert("К сожалению у вас недостаточно средств на балансе, попробуйте выбрать другие позиции")
  }

} while (bankBalance < getFullPriceOfThePurchase(correctChoosenPhone, correctAccessories, getPriceOfTheTax));
