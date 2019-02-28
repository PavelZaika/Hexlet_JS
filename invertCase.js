/**Реализуйте и экспортируйте по умолчанию функцию invertCase, 
 * которая меняет в строке регистр каждой буквы на противоположный.

invertCase('Hello, World!'); // hELLO, wORLD!
invertCase('I loVe JS');     // i LOvE js
 */


 const invertCase = (str) => {
let newStr = '';
    for (let i = 0; i <= str.length - 1; i ++ ) {
        (str[i] === str[i].toUpperCase()) ? newStr += str[i].toLowerCase() :  newStr += str[i].toUpperCase();
    }
    return newStr;
 };

 console.log(invertCase('Hello, World!'));
 console.log(invertCase('TTeeSstT'));
