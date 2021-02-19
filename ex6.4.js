function isIsogram(string){
  string=string.toLowerCase().split('').sort();
  for(i=0;i<string.length-1;i++)
    if(string[i]===string[i+1])
      return false;
  return true;    
}

//console.log(isIsogram('Dermatoglyphics'));
console.log(isIsogram('aba'));
//console.log(isIsogram('moOse'));
