/**Реализуйте и экспортируйте по умолчанию функцию isPowerOfThree, 
 * которая определяет, является ли переданное число натуральной степенью тройки. 
 * Например, число 27 — это третья степень: 3^3, а 81 — это четвёртая: 3^4. */

 const isPowerOfThree = (n) => {
 if (n/3 === 1 || n === 1) {
    return true;
   
}

else if (n < 3) {
    return false;
}
else {
   return isPowerOfThree(n/3);
}
 }; 


 console.log(isPowerOfThree(27));
 console.log(isPowerOfThree(1)); // true (3^0)
 console.log(isPowerOfThree(2)); // false
 console.log(isPowerOfThree(9)); // true (3^2)
 console.log(isPowerOfThree(27));
 console.log(isPowerOfThree(81)); // true (3^0)
 console.log(isPowerOfThree(24)); // false
 console.log(isPowerOfThree(4)); // true (3^2)
 console.log(isPowerOfThree(128));
 console.log(isPowerOfThree(666)); // true (3^0)
 console.log(isPowerOfThree(999)); // false
 console.log(isPowerOfThree(2019)); // true (3^2)