const person={
    name:"Stew",
    age:54
}
function sayHello(Company,role){
console.log(`${person.name} ${person.age} ${Company} ${role}`);
}
sayHello.call(person,"Apple","CEO");
console.log("Apply()");

sayHello.apply(person,["Apple","CEO"]);
console.log("bind()");

let funRef=sayHello.bind(person);
funRef("Apple","CEO");



 