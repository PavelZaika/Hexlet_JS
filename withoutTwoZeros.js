/**Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход два аргумента -
 *  количество нулей и количество единиц, и определяет сколько есть способов размещения этих 
 * нулей и единиц так, что бы не было двух нулей идущих подряд.

Например, определим все способы размещения двух нулей и 
двух единиц. Существует шесть возможных способов размещения: 0011, 0101, 0110, 1001, 1010, 1100. 
В трех случаях содержится два нуля, идущих подряд: 0011, 1001 и 1100. 
Вычитаем их из общего числа и получаем три возможных способа: 0101, 0110 и 1010. Ответ - 3. */



const withoutTwoZeros = (x, z) => {

    if (x > z + 1) {
        return 0;
    }
    else if (z === 0 || x === 0) {
        return 1;
    }
    else {
        let arr = [];
        arr = addToArr(0, x).concat(addToArr(1, z));
        let newArr = printPermutations(arr, x + z);
        let str = newArr.join(" ").replace(/,/g, "");
        newArr = str.split(' ');



        newArr = clear_00(newArr);
        newArr.sort(compareNumeric);
        newArr = newArr.filter(element => element !== null);

        newArr = delTheSame(newArr);
        newArr = newArr.filter(element => element !== null);
        return newArr.length;
    }

};

const delTheSame = (arr) => {
    for (let i = 0; i < arr.length; i++)
        if (arr[i] === arr[i + 1]) {
            delete arr[i];
        }
    return arr;
};

const clear_00 = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (~arr[i].indexOf('00')) {
            delete arr[i];
        }
    }
    return arr;
};

const addToArr = (x, n) => {
    let newArr = [];
    for (let i = 0; i < n; i++) {
        newArr.push(x);
    }
    return newArr;
};

const compareNumeric = (a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
};



const printPermutations = (array, k) => {
    let combinations = [];
    let indices = [];
    const next = (index) => {
        if (index == k) {
            let result = [];
            for (let i = 0; i < k; i++) {
                result[i] = array[indices[i]];
            }
            combinations.push(result);
            return;
        }
        for (let i = 0; i < array.length; i++) {
            if (alreadyInCombination(i, index))
                continue;
            indices[index] = i;
            next(index + 1);
        }
    }
    const alreadyInCombination = (i, index) => {
        for (let j = 0; j < index; j++) {
            if (indices[j] == i) {
                return true;
            }
        }
        return false;
    }
    next(0);
    return combinations;
};


console.log(withoutTwoZeros(2, 2));
console.log(withoutTwoZeros(1, 1));
console.log(withoutTwoZeros(1, 3));
console.log(withoutTwoZeros(2, 4));

/*  это решение подсмотрено (взят за основу алгоритм из форума) 
const withoutTwoZeros = (x , z) => {

    if (x > z + 1){
      return 0;
    }
    else if (z === 0 || x === 0 ) {
      return 1;
    }
    else {
      return withoutTwoZeros(x,z-1) + withoutTwoZeros(x-1,z-1);
    }
    
    };
    */


console.log(withoutTwoZeros(3, 1));
console.log(withoutTwoZeros(1, 0));
console.log(withoutTwoZeros(1, 1));
console.log(withoutTwoZeros(3, 5));
console.log(withoutTwoZeros(1, 3));
console.log(withoutTwoZeros(2, 2));
console.log(withoutTwoZeros(2, 4));
console.log(withoutTwoZeros(2, 2));
console.log(withoutTwoZeros(1, 1));
console.log(withoutTwoZeros(1, 3));
console.log(withoutTwoZeros(2, 4)); 
