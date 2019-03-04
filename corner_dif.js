/* Напишите функцию diff, которая принимает два угла (integer), каждый от 0 до 360, и возвращает наименьшую разницу между ними.

Примеры:

diff(0, 45) === 45;         // не 315, а 45, потому что 45 меньше
diff(0, 180) === 180;
diff(0, 190) === 170;       // не 190, а 170, потому что 170 меньше
diff(120, 280) === 160;
*/


/** teacher
  const diff = (a, b) => {
  const angle = Math.abs(a - b);
  return Math.min(angle, 360 - angle);
}; 

*/

const diff = (a, b) => {
    let res = a - b;
    
    if (res <= 0){
      return (res - (res * 2) <= 180) ? (res - (res * 2)) : 360 - (res - (res * 2)) ;
    
    }
    
    else if (res >= 180){
      return 360 - res;
    }
    
    else return res;
    
    
    
    };

console.log(diff(0, 90));
