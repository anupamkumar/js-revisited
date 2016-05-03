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

c("Let's define a function to find factorial");

function fact1(n) {
	if (n==0)
		return 1;
	return n * fact1(n-1);
}

c("lets try to find fact1(5)");
l("fact(5) = "+fact1(5));
try {
	c("lets try fact1(-5)");	
	l("fact(-5) = "+fact1(-5));
}
catch (e) {
	t("exception e was raised and caught by catch block ... are you not glad i placed calling fact1(-5) inside catch");
	t("the exact message of e is "+e);
	c("get fucked fact1(-5)");
	c("lets redefine with exception handling in place");
}

c("currently outside of catch ...let's define fact() again, with a custom exception handler message");

function fact2(n) {
	if ( n < 0 ) 
		throw Error("Only positive numbers have factorials");
	if (n==0)
		return 1;
	return n * fact2(n-1);
}

c("lets try fact2(-5) again...between try-catch");
try {
	l("fact2(-5) =="+fact(-5));
}
catch(e) {
	l("now e ="+e);
	c("this is a more 'user centric message' because the developer anticipated and put a custom message");
	c("the entire try catch thingy can be placed inside the fact function ... this will rid us of handling the anticipated negative number error");
}

t("moving try catch inside fact()");

function fact(n) {
	try {
		if ( n < 0 )
			throw Error("Only +ve numbers have factorials");
		if(n==0)
			return 1;
		return n * fact(n-1);
	}
	catch(e) {
		l("e is caught : e="+e);
		return 0;
	}
}

l("fact(-5) ="+fact(-5));

c("lets make fact() wolfram alpha compliant... it gives the solution to negative factorial too.");

function fact(n) {
	var ngNo = false;
	if ( n < 0 )
		ngNo = true
	if(ngNo)
		n = n* -1;
	if (n==0)
		return 1;
	if (n==1 && ngNo)
		return -1;
	else if(n==1 && !ngNo)
		return 1;
	if(ngNo)
		return n * fact((n-1)*-1);
	else
		return n * fact(n-1);
}

l("fact(-5)="+fact(-5));
l("fact(-4)="+fact(-4));
l("fact(-3)="+fact(-3));
l("fact(-6)="+fact(-6));

c("now fact negative numbers also works.. :)");


t("understanding finally block");
c("finally block always executes no matter what.");
c("Let's reset fact() to have try-catch-finally.");

function fact(n) {
	try {
		l("inside try: n="+n);
		if(n<0)
			throw Error("Only +ve numbers allowed");
		if(n==0)
			return 1;
		return n * fact(n-1);
	}
	catch(e) {
		l("inside catch");
		l(e);
	}
	finally {
		l("inside finally. finally always executes");
	}
}

c("lets try to execute finally without any exceptions.");

l("fact(5)="+fact(5));
c("lets try to execute exception case for fact()");
l("fact(-5)="+fact(-5));

c("in both cases finally block executed.");
c("we can use finally in a clever way to emulate wolfram style execution. here's how");
c("we 'clean up' the exception if necessary in finally");

function fact(n) {
	try {
		l("inside try: n="+n);
		if(n<0)
			throw Error("Only +ve numbers allowed");
		if(n==0)
			return 1;
		return n * fact(n-1);
	}
	catch(e) {
		l("inside catch");
		l(e);
	}
	finally {
		l("inside finally. finally always executes");
		if(n<0)
			return n * fact((-1*n)-1);
	}
}

c("let try it");
l("fact(-5)="+fact(-5));
l("fact(5)="+fact(5));

c("Unrelated --- Special Note : actually, even try - catch is not necessary");
c("i have redefined fact() without any try catch that should work without any issues");

function factAll(n) {
	if(n<0)
		return n * fact((-1*n)-1);
	if(n==0)
		return 1;
	return n*fact(n-1);
}


c("let try it");
l("factAll(-5)="+factAll(-5));
l("factAll(5)="+factAll(5));
