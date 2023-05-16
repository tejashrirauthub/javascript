console.log("1-------square of given number---------");
var square=function(value){
    var result=value*value;
    console.log(`Square of given number is ${result}`);
}
square(5);
square(6);
square(25);
square(100);
 console.log("2--------Type of function----------");
console.log("Type of function",typeof square);

console.log("3----------Area of rectangle--------");
var rectangle=function(length,width){
var area=length*width;
console.log(`Area of rectangle ${area}`);
}
rectangle(499,917);

console.log("4----------swap values-----------");
var swapValues=function(num1,num2){
    console.log(`Before swap values are: ${num1} , ${num2}`);
var temp=num1;
num1=num2;
num2=temp;
console.log(`After swap values are: ${num1} , ${num2}`);

}
swapValues("virat","Anushka");
swapValues(1000,2000);
 

console.log("5-----------Given String:-----------");
var string="JS the most popular language of internet";
console.log(string);
var result=string.length;
console.log(`A.Total character of available string ${result}`)

var charAtSixIndex=string.charAt(6);                //char at zeo index
console.log(`B.Character at 6 index ${charAtSixIndex}`);

var charAtIndex=string.charAt(11);                //char at zeo index
console.log(`c.Character at 11 index ${charAtIndex}`);
var charAtLastIndex=string.charAt(string.length-1);  //char at last index
console.log(`Last Character ${charAtLastIndex}`);
var charAtZeroIndex=string.charAt(0);                //char at zeo index
console.log("first Character",charAtZeroIndex);
var wordSplit=string.split(" ");
var splitlen=wordSplit.length;
console.log(`Total number of word is ${splitlen}`);           

var square=splitlen*splitlen;
console.log(`Square of total number of words in given string ${square}`);



