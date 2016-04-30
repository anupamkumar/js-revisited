var chalk = require('chalk');

function c(str) {
	console.log(chalk.cyan(str));
}

function l(str) {
	console.log(chalk.bgYellow(chalk.black(str)));
}

function t(str) {
	console.log(chalk.bold(chalk.underline(chalk.red(str))));
}


t("Bit wise operators highlights --- ");
c("<< shifts the bit left by adding a zero to the right of the binary representation of the number");
c("all bitwise shift operators only take the first 32 bits of the binary number regardless of the size of the number");
l("declare n = 100");
n=100

l("binary representation of this number is " + n.toString(2));
c("left-shift << the number by 1 digit. This is effectively multipling the number by 2. left shifting the number by 2 digits is multipling by 4 and so on ... ");
m=n<<1
l("m is the result of n << 1 : m = "+m);
l("binary representation of this number is " + m.toString(2));
c("now consider n to be a number greater than 32 bits");
n=Math.pow(2,36);
l("let n be 2^36 : so, n = "+n);
l("binary representation of this number is " + n.toString(2));
c("notice that this number has more than 32 bits in it. also notice that the first 32 bits are all zeros. let's left shift n by 1 digit");
m=n<<1;
l("m is the result of n << 1 : m = "+m);
l("binary representation of this number is " + m.toString(2));
c("the value of m is zero because javascript engine only considered the first 32 bits of the n for left shifting and since that is all zeros. leftshifting all zeros will still be zero.");
c("same goes with right shift too");

t(">> and >>>");
c(">> fucks up the sign of the number given to it. >>> always considers the signed bit to be zero");
l("consider n = 31");
n=31;
l("n's binary representation is n="+n.toString(2));
l("m=n>>1; o=n>>>1");
m=n>>1;
o=n>>>1;
l("values of m and o are : m="+m + " o="+o);
l("their binary representations : m="+m.toString(2) + " o="+o.toString(2));
n=-4;
l("now consider n to be "+n);
l("n's binary representation is n="+n.toString(2));
l("m=n>>1; o=n>>>1");
m=n>>1;
o=n>>>1;
l("values of m and o are : m="+m + " o="+o);
l("their binary representations : m="+m.toString(2) + " o="+o.toString(2));
