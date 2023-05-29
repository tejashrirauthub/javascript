console.log("1. create object professor");
let professor= {
name:"Tejashri",
education:"M.sc",
subject:"java",
marks:"85%",
college:"Sangola college" ,
degrees:{
    engineering:`CSC`,
    PHD:`Adv Computing`,   
},
certificates:['Hacker Rank particiption','Certificate in IFE course','certificate in Adv programming']

};
console.log(professor);
console.log(professor.degrees);
console.log(professor.certificates);
professor.TotalExperience="14 years";
console.log("Total Experience:",professor.TotalExperience);
professor.college="Vidnyan Mahavidyalaya sangola";
console.log("Modify existing property college:",professor.college);
professor.certificates.push("Oracle certified"),
console.log("Add new certificate",professor.certificates);
let LastElement=professor.certificates[professor.certificates.length-1];
console.log("Last element of array cerificates is:",LastElement);