`use strict`
const array=[11,22,33,44,55,66];
console.log(array);
console.log(...array);
const array2=[...array];
const person={

    name:"Stew",
    age:57,
    country:"US"
}
const person2={...person};
console.log(person2);

function show(adharNum,role,...parameters){
console.log(adharNum,role,parameters);
}
show(11223344,"CEO",23,"Elon","US");


function division(num1,num2=1)
{
    //let num1=7,let num2;
    if(num2==0)
    {
        num2=1;

    }
console.log(num1/num2);
}
division(10,5);
division(67,0);
division(7);

console.log(`=================Object Destruring====================`);
const student={
    name:"Stew",
    age:57,
    country:"US",
    pin:223312,
    rollNo:111,
    college:"COEP Pune",
    marks:"90%",
    degree:"BE CSE"
}
const {rollNo,name,college,degree,country}=student;
const {pin,age,ismarried=false}=student;
//const pin=student.pin;
console.log(pin,age,ismarried);

const arr=[11,22,33];
const[element1,element2,num1,num2=0]=arr;
console.log(element1,element2,num1,num2);

console.log(`===========remove duplicte elements from array==============`);
const arrayNum=[11,3,4,11,4,7,3];
const setOfNum=[...new Set(arrayNum)];
console.log(setOfNum);
