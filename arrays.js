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


///////1 Sep
let fruitsList = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
// slice
console.log(fruitsList.slice(1,4));                               // [ 'Banana', 'Cherry', 'Date' ]
console.log(fruitsList);                                         // [ 'Apple', 'Banana', 'Cherry', 'Date', 'Elderberry' ]

//Splice = delete & insert 
let newFruitList = fruitsList.splice(1,2, "Mango");
console.log(newFruitList);                                     // deleted [ 'Banana', 'Cherry' ]
console.log(fruitsList);                                       // new array [ 'Apple', 'Mango', 'Date', 'Elderberry' ]


let text = "Yellow, Green,Red, Blue , Purple, Pink";
// Split
let textSplit = text.split(",");
console.log(textSplit);                                       // [ 'Yellow', ' Green', 'Red', ' Blue ', ' Purple', ' Pink' ]


// Merge Array with different methods

let fruitsArr = ["Apple", "Banana", "Cherry"];
let veggisArr = ["Peas", "Carrot", "Potato"];

//a. [...]Spread operator method 
let list1 = [... fruitsArr, "Berry", ...veggisArr];
console.log(list1);
/*
[
  'Apple',  'Banana',
  'Cherry', 'Berry',
  'Peas',   'Carrot',
  'Potato'
]
*/

//b. concat method
let list2 = fruitsArr.concat(veggisArr);
console.log(list2);                                  //[ 'Apple', 'Banana', 'Cherry', 'Peas', 'Carrot', 'Potato' ]


//c.  array.push(....another array) method = this will change the original array 
let list3 = fruitsArr.push(...veggisArr);
console.log(list3);                                   // 6 after adding array gives final length 
console.log(fruitsArr);                              // [ 'Apple', 'Banana', 'Cherry', 'Peas', 'Carrot', 'Potato' ]


//d. for of loop method

for (let i=0 ; i<veggisArr.length; i++){
    fruitsArr.push(veggisArr[i]);
}
console.log(fruitsArr);                                 // [ 'Apple', 'Banana', 'Cherry', 'Peas', 'Carrot', 'Potato' ]

// e. splice method
let colorList1 = ["Color1", "Color4"];
let colorList2 = ["Color2", "Color3"];

colorList1.splice(1,0,...colorList2);
console.log(colorList1);                                // [ 'Color1', 'Color2', 'Color3', 'Color4' ]


// bubble sort example
function bubbleSort(num){
for (let i=0; i<num.length-1; i++){                      // i loop iterating over all elements until sorted 
    for (let j=0; j< num.length-i; j++){                     // j loop compring adjecent values 
        if(num[j] > num[j+1]){
            [num[j], num[j+1]] = [num[j+1], num[j]];
        }
    }
}
return num;
}
console.log(bubbleSort([5,0,6,1,2,4]));               // [ 0, 1, 2, 4, 5, 6 ]


//user input arrays 
// Example 1
const prompt= require('prompt-sync')();

let subjectScores= [];

let subjectOne= prompt("Enter your score for Subject1 : ");
let subjectTwo= prompt("Enter your score for Subject2 : ");

subjectScores.push(subjectOne);
subjectScores.push(subjectTwo);

console.log(subjectScores);                                   // [ '70', '85' ]


// Example 2
let colorPanel= [];
for (let i=0 ; i<3 ; i++){
let color = prompt("Enter the Color : ", i);
colorPanel.push(color);
}
console.log(colorPanel);                                       // [ 'blue', 'green', 'purple' ]


// Nested OR Mutlidimensional array
 const shopping =[
    ["pototo", "carrot", "peas","tomato"],
    ["Milk", "cheese", "curd"],
    ["Pen", "Book", "Marker", "Scale"]
 ];
console.log(shopping[0]);                              // [ 'pototo', 'carrot', 'peas', 'tomato' ]
console.log(shopping[1]);                              // [ 'Milk', 'cheese', 'curd' ]
console.log(shopping[2]);                              // [ 'Pen', 'Book', 'Marker', 'Scale' ]
console.log(shopping[0][2]);                           // peas
console.log(shopping[1][2]);                           // curd
console.log(shopping[2][2]);                           // Marker 

 
 
 

 
















