/// none of these will work because 

var now = new Date();
// - will convert date to number but not back to date
var yest = now - (1000*60*60*24) 
// + will convert date to string and thus concat the date string with 1
var tomm = now + 1;
// this will attempt to subtract a string with number , since the string cannot be converted to number it will result in NaN
var no_of_days = tomm - yest;
console.log("today is "+now);
console.log("yesterday was "+yest);
console.log("tomorrow will be "+tomm);
console.log("number of days between yesterday and tomorrow is "+no_of_days);
console.log("********************************");
///  you would think this should work
var yest = new Date(now.getDate() - (1000*60*60*24) );
var tomm = new Date(now.getDate() + (1000*60*60*24) );
var no_of_days = tomm.getDate() - yest.getDate();
console.log("today is "+now);
console.log("yesterday was "+yest);
console.log("tomorrow will be "+tomm);
console.log("number of days between yesterday and tomorrow is "+no_of_days);

var zero_date = new Date(0);
console.log("zeroth date "+zero_date);

//// first 31 days in unix calander
// console.log("The first 31 days seconds ... 1 milli second at a time in unix calander");
// for (i =0;i<86400000;i++) {
// 	console.log(new Date(i));
// }


////// but it does not wtf ... 
//// lets check now.getDate() function

//			console.log("\n"+now.getDate() +"\n" + now.getTime() +"\n"+ typeof(now) +"\n" + typeof(now.getDate()) + "\n" + typeof(now.getTime()) );


//// why it did not work ... because getDate() returns the date part of the Date object 
//// you can add or subtract the number but new Date( <just the date part >) will just create a new date with <> part added (intepreted in milli-sec) 
//// to the unix zeroth day (31st Dec 1969)
//// the correct way would be to either add 1 day worth of millisecs or use setDate() function 

var yest = new Date();
yest.setDate(now.getDate() - 1);
var tomm = new Date();
tomm.setDate(now.getDate() + 1);

var no_of_days = tomm.getDate() - yest.getDate();
console.log("********************************");
console.log("today is "+now);
console.log("yesterday was "+yest);
console.log("tomorrow will be "+tomm);
console.log("number of days between yesterday and tomorrow is "+no_of_days);
