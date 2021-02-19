
  /*function findNextSquare(sq){
    if(Math.sqrt(sq)%1 ===0){
      return (Math.sqrt(sq)+1)**2
    }else{
        return -1;
    }
}*/

const findNextSquare=sq=> Math.sqrt(sq)%1?-1:(Math.sqrt(sq)+1)**2



console.log(findNextSquare(121));