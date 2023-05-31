console.log("************************Details Of Vehicle*************************************");
class Vehicle{
constructor(name,colour,price,engine,fuel)
{
    this.name=name;
    this.colour=colour;
    this.price=price;
    this.engine=engine;
    this.fuel=fuel;
}

}
const ford=new Vehicle("ford Fusion","white","5.94 Lakh","1194 CC","Petrol");
const marutiAlto=new Vehicle("Maruti Alto","Red","4.8 Lakh","998 CC","Petrol");
const mahindra=new Vehicle("Mahindra Scorpio","Black","13 lakh","2184 CC","Diesel");
const bmw=new Vehicle("BMW","Blue","45Lakh","1995 CC","Diesel");
const tata=new Vehicle("Tata","Daytona grey","12Lakh","1199 CC","Petrol");
const arrayOfVehivles=[ford,marutiAlto,mahindra,bmw,tata];
for (const Vehicle of arrayOfVehivles) {
    console.log(`Details Of vehicles :${Vehicle.name},${Vehicle.colour},${Vehicle.price},${Vehicle.engine},${Vehicle.fuel}`);
}
console.log("******************************************************************************");
console.log("==============================college information=============================");
class College{
    constructor(name,deparment,city,collegeCode)
{
    this.name=name;
    this.deparment=deparment;
    this.city=city;
    this.collegeCode=collegeCode;
}
}
const sangolaCollege=new College("Sangola College","Chemistry","Sangola",34213);
const solapurUniversity=new College("Solapur University","computer","Solapur",56780);
const sinhgadInstitute=new College("Sinhgad College","Mechanical","Pandharpur",56342);
const mitCollege=new College("MIT College","Electronic","Pune",90567);
traverse(sangolaCollege);
console.log("-----------------------------------------------------------------------------");
traverse(solapurUniversity);
console.log("-----------------------------------------------------------------------------");
traverse(sinhgadInstitute);
console.log("-----------------------------------------------------------------------------");
traverse(mitCollege);
console.log("------------------------------------------------------------------------------");
 function traverse(traverseObject){
 for (const key in traverseObject) {
    if (Object.hasOwnProperty.call(traverseObject, key)) {
        const element = traverseObject[key];
        console.log(`${key},${element}`);
        
    }
 }
}