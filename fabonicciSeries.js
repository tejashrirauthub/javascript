var fibonacci_Series=function(n){
if(n===1)
{
    return[0,1];
}
else{
    var s=fibonacci_Series(n-1);
    s.push(s[s.length-1]+s[s.length-2]);
    return s;
}

}
console.log("Fibonacci Series:",fibonacci_Series(8));
