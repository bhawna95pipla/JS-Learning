//for of loop is used to get values of elements inside an array

//Example1 : Loops through a list of items
const fruits = ["Apple", "Banana", "Cherry", "Mango", "Grapes"];
for (const fruit of fruits) {
  console.log("Fruit:", fruit);
};


//Example 2 :  looping over array
const cars = ["BMW", "Volvo", "Mini", "MG"];

for (let x of cars) {
  console.log("Car Names : ", x);
};


//Example 3: Loooping over string

let language = "JavaScript";

for (let character of language) {
console.log("String : ", character);
};