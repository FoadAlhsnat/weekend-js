const Fibonacci=num=>num<=2?1:Fibonacci(num-1)+Fibonacci(num-2)//return sum

console.log(Fibonacci(8));




const Fibonacci=num=>{//return array
  let arr=[1,1]
  for (let i = 1; i <= num; i++) {
    arr.push(arr[i]+arr[i-1])
  return arr;
}
}
