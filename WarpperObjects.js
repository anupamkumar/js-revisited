var string1 = "Hello World";
console.log("The length of string1 is : "+string1.length);
var x = string1.length = 1;
string1.length = 2;
var t = string1.length;
console.log("x = "+x+" x.length = " + x.length + " typeof x = "+typeof(x));
console.log("t = "+t+" t.length = " + t.length + " typeof t = "+typeof(t));
console.log("MORAL : strings, numbers, and boolean values behave like objects\
 when you try to read the value of a property (or method) from them.\
  But if you attempt to set the value of a property,\
   that attempt is silently ignored: \
   the change is made on a temporary object and does not persist.");

var aStringValue = "hello world";
var aStringObject = new String(aStringValue);
var aNumberValue = 3.14;
var aNumberObject = new Number(aNumberValue);
var aBooleanValue = true;
var aBooleanObject = new Boolean(aBooleanValue);
console.log("typeof of aStringValue = "+typeof(aStringValue) + " typeof of aStringObject = "+typeof(aStringObject));
console.log("typeof of aStringValue = "+typeof(aNumberValue) + " typeof of aStringObject = "+typeof(aNumberObject));
console.log("typeof of aStringValue = "+typeof(aBooleanValue) + " typeof of aStringObject = "+typeof(aBooleanObject));
console.log("Performing checks ... ");
console.log("strict equality between : aStringObject and aStringValue : "+ aStringValue === aStringObject);
console.log("non-strict equality between : aStringObject and aStringValue : "+ aStringValue == aStringObject);
console.log("strict equality between : aBooleanValue and aBooleanObject : "+ aBooleanObject === aBooleanValue);
console.log("non-strict equality between : aStringObject and aStringValue : "+ aBooleanValue == aBooleanObject);
console.log("strict equality between : aNumberValue and aNumberObject : "+ aNumberValue === aStringObject);
console.log("non-strict equality between : aNumberValue and aNumberObject : "+ aNumberObject == aNumberValue);