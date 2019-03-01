/**Счастливые числа

Назовем счастливыми числами те, которые в результате ряда преобразований вида "сумма квадратов цифр" превратятся в единицу. Например:

7   => 7^2 = 49,
49  => 4^2 + 9^2 = 16 + 81 = 97,
97  => 9^2 + 7^2 = 81 + 49 = 130,
130 => 1^2 + 3^2 + 0^2 = 10,
10  => 1^2 + 0^2 = 1.

Вывод: исходное число 7 - счастливое.
isHappyNumber.js

Реализуйте и экспортируйте по умолчанию функцию, которая должна вернуть true, если число счастливое, и false, если нет. 
Количество итераций процесса поиска необходимо ограничить числом 10. */

const isHappyNumber = (num) => {

    let numAfterSunOfSquareDigits = num;

    for (let i = 10; i >= 0; i--) {

        if (numAfterSunOfSquareDigits === 1) {
            return true;
        }
        else {

            numAfterSunOfSquareDigits = sumOfSquareDigits(numAfterSunOfSquareDigits);
            console.log(numAfterSunOfSquareDigits);
        }

    }

    return false;
};



const sumOfSquareDigits = (num) => {
    let numToStr = String(num);
    let sumOfSqr = 0;


    for (let i = 0; i < numToStr.length; i++) {
        sumOfSqr += Number(numToStr[i]) ** 2;

    }
    return sumOfSqr;
};


console.log(isHappyNumber(7));
