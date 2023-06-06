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
console.log("1. find out 'TCS' employee details and log only name & company ");
array_employess.forEach((Employee)=>{
if(Employee.emp_company=="TCS"){
    console.log(`Employee name :${Employee.emp_name} Employee company:${Employee.emp_company}`);
}
});
console.log("=================================================================================");
console.log("2.Find out employees with salary greater than or equal to 50000 ");
array_employess.forEach((Employee)=>{
if(Employee.emp_salary>=50000)
{
    console.log(Employee);
}
});
console.log("==================================================================================");
console.log("3.Find the sum of all employees salary");

let sumSalary=0;
    array_employess.forEach((Employee)=>{
        sumSalary=sumSalary+ Employee.emp_salary;
    });
    console.log("Sum of all employees salary",sumSalary);
    console.log("===============================================================================");
    console.log("4.Find the average salary ");
    let sumSal=0;
    array_employess.forEach((Employee)=>{
        sumSal=sumSal+ Employee.emp_salary;
    });
    let averageSalary=sumSal/array_employess.length;
    console.log(`Average salary is: ${averageSalary}`);
console.log("====================================================================================");
console.log("5.Find the 'IT' or 'HR' department employees whose salary is greater than or equal to 75000");
array_employess.forEach((Employee)=>{
if(Employee.emp_dept=="IT" && Employee.emp_salary>=75000|| Employee.emp_dept=="HR" && Employee.emp_salary>=75000 ){
    console.log(Employee);
}

});

























