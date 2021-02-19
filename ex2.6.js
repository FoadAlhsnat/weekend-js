// function centuryFromYear(year){
//   year= year.toString();
//   if(year[year.length-1]==='0')return(year[0]+'0')
//   return console.log(year[0]+'1')
// }

// centuryFromYear(2001)


const centuryFromYear =year=> year%10? year.toString()[0]+'1':year.toString()[0]+'0';

console.log( centuryFromYear(2000));