function sum(n){
  if(n>0){
    sum=0;
    for(let i=1;i<=n;i++) sum+=i;
    return sum;
  }
  return ` n<0`;
}
console.log(sum(-1));

