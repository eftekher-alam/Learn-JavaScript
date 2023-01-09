// var keyword

var x = 10;
var y = 30;
var result = x + y;
console.log("Initial Declaration : " + result); //output display by console

x = 100;
result = x + y;
window.alert(result); //output display by aleart proparty

var x = 50;  //You can re-declare with the same name which is not possible with let keyword.
var result = x + y;
document.getElementById("ok").innerHTML = result; //output display by html proparty

/*
    * If you declare variable with var keyword it will be global
    * var doesn't support  Block Scope.
*/

var a = 10
console.log("First out side of block a : ", a)
if(true)
{
    var a = 50;
    console.log("In side the if block local a : ", a)
}
console.log("Outside the if block a : ", a);


// Let keyword
let b = 10;
// let b = 100; //You can not re-define the same value like var keyword
//var b = 10;


/*
    It support block scope.
*/

let name = "Eftekher Alam";
console.log("First outside value of name is : " + name);
if(true)
{
    let name = "Shuvo" //the value will remain same only inside the if block
    document.getElementById("ok").innerHTML = "This is inside local value of name : " + name;
}
console.log("This is value of name last outside of the scope : " + name);



let xyz = 100;
// var xyz = 200 not allowed.
console.log(xyz);
if(true)
{
    // var xyz = 11; its not allowed because we know var keyword define global variable.
    let xyz = 111;
    console.log(xyz);
}

console.log(xyz);




// const keyword

//here num is constant. you cann't again assign or declare
const num = 10;
// num = 100; it's not allow.
const myName = "Eftekher Alam";
// myName = "shuvo"; //It's not possible


// const support block scope
if(true)
{
    const num = 100; //it's allowed
}


//we can declare array by using const keyword. Here, the memory addres will be constant. But you can change the the containt

const numbers = [1, 2, 3 ,4, 5, 6 ];
console.log(numbers);
numbers[4] = 100; //you can change the content of your array. But the memory location  will not changed.
console.log(numbers);