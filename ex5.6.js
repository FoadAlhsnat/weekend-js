const maskify=cc=> cc.length>4?'#'.repeat(cc.length-4)+cc.slice(cc.length-4):cc;

console.log(maskify("Skippy"));