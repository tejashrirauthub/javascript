function showName(){
    console.log("first function with no argument and no return value");
    console.log("second function with no argument and no return value");
    
    }
   
 showName();
    
    var fisrtName="Tejashri";
    var lastName="Raut";
    var collegeName="sangola college";
    function personalDetails(fisrtName,lastName,collegeName){
console.log("personal details");
console.log("First name:",fisrtName);
console.log("last name:",lastName);
console.log("college name:",collegeName);
    }
personalDetails(fisrtName,lastName,collegeName);


function swapValuesDude(a,b){
    console.log("before swap",a,b);
var temp=a;
    a=b;
    b=temp;
    console.log("after swap",a,b);
    
    
}

swapValuesDude("virat","Anushka");
swapValuesDude(1000,2000);
 
function addThreeValues(val1,val2,val3){
    var result=val1+val2+val3;
    console.log("Addition is",result);
}
addThreeValues(10.23,600,40);
addThreeValues("Hello","Good","Morning");