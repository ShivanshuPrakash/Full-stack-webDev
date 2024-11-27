// introduction to javascript

console.log("Starting of java script");
var a = prompt("Enter your number")
//prompt("Enter your number"): This function displays a dialog box
//  with a message ("Enter your number") and an input field./
//  It waits for the user to type something and press
//  "OK" or "Cancel".
console.log("Your number is "+ a);
// + a: Concatenates the value of a (the user’s input) to the string "Your number is ".

// If a is "42", the console.log statement will print:
var isTrue = confirm("are you sure you will achive the target of this week ");
/*confirm: This function displays a dialog box with a message and two buttons: "OK" and "Cancel".
If the user clicks "OK", confirm returns true.
If the user clicks "Cancel", confirm returns false */

// variables 
var s = 100;
{
    let s = 99;
    console.log(s);

}
console.log(s);

var q = "shivanshu";
var w = 22;
var e = 3.5567;
var r = true;
var t = undefined;
var y = null;

console.log(q,w,e,r,t,y);
console.log(typeof q,typeof w,typeof e,typeof r,typeof t,typeof y);

// object 
var employee ={
    "name" : "shivanshu",
    "age"  : 19,
    "stydying" : true,
    "salary" : "$5000000b"
}
console.log(employee);
console.log(employee.name);
console.log(employee.age);
console.log(employee.stydying);
console.log(employee.salary);


