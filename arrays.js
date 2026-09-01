// create an array 

let fruits = ["apple", "orange", "pineapple", "banana"];
// to get all elements in Array
console.log(fruits);                                  //Output : [ 'apple', 'orange', 'pineapple', 'banana' ]


//to get elements from diiferent positions in array
console.log(fruits[0]);                               //apple
console.log(fruits[2]);                               //pineapple
console.log(fruits[4]);                               //undefined since no element at index 4 


//replace an element in array
fruits[1] = "mango";
console.log(fruits);                                  // [ 'apple', 'mango', 'pineapple', 'banana' ]


// PUSH to add an element to the end 
fruits.push("orange");  
console.log(fruits);                                  // [ 'apple', 'mango', 'pineapple', 'banana', 'orange' ]

//Pop to remove last element
fruits.pop();
console.log(fruits);                                 // [ 'apple', 'mango', 'pineapple', 'banana' ]

//UNSHIFT to add element to begining
fruits.unshift("orange");
console.log(fruits);                                 // [ 'orange', 'apple', 'mango', 'pineapple', 'banana' ]

//SHIFT to remove element from begining
fruits.shift();
console.log(fruits);                                 // [ 'apple', 'mango', 'pineapple', 'banana' ]

// to get length of array
console.log(fruits.length);                          // 4

// to find index of an element from array
console.log(fruits.indexOf("mango"));                // 1

// to get index of element which doesn't exist
console.log(fruits.indexOf("tree"));                 // -1


// getting elements of an array using for loop
//Example 1
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
};                                                    // apple mango pineapple banana

//Example 2
for(let i=0; i<fruits.length; i+=2){
    console.log(fruits[i]);
};                                                     //apple pineapple

//Example 3
for(let i=1; i<fruits.length; i+=2){
    console.log(fruits[i]);
};                                                      // mango banana

// To display order of array in reverse
for(let i=fruits.length-1; i>=0; i--){
    console.log(fruits[i]);
};                                                       // banana pineapple mango apple


// Getting array element using for of loop
for (let variable of fruits){
    console.log("At index", fruits.indexOf(variable)," : ", variable);
}; 
/*
At index 0  :  apple
At index 1  :  mango
At index 2  :  pineapple
At index 3  :  banana
*/


// To sort array order
console.log(fruits.sort());                           // [ 'apple', 'banana', 'mango', 'pineapple' ]

// To sort array on reverse order 
console.log(fruits.sort().reverse());                 // [ 'pineapple', 'mango', 'banana', 'apple' ]


// Array with different data types
let arr = [true, 25, "hello"];
console.log(arr);                                     // [ true, 25, 'hello' ]



// bubble sort 
// sorting diff methods 




















