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



c("recussion solution to find recursive nth fabonacci series");
c("example : 0,1,1,2,3,5");

function fabo_recu(x) {
	debugger;
	if(x < 1)
		return 0
	if(x==1)
		return 0
	if(x==2)
		return 1
	return fabo_recu(x-1) + fabo_recu(x-2);
}

l("fabo_recu(6)="+fabo_recu(6));
l("fabo_recu(7)="+fabo_recu(7));
l("fabo_recu(8)="+fabo_recu(8));
l("fabo_recu(9)="+fabo_recu(9));
l("fabo_recu(10)="+fabo_recu(10));

