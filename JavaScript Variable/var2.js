const number = 23;
function test() {
    //This value only for the function
    const number = "Eftekher";
    console.log("Printing inside the function : " + number);
}
test();
console.log(number); //it will print 23

if (true) {
    //This value only for this if block.
    const number = "Shuvo";
    console.log("This is inside if block : " + number);
}

console.log(number); //it will print 23

// const number = "Redeclare not support like var keyword";

const frineds = ["Eftekher", "Shuvo"];
frineds[1] = "Shohag";
console.log(typeof (frineds));


let result = 5 + 5 + "HelloJavaScript";
console.log(result);

result = "HelloJavaScript" + 5 + 5;
console.log(result);  