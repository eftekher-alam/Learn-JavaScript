//this keyword in the object method.
const student = {
    fname: "Eftekher",
    lname: "Shuvo",
    fullName: function () {
        return this.fname + " " + this.lname; //this = student object
    }
}

console.log(student.fullName());


//this keyword use alone.
console.log(this); //this = window object

//this in function
function test() {
    console.log(this); //this = window object
}

// this in event handler
document.querySelector("#my-btn").addEventListener("click", function () {
    console.log(this);
    //output: <button id="my-btn">My Button</button>
});



// Explicit Function Binding | call() | this in object 

const person1 = {
    firstName: "Eftekher",
    lastName: "Shuvo",
    fullName: function () {
        return this.firstName + " " + this.lastName; //this = person2
    }
}

const person2 = {
    firstName: "John",
    lastName: "Doe",
}

// Return "John Doe":
console.log(person1.fullName.call(person2));