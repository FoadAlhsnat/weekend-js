function shortestwords(string){
  return string.split(" ").reduce((acc,curr)=>{
      return curr.length < acc.length ? curr : acc;
  }).length
}

console.log(shortestwords('foad sssss tt dfsdfadsfads'))
