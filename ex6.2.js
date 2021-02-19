function Duplicates(string){
  let count=0;
  let arr=[];
  string=string.toLowerCase().split('').sort();
  for(let i=0;i<string.length;i++){
      count=0;
      for(;string[i+1]==string[i];i++,count++);
      if(count) arr.push(string[i-1],count+1);
  }
  let s=`${arr.length/2} letters occur more than once`;
  for(i=0;i<arr.length;i+=2) s+=` '${arr[i]}'  occurs '${arr[i+1]}' times and `
  return s.slice(0,-4)
}
console.log( Duplicates("Indivisibilities"));