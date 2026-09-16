// 1. Spread with Arrays 

// A. Copying an Array
const originalFruits = ["apple", "mango"];
const copyFruits = [...originalFruits];
copyFruits.push("grapes", "orange");

console.log(copyFruits);                                // [ 'apple', 'mango', 'grapes', 'orange' ]
console.log(originalFruits);                            // [ 'apple', 'mango' ]

// B. Combining (Merging) also inserint new elements 
const arr1 = ["alpha", "beta"];
const arr2 = ["gamma", "delta"];

const finalArrList = [...arr1, ...arr2, "nutela", "fish"];

console.log(finalArrList);                              // [ 'alpha', 'beta', 'gamma', 'delta', 'nutela', 'fish' ]
console.log(arr1);                                      // [ 'alpha', 'beta' ]
console.log(arr2);                                      // [ 'gamma', 'delta' ]


// 2. Spread with Objects

// A. Copying and Updating an Object

const person = {name : "harry" , role : "student"};

const profile = {...person, role : "council member"};
console.log(profile);                                  // { name: 'harry', role: 'council member' }
console.log(person);                                   // { name: 'harry', role: 'student' }

// B. Merging Two Objects
const student = {name : "Ria" , height : 5.5 , weight : "60Kg"};
const stats   = {grade : "A+" , stars : 4};

const finalResult = {...student , ...stats};
console.log(finalResult);                               // { name: 'Ria', height: 5.5, weight: '60Kg', grade: 'A+', stars: 4 }


// 3. Spread into Function Arguments

function greetUser(firstName, lastName, role){
console.log(`Hello, ${firstName} ${lastName}, Your role is : ${role}`);
};

const userInfo = ["Jane" , "Doe", "Doctor"];
greetUser(...userInfo);                                  // Hello, Jane Doe, Your role is : Doctor


//4. Shallow Copying : used in case of nested arrays, objects , this also changes orignal array/object 

const nestedObj = {name : "Snape" , age : 50 , Skills :{ role : "teacher"}};
const copyObj = {...nestedObj};

copyObj.Skills.role = "VP";

console.log(copyObj);                                     // { name: 'Snape', age: 50, Skills: { role: 'VP' } }
console.log(nestedObj);                                   // { name: 'Snape', age: 50, Skills: { role: 'VP' } }


// 5. Deep copy 
// JS has a built-in tool called structuredClone() that makes a perfect, independent copy of your data
// in Deep copying changing copy never changes anything in original array /objects.....

const original = {
  name: "Sam",
  details: {
    age: 25,
    city: "Delhi" 
  }
};
const deepCopy = structuredClone(original);
deepCopy.details.city = "Mumbai";

console.log(original.details.city);                             // Delhi
console.log(deepCopy.details.city);                             // Mumbai






