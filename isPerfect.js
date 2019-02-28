const isPerfect = (num) => {

    let n = 0;

    for (let i = num - 1; i > 0; i--) {

        if (num % i === 0) {
            n += i;
        }

    }

    if (num / n === 1) {
        return true;
    }

    else {
        return false;
    }

};

console.log(isPerfect(8126));