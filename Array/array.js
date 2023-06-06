//Declaration of an array.
//Array in javascript can store any type of date;
let words = ["hello", "banana", "black", "eat", 400];

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

