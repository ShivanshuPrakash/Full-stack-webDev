//function 
function Greetings(Name){
    console.log("Hi!"+ Name + " are you fine :)");
    console.log("kasa ha re tu");
}
var user = prompt("Enter your name ");
console.log("Your enterd"+user);
Greetings(user);

function sum(a,b){
    return (a+b);
}

 let   result = sum(3,5);

 console.log("The value of sum of two function is ", result);


//ARROW FUNCTION
 const multiply = (a, b) => {
    const result = a * b;
    return result;
};

let answer = multiply(5, 8);
console.log(answer);
// Why Use Arrow Functions?
// Concise Syntax: Arrow functions provide a more concise way to write functions, especially for small tasks or callbacks.
// Lexical this: Arrow functions do not have their own this context. Instead, they inherit this from the surrounding (lexical) context. However, in this example, this is not used.



 /*
Function Roles and return Statement
Functions with Side Effects:

These functions perform actions such as logging to the console, modifying variables, or updating the DOM.
They typically do not need to return a value because their main purpose is to carry out an action, not to compute a result for later use.
Example: Your Greetings function.
Explanation:
Greetings logs messages to the console, which is a side effect.
You don’t need a return statement because you are not using the result of Greetings for further computation or logic. The function accomplishes its purpose through console output.
Functions that Compute and Return Values:

These functions perform calculations or generate data that are used by other parts of the code.
They need to return a value so that the caller can utilize the computed result.
Example: Your sum function.
Explanation:
sum computes the sum of a and b and returns the result.
The caller assigns this result to result and then logs it.
Without the return statement, result would be undefined because sum wouldn’t provide a computed value to the caller.

Key Points
Side Effect Functions: Perform actions, such as logging or modifying external states. They do not need to return values if their only purpose is to carry out an action.
Value Computing Functions: Calculate and provide a result. They require a return statement to pass the computed value back to the caller.
 */













