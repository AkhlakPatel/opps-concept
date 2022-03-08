// Encapsulation – The process of wrapping property and function within a single unit is known as encapsulation. 

//encapsulation example
class person {
    constructor(name,id){
        this.name = name;
        this.id = id;
    }
    add_address(address){
        this.address = address;
    }
    getDetails(){
        console.log(`Name is ${this.name}, Address ${this.address}`)
    }
}
let person1 = new person('Akhlak',1)
person1.add_address('Biora')
person1.getDetails();