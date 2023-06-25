console.log("--------> Create Set <--------");
//The main differene is every value will be unique.
//new Set() is used to create set.
//It can take an Array while being create.
const nums = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);

console.log(nums);


console.log("----------> Add value to the set <-----------");
nums.add(10);
nums.add(11);
nums.add(12);
console.log(nums);


console.log("-------> forEach() on Sets <-----------");

nums.forEach(function (value) {
    console.log(value);
});


console.log("-------> Values() on Sets [for of loop] <---------");
//values() method return a iterable object of the set
//by the iterable object we can use for of loop

for (let x of nums.values()) {
    console.log(x);
}