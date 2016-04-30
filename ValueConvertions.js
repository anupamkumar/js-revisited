var v1 = undefined;
var v2 = null;
var b1 = true;
var b2 = false;
var s1 = "";
var s2 = "1.6";
var s3 = "one";
var n1 = 0;
var n2 = -0;
var n3 = 3;
var n4 = -3;
var n5 = Infinity;

//converstion to string 
var v1s = new String(undefined);
var v2s = new String(null);
var b1s = new String(true);
var b2s = new String(false);
var s1s = new String("");
var s2s = new String("1.6");
var s3s = new String("one");
var n1s = new String(0);
var n2s = new String(-0);
var n3s = new String(3);
var n4s = new String(-3);
var n5s = new String(Infinity);

console.log(v1s);
console.log(v2s);
console.log(b1s);
console.log(b2s);
console.log(s1s);
console.log(s2s);
console.log(s3s);
console.log(n1s);
console.log(n2s);
console.log(n3s);
console.log(n4s);
console.log(n5s);


var v1s = undefined+"";
var v2s = null+"";
var b1s = true+"";
var b2s = false+"";
var s1s = ""+"";
var s2s = "1.6"+"";
var s3s = "one"+"";
var n1s = 0+"";
var n2s = -0+"";
var n3s = 3+"";
var n4s = -3+"";
var n5s = Infinity+"";

console.log("****");

console.log(v1s + " :: "+ typeof(v1s));
console.log(v2s + " :: "+ typeof(v2s));
console.log(b1s + " :: "+ typeof(b1s));
console.log(b2s + " :: "+ typeof(b2s));
console.log(s1s + " :: "+ typeof(s1s));
console.log(s2s + " :: "+ typeof(s2s));
console.log(s3s + " :: "+ typeof(s3s));
console.log(n1s + " :: "+ typeof(n1s));
console.log(n2s + " :: "+ typeof(n2s));
console.log(n3s + " :: "+ typeof(n3s));
console.log(n4s + " :: "+ typeof(n4s));
console.log(n5s + " :: "+ typeof(n5s));
