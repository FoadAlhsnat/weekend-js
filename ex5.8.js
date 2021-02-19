function shortestwords(string){
  let arr=[];
  let long=string.split(" ").reduce((acc,curr)=>{
      return curr.length > acc.length ? curr : acc;
  },string.split(" ")[0]).length;
  string.split(' ').map((el)=>{
  if(el.length===long) 
    arr.push(el); 
})
return arr;

}

console.log(shortestwords('foad ssss tt  ff dfsd'))