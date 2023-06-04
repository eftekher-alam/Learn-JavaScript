let myStr = "Hello this is Eftekher Alam Shuvo shuvo";

console.log("-------------> search() <--------------")
console.log(myStr.toLowerCase().search("[a-z]uvo"));
console.log(myStr.toLowerCase().search("shuvo"));


console.log("-------------> indexOf() <--------------");
//start to end
//It will return the statring index which need to serach.
//indexOf function is case sensitive 
console.log(myStr.toLowerCase().indexOf("eftekher"));


console.log("-------------> lastIndexOf() <-------------")
// end to start
//it will return the last starting index of given string.
console.log(myStr.toLowerCase().lastIndexOf("shuvo", 37));



console.log("-------------> match() <-------------")
myStr = "Hello this Shuvo is Eftekher Alam Shuvo Shuvo";
//it will return the first match
//case sensitive
console.log(myStr.toLowerCase().match("shuvo"));

//Regular expression
//It returns array of how many time "shuvo" is found.
//case sensitive 
console.log(myStr.toLowerCase().match(/shuvo/g));

//case insensitive
console.log(myStr.match(/shuvo/gi));



console.log("-------------> includes() <-------------")
//Case sensitive
//If "eftekher" found in main string then it returns "true" else "false"
console.log(myStr.toLowerCase().includes("Eftekher"));



console.log("-------------> startsWith() <-------------")
//case sensitive
//It also take second parameter which determind from which index search will start.
myStr = "Hello Bangladesh";
console.log(myStr.startsWith("hello"));
console.log(myStr.startsWith("Bangla", 6));



console.log("-------------> end() <-------------")
// search from end toward to start index
//case sensitive
//It also take second parameter which determind from which index search will start.
myStr = "Hello Bangladesh";
console.log(myStr.endsWith("desh"));
console.log(myStr.endsWith("Hello", 5));