//function to create random number between two numbers min & max where 
// min <= max
// -Inf <= min

function random(min,max) {
	if (min < max && min > Number.NEGATIVE_INFINITY) {
		var randomMax = Math.round(max * Math.random());
		var randomMin = Math.round(min * Math.random());
		var flip = Math.round(Math.random());
		if(flip == 0) {
			if ( randomMax <= max && randomMax >= min) {
				return randomMax;
			}
			else {
				return random(min,max);
			}
		}
		else {
			if ( randomMin <= max && randomMin >= min) {
				return randomMin;
			}
			else {
				return random(min,max);
			}
		}
	}
	else if (max == min) {
		return max;
	}
	else {
		console.log("Min > Max , this is an illogical request. How can minimum be greater than maximum stupid.");
	}
	return randomAvg; 
}
var hyp1 = [];
var hyp2 = [];
var hyp3 = [];
var hyp4 = [];
var hyp5 = [];
var hyp6 = [];

for(i=0;i<50;i++) {
	console.log("trial #"+i);
	hyp1[i] = random(-10,10);
	hyp2[i] = random(5,15);
	hyp3[i] = random(1500000,9500000);
	hyp4[i] = random(1,3);
	hyp5[i] = random(3,4);
	hyp6[i] = random(-15,-5);
	console.log("calculating random numbers between -10,10 : "+ hyp1[i]);
	console.log("calculating random numbers between 5,15 : "+ hyp2[i]);
	console.log("calculating random numbers between 1500000,9500000 : "+ hyp3[i]);
	console.log("calculating random numbers between 1,3 : "+ hyp4[i]);
	console.log("calculating random numbers between 3,4 : "+ hyp5[i]);
	console.log("calculating random numbers between -15,-5 : "+ hyp6[i]);
}

var freq1 = {};
var freq2 = {};
var freq3 = {};
var freq4 = {};
var freq5 = {};
var freq6 = {};

for(i=0;i<hyp1.length;i++) {
	if(freq1[hyp1[i]] === undefined) {
		freq1[hyp1[i]] = 1;
	}
	else {
		var curCount = freq1[hyp1[i]];
		curCount ++;
		freq1[hyp1[i]] = curCount;
	}
}


for(i=0;i<hyp2.length;i++) {
	if(freq2[hyp2[i]] === undefined) {
		freq2[hyp2[i]] = 1;
	}
	else {
		var curCount = freq2[hyp2[i]];
		curCount ++;
		freq2[hyp2[i]] = curCount;
	}
}


for(i=0;i<hyp3.length;i++) {
	if(freq3[hyp3[i]] === undefined) {
		freq3[hyp3[i]] = 1;
	}
	else {
		var curCount = freq3[hyp3[i]];
		curCount ++;
		freq3[hyp3[i]] = curCount;
	}
}


for(i=0;i<hyp4.length;i++) {
	if(freq4[hyp4[i]] === undefined) {
		freq4[hyp4[i]] = 1;
	}
	else {
		var curCount = freq4[hyp4[i]];
		curCount ++;
		freq4[hyp4[i]] = curCount;
	}
}


for(i=0;i<hyp5.length;i++) {
	if(freq5[hyp5[i]] === undefined) {
		freq5[hyp5[i]] = 1;
	}
	else {
		var curCount = freq5[hyp5[i]];
		curCount ++;
		freq5[hyp5[i]] = curCount;
	}
}


for(i=0;i<hyp6.length;i++) {
	if(freq6[hyp6[i]] === undefined) {
		freq6[hyp6[i]] = 1;
	}
	else {
		var curCount = freq6[hyp6[i]];
		curCount ++;
		freq6[hyp6[i]] = curCount;
	}
}

console.log("Freq1 = "+JSON.stringify(freq1));
console.log("Freq2 = "+JSON.stringify(freq2));
console.log("Freq3 = "+JSON.stringify(freq3));
console.log("Freq4 = "+JSON.stringify(freq4));
console.log("Freq5 = "+JSON.stringify(freq5));
console.log("Freq6 = "+JSON.stringify(freq6));