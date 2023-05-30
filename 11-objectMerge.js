
const person={
height:"6feet",
name:"Bill gates",
age:54,
isMarried:true
}


const address={
    street:"Wakad Road",
    landmark:"Near Datta Mandir",
    city:"Mumbai",
    pin:431220,
    state:"MH",
    country:"India"
}

const marks={
    english:95,
    programming:100,
    math:89
}
const newObject={

}

const mergeObject=Object.assign({ },address,marks);
console.table(newObject);
Object.assign(newObject,person,address,marks);
console.table(person);
console.table(address);
console.table(marks);
console.table(newObject);


