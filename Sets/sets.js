console.log("--------> Create Set <--------");
//The main differene is every value will be unique.
//new Set() is used to create set.
//It can take an Array while being create.
const nums = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);

console.log(nums);


console.log("----------> Add value to the set <-----------");
//add value at the end.
nums.add(10);
nums.add(11);
nums.add(12);
console.log(nums);

console.log("----------> delete value to the set <-----------");

//you have to pass a value which want to delete.
nums.delete(10);
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

console.log("----------> has() value to the set <-----------");

//It returns true or false depend on, the set contains the given value or not.
console.log(nums.has(10));



console.log("----------> get length of a set (size property.) <-----------");
console.log("The size is  : " + nums.size);
