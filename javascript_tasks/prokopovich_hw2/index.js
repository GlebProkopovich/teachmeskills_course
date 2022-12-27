"use strict";

// Task 1

let x = 20;
let y = 58;
let z = 42;

console.log(x + y + z);

// Task 2

let secondsInMinute = 60;
let minutesInHour = 60;
let hoursInDay = 12;
let daysInYear = 365; 
let myAgeInYears = 25;

let myAgeInSeconds = myAgeInYears * daysInYear * hoursInDay * minutesInHour * secondsInMinute;

console.log(myAgeInSeconds);

// Task 3

let count = 42;
let userName = '42';

// Way 1

console.log(count + '');
console.log(+userName);

// Way 2

console.log(String(count));
console.log(Number(userName));

// Task 4

let a = 1;
let b = 2;
let c = "белых медведей";

c = " белых медведей";

console.log(a + '' + b + c);

// Task 5

let s = "доступ";
let d = "морпех";
let f = "наледь";
let g = "попрек";
let h = "рубило";

let lengthWords = s.length + d.length + f.length + g.length + h.length;

console.log(lengthWords);

// Task 6

let myName = "Gleb";
let myAge = 25;
let myMood = true;

console.log(`Variable myName have type: ${typeof myName}`);
console.log(`Variable myAge have type: ${typeof myAge}`);
console.log(`Variable myMood have type: ${typeof myMood}`);

// Task 7

userName = prompt("What's your name?"); 
let userAge = prompt("How old are you?");

console.log(userName, userAge);

// Advanced level 

// Task 1 

let n = 4;
let m = 3;

n = n + m;
m = n - m;
n = n - m;

console.log(n, m);

// Task 2

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

let cipher = codeWord1.charAt(1) + codeWord2.charAt(1) + codeWord3.charAt(1) + codeWord4.charAt(1) + codeWord5.charAt(1);

console.log(cipher);