let map=new Map();
console.log(typeof map);
//key:Roll Number,Value:Student Name
map.set(11,"Ram");
map.set(22,"Shyam");
map.set(33,"Siya");
map.set(44,"jenny");
const mapSize=map.size;
console.log(`map size ${mapSize}`);

//retrive the value using key
const valueOfKey22= map.get(22);
console.log(` value of key 22 is ${valueOfKey22}`);

//retrive the value using key but that key does not exists
const valueOfKey99= map.get(99);
console.log(` value of key 99 is ${valueOfKey99}`);

//Adding duplicate key
map.set(33,"Billgates");

//Adding duplicate value
map.set(55,"jenny");

//delete entry
map.delete(22);
 
//key is exits or not
const isAvailable=map.has(44);
console.log(`is 44 key is available ${isAvailable}`);

const keys=map.keys();
console.log(keys);

const values=map.values();
console.log(values);

console.log("Traversing Map");
const keysOfMap=map.keys();
for (const key of keysOfMap) {

    const value=map.get(key);
    console.log(`${key} ${value}`);
    console.log(key);
    
}
console.log(map);
console.table(map);

var arrayNames=["Anil","Ram","Siya","Sunil","Jenny"];
arrayNames.length=3;
console.log(arrayNames);
console.table(arrayNames);

console.log(`Spread Operator...`);
var arrayNames=["Anil","Ram","Siya","Sunil","Jenny"];
console.log(arrayNames);
console.log(...arrayNames);

//creating duplicate array
const newArray=[...arrayNames];
console.log(`${newArray}`);