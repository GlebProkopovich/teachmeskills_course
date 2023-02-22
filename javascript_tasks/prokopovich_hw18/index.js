'use strict';

const subjects = {
  mathematics: {
      students: 200,
      teachers: 6
  },
  biology: {
      students: 120,
      teachers: 6
  },
  geography: {
      students: 60,
      teachers: 2
  },
  chemistry: {
      students: 100,
      teachers: 3
  }
}

// 1. Создать строку из названий предметов написаных через запятую

const str = Object.keys(subjects).join(", ");

// 2. Посчитать общее количeство студентов и учителей на всех предметах

const getAllAmount = () => {
  let arr = [];

  Object.values(subjects)
  .forEach(i => {
    arr.push(i.students);
    arr.push(i.teachers);
  })

  const amount = arr.reduce((a, b) => a + b);
  return amount;
}

// 3. Получить среднее количество студентов на всех пpeдметах

const studentsAverage = Object.values(subjects)
.map(i => i.students)
.reduce((a, b) => a + b)
/Object.keys(subjects).length;

// 4. Создать массив из объектов предметов

const arrSubjects = Object.values(subjects);

// 5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему

const subjectsSorted = Object.values(subjects).sort((a, b) => b.teachers - a.teachers);

