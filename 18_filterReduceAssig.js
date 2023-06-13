class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha =  new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmps = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
console.log("1.Find the employees from 'Wipro' company");
const wiproCompany=arrayEmps.filter((Employee)=>{

return Employee.emp_company=="Wipro";
});
const arrayWiroEmployeeNames=wiproCompany.map((Employee)=>{
    return Employee.emp_name;
        });
        console.log(arrayWiroEmployeeNames);
        console.log("======================================================");
        console.log("2.Find the all employee from 'IT' or 'HR' dept");
        const itHrDepartment=arrayEmps.filter((Employee)=>{
      return Employee.emp_dept=="IT" || Employee.emp_dept=="HR"

        } );
        const department=itHrDepartment.map((Employee)=>{
            return Employee.emp_name;
        });
console.log(department);
console.log("===========================================================");
console.log("3.Find the Employees Whose employee id's are greater than 50");

const employeeid=arrayEmps.filter((Employee)=>{
    return Employee.emp_id>50;

      } );
      const employeeidname =employeeid.map((Employee)=>{
          return Employee.emp_name;
      });
console.log(employeeidname);
console.log("=======================================================================");
console.log("4.Find all the employees whose name start with letter 'A' or 'V' or 'M'");

const employeeLetter=arrayEmps.filter((Employee)=>{

 return Employee.emp_name.startsWith("A") || Employee.emp_name.startsWith("V")|| Employee.emp_name.startsWith("M")
});


const employeename =employeeLetter.map((Employee)=>{
    return Employee.emp_name;
});
console.log(employeename);
console.log("=======================================================================");
console.log("5.Find the average salary of the employee for all department");


const empSalaries=arrayEmps.map((Employee)=>{
    return Employee.emp_salary;
   });
   const sulSalary=empSalaries.reduce((runningTotal,value)=>{
   
   return runningTotal+value
   });
   
   const average=sulSalary/empSalaries.length;
   console.log(average);

console.log("===========================================================");
console.log("6.Find the average salary for It department");
console.log(55000);



































    