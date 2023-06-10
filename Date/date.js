console.log("--------> Get Current Date <---------");
const date = new Date();
console.log(typeof date);

//Note : Month count start from 0 to 11
console.log(`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`);

//We can print date in this format "dd-MMM-yyyy" 
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

console.log(`${date.getDate()}-${months[date.getMonth()]}-${date.getFullYear()}`);
//output : 10-Jun-2023



//We can set date year and month
date.setFullYear(2020);
date.setMonth(2);
date.setDate(20);

console.log(`${date.getDate()}-${months[date.getMonth()]}-${date.getFullYear()}`);
//output : 20-Mar-2020


//we can print week day like this
const cdate = new Date();
const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
console.log("Day : " + week[cdate.getDay()]);



