console.log("constructor property returns constuctor function of all variables ")

console.log("John".constructor);                    // Returns function String()  {[native code]}
console.log((3.14).constructor);                    // Returns function Number()  {[native code]}
console.log(false.constructor);                     // Returns function Boolean() {[native code]}
console.log([1, 2, 3, 4].constructor);              // Returns function Array()   {[native code]}
console.log({ name: 'John', age: 34 }.constructor); // Returns function Object()  {[native code]}
console.log(new Date().constructor);                // Returns function Date()    {[native code]}
console.log(function () { }.constructor);           // Returns function Function(){[native code]}





//By using constructor property we can say whether a object is array or not.
const name = ["Eftekher", "Shuvo", "Khairul"];

function isArray(array) {
    return array.constructor.toString().indexOf("Array") != -1;
}

console.log(isArray(name));//true

//alternative build in function
console.log(Array.isArray(name));//true


//find that an object is String or not

function isString(string) {
    return string.constructor.toString().indexOf("String") != -1;
}

console.log("isString : " + isString("Hello this is Eftekher Shuvo"));



//Universel function to detect what type of an object 
let input = 1234;

function typeOfObject(input) {
    return (input.constructor.toString().indexOf("String") != -1) ? "The object is String" :
        (input.constructor === Number) ? "The object is Number" : //We also can check by type
            (input.constructor.toString().indexOf("Boolean") != -1) ? "The object is Boolean" :
                (input.constructor.toString().indexOf("Array") != -1) ? "The object is Array" :
                    (input.constructor.toString().indexOf("Object") != -1) ? "The object is Object" :
                        (input.constructor.toString().indexOf("Date") != -1) ? "The object is Date" :
                            (input.constructor.toString().indexOf("Function") != -1) ? "The object is Function" : "Input is not correct";
}

console.log(typeOfObject(input));

