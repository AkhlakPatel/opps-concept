// Defining class using es6

// Classes– Classes are blueprint of an Object. A class can have many Object, because class is a template while Object are instances of the class or the concrete implementation. 

// class Vehicle {
//     constructor(name,maker,engine){
//         this.name = name;
//         this.maker = maker;
//         this.engine = engine
//     }
//     getDetails(){
//         return `The name of the vehicle is ${this.name}`
//     }
// }
// // Making object with the help of the constructor
// let bike1 = new Vehicle('Hayabusa','sujuki','1220cc')
// let bike2 = new Vehicle('Ninja','Kavasaki','980cc')

// console.log(bike1)
// console.log(bike2.maker)
// console.log(bike1.name)
// console.log(bike1.getDetails())



// Traditional Way.
// Defining class in a Traditional Way.
function vehicle(name,maker,engine){
    this.name = name;
    this.maker = maker;
    this.engine = engine;
};
vehicle.prototype.getDetails = function () {
    return `The name of bike is : ${this.name}`;
}
let bike1 = new vehicle('TVS Rider','TVS',125)
let bike2 = new vehicle('Shine','Honda',125)

console.log(bike1.name)
console.log(bike2.name)
console.log(bike1.maker)

console.log(bike1.getDetails())