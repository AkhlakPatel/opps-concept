// Inheritance – It is a concept in which some property and methods of an Object is being used by another Object. Unlike most of the OOP languages where classes inherit classes, JavaScript Object inherits Object i.e. certain features (property and methods)of one object can be reused by other Objects. 

class person {
    constructor(name){
        this.name = name;
    }
    toString(){
        return `The student name is ${this.name}`
    }
}

class student extends person {
    constructor(name,id){
        super(name)
        this.id = id;
    }
    toString(){
        return (`${super.toString()} and student Id is : ${this.id}`)
    }
}

let student1 = new student('Akhlak',786)
console.log(student1.toString())