// 1. Create a set with Passing an array to new Set() : Pass an array to the new Set() constructor:
const characters = new Set(["ab", "cd", "ef"]);
console.log(characters);                                   // Set(3) { 'ab', 'cd', 'ef' }
console.log(typeof characters);                            // object

//2. create empty set then add itmes/element to it  using add() method
const num = new Set();

num.add(3);
num.add(5);
num.add(15);
num.add(1);
num.add(3);
num.add("q");
num.add("hello");
num.add(" ");

console.log(num);                                           // Set(7) { 3, 5, 15, 1, 'q', 'hello', ' ' }

//3. Methods 

// a.) new Set() :  Creates a new empty Set

const fruits = new Set(["Orange", "Mango", "Litchi", "Apple"]);

// b.) size [it's the only property of Set & is not a method]- Returns the total number of unique elements 
console.log(fruits.size);                                     // 4

// c.) add() - Adds a new element to the Set
fruits.add("Banana");
fruits.add ("banana");
console.log(fruits);                                          // Set(6) { 'Orange', 'Mango', 'Litchi', 'Apple', 'Banana', 'banana' }

//d.) has() - Checks if a value exists in the Set (Returns true or false)
console.log(fruits.has("pineapple"));                         // false
console.log(fruits.has("apple"));                             // false
console.log(fruits.has("Apple"));                             // true

// e.) delete() - Removes a specific element from the Set
fruits.delete("banana");
console.log(fruits);                                         // Set(5) { 'Orange', 'Mango', 'Litchi', 'Apple', 'Banana' }

// f.)  forEach() - Invokes a callback function for each element in insertion order
fruits.forEach((value) => {
    console.log(value);
});
/*
Orange
Mango
Litchi
Apple
Banana
*/

//g.) values() - method returns an Iterator object with the values in a Set:
const valueIterator = fruits.values();
console.log(valueIterator.next().value);
console.log(valueIterator.next().value);
console.log(valueIterator.next().value);
console.log(valueIterator.next().value);
console.log(valueIterator.next().value);
console.log(valueIterator.next().value);
/*
Orange
Mango
Litchi
Apple
Banana
undefined
*/

// h.) The keys() method returns an Iterator object with the values in a Set:A Set has no keys, so keys() returns the same as values().
const keyIterator = fruits.keys();
console.log(keyIterator.next().value);                            // Orange
console.log(keyIterator.next().value);                            // Mango 

//i.) The entries() method is supposed to return a [key,value] pair from an object, but A Set has no keys, so the entries() method returns [value,value].
const entriesIterator = fruits.entries();
console.log(entriesIterator.next().value);                        // [ 'Orange', 'Orange' ]

// j.) clear() - Removes all elements, making the Set completely empty
fruits.clear();
console.log(fruits.size);                                         // 0
console.log(fruits);                                              // Set(0) {}


//4. How to loop through sets 
const animals = new Set(["bird", "cat", "dog", "snake", "fish"]);

for (let animal of animals){
    console.log(animal);
};
/*
bird
cat
dog
snake
fish
*/


// 5. Logic Methods that create a NEW Set

const groupA = new Set(["Alice", "Bob", "Carry", "David"]);
const groupB = new Set(["carry", "David", "Elsa", "Finn", "Garry"]);

// a.) union() : Combines all unique items from both sets together
const groupOne = groupA.union(groupB);
console.log(groupOne);                                  // Set(8) {'Alice', 'Bob','Carry','David','carry','Elsa','Finn','Garry'}

// b.) intersection()Finds only the items that are in both sets
const groupTwo = groupA.intersection(groupB);
console.log(groupTwo);                                  // Set(1) { 'David' }

// c.) difference()Finds items that are in the first set, but NOT in the second set. (It acts like subtraction: Group A minus Group B)
const inAOnly = groupA.difference(groupB);
console.log(inAOnly);                                   // Set(3) { 'Alice', 'Bob', 'Carry' }

const inBOnly = groupB.difference(groupA);
console.log(inBOnly);                                   // Set(4) { 'carry', 'Elsa', 'Finn', 'Garry' }

// d.) symmetricDifference()Finds items that are unique to each set. It returns everything except what they share in common
const groupThree = groupA.symmetricDifference(groupB);
console.log(groupThree);                                // Set(7) { 'Alice', 'Bob', 'Carry', 'carry', 'Elsa', 'Finn', 'Garry' }


// 6.) logic Methods that check a condition (Returns true or false)
const mainVeg = new Set(["Potato", "Tomato", "Carrot", "Peas"]);
const sideVeg = new Set (["Carrot", "Peas"]);

// a.) isSubsetOf()Checks if all items of the first set exist inside the second set.
console.log(mainVeg.isSubsetOf(sideVeg));                        // false
console.log(sideVeg.isSubsetOf(mainVeg));                        // true 

// b.) isSupersetOf()The exact opposite of a subset. It checks if the first set contains everything that is in the second set.
console.log(mainVeg.isSupersetOf(sideVeg));                        // true
console.log(sideVeg.isSupersetOf(mainVeg));                        // false 

//c.) isDisjointFrom()Checks if two sets have absolutely nothing in common. It returns true if they are completely separate
console.log(mainVeg.isDisjointFrom(sideVeg));                      // false 



