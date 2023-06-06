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
console.log("1.Employees working in TCS and log employee names and company name ");
for(const Employee of array_employess)
{
    if(Employee.emp_company=="TCS")
    {
        console.log(`Employee Name:${Employee.emp_name}, Employee company Name:${Employee.emp_company}`);
    }
}
console.log("===================================================================================");
console.log("2.Find the Finance department empolyees,log only department and employee name");
for(const Employee of array_employess)
{
    if(Employee.emp_dept=="Finance")
    {
        console.log(`Employee Name:${Employee.emp_dept}, Employee company Name:${Employee.emp_name}`);
    }
}
console.log("=======================================================================================");
console.log("3.Find the employee whose name start with 'R' and complete employee details ");
for(const Employee of array_employess)
{
    if(Employee.emp_name.startsWith("R"))
    {
console.log(Employee);
    }
}
console.log("========================================================================================");
console.log("4.Find the employees whose salary is greater than 75000.and log on console emp name,company,salary");
for(const Employee of array_employess){
    if(Employee.emp_salary>75000)
{
    console.log(`emp name:${Employee.emp_name}, company:${Employee.emp_company},salary:${Employee.emp_salary}`);
}
}
console.log("==========================================================================================");
console.log("5.Find the employee whose salary is greater then or equal 50000 and from 'IT' department log complete details");

for(const Employee of array_employess){
    
if(Employee.emp_salary>=50000 && Employee.emp_dept=="IT")
{
    console.log(Employee);}
}
console.log("============================================================================================");
console.log("6.Find out all the employees from company 'Infy' and log complete details on console");
for(const Employee of array_employess)
{
if(Employee.emp_company=="Infy")
{
   console.log(Employee); 
}

}




















