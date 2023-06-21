console.log("-------> For Loop <--------");


console.log("-------> simple For Loop <--------");
for (let i = 0; i < 10; i++) {
    console.log(i);
}


console.log("-------> multi-var and multi-condition for Loop <--------");
//In the first place we can assign multiple variables.
//In the second place we can chech multiple condition.
//In the last place we can inc/dec multiple variables.
for (let i = 0, exp = 10, name = "shuvo"; (i < 10) && (exp < 16); i++, exp++) {
    console.log(i + " " + name);
    console.log("exp : " + exp);
}


console.log("-------> blank for Loop <--------");
let z = 0
for (; ;) {
    console.log("Run..." + z);
    if (z > 10)
        break;
    z++;
}


console.log("-------> for in Loop(obj) <--------");
//It is mainly use to loops through properties of object
//We can also use for in for array but not recommended.
//It return index

const student = {
    name: "Eftekher",
    dept: "CSE",
    id: "20211203006",
    cgpa: 3.92
}

for (let x in student) {
    console.log(x + " : " + student[x]);
}

//Not recommended if the order of data matter
const numbers = [10, 30, 20, 50, 38];
for (let x in numbers) { //return index
    console.log(x + " : " + numbers[x]);
}

console.log("-------> for of Loop <--------");
for (let x of numbers) { //return value instead of index
    console.log(x);
}


console.log("---------> While Loop <-----------");
let count = 0;
while (count < 10) {
    console.log(count);
    count++;
}


console.log("---------> Do While Loop <-----------");

let a = 0
do {
    console.log("Print for : " + a)
    a++;
} while (a <= 0);

