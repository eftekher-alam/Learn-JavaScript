console.log("--------> Boolean() <---------");
// It return "true" or "false" from given expression.
let result = Boolean(10 < 90);
console.log(result);


result = (10 < 90);
console.log("(10 < 90) = " + result);


// Every this that is value return true
result = Boolean("Eftekher"); //true
console.log(result);

result = Boolean(100); //true
console.log(result);

//This values are called "false value"

// Empty string return false
result = Boolean(""); //false
console.log(result);

// Zero return false
result = Boolean(0); //false
console.log(result);

// -0 return false
result = Boolean(-0); //false
console.log(result);

// null return false
result = Boolean(null); //false
console.log(result);

// false return false
result = Boolean(false); //false
console.log(result);

// NaN(Not a number) return false
result = Boolean(20 * "Shuvo"); //false
console.log(result);

