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

