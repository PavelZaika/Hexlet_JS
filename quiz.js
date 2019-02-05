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
console.log (smallestDivisor(71));



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

console.log (sequenceSum(1, 5));


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