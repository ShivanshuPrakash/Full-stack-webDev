let arr = [1,2,3,4,5,6,7];
let arr2 =[7,8,9,];
let arr3 = [10,11,12,13,14,15];
arr[0]= 9; // lets finf out array are mutalbe or not because string are immutable
console.log(arr,typeof arr); //typeof will give ans OBJECT 
console.log(arr.length); // this will calculate the length of array


console.log(arr[0]); // this shows array are mutable
console.log(arr.join(" and ")); // means array join by and insted of , we see and 
// and 2 and 3 and 4 and 5 and 6 and 7(output)

arr.pop(); // last element will be eliminated
console.log(arr); // array are mutable
arr.shift(); // remove 1st elemnt fron array
console.log(arr);
arr.push("Shivanshu"); //will add  element at last
console.log(arr);
arr.unshift("Shiva"); // will add elemnt at beggning
console.log(arr);
delete arr[4];  // this will delete the 4th element but length remain same because memory is allocated but there is no value
console.log(arr);
console.log(arr.length);

console.log(arr.concat(arr2,arr3));// Returns a new array does not change the existing array
console.log(arr.sort());
console.log(arr.splice(1,2)); // remove 1,2 from array
console.log(arr.splice(1,2,22,33,44,55)); // remove 1,2 from array and add 22 and 33
console.log(arr);
console.log(arr.slice(1,3));
