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



//callbacks

function result(value){
    console.log("Result Value : ",value);
}

function add(num1 , num2, callback){
    let sum = num1 + num2;
    console.log("Sum : ", sum);
    callback(sum);
}

add(20,30,result);
/*
Sum :  50
Result Value :  50
*/


// return & arguments

function timeUp(){
    console.log("This code will run after 2 seconds");
}

setTimeout(timeUp, 2000);
console.log("This line will run 1st");


//IIFE : immediatly invoked function expression : An IIFE is a function that invokes itself when defined.

(function(){
    console.log("I will run immediately");
})();


// function multiply(num1 , num2){
//     result = num1 * num2;
//     console.log("Result : ", result);
// };
// multiply(10,5);


// arrow functions
// convert above code to arrow fucntion
const myFun = (num1, num2) => num1 * num2;
console.log(myFun(2, 10));

const addit = (a,b,c) => a+b+c;
console.log(addit(5,10,15));

const greet = ()=> "hello";
console.log(greet());


// promises 
let coffee = new Promise((resolve, reject)=>{
    let coffeeOrder = true;
    if(coffeeOrder){
        resolve("Coffee is ready");
    }
    else{
        reject("Coffee's not done yet");
    }
});
coffee
.then((value) => {console.log("Completed : ", value);})
.catch((error) => {console.log("Error : ", error);})
.finally(() => {console.log("Finally order completed.");})

/*
Completed :  Coffee is ready
Finally order completed.
*/


let weather =new Promise((resolve,reject)=> {
    weatherRainy = false;

    if(weatherRainy){
        resolve("It's raining");
    }
    else{
        reject("It's sunny outside")
    }
});
weather
.then((message) => {console.log(message);})
.catch((error) => {console.log(error);})
.finally(()=> {console.log("Let's play outside anyway");})


//promise chaining 

function walkDog(){
    return new Promise((resolve,reject)=>{
        const dogWalked = true;

        if(dogWalked){
            resolve("Walkign the dog is done");
        }
        else{
            reject("You haven't waled the dog");
        }
    });
};

function cleanKitchen(){
    return new Promise((resolve,reject)=>{
        const kitchenCleaned = true;

        if(kitchenCleaned){
            resolve("kitchen is clean now");
        }
        else{
            reject("ktichen cleaning not done yet");
        }
    });
}

walkDog().then((value)=> {console.log(value); return cleanKitchen();})
       .then((value)=> {console.log(value); console.log("Chores Completed");});
/*
Walkign the dog is done
kitchen is clean now
Chores Completed
*/



// async/ await

async function chores(){
    try{
    const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    console.log("All chores done");
    }

    catch(error){
        console.error(error);
    }
};
chores();

/*
Walkign the dog is done
kitchen is clean now
All chores done
*/