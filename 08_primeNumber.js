
let num=11;
let isPrime=true;
for (let index = 2; index < 11; index++) {
    if(num%index==0)
    {
        isPrime=false;
        console.log(`Not a prime number as it is divisible by${index}`);
    break;
    }
    
}
if(isPrime)
{
    console.log(`${num} is prime number`);
}
else{
    console.log(`Is not prime number ${num}`);
}

//fibonacci