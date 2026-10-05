// class Calculator{
//     constructor(a,b,c){
//         this.a = a;
//         this.b = b;
//         this.c = c;
//     }

//     add(){
//         if(this.c === undefined){
//             return this.a + this.b;
//     }
//     return this.a + this.b + this.c;
// }
// };

// const addition = new Calculator(10,20);

// console.log(addition.add());


// Simple way polymorphism
class Calculator{
    

    add(a,b,c){
        if(c === undefined){
            return a + b;
    }
    return a + b + c;
}
};

const addition = new Calculator();

console.log(addition.add(10,20));                         //30
console.log(addition.add(50,60,30));                      //140


// inheritance

class Person{
    constructor(lastName){
        this.lastName = lastName;
    }
    surname(){
       console.log(`Parent last name is ${this.lastName}`);
    }
};

class Kid extends Person{
    constructor(firstName, lastName){
        super(lastName);
        this.firstName = firstName;
    }
  

    fullname(){
        console.log(`Child name is ${this.firstName} ${this.lastName}`);
    }
};

const name = new Kid("John", "Wick");

name.surname();
name.fullname();
