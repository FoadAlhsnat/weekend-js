function longestwords(string){
  let long=string.split(" ").reduce((acc,curr)=>{
      return curr.length > acc.length ? curr : acc;
  }).length;
  return string.split(' ').filter((el)=>el.length===long)
}

console.log(longestwords('foad ssss tt  ff dfsd'))
