//Before execution js automatically place all the declaration at the top which known as hoisting

//-----[Hoisting in case of var]-------
// var name;    //something like this, it's declared at the last but take to the top 
// name = undefined // also assign undefined that take place in the memory

name = "Eftekher";  //It will not throw error cause already it has memory address.
console.log(name);

var name;



//-----[Hoisting in case of let and const]-------
// It's also take to the top by during execution
// But not assign undefined so that doesn't take place in the memory. This situation called "temporal dead zone"

//name = "Eftekher";  //It will throw error hence it has no memory address.
console.log(name);

var name;
name = "Eftekher"; //Although it take to at the top, but only can use after declaration line.