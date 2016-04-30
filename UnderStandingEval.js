var chalk = require('chalk');


// c is for comments
function c(str) {
	console.log(chalk.cyan(str));
}

//l is log as in console.log ... to verify and validate the outputs to the input
function l(str) {
	console.log(chalk.bgYellow(chalk.black(str)));
}


//t is for title ... to split the lesson into sections
function t(str) {
	console.log(chalk.bold(chalk.underline(chalk.red(str))));
}


