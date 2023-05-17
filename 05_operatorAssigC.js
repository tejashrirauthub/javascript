console.log("Tcs interview eligibility");
var tcsInterview=function(gradScore,hscScore,sscScore,candidateName){
result=gradScore>=70 || hscScore>=80 ||sscScore>=90 ? ` Congratulations ${candidateName} You are eligible for Tcs interview`:` unfortunately ${candidateName} You are not eligible for Tcs interview`;
console.log(`${result}`);

}
tcsInterview(80,86,90,"Tejashri");
tcsInterview(70,65,55,"Mayuri");
tcsInterview(60,79,88,"prachi");