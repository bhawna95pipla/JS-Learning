"use strict";

// 1. Class syntax

class Car{
    constructor(name, year){
        this.name = name;
        this.year = year
    }
};

// Example 

class Toy{
    constructor(name, color){
        this.name = name;
        this.color = color;
    }

    displayToy(){
        console.log(`This ${this.name} is of color ${this.color}`);
    }
}

const toy1 = new Toy("Doll", "Blue");
const toy2 = new Toy("Bat", "Red");

toy1.displayToy();                        // This Doll is of color Blue
toy2.displayToy();                        // This Bat is of color Red



//2.  Four pillars of OOPS

// A.) Encapsulation (Data Hiding) : bundle data (properties) and methods (functions) into a single unit (a class) while hiding the internal state from direct outside interference. 
// In JS prefixing a property name with a # makes it strictly private

class Bankaccount{
    #balance =100;

    deposit(amount){
        if (amount>0)
        {
            this.#balance += amount;
            console.log(`Deposited $${amount}`);
        }
    }

    getBalance(){
        return `Your balance is $${this.#balance}`;
    }
}
const myAccount = new Bankaccount();
myAccount.deposit(200);                                         // Deposited $200
console.log(myAccount.getBalance());                            // Your balance is $300
//console.log(myAccount.#balance);                              // SyntaxError: Private field '#balance' must be declared in an enclosing class


// B.) Abstraction (Hiding Complexity) :  hiding the complex, messy implementation details and only showing the essential features

class CoffeeMachine{
    #boilWater() 
    {
        return "Water is Boiling....";
    }

    #brewCoffee()
    {
        return "Coffee is brewing....";
    }

    machineStart(){
        console.log(this.#boilWater());
        console.log(this.#brewCoffee());
        console.log("Coffee is Ready!!");
    }
}
const machine = new CoffeeMachine();
machine.machineStart();
/*
Water is Boiling....
Coffee is brewing....
Coffee is Ready!!
*/


// C.) Inheritance (Code Reuse) :  allows you to create a new class (child) that inherits all the properties 
// and methods from an existing class (parent). This prevents you from writing duplicate code.
// this is achieved using the extends keyword and the super() function (which calls the parent's constructor).

class Animal{
    constructor(name){
        this.name = name;
    }

    eat(){
        console.log(`${this.name} is eating apple`);
    }
}
class Dog extends Animal{
    play(){
        console.log(`${this.name} is playing with ball`);
    }
}

const myPet = new Dog("Bruno");
myPet.eat();                                                 // Bruno is eating apple
myPet.play();                                                // Bruno is playing with ball


// D.) Polymorphism (Many Forms) :  "many shapes." It allows different classes to have the same method name but execute them with different behaviors.

class Animals{
makeSound(){
    console.log("Animals sounds");
}
}
class Cat extends Animals{
    makeSound(){
        console.log("Meow!!");
    }
}
class Bird extends Animals{
    makeSound(){
        console.log("Chirp....");
    }
}

const sound = [new Cat(), new Bird()];
sound.forEach(animal => animal.makeSound());                        // Meow!!  // Chirp....
