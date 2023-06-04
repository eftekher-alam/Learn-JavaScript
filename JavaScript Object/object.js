const Car = {   // We can declare object by the let keyword.
    Model : "BMW",
    Price : 10000,
    Color : "Blue",
    ModelColor : function(){ return this.Model + " " + this.Color},
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
console.log(Car.Drive);  //It will return full function body/Definition.
Car.Color = "Black";

console.log("The value is : " + Car.ModelColor()); //That will return class definition