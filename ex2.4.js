const Unique=(arr)=>arr.sort((a,b)=>a-b)[0]==arr[1]?arr[arr.length-1]:arr[0];
console.log(Unique([ 0, 0, 0.5, 0, 0]))
