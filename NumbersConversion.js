/// javascript can convert a decimal number to base-x by toString() 

///binary number
var n=22;
console.log(n);
console.log(n.toString(2));
console.log(n.toString(16));

///decimal number
var bin=1111
console.log(n);
console.log(n.toString(10));
console.log(n.toString(16));


//// javascript number precision can take place by using toFixed(), toExponential() and toPrecision() functions .
//// these functions convert the number to string
/// toFixed() return a string with the requested decimal places. it will never convert number to exponential notation
console.log("Number printed fixed to 15 decimal digits: "+n.toFixed(20)); 
/// toExponential() will convert a number to it's exponential notation
console.log("Number printed in exponential notation: "+n.toExponential(5));
/// toPrecision() will convert a number to the passed precision
console.log("Number printed in precision: "+n.toPrecision(21));


//////However if the precision is more than MAX allowed toFixed() fails in Node ?????
var N_a=6.023*100000000000000000000000; ///avogadro's number
console.log("avogadro's number printed fixed to 20 (max) decimal digits: "+N_a.toFixed(20)); 
/// toExponential() will convert a number to it's exponential notation
console.log("avogadro's number printed in exp(5) exponential notation: "+N_a.toExponential(5));
/// toPrecision() will convert a number to the passed precision
console.log("avogadro's number printed in max precision: "+N_a.toPrecision(21));


var e=1.60217662*(1/10000000000000000000);
console.log("electon's charge printed fixed to 20 (max) decimal digits: "+e.toFixed(20)); 
/// toExponential() will convert a number to it's exponential notation
console.log("electon's charge printed in exp(20) exponential notation: "+e.toExponential(20));
/// toPrecision() will convert a number to the passed precision
console.log("electon's charge printed in max precision: "+e.toPrecision(21));


///// strings that start with number and do not contain any non-numeric characters can be converted to number by passing it 
///// into number() object 

///// string that start with numbers but have non-numeric characters get converted to numbers using the parseInt and parseFloat 
///// objects in the String() object

var dozen = "12 egss is a dozen";
console.log("dozen ===" + dozen);
console.log("number(dozen) variable = " + new Number(dozen));
console.log("parseInt(dozen)variable = " + parseInt(dozen));
console.log("parseFloat(dozen) variable = " + parseFloat(dozen));
console.log("parseFloat(dozen).toPrecision(10)" + parseFloat(dozen).toPrecision(10));

////parseInt can be used to convert numeric part of string to a number with any base between 2 and 36
var base36_num = "Aa12";
console.log(parseInt(base36_num,36));




