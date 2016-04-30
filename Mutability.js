var s = "hello world"
var S = s.toUpperCase();
console.log(s);
console.log(S);
console.log("typeof S = "+typeof(S) + " typeof s = " + typeof(s));
s[2] = "L";
console.log(s);
console.log("Even after trying to assign value to s[2] s did not change. \
A temp variable was created, containing the string helLo world instead in the memory. \
\nMORAL: primitives are unmutable (they cannot mutate/change). \
Will need to regex functions or string functions to alter contents in a string. \
However, they too will create temp intermittent objects and eventually refer to the assigned object.");