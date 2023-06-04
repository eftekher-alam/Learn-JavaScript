function show()
{
    let name = "Eftkeher alam";
    let dept = "Computer Science and Engineering";
    console.log("Hello this is : " + name + "\nMy department is : " + dept);
    console.log(Date());
}


const shuvo = {
    fullName: "Eftekher Shuvo",
    goal: "Become a MERN Stack Developer",
    shuvoDetails: function(){
        document.getElementById("shuvo").innerHTML = 
        "Name : " + this.fullName + "Goal : " + this.goal;
    }
}

