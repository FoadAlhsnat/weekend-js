function organize(str,str1){
  str+=str1;
  return  str.split('').sort().filter((el,index,str)=>str.indexOf(el)==index).join('');
}
console.log(organize('xyaabbbccccdefww','xxxxyyyyabklmopq'));