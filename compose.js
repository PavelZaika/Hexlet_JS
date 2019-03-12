/*


С точки зрения математики, композиция функций f и g - новая функция z = f(g(x)).
compose.js

Реализуйте и экспортируйте по умолчанию функцию compose, 
которая принимает на вход две других одноаргументных функции и возвращает новую функцию. 
Эта новая функция также принимает на вход один параметр и 
при вызове применяет его последовательно к переданным функциям в обратном порядке.

Примеры ниже помогут понять, как должна работать функция:

const f = compose(Math.sqrt, Math.abs);
f(-4); // => 2

compose(v => v, v => v)(10); // => 10
compose(v => v + 2, v => v)(10); // => 12
compose(v => v, v => v - 2)(10); // => 8
compose(v => v ** 2, v => v - 2)(2); // => 0
compose(v => v - 2, v => v ** 2)(2); // => 2


*/



const compose = (func1, func2) => x => func1(func2(x));


console.log((compose(v => v, v => v)(10)));
console.log(compose(v => v + 2, v => v)(10));
console.log(compose(v => v, v => v - 2)(10));
console.log(compose(v => v ** 2, v => v - 2)(2));
console.log(compose(v => v - 2, v => v ** 2)(2));