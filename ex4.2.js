const Tribonacci=num=>num<=3?1:Tribonacci(num-1)+Tribonacci(num-2)+Tribonacci(num-3)
console.log(Tribonacci(8));


function Tribonacci(num){
  if(num<=3)return 1
  return Tribonacci(num-1)+Tribonacci(num-2)+Tribonacci(num-3);
}

