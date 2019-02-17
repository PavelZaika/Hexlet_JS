//_____________________________________________________________________________________________________________________
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

const reverseReverse = (str) => {

    return str.split("").reverse().join("");

};

console.log(reverseReverse('California'));


//_____________________________________________________________________________________________________________________

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

let toUppCTeacher = (str) => {
    let result = '';
    for (let i = 0; i < str.length; i += 1) {
      const shouldBeBig = str[i] !== ' ' && (i === 0 || str[i - 1] === ' ');
      result += shouldBeBig ? str[i].toUpperCase() : str[i];
    }
  
    return result;
  };
  console.log(toUppCTeacher('  hello,   world!'));

  //test 
  //_____________________________________________________________________________________________________________________
