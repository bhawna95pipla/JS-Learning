// Array iteration methods

//1.)  map() : 
//  creates a new array by performing a function on each array element.
// map does not execute the function for array elements without values.
// map does not change the original array.

// Example 1: trippling number
 const num = [2,3,1,5];
 const numTriple = num.map(num => num *3);
 console.log(numTriple);                               // [ 6, 9, 3, 15 ]
 console.log(num);                                     // [ 2, 3, 1, 5 ]
 
 // Example 2: converting to upper case
 const arr = ["car", "bird", "pencil"]
 const newArr = arr.map(arr => arr.toUpperCase());
 console.log(newArr);                                    // [ 'CAR', 'BIRD', 'PENCIL' ]
 console.log(arr);                                       // [ 'car', 'bird', 'pencil' ]

 // Example 3: Extracting data from an array of objects
 const users = [
    {name : "Ron"   , age : 25},
    {name : "Harry" , age : 30},
    {name : "Hagrid", age : 50},
];

const namesOnly = users.map( user => user.name);
console.log(namesOnly);                                   // [ 'Ron', 'Harry', 'Hagrid' ]


// 2.) filter() : take out certain items based on a condition. It checks each item against a test (a condition that returns 
//true or false). If the item passes, it gets pushed into a new array.

// Exmaple 1: fiding even numvers
const number = [1,2,5,6,9];
const even = number.filter(numb => numb % 2 == 0);
console.log(even);                                         // [ 2, 6 ]
console.log(number);                                       // [ 1, 2, 5, 6, 9 ]

// Example 2: filter words with length greater than 4
const words = ["hello", "tata", "bye bye", "yo"];
const bigWords = words.filter(word => word.length >4);
console.log(bigWords);                                      // [ 'hello', 'bye bye' ]
console.log(words);                                         // [ 'hello', 'tata', 'bye bye', 'yo' ]

// Exmaple 3: filter words with upper case only
const text = ["HELLO", "tom", "WELCOME", "back"];
const upper = text.filter( text => text === text.toUpperCase());
console.log(upper);                                                // [ 'HELLO', 'WELCOME' ]

// Exmaple 4: finding specific items in Array of objects
const products = [
    {product : "TV"    , Price: 1000},
    {product : "Oven"  , Price: 5000},
    {product : "Couch" , Price: 9000},
];
const expensiveProducts = products.filter( item => item.Price > 6000);
console.log(expensiveProducts);                                    // [ { product: 'Couch', Price: 9000 } ]


// 3.)  reduce() method runs a function on each array element to produce a single value.
//  reduce() works from left-to-right in the array
// reduce() does not reduce the original array.

// Example 1 : to calculate all numbers
const values = [20,15,10,40];
const sum = values.reduce((count, current) => count +current,0);    // 85
console.log(sum);

const sum2 =values.reduce((count, current) => count +current);      // 85
console.log(sum2);

// Exmaple 2 : finding highest grades
const grade = [30,60,99,78];
const highest = grade.reduce((max, current) => {
    return current > max ? current : max;
}, grade[0]);
console.log(highest);                                                // 99 

// Exmaple 3: calculating final cost of shopping
const shopping = [
    {name : "hat"    , price :200},
    {name : "colors" , price :100},
    {name : "shoes"  , price :300},
    {name : "phone"  , price :400},
];
const totalCost = shopping.reduce((total, item) => total + item.price,0);
console.log(totalCost);                                                    // 1000

// const totalCost2 = shopping.reduce((total, item) => total + item.price); 
//console.log(totalCost2);                                           
// Output : [object Object]100300400
// Reason : JS uses the entire first object ({name: "hat", price: 200}) as your starting total, which breaks your math and results in [object Object]100300400 (or NaN depending on environment details).
// total is now the string " [object Object]100 " 
// Text concatenation happens again, giving you " [object Object]100300 ".












 
 
