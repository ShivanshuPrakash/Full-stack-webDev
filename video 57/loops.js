console.log("Tutorial for loops");
//types of loops
// while
//do while loop
// for loop
// for in loop
//for of loop
// for each


//FOR LOOP
let a = prompt("Enter the value");
console.log("The entered value is "+ a);
console.log("Counting of numbers till your entered digit");
for(let i = 0; i<=a; i++){
   
    console.log(i);
}
//FOR IN LOOP
let Obj = {
    "Name" : "Shivanshu",
    "Role" : "CEO",
    "Salary": "$1000000000000",
    "Dob" : 2,

} 
 /*
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}
*/
for (const key in Obj) {
        const element = Obj[key];
        console.log(key,element);
    
}
//FOR OF

for (const [key,value] of Object.entries(Obj)) {
    console.log(key,value);
    
}
for (const c of "Shivanshu") {
    console.log(c);
}
// while loop
let i = 7;
while(i<=a){
    console.log(i);
    i++;
}