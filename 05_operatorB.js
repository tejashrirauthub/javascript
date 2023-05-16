console.log("1)---------find the greatest number among two number-------------");
var greaterNumber=function(num1,num2){
  var result=num1>=num2 ? `${num1}  is greater ${num2}` : `${num2} is greater ${num1}`;
  console.log(result);
}
greaterNumber(10,-10);
greaterNumber(800,899);

console.log("------------check even number or odd number----------------------");
var isEvenOrOddNum=function(num){
var result=num%2==0 ? true :false;
return result;
}
var result= isEvenOrOddNum(29);
var res=(result==true) ? " 29  is even":"29 is odd";
console.log(`${res}`);
var result= isEvenOrOddNum(44);
var res=(result==true) ? "44 is even":"44 is odd";
console.log(`${res}`);
var result= isEvenOrOddNum(0);
var res=(result==true) ? "0 is even":"0 is odd";
console.log(`${res}`);
var result= isEvenOrOddNum(101);
var res=(result==true) ? " 101 is even":"101 is odd";
console.log(`${res}`);

console.log("------------check given word has even or odd length--------------");

var wordLength=function(word){
  var len=word.length;
var result=len%2==0 ? "Even" : "ODD";
 return result;
}
var returnValue=wordLength("JavaScript");
console.log(`Javascript has ${returnValue}`);
var returnValue=wordLength("developer");
console.log(`developer has ${returnValue}`);
var returnValue=wordLength("Google");
console.log(`Google has ${returnValue}`);