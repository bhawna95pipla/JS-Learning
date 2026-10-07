// Loops 

//for of — loops over values

let fruits = ["Apple", "Mango", "Banana"]

for(let fruit of fruits){
    console.log(fruit);
}

/*
Apple
Mango
Banana
*/

// for in — loops over keys/indexes
// wiht array forin give index of elements
//Important: The indexes returned by for...in are strings, not numbers.
//for...in is generally more appropriate for object properties:

for(let fruit in fruits){
    console.log(fruit);
    console.log(typeof fruit);
}
/*
0
string
1
string
2
string
*/

// to get element of array using for in loop
for(let fruit in fruits){
    console.log(fruits[fruit]);
}
/*
Apple
Mango
Banana
*/

// for in with objects 

const obj ={
    firstName : "john",
    lastName  : "wick",
    age       : 35
};

for(let key in obj){
    console.log(key, obj[key]);
}
/*
firstName john
lastName wick
age 35
*/


// for each — executes a function for each element

let veg = ["peas", "onion", "potato"]

veg.forEach((veg)=>{
    console.log(veg);
});
/*
peas
onion
potato
*/


// we can also get indexes

veg.forEach((value, index) =>{
    console.log(index, value);
});
/*
0 peas
1 onion
2 potato
*/

// pattern with string 

let string = "helloworld";
let s=0;

for (let i =1; i<=4; i++){
for(j=1; j<=4-i ;j++){
    process.stdout.write(" ");
}

for(j=1; j<=i ; j++){
    process.stdout.write(string[s] + " ");
    s++;
}
console.log();
};


// diamond pattern

let n=4;

for(let i=1; i<=n; i++){
    for (let j=1; j<=n-i; j++ ){
        process.stdout.write(" ");
    }

    for(let k=1; k<=2*i-1; k++){
        process.stdout.write("*");
    }
    console.log();
}
for(i=n-1; i>=1 ;i--){
    for (let j=1; j<=n-i; j++ ){
        process.stdout.write(" ");
    }

    for(let k=1; k<=2*i-1; k++){
        process.stdout.write("*");
    }
    console.log();
}