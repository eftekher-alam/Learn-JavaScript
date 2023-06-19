function getData() {
    let year = Number(document.getElementById("year").value);
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        document.getElementById("leapYear").innerHTML = "Leap Year";
    }
    else {
        document.getElementById("leapYear").innerHTML = "Not Leap Year";
    }
}