
console.log("1)-----------function for male marriage eligibility------------");
function maleMarriageEligibility(gender,age,name){
    var result=(gender=="Male" && age>=21) ?`Hey ${name}  You are eligible for Marriage` :`Hey ${name} you are not eligible for marriage`;
    console.log(`${result}`);
}
maleMarriageEligibility("Male",25,"Billgates");
maleMarriageEligibility("Male",17,"Stew Jobs");

console.log("2)-------------function for female  marriage eligibility------------ ");
function femaleMarriageEligibility(gender,age,name){
    var result=(gender=="Female" && age>=18) ?`Hey ${name}  You are eligible for Marriage` :`Hey ${name} you are not eligible for marriage`;
    console.log(`${result}`);
}
femaleMarriageEligibility("Female",16,"Jenifer");
femaleMarriageEligibility("Female",27,"Malinda Gates");
