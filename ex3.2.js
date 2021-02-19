function People(arr){
  let sum=arr[0][0];
  for(i=1;i<arr.length;i++){
    sum+=(arr[i][0]-arr[i][1]);
  }
  return sum;
}

console.log(People([[5,0],[2,3],[0,1]]))