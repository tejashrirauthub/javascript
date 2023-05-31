
function Student(name,age,gender,city){


this.name=name;
this.age=age;
this.gender=gender;
this.city=city;

showDetails=function(){
    console.log(`Details is${this.name},${this.age},${this.gender},${this.city}`);
}
}

const abhijit=new Student("Abhijit",21,"Male","Pune");
const poonam=new Student("poonam",20,"Female","Mumbai");
const rushi=new Student("Rushikesh",23,"Male","Indor");
const snehal=new Student("Snehal",24,"Female","Jalna");
console.log(abhijit.city)
console.log(rushi.age);;