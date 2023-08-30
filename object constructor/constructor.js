// constructor of normal object


function Student(name, age, email) {
    this.name = name,
        this.age = age,
        this.email = email
};


const student1 = new Student("Eftkher", 24, "eftekher@gmail.com");
const student2 = new Student("Manik", 24, "manik@gmail.com");

console.log(student1.name);
console.log(student2.name);

// add property after creating
student1.country = "Bangladesh";
console.log(student1);
console.log(student2);

//you can't add method to the object like property.