/*


Удивительно, но факт — условные конструкции можно реализовать самостоятельно 
с использованием одних лишь каррированных функций.
logic.js

В этой практике мы реализуем упрощённую версию, 
имитирующую работу условной конструкции if.

Экспортируйте тройку True, False, If, используя только функции, 
внутри которых только функции ;) То есть нельзя пользоваться встроенными в язык if, 
а также true и false. Сами функции должны быть каррированы.
Пример использования:

import { If, True, False } from './logic';

If(True)('one')('two');  // one
If(False)('one')('two'); // two

Подсказки

Общая схема работы функций такова:

If(func)('one')('two'); // ?

То есть, в итоге должно вернуться то или иное значение, 
в зависимости от того, какая функция передана на вход If.

Если функции If была передана True, то выражение ниже 
вернёт значение аргумента первого вызова (one):

const ConditionFunction = If(True);
ConditionFunction('one')('two'); // one

Если функции If была передана False, то выражение 
ниже вернёт значение аргумента второго вызова (two):

const ConditionFunction = If(False);
ConditionFunction('one')('two'); // two


*/
const True = (a) => (b) => a;
const False = (a) => (b) => b;
const If = (func)=>func;

const ConditionFunction = If(True);
console.log (ConditionFunction('one')('two'));

console.log (True()());

//export { True, False, If };