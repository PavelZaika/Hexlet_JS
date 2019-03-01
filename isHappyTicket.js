/**Счастливым билетом называют такой билет с шестизначным номером, 
 * где сумма первых трех цифр равна сумме последних трех.

Например, билет с номером 385916 - счастливый, так как 3 + 8 + 5 = 9 + 1 + 6
isHappyTicket.js

Напишите и экспортируйте по умолчанию функцию, проверяющую является ли номер счастливым 
(номер может быть как числового, так и строкового типа: см. примеры ниже). 
Функция должна возвращать true, если билет счастливый, или false, если нет. */

const sumOfDigits = (num) => {

    let result = 0;

    for (let i = 0; i < num.length; i++) {
        result += Number(num[i]);
    }

    return result;
};


const isHappyTicket = (num) => {


    if (typeof num === 'number') {

        num = String(num);

    }

    let arrOfStringNum = num.split('');
    let partOfArr = arrOfStringNum.splice(0, 3);

    let firstPartOfNumber = partOfArr.join('');
    let secondPartOfNumber = arrOfStringNum.join('');

    if (sumOfDigits(firstPartOfNumber) === sumOfDigits(secondPartOfNumber)) {
        return true;
    }
    return false;

};

console.log(isHappyTicket(385916)); // true
console.log(isHappyTicket(231002)); // false
console.log(isHappyTicket(128722)); // true
console.log(isHappyTicket('054702')); // true

