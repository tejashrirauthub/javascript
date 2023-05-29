function factorialOfNum(x){
 
let factorial=1;

 if(x>=0){
  for(let i=x; i>=1;i--)
  factorial=factorial*i;
 return factorial;
  
 } 

    

}
var result=factorialOfNum(5);
console.log(`Factorial of 5 is ${result}`);
var result=factorialOfNum(3);
console.log(`factorial of 3 is ${result}`);
  result=factorialOfNum(null);
console.log(`invalid input null `);

var result=factorialOfNum(8);
console.log(`factorial of 8 is ${result}`);
result=factorialOfNum(undefined);
console.log(` invalid input ${result}`);
result=factorialOfNum(9);
console.log(` Factorial of 9 is ${result}`);
result=factorialOfNum(0);
console.log(` factorial of 0 is ${result}`);








