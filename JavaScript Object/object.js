const Car = {   // We can declare object by the let keyword.
    Model : "BMW",
    Price : 10000,
    Color : "Blue",
    Start : function()   //This is how we can define function for object.
    {
        document.getElementById("start").innerHTML = "The car is started.";
    },
    Drive : function()
    {
        document.getElementById("drive").innerHTML = "The care is running.";
    }
};

Car.Start();  //We can call function like this.
Car.Drive();
console.log(Car.Model);
console.log(Car["Price"]); //We can also access proparty like this.
console.log(Car.Start);  //It will return full function body.