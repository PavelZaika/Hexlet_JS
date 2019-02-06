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
        let test = n%counter;
        if (test === 0){
        res++;
        }
      }
        
      return (res === 2);
    };
    console.log (isPrime(2017));

    //_____________________________________________________________________________________________________________________
