console.log("1.---------Create object sbibank-----------");
let sbiBank = {
    bankName: "State Bank of india",
    location: "Sangola",
    accountNo: 12345678910,
    ifsc: "SBI00004133",
    interestRate: "5%"
}
console.log(sbiBank);
console.table(sbiBank);
console.log("2---------Create object bankLocation----------");
let bankLocation={
street:"sangola road",
city:"sangola",
pin:413307
}
console.log(bankLocation);
console.table(bankLocation);
console.log("3. After clone sbibank properties are");
    Object.assign(sbiBank,bankLocation);
    console.table(sbiBank);
    console.log("4 Create object rateOfInterest");

    let rateOfInterest={
 homeLoanInterest:"8%",
 personalLoanInterest:"10%",
 dueInterest:"7%"
  }
    console.table(rateOfInterest);

    console.log("5. After merge in sbiDetails object");
 const sbiDetails={

    }
    
    Object.assign(sbiDetails,sbiBank,bankLocation,rateOfInterest);
    
    console.table(sbiDetails);
    
    console.log("6. Traversing an object") 
    for(const key in sbiDetails)
    {
    //key="height"
    if(Object.hasOwnProperty.call(sbiDetails,key))
    {
        const value=sbiDetails[key];
        console.log(`${key} ${value}`);
    }
    }


    

    



