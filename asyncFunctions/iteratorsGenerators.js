//1. iterables 
//  An iterable is anything that can be looped over using a for...of loop.
// Arrays, Strings, Sets , Maps & object is considered iterable if it has a special hidden method (Symbol.iterator) that knows how to spit out its values.

const toys = ["car", "ball", "bat"];
for( const toy of toys){
    console.log(toy);
};
/*
car
ball
bat
*/

// 2. Iterator 
// is an object that provides a standard way to access elements sequentially.
// it must adheres to the Iterator Protocol: It must have a next() method.

// A. build in array iterator
const fruits = ["apple", "banana", "mango", "grapes"];
const fruitIterator = fruits[Symbol.iterator]();

console.log(fruitIterator.next());                              // { value: 'apple', done: false }
console.log(fruitIterator.next().value);                        // banana
console.log(fruitIterator.next());                              // { value: 'mango', done: false }
console.log(fruitIterator.next().value);                        // grapes
console.log(fruitIterator.next());                              // { value: undefined, done: true }

// B. creating a custom iterator

function makeIterator(array){
    let index =0;
    return {
        next :function(){                                     // this is custom iterator 
            if (index <array.length)
            {
                return {value: array[index++], done: false};
            }
            else {
                return {value: undefined, done: true};
            }
        }
    };
};
const iterator = makeIterator(["Carrot", "Onion", "Coriander"]);

console.log(iterator.next());                           // { value: 'Carrot', done: false }
console.log(iterator.next());                           // { value: 'Onion', done: false }
console.log(iterator.next());                           // { value: 'Coriander', done: false }
console.log(iterator.next());                           // { value: undefined, done: true }
console.log(iterator.next());                           // { value: undefined, done: true }


// 3. Generators
/*
JS Function can only return one value.
JS Generator can return multiple values, one by one.
JS Generator can yield a stream of data.
JS Generator can be paused and resumed.
*/

function* stepsList(){
    yield 'Step 1';
    yield 'Step 2';
    yield 'Step 3';
};
const list = stepsList();

console.log(list.next().value);                                    // Step 1
console.log(list.next().value);                                    // Step 2
console.log(list.next().value);                                    // Step 3
console.log(list.next().value);                                    // undefined


// date with generator example 

function* dateGenerator(startDate = new Date()) {
  let current = new Date(startDate);
  while (true) {
    yield new Date(current);
    current.setDate(current.getDate() + 1);
  }
}

const date = dateGenerator();
console.log(date.next().value);                              // 2026-09-16T13:47:00.257Z                
console.log(date.next().value);                              // 2026-09-17T13:47:00.257Z
console.log(date.next().value);                              // 2026-09-18T13:47:00.257Z
console.log(date.next().value);                              // 2026-09-19T13:47:00.257Z


// find date 3 months later from current date

function* monthGenerator(monthAdded =3){
 const date = new Date;
 date.setMonth(date.getMonth()+ monthAdded);
 yield date;
};

const futureDate= monthGenerator();

console.log(futureDate.next().value.toDateString());                 // Wed Dec 16 2026


// Find year later date from current date

function* yearGenerator(yearAdded){
    const date = new Date;
    date.setFullYear(date.getFullYear() + yearAdded);
    yield date;
};

const futureYear = yearGenerator(5);

console.log(futureYear.next().value.toDateString());                  // Tue Sep 16 2031



// date generator with generator function

function* dateResult() {
  while (true) {
    const type = yield;                                    // The engine pauses here, waiting for an input
    const date = new Date();                               // Creates a fresh date instance on each loop iteration

    switch (type) {
      case "random": 
        const start = new Date(2020, 0, 1).getTime();
        const end = new Date(2027, 0, 1).getTime();
        yield new Date(start + Math.random() * (end - start));
         
      
      case "4months": 
        date.setMonth(date.getMonth() + 4); 
        yield date;
        
      
      case "6years": 
        date.setFullYear(date.getFullYear() + 6); 
        yield date;
        break; 
      
    }
  }
}

const finalDate = dateResult();
finalDate.next();                                                    // "Start running the code and pause at the first yield so that it is ready to receive a value."

console.log(finalDate.next("random").value.toDateString());           // Sun Dec 06 2020
console.log(finalDate.next("4months").value.toDateString());          // Sun Jan 17 2027
console.log(finalDate.next("6years").value.toDateString());           // Mon Jan 17 2033







