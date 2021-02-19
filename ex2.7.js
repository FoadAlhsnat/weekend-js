function BasicMath(op,num1,num2){
  if(op==='/') return num2?num1/num2:`cant div by 0`
  switch(op){
    case '+':
      return num1+num2;
    case '-':
      return num1-num2;
    case '*':
      return num1*num2;
    default:
      return `not oper`      
  }
}

console.log(BasicMath('=',4,3))