// The Map Object : Map is an object that can store collections of key-value pairs.Maps differ from standard objects in that keys can be of any data type.

// 1. Passing an existing Array to the new Map() constructor
const myMap = new Map([
    ["bat" , 4],
    ["ball", 5],
    ["car", 2]
]);
console.log(myMap);                                  // Map(3) { 'bat' => 4, 'ball' => 5, 'car' => 2 }
console.log(typeof myMap);                           // object 


// 2. Create a new Map and add elements with Map.set()
 const names = new Map();

names.set("Tim");
names.set ("John Wick", "writer");
names.set("Ria", "boss");

console.log(names);                                 // Map(3) { 'Tim' => undefined, 'John Wick' => 'writer', 'Ria' => 'boss' }

// 3. To change a value in Map
names.set("Ria", "VP");
console.log(names);                                 // Map(3) { 'Tim' => undefined, 'John Wick' => 'writer', 'Ria' => 'VP' }

// 4. Map Methods

//a.) new Map() : You can create a map by passing an array to the new Map() constructor
//b.) Map.set() : You can add elements & also change value of an element in a map 

const user = new Map([
    ["name" , "Perry"],
    ["age", 30 ],
    ["role", "clerk"]
]);

//c.) get() method gets the value of a key in a map
console.log(user.get("age"));                      // 30

//d.) size is property that returns the number of elements in a map
console.log(user.size);                             // 3

//e.) delete() method removes a map element:
user.delete("role");
console.log(user);                                  // Map(2) { 'name' => 'Perry', 'age' => 30 }

//f.) has() method returns true if a key exists in a map:
console.log(user.has("role"));                      // false 

//g.) forEach() method invokes a callback for each key/value pair in a map:
user.forEach((value, key) => {
    console.log(key + " : " + value );
});
/*
name : Perry
age : 30
*/

//h.)  entries() method returns an iterator object with the [key,values] in a map:
const entries = user.entries();
console.log(entries);                              // [Map Entries] { [ 'name', 'Perry' ], [ 'age', 30 ] }

//i.)  keys() method returns an iterator object with the keys in a map:
const keys = user.keys();
console.log(keys);                                 // [Map Iterator] { 'name', 'age' }

// j.) values() method returns an iterator object with the values in a map:
const values = user.values();
console.log(values);                               // [Map Iterator] { 'Perry', 30 }

//k.)  clear() method removes all the elements from a map:
console.log(user.clear());                          // undefined
console.log(user);                                 // Map(0) {}

//l.)  allows you to take an array (or any iterable) and organize its items into separate groups inside a new Map object
//    Map.groupBy() method does not change the original object.
//    The elements in the original and in the returned object are the same.
//    Changes will be reflected in both the original and in the returned object.

//Example with array of objects.
const pets = [
    {name: 'rocky' , specie : 'dog'},
    {name: 'tom'   , specie : 'cat'},
    {name: 'jerry' , specie : 'rat'},
    {name: 'mars'  , specie : 'cat'},
    {name: 'bruno' , specie : 'dog'}
];

const group = Map.groupBy(pets, (pet) => {
    return pet.specie;                            //  For each pet, the function returns its species value ('Dog' or 'Cat'). JavaScript uses this returned value as a "category key".
});

console.log(group.get('dog'));
//[ { name: 'rocky', specie: 'dog' }, { name: 'bruno', specie: 'dog' } ]

console.log(group.get('cat'));
//[ { name: 'tom', specie: 'cat' }, { name: 'mars', specie: 'cat' } ]

console.log(group.get('rat'));
// [ { name: 'jerry', specie: 'rat' } ]




 


