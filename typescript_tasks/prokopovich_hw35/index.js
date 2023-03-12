"use strict";
const users = [
    {
        name: 'Harry Felton',
        phone: '(09) 897 33 33',
        email: 'felton@gmail.com',
        animals: ['cat'],
        cars: ['bmw'],
        hasChildren: false,
        hasEducation: true,
    },
    {
        name: 'May Sender',
        phone: '(09) 117 33 33',
        email: 'sender22@gmail.com',
        hasChildren: true,
        hasEducation: true,
    },
    {
        name: 'Henry Ford',
        phone: '(09) 999 93 23',
        email: 'ford0@gmail.com',
        cars: ['bmw', 'audi'],
        hasChildren: true,
        hasEducation: false,
    },
];
function getNames(arr) {
    return arr.map((el) => el.name).join(', ');
}
function getAmountCars(arr) {
    return (arr
        .filter((el) => el.cars)
        .map((el) => el.cars)
        .reduce((acc, item) => acc + item.length, 0));
}
function getUsersEducated(arr) {
    return arr.filter((el) => el.hasEducation);
}
function getUsersWithAnimals(arr) {
    return arr.filter((el) => el.animals);
}
function getUsersCars(arr) {
    return (arr
        .filter((el) => el.cars)
        .map((el) => el.cars)
        .join(','));
}
