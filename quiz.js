//_____________________________________________________________________________________________________________________
/* Реализуйте тело функции smallestDivisor, используя итеративный процесс. 
Эта функция должна находить наименьший делитель заданного числа.
Доп. условия: число, передаваемое в функцию, больше нуля; делитель должен быть больше единицы, 
за исключением случая, когда аргументом является единица (наименьшим делителем которой является также единица). */

const smallestDivisor = (num) => {

    const iter = (counter, num) => {
        if (num % counter === 0 && counter > 1) {
            return counter;
        }
        else if (num === counter) {
            return counter;
        }

        return iter(counter + 1, num);

    };

    return iter(1, num);

};
console.log(smallestDivisor(71));


//_____________________________________________________________________________________________________________________
/*Реализуйте (с использованием рекурсивного процесса) функцию sequenceSum, 
которая находит сумму последовательности целых чисел. Последовательность задается двумя значениями: 
begin - начало последовательности, end - конец последовательности. Например: begin = 2 и end = 6 
дают нам такую последовательность 2, 3, 4, 5, 6. Сумма такой последовательности будет: 20. */

const sequenceSum = (begin, end) => {

    if (begin > end) {
        return NaN;
    }

    else if (begin === end) {
        return begin;

    }
    else {
        return begin + sequenceSum(begin + 1, end);
    }

};

console.log(sequenceSum(1, 5));

//_____________________________________________________________________________________________________________________
/* Напишите функцию smallestDivisor. Она должна находить наименьший целый делитель числа. 
Поведение у функции такое же, как в предыдущем уроке, но реализация (код функции) должна быть другой. 
На этот раз реализуйте императивный итеративный процесс, что означает:

    не используйте рекурсию
    используйте переменные
    используйте цикл while
 */


const smallestDivisor2 = (num) => {

    let counter = 1;
    let result = 1;
    if (num <= 0) {
        return NaN;
    }

    else if (num == 1) {
        return counter;
    }

    while (counter <= num) {
        result = num / counter;
        counter++;
        if (num % counter === 0 && counter > 1) {
            return counter;
        }

    }

    return counter;



};

console.log(smallestDivisor2(121));


//_____________________________________________________________________________________________________________________

/* Реализуйте функцию reverse, которая переворачивает строку. */
const reverseReverse = (str) => {

    return str.split("").reverse().join("");

};

console.log(reverseReverse('California'));


//_____________________________________________________________________________________________________________________

/* Реализуйте функцию reverse, которая переворачивает строку. */
const reverseWhilePush = (str) => {

    let reverseStr = [];
    let count = (str.length - 1);

    while (count >= 0) {
        reverseStr.push(str[count]);
        count--;


    }

    return reverseStr.join('');

};

console.log(reverseWhilePush('California'));


//_____________________________________________________________________________________________________________________

/* Реализуйте функцию reverse, которая переворачивает строку. */

const reverseOld = (str) => {

    let reverseStr = ''
    let count = (str.length - 1);

    while (count >= 0) {
        reverseStr = reverseStr + str[count];
        count--;

    }

    return reverseStr;

};

console.log(reverseOld('California'));

//_____________________________________________________________________________________________________________________
 /* Напишите функцию isPrime. Она принимает число и возвращает true, если число является простым, и false в ином случае.
Простое число — целое положительное число, имеющее ровно два различных натуральных делителя — единицу и самого себя. 
Например, 7 — простое число, потому что делится без остатка только на 1 и на себя. 2017 — другое простое число.
Используйте цикл for и арифметические шорткаты. */

const isPrime = (n) => {

    let res = 0;

    for (let counter = 1; counter <= n; counter++) {
        let test = n % counter;
        if (test === 0) {
            res++;
        }
    }

    return (res === 2);
};
console.log(isPrime(2017));

//_____________________________________________________________________________________________________________________

/*
    Реализуйте функцию square, которая возвращает квадрат числа.
    Реализуйте функцию sumOfSquares, которая возвращает сумму квадратов двух чисел.
    Реализуйте функцию squareSumOfSquares, которая возвращает квадрат суммы квадратов двух чисел.
 */

const square = (n) => {
    return n ** 2;
};
const sumOfSquares = (a, b) => {
    return square(a) + square(b);
};
const squareSumOfSquares = (c, d) => {

    return square(sumOfSquares(c, d));
}

console.log(square(2));
console.log(sumOfSquares(4, 5));
console.log(squareSumOfSquares(6, 2));

//_____________________________________________________________________________________________________________________

/* Функции lessThan, greaterThan и isEqual в модуле comparers сравнивают две строки и возвращают true/false.

Сравнение идет по количеству заглавных символов в строке (больше заглавных — больше строка).

Специальные символы (например, пробел) не имеют заглавных эквивалентов и в данном задании считаются заглавными.

Примеры:

greaterThan('AD', 'ad sd'); // true, сравнение на > (больше)
greaterThan('AD', '   Ad sd'); // false, сравнение на > (больше)
lessThan('ghe df', 'dfwe r D'); // true, сравнение на < (меньше)
isEqual('liSp', 'lisP'); // true


Допишите необходимые части функций bigLettersCount и compare для того, чтобы заработали функции lessThan, greaterThan и isEqual.

Функция compare, принимающая две строки first и second, работает по следующему алгоритму:

    Если в первой строке больше заглавных символов, то возвращается 1.
    Если во второй строке больше заглавных символов, то возвращается -1.
    Иначе возвращается 0.
 */

const bigLettersCount = (str) => {

    const arrLetters = str.split('');
    let counter = 0;

    for (let i = 0; i < arrLetters.length; i++) {
        if (arrLetters[i] === arrLetters[i].toUpperCase()) {
            counter++;
        }

    }
    return counter;

};


const compare = (first, second) => {
    const firstCount = bigLettersCount(first);
    const secondCount = bigLettersCount(second);


    if (firstCount > secondCount) {
        return 1;
    }
    else if (firstCount === secondCount) {
        return 0;
    }
    else return -1;

};

const greaterThan = (first, second) =>
    compare(first, second) === 1;

const lessThan = (first, second) =>
    compare(first, second) === -1;

const isEqual = (first, second) =>
    compare(first, second) === 0;

console.log(greaterThan('ASDdsdfsfe', 'ASDasdwEQAF'));
console.log(lessThan('ASDdsDFDFdfsfe', 'dfghsdfsfe'));
console.log(isEqual('dfghsdfsfe', 'dfghsdfssAdfdffe'));


//_____________________________________________________________________________________________________________________
/*Реализуйте и экспортируйте по умолчанию функцию addDigits, которая работает следующим образом:

Дано неотрицательное целое число num. Складывать все входящие в него цифры до тех пор, пока не останется одна цифра.

Для числа 38 процесс будет выглядеть так:

    3 + 8 = 11
    1 + 1 = 2
 */

const addDigits = (num) => {

    let res = num;

    if (num <= 0) {
        return 0;
    }
    while (res >= 10) {
        res = sumDig(res);
    }
    return res;
};



const sumDig = (num) => {

    let arrNum = num.toString().split('');
    let res = 0;
    for (let i = 0; i < arrNum.length; i++) {
        res = res + Number(arrNum[i]);
    }
    return res;

};

console.log(addDigits(88));

//_____________________________________________________________________________________________________________________
/* Реализуйте и экспортируйте по умолчанию функцию addDigits, которая работает следующим образом:

Дано неотрицательное целое число num. Складывать все входящие в него цифры до тех пор, пока не останется одна цифра.

Для числа 38 процесс будет выглядеть так:

    3 + 8 = 11
    1 + 1 = 2
 */


const sum = (str) => {
    let result = 0;
    for (let i = 0; i < str.length; i += 1) {
        result += Number(str[i]);
    }

    return result;
};

const addDigitsTeacher = (num) => {
    let result = num;
    while (result >= 10) {
        result = sum(String(result));
    }

    return result;
};

console.log(addDigitsTeacher(66));
//_____________________________________________________________________________________________________________________
/* Реализуйте и экспортируйте по умолчанию функцию, которая делает заглавной первую букву каждого слова в предложении. */
const toUppC = (str) => {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if ((str[i] === ' ' && str[i + 1] !== ' ')) {
            newStr = newStr + ' ' + str[i + 1].toUpperCase();
            i++;
        }

        else if (i === 0) {
            str[i].toUpperCase;
            newStr = newStr + str[i].toUpperCase();
        }

        else {
            newStr = newStr + str[i];
        }
    }
    return newStr;
};
console.log(toUppC('  hello,   world!'));
//_____________________________________________________________________________________________________________________
/*Реализуйте и экспортируйте по умолчанию функцию, которая делает заглавной первую букву каждого слова в предложении. */
let toUppCTeacher = (str) => {
    let result = '';
    for (let i = 0; i < str.length; i += 1) {
      const shouldBeBig = str[i] !== ' ' && (i === 0 || str[i - 1] === ' ');
      result += shouldBeBig ? str[i].toUpperCase() : str[i];
    }
  
    return result;
  };
  console.log(toUppCTeacher('  hello,   world!'));
  //_____________________________________________________________________________________________________________________