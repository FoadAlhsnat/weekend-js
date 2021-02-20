function nb_year(p0,percent,aug,p){
for(var i=0;p>p0;i++,p0+=(percent/100)*p0+aug);
return i;
  /*count=0;
  while(p>p0){
    p0+=(percent/100)*p0+aug;
    count++
  }
  return count;*/
}

console.log(nb_year(1500000, 2.5, 10000, 2000000));
