function WeirdCase(string){
  var str=[];
  string.split("").forEach((element,i) => {
    if(i%2==0){
      return str.push(element.toUpperCase());
    }
    return str.push(element.toLowerCase());
  });
  return str.join('')
}
console.log(WeirdCase("Weird string case"));
