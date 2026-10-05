"use strict";

//1. STATIC  Property & Methods/funcitons
//Static members belong to the class itself, not to the instances (objects) created by the class. 
// You call them directly on the class name. 

//Example 1
class mathCalculations{
    static PI = 3.14;

    static diameter(radius){
        return radius *2;
    }
    static circumference(radius){
        return this.PI *radius;
    }
}

console.log(mathCalculations.PI);                              // 3.14
console.log(mathCalculations.diameter(10));                    // 20
console.log(mathCalculations.circumference(20));               // 62.800000000000004


// Example 2

class User{
    static userCount = 0;
    constructor(username){
        this.username = username;
        User.userCount++;
    }

    static getUserCount(){
        console.log(`Total online users are ${User.userCount}`);    
    }

    getUsername(){
        console.log(`username is : ${this.username}`);
    }
}

const user1 = new User("Mr.Bean");
const user2 = new User("Teddy");

user1.getUsername();                                        // username is : Mr.Bean
user2.getUsername();                                        // username is : Teddy
User.getUserCount();                                        // Total online users are 2
//user1.getUserCount();                                       // TypeError: user1.getUserCount is not a function


//2.  PRIVATE property & Methods/funcitons :to make a property or method private by prefixing its name with a hashtag (#).
// Private members are only accessible inside the class where they are defined. They cannot be seen or changed 
// from outside the class or even by subclasses (child classes).

class Profile{
    #age;
    #ageInYears;
    constructor(name, age){
        this.name =name;
        this.#age= age
        this.#ageInYears = this.#getAge();
    }

    #getAge(){
        return this.#age *2;
    }
    
    insideClass(){
        console.log(`username: ${this.name}, age : ${this.#age}`);
        console.log(this.#ageInYears);
    }
}
const person1 = new Profile("Tom", 20);

console.log(person1);                      // When age is not private // Profile { name: 'Tom', age: 50 }
console.log(person1);                      // When age is private // Profile { name: 'Tom' }
console.log(person1.age);                  // undefined
//console.log(person1.#age);               // SyntaxError: Private field '#age' must be declared in an enclosing class

person1.insideClass();                     // username: Tom, age : 50

//person1.#getAge();                       // SyntaxError: Private field '#getAge' must be declared in an enclosing class

person1.insideClass();
/*
username: Tom, age : 20
40
*/


//3. PROTECTED Properties & Methods :  protected members are prefixed with an underscore (_)
//  does not natively support a protected keyword
//  it can only be accessible within the class it is defined and by its subclasses (child classes)

class Bottle{
    _waterLevel;

    _setWaterLevel(value){
        this._waterLevel = value;
    }
    _getWaterLevel(){
        console.log(`the water lavel is : ${this._waterLevel} ml`);
    }
}

class Cello extends Bottle{
    newMethod(){
       console.log(`hello`);
       
    }
}

const object = new Cello();

object._setWaterLevel(1000);
object._getWaterLevel();
object.newMethod();
/*
the water lavel is : 1000 ml
hello
*/


// ### Use of Super, Static & Const with contructor

class Vehicle{
    constructor(brand){
        this.brand= brand;
    }
}

class EV extends Vehicle{
constructor(brand, color){
    super(brand);                               //super() must be called first to run the parent constructor
    this.color = color;
}

static createKia(){                           //Cant make a constructor static, but can call constructor from a static method to return a new object
return new EV("Kia", "Black");
}
}
// const Cannot be used to define or modify a constructor method.Used outside class to hold the instance created by the constructor
const myCar= EV.createKia();
console.log(myCar.brand);                     // Kia
console.log(myCar.color);                     // Black 


//A.) No constructor added JS will add empty default constructor 

//B.) Constructor with NO argument  
// These constructors do not take any inputs. Every object created from this class will start with the 
// exact same initial values.

class Bag{
    constructor(){
        this.brand = "Nike";
        this.color = "Red";
    }
}

const bag1 = new Bag();                      
const bag2 = new Bag();

console.log(bag1.brand);                                 // Nike
console.log(bag2.brand);                                 // Nike

//C.) Constructor with argument
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

