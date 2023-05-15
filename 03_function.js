
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



function addtion(num1,num2){
    var result=num1+num2;
    return result;

}
var returnValue=addtion(100,200);
console.log("addition of number is:",returnValue);
var returnResult=addtion(890.400,600.3456);
console.log("addition of number is",returnResult);