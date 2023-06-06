console.log(`1.Arrow function with no arguments and no return value`);
let display = ()=> {
    console.log(`Good Morning, Today is Monday`);
}
display();
console.log(`2.With 3 arguments and no return value for received 3 parameters perform the multiplication is`);
let show = (num1,num2,num3=1) => {
    let result=num1*num2*num3;
    console.log(` ${result}`);
}
console.log("values to be passed 5,5,2:");
show(5,5,2);
console.log("values to be passed 10,4:");
show(10,4)

console.log(`3.with 5 arguments and return value such as,for received params it should do th addition`);
let add = (num1, num2,num3,num4,num5) => {
    let result = num1+ num2+num3+num4+num5;
    return result;
}
let result = add(100,100,200,349,756);
console.log(`Addition is: ${result}`);
let str=add("I am ", "learning ","ES6 ", "features ","in depth");
console.log(str);



