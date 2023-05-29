function voteEligibility(age)
{
    if (age==0 ||age<0 ||age>120) {
        console.log("In Valid Data");
        
    } else {
        
        if (age<18) {
            
            console.log("Not eligible for voting");
        } else {
            console.log("eligible for voting");
        }
    }
}
