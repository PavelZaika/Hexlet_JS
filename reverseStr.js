/* Реализуйте и экспортируйте функцию по умолчанию, которая переворачивает строку задом наперед, используя рекурсию.

Например:

import reverse from './reverse';

reverse('str');    // rts
reverse('hexlet'); // telxeh

Попробуйте решить эту задачу, используя рекурсивный процесс. 
Для этого вам понадобится метод substr. */

const reverseStr = (str) => {

    if (str === "") {
        return "";
    } else {
        return str.substr(str.length - 1, 1) + reverseStr(str.substr(0, str.length -1 ));;
    }
    
};

console.log(reverseStr('ABCDE'));