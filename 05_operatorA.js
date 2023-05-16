console.log("1.-------------Length of word and it's square-------------------");
function squareOfWordLength(value1,value2,value3){
    var result=value1.length
    console.log(`Length of word javascript is ${result}`);
    var square=result*result;
    console.log(`Square of it's Length ${square}`);
var result=value2.length;
    console.log(`Length of word  Google chrome is ${result}`);
    var square=result*result;
    console.log(`Square of it's Length ${square}`);
var result =value3.length;
 console.log(`Length of word  Developer smart is ${result}`);
    var square=result*result;
    console.log(`Square of it's Length ${square}`);
     
}
squareOfWordLength("javascript","Google Chrome","Developer Smart");

console.log("2.----------------Given String---------------");
function newFun(){
var str="I am Angular Developer";
console.log(`${str}`);
var len=str.length;
console.log(`length of string ${len}`);
var wordSplit=str.split(" ");
var splitlen=wordSplit.length;
console.log(`Total number of word is ${splitlen}`);
var divResult=len/splitlen;
console.log(`Divide result is: ${divResult}`);
var multiResult=len *splitlen;
console.log(`multiply result is: ${multiResult}`);


}
newFun();



