function WeirdCase(string){
  let str=string.split("");
  return string.split("").map((val,i)=>i%2?val.toLowerCase() :val.toUpperCase()).join('')
  /*string.split("").forEach((element,i) => {
    if(i%2==0){
      return str.push(element.toUpperCase());
    }
    return str.push(element.toLowerCase());
  });
  return str.join('')*/
}
console.log(WeirdCase("Weird string case"));
