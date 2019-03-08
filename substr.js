const substr = (str, a = 0, b = str.length) => {
   
    if ( b === 0 || a >= str.length || str.length <=0) {
        return str = '';
      }
    
    if (b < 0) {
      b = 1;
    }

    if (a < 0) {
        a = 0;
      }
    
    
    if (a + b - 1 >= str.length){
      
        b = str.length-1;
     
    }
    let newStr ='';
return newStr += str[a]+substr(str, a+1,b-1);  
    };
 console.log(substr('abba', 1, 2));
 console.log (substr('abba'));
 console.log(substr('abba', 0, 1));
 console.log(substr('abba', -1, 100));
 console.log(substr('abba', 1, 10));

  