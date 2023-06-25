console.log("------> Create maps <--------");
//only new Map() is used to create map 
//We can initially give an array of key-value peers.

const fruits = new Map([
    ["Banana", 15],
    ["Mango", 20],
    ["Jackfruits", 40]
]);
console.log(fruits);

//or
const myfruits = new Map();
console.log(myfruits);


console.log("------> set() to add elements <--------");
myfruits.set("Apple", 25);
console.log(myfruits);


console.log("------> set() to get elements <--------");
console.log(myfruits.get("Apple")); //op: 25

console.log("------> delete() to delete key <--------");
myfruits.delete("Apple");
console.log(myfruits);

console.log("------> has() find key exist or not <--------");
console.log(fruits.has("Banana"));

console.log("--------> forEach() loop <----------");
//the forEach return the value and key of the maps.
fruits.forEach(function (value, key) {
    console.log("The key is : " + key + ", the value is : " + value);
});

console.log("--------> use of entries() with for of loop <----------");
//entries() returns an iterable object of key and values.
for (let x of fruits.entries()) {
    console.log(x);
}

console.log("--------> size property of Maps <----------");
//It returns the total number of elements of Map 
console.log("The length of map is : " + fruits.size);


