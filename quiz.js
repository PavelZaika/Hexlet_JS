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
console.log (smallestDivisor(16));

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

console.log (sequenceSum(1, 50));