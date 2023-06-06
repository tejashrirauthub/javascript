const arrayNumbers=[20,11,40,25,23,11,9,31,60,2,19];
console.log("Given Array",arrayNumbers);
console.log("1.Add 10 into each element ");
const arrayTransformed = arrayNumbers.map( (element) => {
    return element=element+10;
} );
console.log(arrayTransformed);
console.log("=============================================");


console.log("2.Square of each element ");
const arrayTrans = arrayNumbers.map( (element) => {
    return element*element;
} );
console.log(arrayTrans);
console.log("=============================================");
console.log("3.Add the index value into its corresponding each array element");

const arrayTran = arrayNumbers.map( (element,index) => {
    return element=index+element;
} );
console.log(arrayTran);
