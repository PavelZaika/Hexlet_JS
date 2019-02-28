/**Реализуйте и экспортируйте по умолчанию функцию reverseInt, которая переворачивает цифры в переданном числе и возвращает новое число.

reverseInt(13); // 31
reverseInt(-123); // -321
reverseInt(8900); // 98
 */



const reverseInt = (num) => {
    let numToString = String(num);
    let reversedString = '';

    for (let i = numToString.length - 1; (num >= 0) ? i >= 0 : i >= 1; i--) {
        reversedString = reversedString + numToString[i];
    }
    return (num >= 0) ? +reversedString : -reversedString;

};

console.log(reverseInt(1234));
console.log(reverseInt(-1234));
console.log(reverseInt(8900));