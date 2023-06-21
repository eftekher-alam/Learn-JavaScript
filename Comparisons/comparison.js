console.log("------> Compare variable and object <-------");

let x = 10; //x is just a variable
const y = new Number(10); //y is number object

//only check the value
console.log(x == y); //true

//check the value and type
console.log(x === y); //false


console.log("------> Compare object and object <-------");

const num1 = new Number(10);
const num2 = new Number(10);

console.log(x == y); // true
console.log(x === y); //false
//Here, value same but obj compare memory address


console.log("------> Nullish Coalescing Operator <-------");
let name = null;
let text = "shuvo";
let result = name ?? text;
console.log(result); //shuvo