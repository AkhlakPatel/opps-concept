// OOPs in JS

// Object– An Object is a unique entity that contains property and methods. For example “car” is a real life Object, which has some characteristics like color, type, model, horsepower and performs certain action like drive. The characteristics of an Object are called as Property, in Object-Oriented Programming and the actions are called methods. An Object is an instance of a class. Objects are everywhere in JavaScript almost every element is an Object whether it is a function, array, and string. 

// Object can be created in two ways in JavaScript:
    // Using an Object Literal & Using an Object Constructor: 

// Using an Object Literal
    //Defining object
// let person = {
//     first_name:'Akhlak',
//     last_name:'Patel',
//      //method
//     getDetails : function () {
//         return (`The name of the person is: ${person.first_name} ${person.last_name}`)
//     },
//     //object within object
//     phone_number:{
//         mobile:879723783,
//         landline:05362
//     }
// }
// console.log(person)
// console.log(person.getDetails());
// console.log(person.phone_number.mobile)

// Using an Object Constructor: 

//using a constructor
function person (firstName,lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
//creating new instances of person object
let person1 = new person('Akhlak','patel')
let person2 = new person('wajid','ali')
console.log(person1)
console.log(`firtname is ${person2.firstName} and last name is ${person2.lastName}`)

