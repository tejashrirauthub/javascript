const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601];
console.log("1.Array element with index");
arrayNumbers.forEach((Element,index)=>{
    console.log(index,Element);
});
console.log("===================================");
console.log("2.find positive numbers");
arrayNumbers.forEach((Element)=>{
if(Element>0)
{
    console.log(Element);
}
});
console.log("=====================================");
console.log("3.find the negative numbers , add into new array");
const arrayNegativeNums=[];
arrayNumbers.forEach((Element)=>{
    if(Element<0)
    {
        arrayNegativeNums.push(Element);
    }
});
arrayNegativeNums.forEach(Element=>console.log(Element));
console.log("===========================================");
console.log("4.find Even numbers");
arrayNumbers.forEach((Element)=>{
    if(Element%2==0)
    {
        console.log(Element);
    }
});
console.log("=============================================");
console.log("5.find the sum of all elements from arrayNumbers");
let sum=0;
arrayNumbers.forEach((Element)=>{
     
      sum=sum+Element;

    });
    console.log(sum);
    console.log("=============================================");
    console.log("6.Log the only Even indexed array value");
    arrayNumbers.forEach((Element,index)=>{
if(index%2==0)
{
    console.log(index,Element);
}
    });













