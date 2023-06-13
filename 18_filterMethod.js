
const array=[23,56,78,9,5,4,0,33,21,66];

//WAP to get the elements grater than 50

const arrayGreaterThan50=array.filter((element)=>{
return  element>50;
});

console.log(arrayGreaterThan50);
//Traditional Method
//const newArray=[];

//for (const element  of array) {
  //  if(element>50)
    //{
      //  newArray.push(element)
    //}
//}
//console.log(newArray);

console.log("=======WAP to get the even numbers using filter()===========");

const arrayEven=array.filter((element)=>{
    return  element%2==0;
    });
    
    console.log(arrayEven);
    


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
    
    const array_employees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

    console.log("get the list of TCS Employee names");
   const arrayTCSEmployee= array_employees.filter((Employee)=>{
return Employee.emp_company=="TCS";
    });
     const arrayTCSEmployeeNames=arrayTCSEmployee.map((Employee)=>{
return Employee.emp_name;
    });
    console.log(arrayTCSEmployeeNames);

    //console.log(arrayTCSEmployee);
    //for (const emp of arrayTCSEmployee) {

      //  console.log(emp);
    //}

console.log("Get the list of employee id whose salary is greater than equal 75000");
const arraySalaries=array_employees.filter((Employee)=>{
return Employee.emp_salary>=75000;
});
const arrayIds=arraySalaries.map((Employee)=>{
return Employee.emp_id;
});
console.log(arrayIds);



























































