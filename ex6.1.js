const accum=str=>str.toLowerCase().split('')
.map((element,index) => element.toUpperCase()+element.repeat(index)).join('-')



console.log(accum('abCd'));