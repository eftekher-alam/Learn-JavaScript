//Declaration of an array.
//Array in javascript can store any type of date;
const words = ["hello", "banana", "black", "eat", 400];

const student = {
    name: "Eftekher",
    dep: "CSE",
    id: "20211203006",
};

words.push(student);


//we can change value like bellow.
words[1] = "Mango";

//We can simply print into console
//output ['hello', 'banana', 'black', 'eat', 'sleep']
console.log(words);


//get length
let lengthOfWords = words.length;

//for loop
for (let x = 0; x < lengthOfWords; x++) {
    console.log(words[x]);
}


//for each loop
words.forEach(makelist);

function makelist(value) {
    console.log(value);
}


//Recognize an Array
//isArray()
console.log(Array.isArray(words)); //op: true

//instanceof
console.log(words instanceof Array);



//-----------------> Array methods <----------------------
console.log("--------> toString() <---------");

const friends = ["Mr. A", "Mr. X", "Mr. B", "Mr. Z"];
console.log(friends.toString());
// output : Mr. A,Mr. X,Mr. B,Mr. Z


console.log("--------> join() <---------");
console.log(friends.join(" -- "));
// output : Mr.A-- Mr.X-- Mr.B-- Mr.Z


console.log("--------> join() <---------");
let popped = friends.pop(); //return Mr. Z
console.log(popped);
console.log(friends); //Mr. Z has been deleted.



console.log("--------> push() <---------");
let x = friends.push("Mr. H");
console.log(friends);
console.log(x);


console.log("--------> shift() <---------");
// remov element from the begining of the array.
let removed = friends.shift();
console.log(removed); //Mr. A
console.log(friends); //['Mr. X', 'Mr. B', 'Mr. H']


console.log("--------> unshift() <---------");
let result = friends.unshift("Mr. Shuvo");
console.log(friends);
console.log(result);//return length after add element.


console.log("--------> delete <---------");
//it is not recommended because it deleted index make undefined.
// so making hole in the array is not good.
delete friends[0];
console.log(friends);
// output: [empty, 'Mr. X', 'Mr. B', 'Mr. H']

console.log("--------> insert with splice() <---------");
//By this method we can add multiple or single element any where of the array.
//first parameter define from which index operation will start.
//second parameter define how many element will delete
// next paramter will be insert into the array.
result = friends.splice(3, 0, "Mr. Khairul", "Mr. Eftekher");
console.log(friends);
console.log(result); // return array of deleted elements.


console.log("--------> delete with splice() <---------");
result = friends.splice(0, 2);
console.log(friends);
console.log(result);

console.log("--------> slice() <---------");
//We can divide an array by slice method.
//It will return a new array. Won't change the main array.

//one parameter, it define the start index, divide until the end.
const newArray = friends.slice(2);
console.log(newArray); //['Mr. Eftekher', 'Mr. H']


//Two paramter, 1st parameter define the starting and 2nd define the ending index.
const newArray1 = friends.slice(1, 3);
console.log(newArray1); //['Mr. Khairul', 'Mr. Eftekher']


console.log("--------> concat() <---------");
//It will return a new array. Won't change the main array.

//String as parameter
//The given string will be added at the end as a new element
const conArray = friends.concat("Mr. K");
console.log(conArray);//['Mr. B', 'Mr. Khairul', 'Mr. Eftekher', 'Mr. H', 'Mr. K']


//Anoter array as parameter.
//It will concat the array at the end of the array
//It also can take multiple array as parameter
const newFriends = ["Mr. Zara", "Mr. Karim", "Mr. Rahim"];
const newFr = friends.concat(newFriends);
console.log(newFr);
//output : ['Mr. B', 'Mr. Khairul', 'Mr. Eftekher', 'Mr. H', 'Mr. Zara', 'Mr. Karim', 'Mr. Rahim']

const myArr = [[1, 2, 20], [3, 4, 0], [5, 6, 10]];
const newArr = myArr.flat();
console.log(newArr);
//output : [1, 2, 20, 3, 4, 0, 5, 6, 10]


