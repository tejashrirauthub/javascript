
const person={
height:"6feet",
name:"Bill gates",
city:"Pune",
age:54,
isMarried:true
} 

Object.freeze(person);
 person.age=67;     //update not allowed as object is freezed
 
 delete person.city;  //delete  not allowed as object is freezed
person.pin=4445566; //Add not allowed as object is freezed
console.table(person);


console.log("--------Freezing the array---------");
const array=[22,33,44,55,77];
Object.freeze(array);
array[2]=100;
console.table(array);