
const arrayNums=[10,5,70,90,100,30,47];
const array=["Bill","Stew Jobs","Elon Musk","Mark","Sundar"];
//Length of word and square it and then sum it all
var result=0;
array.forEach((element)=> {
const wordLength=element.length;
result =result+wordLength*wordLength;
});
console.log(result);

class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
        }
}
const emp_anil=new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha=new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi=new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali=new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika=new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny=new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi=new Employee(99,"Mahesh","HR",85000,"Infy");


let array_employess=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

//WAP to find the employees from finance department
array_employess.forEach((Employee)=>{
if(Employee.emp_dept==="Finance"){
    console.log(Employee);
}

});
//WAP to get the sum of all salary of Infy employees
let sumSalaryOfInfy=0;
array_employess.forEach((Employee)=>{ 
    if(Employee.emp_company=="Infy"){
        sumSalaryOfInfy=sumSalaryOfInfy+ Employee.emp_salary;
    }
    
    });
    console.log(sumSalaryOfInfy);
   
    //WAP to find average salary of an employees
    let sumSalary=0;
    array_employess.forEach((Employee)=>{
        sumSalary=sumSalary+ Employee.emp_salary;
    });
    let averageSalary=sumSalary/array_employess.length;
    console.log(`Average salary is: ${averageSalary}`);

    







