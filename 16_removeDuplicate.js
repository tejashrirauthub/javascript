console.log(`===========Remove duplicte elements from array==============`);
const arrayNum=[11,3,4,11,4,7,3];
console.log("Given array :",arrayNum);
const setOfNum=[...new Set(arrayNum)];
console.log("Remove duplicate elements", setOfNum);

const str="How are you mate";
console.log("Given String:",str);
let newChar="";
const arrayWords=str.split(" ");
for(const element of arrayWords){
for (let index = 0; index < element.length; index++) {
    let char="";
    if(index==0 || index==element.length-1){
        char=element[index].toUpperCase();
    }
    else{
        char=element[index];
    }
    newChar=newChar+char;
}
newChar=newChar+" ";
}
console.log("String After capitalising first and last alphabet of each word is:");
console.log(newChar);
