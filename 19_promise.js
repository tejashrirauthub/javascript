

let isNotesPrepared=true;
let promise=new Promise(function(resolve,reject){
//I got a time at 4.30
if(isNotesPrepared)
{
resolve("Guys,please take this notes")
}else{
    reject("Sorry,I didn't get time....")
}
});
promise.then(function resolve(sucess){
    console.log(sucess);
}).catch(function reject(reject){
    console.log(reject);
}).finally(function(){
    console.log("I should have notes...");
})