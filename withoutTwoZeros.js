/**Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход два аргумента -
 *  количество нулей и количество единиц, и определяет сколько есть способов размещения этих 
 * нулей и единиц так, что бы не было двух нулей идущих подряд.

Например, определим все способы размещения двух нулей и 
двух единиц. Существует шесть возможных способов размещения: 0011, 0101, 0110, 1001, 1010, 1100. 
В трех случаях содержится два нуля, идущих подряд: 0011, 1001 и 1100. 
Вычитаем их из общего числа и получаем три возможных способа: 0101, 0110 и 1010. Ответ - 3. */


const withoutTwoZeros = (x, z) => {

let arr = [];
let cntOfDif = 0;
arr = addToArr(0 , x).concat(addToArr(1, z));
let cntOfVar2 = factorial(x+z)/(factorial(2)*factorial(x+z-2));
console.log(cntOfVar2);
let newArr = [];
for (let i =0; i < cntOfVar2; i++) {
    
    for (let k = 0; k < (x+z); k++ ) 
    {
        newArr[i] += String(arr[k]);
    }


}

};



const factorial = (n) => {

    let fact = 1;
    for (let i= 1; i <= n;i ++){
fact *= i;
    }

return fact;

};



const addToArr = (x, n) => {
let newArr = [];
    for (let i = 0; i < n; i++){
newArr.push(x);
    }
    return newArr;
};



console.log (withoutTwoZeros(2,3));
