// two strings are near equals when they have the same content except the punctuation and display characters. 
// eg: hello world. hello javascript! and HelloWorldHelloJavaScript and helloworldhellojavascript are near equals
// near equals functions will give us that

function isNearEqual(string1, string2) {
	//eliminate punctuation
	var regex_punc = /[\.,!:&;_-'"()\[\]\?]+/g;
	var regex_whitespace = /[ ]+/g
	var string1_nopunc = string1.replace(regex_punc,'');
	var string2_nopunc = string2.replace(regex_punc,'');
	var string1_no_whitespace_and_punc = string1_nopunc.replace(regex_whitespace,"");
	var string2_no_whitespace_and_punc = string2_nopunc.replace(regex_whitespace,"");
	var string1_final = string1_no_whitespace_and_punc.toLowerCase();
	var string2_final = string2_no_whitespace_and_punc.toLowerCase();
	if (string1_final === string2_final) {
		return true;
	}
	else {
		return false;
	}
	console.log(string1_final);
	console.log(string2_final);
}


console.log(isNearEqual("hello,world.","Hello World"));
