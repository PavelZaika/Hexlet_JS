import square from './square';
import {getTriangleArea} from './myMathModule' 


const sqFunk = (n) => {
  return getTriangleArea(n, square(n)/2);
};



console.log(sqFunk(3));

export default sqFunk;