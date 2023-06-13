const array=[23,9,204,4,0,66,106];
const arrayNames=["Shyam","Anil","Shubhu","Jenny","Bittu","Kittuu"];
arrayNames.sort();    //Sorting in ascending order
console.log(arrayNames);
arrayNames.reverse();  // reverse array that is in ascending order
console.log(arrayNames);
array.sort((n1,n2)=>{
    return n1>n2 ? 1:-1;
});
console.log(array);
 array.reverse((n1,n2)=>{
    return n1>n2 ?-1:1;
 });
 console.log(array);


 