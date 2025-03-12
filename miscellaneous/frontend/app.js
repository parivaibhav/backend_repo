let arr = [1, 2, 3, 4];
arr.sayHello = () => { console.log("hello ") };


function PersonMaker(name, age) {
    const person = {
        name: name,
        age: age,
        talk: function () {
            console.log("Hello, my name is " + this.name);
        }
    }
    return person;
}

// Constructors - does not need to return anything and capital start with letter
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.talk = function () {
    console.log("Hello, my name is " + this.name);
}

let p1 = new Person("John", 30);
let p2 = new Person("Jane", 25);


class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log("Hello, my name is " + this.name);
    }
}

class Student extends person {

    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    talk() {
        console.log("Hello, my name is " + this.grade);
    }
}              //inheritance    



class Teacher extends person {
    constructor(name, age, job) {
        super(name, age);
        this.job = job;
    }
    talk() {
        console.log("Hello, my name is " + this.job);
    }

}


let p3= new Student("John", 30, 5);
let p4= new Teacher("Jane", 25, "Maths");   //inheritance