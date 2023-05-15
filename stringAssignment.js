function stringHandsOn(){

}
var myString="  Hey you are doing good,keep it up   ";
console.log(myString);
var myStringLength=myString.length;
console.log("string length is:",myStringLength);
 
var trimmedString=myString.trim();
var trimedStringLength=trimmedString.length;
console.log("trimmed string is",trimmedString);
console.log("trimmed string length is:",trimedStringLength);
var totalExtraSpace=myStringLength-trimedStringLength;
console.log("total extra spaces:",totalExtraSpace);
var charAtZeroIndex=trimmedString.charAt(0);
var charAtLastIndex=trimmedString.charAt(trimedStringLength-1);
console.log("char at zero index:",charAtZeroIndex);
console.log("char at last index:",charAtLastIndex);