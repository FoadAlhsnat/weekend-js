const Tribonacci=num=>num<=3?1:Tribonacci(num-1)+Tribonacci(num-2)+Tribonacci(num-3)// sum 


function Tribonacci(num){// return array
  let arr=[1,1,1]
  for(let i=2;i<num;i++){
    arr.push(arr[i]+arr[i-1]+arr[i-2])
  }
  return arr;
}

