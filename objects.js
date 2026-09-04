//1. Creating Objects ........

//a. Object Literal (The Simplest Way): You simply use curly braces {} and list your properties inside.
const student1 = {
       firstName : "Alice",
       lastName  : "King",
       age : 26,
       isEmployeed : true
}
console.log(student1);
// Output : { firstName: 'Alice', lastName: 'King', age: 26, isEmployeed: true }


//b.Empty Object() Syntax : does exact same thing as literal method, but uses the standard built-in Object constructor. You create an empty object first, then add properties to it.
const car = new Object();

//now adding properties to the empty object
car.brand = "Honda";
car.color = "blue";
car.seat  = 7;

console.log(car);
// Output : { brand: 'Honda', color: 'blue', seat: 7 }


// 2. Accessing Object Properties......

//a. Dot Notation :You type the object name, followed by a dot (.), and then the property name.
console.log(student1.firstName);                                // Alice
console.log(student1.isEmployeed);                              // true

// b.  Bracket Notation: (The Flexible Way): uses square brackets [] and a string inside them. It works exactly like looking up a word in a dictionary.
console.log(student1["firstName"]);                             // Alice
console.log(student1["age"]);                                   // 26

//when using a variable to look up a property dynamically 
const choice = "age";
console.log(student1[choice]);                                // 26

const age = "lastName";                                       // The variable 'age' holds the text "lastName"
const choice2 = age;
console.log(student1[choice2]);                               // King 

//c. Object Destructuring : Object destructuring is a shorthand method that allows you to extract multiple properties from an object and assign them to individual variables in a single line of code

const {firstName, lastName} = student1;
console.log(firstName);                                        // Alice
console.log(lastName);                                         // King 


// 3. Object Methods: simply a function stored inside an object

//a.  A Simple Object Method: Think of a dog. It has a name (noun), and it can bark (action)
const dog = {
    name : "Bruno",
    breed : "Pug",
    bark : function(){
        console.log("Woof!!");
    }
};
dog.bark();                                           // Woof!!

//b. In modern JavaScript, you don't even need to type the word function or use a colon.
const light ={
    status : true,
    color(){
        console.log("Switch ON, Color Yellow");
    }
};
light.color();                                        // Switch ON, Color Yellow


// Obejets with arrays 
let bag ={
    brand : "Nike",
    color : "Blue",
    pockets : 4,
    itemsInside : ["Books", "Pen", "Notebook", "Lunch Box"]
};
console.log(bag.color);                                 // Blue
console.log(bag.itemsInside);                           // [ 'Books', 'Pen', 'Notebook', 'Lunch Box' ]
console.log(bag.itemsInside[2]);                        // Notebook
console.log(bag.itemsInside.indexOf("Pen"));            // 1

// deleting a property
delete bag.pockets; 

// adding new property
bag.wheels = false; 

console.log(bag);
/*{
  brand: 'Nike',
  color: 'Blue',
  itemsInside: [ 'Books', 'Pen', 'Notebook', 'Lunch Box' ],
  wheels: false
}*/


//Objects inside objects with arrays Or Nested Objects 
let laptop = {
    brand : "HP",
    model : "Model 2.0",
    specs: {
       storage : "126GB",
       color   : "Silver",
       screen  : "180 Degree",
       installers : ["VPN", "Chrome", "Firefox", "Teams"]
    }
};

console.log(laptop.brand);                                 // HP
console.log(laptop.specs);                                 // { storage: '126GB', color: 'Silver', screen: '180 Degree' }
console.log(laptop.specs[2]);                              // Undefined
console.log(laptop.specs.screen);                          // 180 Degree
console.log(laptop.specs.installers[1]);                   // Chrome
console.log(laptop.specs.installers.indexOf("Firefox"));   // 2



//let switch ="hello";
//console.log(switch);           // error Unexpected token 'switch' bcoz switch is a reserved keyword
