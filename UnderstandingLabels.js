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

t("Understanding labels with break");
c("I am going to try to use label to exit out of 3 for loops at the same time...");

l("totally_outside: console.log('i m currently totally outside'");
c(" we will have 3 for loops and break abruptly from the outermost loop and try to goto the label 'totally outside'");
totally_outside: 
for(i=0;i<10;i++) {
	for(j=0;j<10;j++){
		for(k=0;k<10;k++) {
			l("i="+i+";; j="+j+";; k="+k);
			if(k==5) {
				been_in_for_loop = true;
				break totally_outside;
			}
		}
	}
}
