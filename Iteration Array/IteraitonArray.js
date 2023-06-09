console.log("------> forEach() <--------");
const friends = ["Eftekher", "Shuvo", "Lipi", "Manik", "Karim"];
friends.forEach(friendLoop);
function friendLoop(value, index, array) {
    console.log("Value : " + value);
    console.log("Index No : " + index);
    console.log("Array : " + array);
}


console.log("------> map() <--------");
// Doesn't change main array
// Return a new array after operation is completed
// By this method you can do any operation with each element and result will be stored in array which will be retured.
const numbers1 = [45, 4, 9, 16, 25];
const result = numbers1.map(fncMap);
function fncMap(value, index, array) {
    return value * 10;
    //Here each element multiply by 10;
}
console.log(result);

console.log("------> filter() <--------");
const mynumbers = [10, 12, 23, 78, 56, 89, 23];
const above20 = mynumbers.filter(myfilter);
function myfilter(value, index, array) {
    return value > 20;
}
console.log(above20);


console.log("------> reduce() <--------");
// It doesn't make change in the main array.
//this method runs on each element and produce a single value result
// In this case we just return the sum of all value.
// Initially the first parameter "total" will be assigen the first element of the array.
// works from left - to - right in the array

const mynumbers1 = [10, 12, 23, 78, 56, 89, 23];
let result1 = mynumbers1.reduce(myreduce);
function myreduce(total, value, index, array) {
    console.log(total)
    return total + value;
}


console.log("------> every() <--------");
//The every() method checks if all array element pass the given condition.
//If only if all the elements pass the contition the return "true" other wise "false"
const myNumbers = [10, 12, 23, 78, 56, 89, 23];
let x = myNumbers.every(myEvery);
function myEvery(value, index, array) {
    return value >= 10;
}
console.log("The result is : " + x); //True


console.log("------> some() <--------");
//The some() method checks if all array element pass the given condition.
//If only mimimum one elements pass the contition the return "true" other wise "false"
const MyNumbers = [10, 12, 23, 78, 56, 89, 23];
x = MyNumbers.some(mysome);
function mysome(value, index, array) {
    return value >= 10;
}
console.log("The result is : " + x); //True

console.log("------> indexOf() <--------");
//It will return first matched value's index.
//Returns -1 if not found.
//Takes second parameter (optional) which determine start index.
//It is case sensitive
//It works start index to end index

const myfriends = ["Eftekher", "Shuvo", "Lipi", "Manik", "Karim", "Lipi"];

let output = myfriends.indexOf("Lipi");
console.log(output); //0

console.log("------> lastIndexOf() <--------");
output = myfriends.lastIndexOf("Lipi");
console.log(output); //5


console.log("------> find() <--------");
//It return the first value from the array which match given condition
//If doesn't match return undefined.
const Numbers = [10, 12, 23, 78, 56, 89, 23];
let a = Numbers.find((value) => value > 100);
console.log(a); //78


console.log("------> findIndex() <--------");
//It return the first value's index from the array which match given condition
//If doesn't match return undefined.
const Nums = [10, 12, 23, 78, 56, 89, 23];
let b = Nums.findIndex((value) => value > 50);
console.log(b); //3

console.log("------> Array.from() <--------");
//Return array from given string
const getArray = Array.from("Eftekher");
console.log(getArray);
//output : ['E', 'f', 't', 'e', 'k', 'h', 'e', 'r']


console.log("------> includes() <--------");
const myfrnd = ["Eftekher", "Shuvo", "Lipi", "Manik", "Karim", "Lipi"];
console.log(myfrnd.includes("Shuvo")); //true
console.log(["Eftekher", "Shuvo", "Alam"].includes("Eftekher")); //true