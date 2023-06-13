const arrayNumbers=[20,11,40,25,37,49,9,90,60,2,19];
console.log(arrayNumbers);
console.log("1.Find out all the numbers which are greater than 50");
const arrayGreaterThan50=arrayNumbers.filter((element)=>{
    return  element>50;
    });
    
    console.log(arrayGreaterThan50);
    console.log("===================================================");
    console.log("2.Find out all the Even numbers");

    const arrayEven=arrayNumbers.filter((element)=>{
return  element%2==0;
});

console.log(arrayEven);
console.log("========================================================");
console.log("3.Find out all the odd numbers");

const arrayOdd=arrayNumbers.filter((element)=>{
    return  element%2==1;
    });
    
    console.log(arrayOdd);
    console.log("=======================================================");
    console.log("4.Find out all the numbers which are multiple of 5");
    const arrayMultiple=arrayNumbers.filter((element)=>{
        return  element%5==0;
        });
        
        console.log(arrayMultiple);

        console.log("================================================");
        console.log("5.Find out all numbers which are between 20 and 50")

     const arrayBetween=arrayNumbers.filter((element)=>{
    
        return  element>=20 && element<=50;
        });
        
        console.log(arrayBetween);

        
        