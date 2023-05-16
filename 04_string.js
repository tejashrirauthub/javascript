var greet="Good Morning"
var greethLength=greet.length;     //total number of character
console.log("Total number of characters in given strings",greethLength);
var fisrtName="  Tejashri  ";
 var trimmedFirstName= fisrtName.trim();
 console.log("After trim first name is:",trimmedFirstName,trimmedFirstName.length);
var lastName="     Raut    ";
var concatString=fisrtName.concat(lastName);     //concat
console.log("concated string is:-",concatString);
var fisrtNameLen=fisrtName.length;
console.log("Total number of character in given string:-",fisrtNameLen);
var charAtZeroIndex=fisrtName.charAt(0);                //char at zeo index
console.log("char at zero index",charAtZeroIndex);
var indexOfM=greet.indexOf("M")
console.log("index of M is:",indexOfM);
var charAtLastIndex=fisrtName.charAt(fisrtName.length-1);  //char at last index
console.log("char at last index",charAtLastIndex);
var replaceValue=greet.replace("Morning","afternoon");    //replace 
console.log("After replace",replaceValue);

var firstNameLength=fisrtName.length;
console.log("before trim length is",firstNameLength);
var trimmedOfFirstName=fisrtName.trim();
console.log("After trim lenth is:",trimmedOfFirstName,trimmedOfFirstName.length);
var trimmedOfFirstName=fisrtName.trim();
var lengthAfterTrim=trimmedFirstName.length;
console.log("After trim first name is:",trimmedOfFirstName,trimmedOfFirstName.length);
console.log("trimmed total spaces",firstNameLength-lengthAfterTrim);
 var includeResult=greet.includes("ing");
 console.log("is ing string available",includeResult);
 var searchResult=greet.search("Good");
 console.log("search result:",searchResult);
 var sliceResult=greet.slice(0,3);
 console.log("slice result is:",searchResult);
 var subStringResult=greet.substring(0,3);
 console.log("substring is:",subStringResult);
 var splitResult=greet.split();