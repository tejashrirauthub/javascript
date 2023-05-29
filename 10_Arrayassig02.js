
const arrayNumber=[20,31,40,25,23,11,29,9,60,2,11];
let arrayLength=arrayNumber.length;
console.log(`1.Length of given array is=${arrayLength}`);
let firstElement=arrayNumber[0];
console.log(`2.First element of given array is=${firstElement}`);
let arrayLen=arrayNumber.length;
let lastElement=arrayNumber[arrayLen-1];
console.log(`Last element of Given array is=${lastElement}`);
let arrayLeng=arrayNumber.length;
let lastEle=arrayNumber[arrayLeng-3];
console.log(`3.third Last element of Given array is=${lastEle}`);
console.log("4.Even Number of Given array is");
for(let i=0;i<arrayNumber.length;i++)
if(arrayNumber[i]%2==0)
{
    console.log(` ${arrayNumber[i]}`);
}

console.log("5.Odd Number of Given Array is");
for(let i=0;i<arrayNumber.length;i++)
if(arrayNumber[i]%2==1)
{
    console.log(` ${arrayNumber[i]}`);
}

console.log("6.even position");
    for(let i=0;i<arrayNumber.length;i++)
    if(i%2==0)
    {
        console.log(arrayNumber[i]);
    }
    let evenSum=0;
    for(let i=0;i<arrayNumber.length;i+=2)
    evenSum +=arrayNumber[i];
     console.log(`sum of Even positioned element is=${evenSum}`);

console.log("7.Odd position");
    for(let i=0;i<arrayNumber.length;i++)
    if(i%2==1)
    {
        console.log(arrayNumber[i]);
    }
    let oddSum=0;
    for(let i=1;i<arrayNumber.length;i+=2)
    oddSum +=arrayNumber[i];
     console.log(`sum of odd positioned element is=${oddSum}`);

let sumEle=0;
    for(let i=0;i<arrayNumber.length;i++)
    sumEle +=arrayNumber[i];
    console.log(`8.sum of all element from given array is ${sumEle}`);

        
    console.log("9.Number that are Mutiple of 5");
    for(let i=0;i<arrayNumber.length;i++)
    if(arrayNumber[i]%5==0)
    {
        console.log(` ${arrayNumber[i]}`);
    }
    var number=arrayNumber.includes(115);
    console.log(`10.number are available in given array :-${number}`);

     number=arrayNumber.includes(23);
    console.log(`11.number are available in given array :-${number}`);

    arrayNumber.splice(3,0,55,66)
    console.log(`12.Insert number 55,66 before index 3 is:-${arrayNumber}`);

    arrayNumber.splice(4,3);
    console.log(`13.Delete 3 element from index 4 is :- ${arrayNumber}`);
    