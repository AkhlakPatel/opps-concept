// Sometimes encapsulation refers to hiding of data or data Abstraction which means representing essential features hiding the background detail. Most of the OOP languages provide access modifiers to restrict the scope of a variable, but their are no such access modifiers in JavaScript but their are certain way by which we can restrict the scope of variable within the Class/Object. 

function person(fname,lname){
    let firstname = fname;
    let lastname = lname;

    let getDetailsnoAccess = function () {
        return `firstname is ${firstname} and lastname is ${lastname}`
    }
    this.getDetailsAccess = function () {
        return `firstname is ${firstname} and lastname is ${lastname}`
    }
}
let person1 = new person('Akhlak','Patel');
console.log(person1.firstname)
console.log(person1.getDetailsnoAccess)
console.log(person1.getDetailsAccess())