console.log("String tut");
let a = "Shivanshu";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6]);
console.log(a[7]);
console.log(a[8]);

console.log(a.length);
let friend = "Sarthak";
//template literals
console.log("Your name is: "+ a +"and your friend name is: "+ friend);
console.log(`Your name is ${a} and your friend name is ${friend}`);
console.log(friend.toUpperCase());
console.log(friend.length);
console.log(a.slice(0,5));// it will give char till 0 index to 5
console.log(a.replace("Sh","H"));
console.log(friend.concat(a));
console.log(friend.concat(a,"Aditya"));//does not change the original string
//charAt
//indexOf
// startswith , endswith