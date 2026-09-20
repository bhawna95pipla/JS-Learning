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
//machine.#brewCofee();                             //SyntaxError: Private field '#brewCofee' must be declared in an enclosing class


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

//1. Subtype Polymorphism (Method Overriding)
//It occurs when a child class or a prototype provides a specific implementation of a method that is already 
// defined in its parent class. JavaScript resolves this at runtime.

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
sound.forEach(animal => animal.makeSound());   
/*
Meow!!
Chirp....
*/

// 2. Ad-hoc Polymorphism (Method Overloading)
// Ad-hoc polymorphism occurs when a single function behaves differently based on the type or number of 
// arguments passed to it.

class Calculator{
    add(a,b){
        if(typeof a === 'string' || typeof b === 'string'){
            return `${a}${b}`;
        }
        return a + b 
    }
}
const cal = new Calculator();

console.log(cal.add("ab", "cd"));                        // abcd
console.log(cal.add(10, 5));                             // 15
console.log(cal.add("10", 5));                           // 105
console.log(cal.add(10, "55"));                          // 1055


// Example of Ploymorphism 


class Pet{
    eat(){
        console.log("Food:");
    }
}

class Rabbit extends Pet{
    eat(){
        super.eat();
        console.log("Rabbit eats carrot");    
    }
}
class Hamster extends Pet{
    eat(){
        super.eat();
        console.log("Hamster eats leaf");    
    }
}
const food = [new Rabbit(), new Hamster()];
food.forEach(pet => pet.eat());
/*
Food:
Rabbit eats carrot
Food:
Hamster eats leaf
*/










