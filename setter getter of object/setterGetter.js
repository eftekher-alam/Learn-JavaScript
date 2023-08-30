const student = {
    name: "",
    dept: "",
    set setName(name) {
        this.name = name;
    },
    set setDepartment(dept) {
        this.dept = dept;
    },
    get getName() {
        return this.name;
    },
    get getDepartment() {
        return this.dept;
    }
}

student.setName = "Eftekher";
student.setDepartment = "CSE";

console.log(student.getName, student.getDepartment);