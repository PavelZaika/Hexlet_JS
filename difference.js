/*

difference.js

Реализуйте и экспортируйте функцию по умолчанию, 
которая принимает на вход два множества и возвращает множество, 
составленное из таких элементов, которые есть в первом множестве, но нет во втором.

difference(new Set([2, 1]), new Set([2, 3]));
// → [1]

*/


const difference = (set1, set2) => {
    const mySet = new Set();
   const filtered = [...set1].filter(element => (!set2.has(element))?mySet.add(element):0);
  
  return mySet;
  };


  const teacherDif = (set1, set2) =>
  new Set(Array.from(set1).filter(value => !set2.has(value)));


  console.log(difference(new Set([2, 1]), new Set([2, 3])));
  console.log(teacherDif(new Set([2, 1, 5, 6, 8]), new Set([2, 3, 8])));