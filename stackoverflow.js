function one(numOneIn) {

two(numOneIn * 3); //1x3

console.log ("one()="+numOneIn); //3

}

function two(aNumberIn) { 

console.log ("two()="+aNumberIn); //1

}

function three(numIn) {

one(numIn * 2); 

console.log ("three()="+numIn);

}

three(5);