"use strict";
const users = [
  {
    name: "Harry Felton",
    phone: "(09) 897 33 33",
    email: "felton@gmail.com",
    animals: ["cat"],
    cars: ["bmw"],
    hasChildren: false,
    hasEducation: true
  },
  {
    name: "May Sender",
    phone: "(09) 117 33 33",
    email: "sender22@gmail.com",
    hasChildren: true,
    hasEducation: true
  },
  {
    name: "Henry Ford",
    phone: "(09) 999 93 23",
    email: "ford0@gmail.com",
    cars: ["bmw", "audi"],
    hasChildren: true,
    hasEducation: false
  }
];
users.map(i => i.name).join(', ');
users.filter(i => i.cars).map(i => i.cars).reduce((acc, item) => acc + item.length, 0);
function getUsersEducated(arr) {
  return arr.filter(i => i.hasEducation);
}
function getUsersWithAnimals(arr) {
  return arr.filter(i => i.animals);
}
function getUsersCars(arr) {
  return arr
    .filter(i => i.cars)
    .map(i => i.cars)
    .join(',');
}
