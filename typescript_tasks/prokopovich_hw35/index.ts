interface IUser {
  name: string;
  phone: string;
  email: string;
  animals?: Array<string>;
  cars?: Array<string>;
  hasChildren: boolean;
  hasEducation: boolean;
}

const users: Array<IUser> = [
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

// 1. Создать строку из имен пользователей через запятую

function getNames(arr: Array<IUser>): string {
  return arr.map((el) => el.name).join(', ');
}

// 2. Посчитать общее количнство машин у пользователей

function getAmountCars(arr: Array<IUser>): number {
  return ( 
    arr
    .filter((el) => el.cars)
    .map((el) => el.cars)
    .reduce((acc, item) => acc + item!.length, 0)
  );
}

// 3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования

function getUsersEducated(arr: Array<IUser>): Array<IUser> {
  return arr.filter((el) => el.hasEducation);
}

// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных

function getUsersWithAnimals(arr: Array<IUser>): Array<IUser> {
  return arr.filter((el) => el.animals);
}

// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую

function getUsersCars(arr: Array<IUser>) {
  return ( 
    arr
    .filter((el) => el.cars)
    .map((el) => el.cars)
    .join(',')
  );
}
