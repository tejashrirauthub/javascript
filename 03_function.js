
function showName(){
console.log("show function");
}
console.log("before function call");
showName();//function call or invoke
console.log("After function");

var numone=100;
var numtwo=200;
function swapVariables(valueone,valuetwo){
    console.log("before swap",valueone,valuetwo);
var temp=valueone;
    valueone= valuetwo;
    valuetwo=temp;
    console.log("after swap",valueone,valuetwo);
}
swapVariables(numone,numtwo);