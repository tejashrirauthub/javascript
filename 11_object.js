
let person= {
    height:"6 feet",
    name:"Bill gates",
   city:"Pune",
   age:54,
   isMarried:true,
   address:{
    street:"Wakad road",
    landMark:"Near Datta Mandir",
    city:"pune",
    PIN:431220,
    state:"MH",
    country:"India"
},

   walk: function(totalWalk){
    console.log(`${this.name}Yes.. I can walk ${totalWalk}`);
   },
   details:function () {
    console.log(`person details : name ${this.name} city:${this.city} Age:${this.age}`);
   },
   getDetails:function(){
    let details=`Name:${this.name},Age:${this.age},Is married:${this.isMarried},City:${this.city}`;
return details;   
}
};
console.log(`Type of person is ${typeof person}`);
console.log(`----------------- Accessing object properties--------------`);
const personName=person.name;
console.log(`Person Name is :${personName}`);
console.log(`Person City is :${person.city}`);
const personHeight=person["height"];
console.log(`person height is:${person['height']}`);
console.log(person);
//console.table(person);
console.log("---------Updating object properties-----------");
person.city="Mumbai";
person.isMarried=false;
console.log(`person city is :${person.city}`);
console.log(`person married status : ${person.isMarried}`);
person.gender="Female";
person.state="MH";
console.log(person);
console.table(person);
console.log("---------Deleteing object properties-----------");
delete person.height;
console.table(person);

//Empty object
console.log(`=======================Creating an Empty object=========================`);
let student={
}

console.log(student)
student.marks="80%";
console.log(student);

const isCityAvailable="city" in student;
console.log(`is city available in studet object : ${isCityAvailable}`);
console.log(`is marks available in studet object : ${"marks" in student}`);

console.log(`=========Invoking Or calling object method=========`);
person.walk("5km");
person.details();
person.getDetails();
console.log("=====Accessing nested object properties=====");
let personCountry= person.address.country;
console.log(`${personCountry}`);
person.address.PIN=556677;
console.log(person.address);
