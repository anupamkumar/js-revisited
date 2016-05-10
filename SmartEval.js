//// this script smartly evaluates the js-revisited scripts. "smart eval" will do the following to the JS files
//// 1. convert // comments to be printed in the output
//// 2. print the function defination defined
//// 3. evaluate function calls and output them in order. 

//// this will be a mediator script that will interpret any javascript file. 
//// Usage:
//// $ node SmartEval.js <javascript to be evaluated>

//// Dependencies : Only needs Chalk.js

fs = require('fs');

fs.access(process.argv[2], fs.R_OK, function(err) {
	if(!err) {
		fs.readFile(process.argv[2],'utf8',parseFileData);
	}
	else {
		console.log("Invalid file specified or file does not exist");
	}
});

function parseFileData(err,data) {
	if(!err) {
		console.log(data);
	}
	else {
		console.log("You have requested a non-text file, to be evaluated. Cannot parse it.");
	}
}

function extractFunction(functionName) {
	
}