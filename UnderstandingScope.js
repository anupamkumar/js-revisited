//// Function scope

var global = "GLOBAL";

function f_global_manipulation() {
	console.log("global's value is "+global);
	global = "GLOBAL CHANGED INSIDE LOCAL";
	console.log("value of global variable after reassignment is "+global);
	// var global = "i m local global variable"
	// console.log("value of local global variable is "+global);
}
console.log("global's value before invoking f() "+global);
f_global_manipulation();
console.log("global's value after invoking f() "+global);
console.log("++++++")

var global = "GLOBAL";
function f_local_fucks_and_hoists_global() {
	console.log("global's value is "+global); /// this will be Undefined!!!!
	var global = "I AM HOISTING GLOBAL MOTHERFUCKER!!"
	console.log("value of global- local variable after reassignment is "+global);
}

console.log("global's value before invoking f() "+global);
f_local_fucks_and_hoists_global();
console.log("global's value after invoking f() "+global);

function fuck_block_scoping() {
	var i=1;
	console.log("i = " + i + " j = " + j);
	console.log("Going inside the for loop ...")
	for(var j=2;j<10;j++) {
		console.log("i = " + i + " j = " + j);
	}
	console.log("Block scope is fucked now ... check the value of i and j");
	console.log("i = " + i + " j = " + j);
	if (i == 1) {
		function square_j() {
			console.log("inside square_j() function ::: i = "+i + " j = " + j);
			console.log("this is expected because the shit ought to accessible inside the sub function and and i and j are not declared inside this function.\
				if i wanted to get a local scope i should have var'ed the variables");
			j=j*j;
			pi=3.14;
			k=99;
			return pi;
		}
		var pi_out = square_j();
		console.log(" value of j now is "+ j);
		console.log(" values of \t pi = "+ pi + " k = " + k + " pi_out = " + pi_out);
	}
	console.log("outside if: pi_out would be fucked in a block scoped language. But pi_out is alive in javascript! " + pi_out );
	console.log("To recap: values of \ti = "+ i +" j = "+j+" pi = "+ pi + " k = " + k + " pi_out = " + pi_out);
	console.log("Holy shit!! ... every variable declared is hoisted!!!");
}

fuck_block_scoping();

var global = "GLOBAL";
function understanding_this() {
	var global = "LOCAL GLOBAL";
	console.log("global global = "+ this.global.toString());
	console.log("local global = "+ global);
	function subfun() {
		var global = "SUBLOCAL";
		console.log("global = "+ global);
		console.log("this.global = "+ this.global.toString());
		console.log("this.this.global = "+ this.this.global);
	}
	subfun();
}

understanding_this();
