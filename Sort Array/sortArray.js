console.log("------> alphabetic order sort() <---------");

const friends = ["Eftekher", "Shuvo", "Alam", "Shohag", "Manik", "Nizamul", "Ashik"];
friends.sort();
console.log(friends);
// ['Alam', 'Ashik', 'Eftekher', 'Manik', 'Nizamul', 'Shohag', 'Shuvo']


console.log("------> numbering order sort() <---------");
const numbers = [1, 20, 100, 3, 17, 99];
//sort method takes another function as parameter.
//that parameter assist to sort by return nagative or posative value.
//if return nagative then b is small which will place upper index 
//if return posative then a is small so place will not changed.
numbers.sort(function (a, b) {
    return a - b;
});
// numbers.sort((a, b) => a - b); //anonumous function
console.log(numbers);




console.log("------> alphabetic order reverse() <---------");
const friends1 = ["Eftekher", "Shuvo", "Alam", "Shohag", "Manik", "Nizamul", "Ashik"];
//firstly need to sort 
friends1.sort();
//then the sorted array need to reverse. 
//so that we will get the array in descending order.
friends1.reverse();
console.log(friends1);


console.log("------> reverse in number order <---------");
const numbers1 = [1, 20, 100, 3, 17, 99];
numbers1.sort(function (a, b) {
    return b - a;
});
// numbers1.sort((a, b) => b - a); //anonumous function
console.log(numbers1);


console.log("------> sort an array that contain object <---------");
const students = [
    { Name: "Eftekher", age: 26 },
    { Name: "Shohan", age: 25 },
    { Name: "Manik", age: 27 },
    { Name: "Masum", age: 28 },
    { Name: "Alam", age: 29 },
]

//sort based on age which is numeric 
students.sort((a, b) => a.age - b.age);
console.log(students);

const students1 = [
    { Name: "Eftekher", age: 26 },
    { Name: "Shohan", age: 25 },
    { Name: "Manik", age: 27 },
    { Name: "Masum", age: 28 },
    { Name: "Alam", age: 29 },
]

// sort based on name which is string
students1.sort(function (a, b) {
    let x = a.Name.toLowerCase();
    let y = b.Name.toLowerCase();
    if (x < y)
        return -1;
    if (x > y)
        return 1;
    return 0;
});
console.log(students1);






console.log("------> Find max and min from array <---------");
// we can take index[0] for max and index[lastIndex] for low after sort an array. This method will take long time if the array is too large.

//More efficient way is to use Math.min.applay(null, array);
console.log("Min value : " + Math.min.apply(null, numbers));
console.log("Max value : " + Math.max.apply(null, numbers));



