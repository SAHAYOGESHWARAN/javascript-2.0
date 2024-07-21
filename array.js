const ary = ["i love you", "you love me"];
const flatten = ary.flatMap(v => v.split(' '));
console.log(flatten);
