/**Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход два аргумента -
 *  количество нулей и количество единиц, и определяет сколько есть способов размещения этих 
 * нулей и единиц так, что бы не было двух нулей идущих подряд.

Например, определим все способы размещения двух нулей и 
двух единиц. Существует шесть возможных способов размещения: 0011, 0101, 0110, 1001, 1010, 1100. 
В трех случаях содержится два нуля, идущих подряд: 0011, 1001 и 1100. 
Вычитаем их из общего числа и получаем три возможных способа: 0101, 0110 и 1010. Ответ - 3. */


/*
Этот вариант не работает при значении (2,4). при других работает.

const withoutTwoZeros = (x, z) => {

    let arr = [];
        arr = addToArr(0, x).concat(addToArr(1, z));
    let cntOfVar2 = factorial(x + z) / (factorial(2) * factorial(x + z - 2));
    console.log(cntOfVar2);

    let newArr = [];
    for (let i = 0; i < cntOfVar2; i++) {

        for (let k = 0; k < (x + z); k++) {
            newArr.push(String(arr.join('')));
            let tmp = arr[k];
            arr[k] = arr[k + 1];
            arr[k + 1] = tmp;

        }

    }

   for (let i = 0; i < newArr.length; i++) {
        if (~newArr[i].indexOf('00')) {
            delete newArr[i];
        }
    }

    newArr.sort(compareNumeric);
   
    for (let i = 0; i < newArr.length; i++)
        if (newArr[i] === newArr[i + 1]) {
            delete newArr[i];
        }

    newArr = newArr.filter(element => element !== null);

  //  console.log(newArr);
    return newArr.length;
};

const factorial = (n) => {

    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }

    return fact;

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
}

console.log(withoutTwoZeros(2, 2));
console.log(withoutTwoZeros(1, 1));
console.log(withoutTwoZeros(1, 3));
console.log(withoutTwoZeros(2, 4)); */


const withoutTwoZeros = (x, z) => {

    
        
    let cntOfVar = factorial(x + z) / (factorial(2) * factorial(x + z - 2));
    
    if (x === 1){
        return x + z;
        
    }
    else if (x === 0){
        return 1;            
    }

    else {
        return cntOfVar - (x+z-1);
    }
};

const factorial = (n) => {

    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }

    return fact;

};

console.log(withoutTwoZeros(3, 1));
console.log(withoutTwoZeros(3, 2));
console.log(withoutTwoZeros(1, 1));
console.log(withoutTwoZeros(3, 5));
console.log(withoutTwoZeros(1, 3));
console.log(withoutTwoZeros(2, 2));
console.log(withoutTwoZeros(2, 4));
