console.log("----> Math.round() <---------");
//Return the nearest integer.
console.log("4.9 rounded to " + Math.round(4.9)); //5
console.log("4.5 rounded to " + Math.round(4.5)); //5
console.log("4.4 rounded to " + Math.round(4.4)); //4


console.log("----> Math.ceil() <---------");
//Return the up next integer.
console.log("4.9 ceilling to " + Math.ceil(4.9)); //5
console.log("4.5 ceilling to " + Math.ceil(4.5)); //5
console.log("4.4 ceilling to " + Math.ceil(4.4)); //5


console.log("----> Math.floor() <---------");
//Return the down next integer.
console.log("4.9 floor to " + Math.floor(4.9)); //4
console.log("4.5 floor to " + Math.floor(4.5)); //4
console.log("4.4 floor to " + Math.floor(4.4)); //4


console.log("----> Math.trunc() <---------");
//Eliminate the fractional part and return int number
console.log("4.9 trunc to " + Math.trunc(4.9)); //4
console.log("4.5 trunc to " + Math.trunc(4.5)); //4
console.log("4.4 trunc to " + Math.trunc(4.4)); //4


console.log("----> Math.sign() <---------");
//Return -1 if the given number is nagetive.
//Return 1 if the given number is positive.
// Return 0 if the given number is zero.

console.log(Math.sign(-4)); //-1
console.log(Math.sign(4));  //1
console.log(Math.sign(0));  //0


console.log("----> Math.pow() <---------");
console.log(Math.pow(2, 4)); //16


console.log("----> Math.sqrt() <---------");
console.log(Math.sqrt(64)); //8



console.log("----> Math.abs() <---------");
//Conver negative value to positiove value
console.log(Math.abs(-64)); //64


console.log("----> Math.sin() <---------");
//Conver degree to radilan value  sin 90 degree = 1
console.log(Math.sin(90 * Math.PI / 180)); //1



console.log("----> Math.cos() <---------");
//Conver degree to radian value  sin 0 degree = 1
console.log(Math.cos(0 * Math.PI / 180)); //1



console.log("----> Math.max() <---------");
//Return max number from given values.
console.log(Math.max(1, 21, 32, 4, 56, 32, 112, 1, 3)); //112



console.log("----> Math.min() <---------");
//Return min number from given values.
console.log(Math.min(1, 21, 32, 4, 56, 32, 112, 1, 3)); //1



console.log("----> Math.random() <---------");
//Return rando fractional number from 0 to below 1
console.log(Math.random());


console.log("-------> Print random number 0 to 10 <---------");
console.log(Math.floor(Math.random() * 11))

console.log("------> Print random number 0 to 100 <---------");
console.log(Math.floor(Math.random() * 101))


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//Excluding 1 and 10
console.log(getRandomNumber(1, 10));


function getRandomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Including 1 and 10
console.log(getRandomNumbers(1, 10));