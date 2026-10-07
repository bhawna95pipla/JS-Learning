// Arrays

let arr = ["Mango", "banana", "Apple", "grapes"];

let newArr1 = arr.push("Litchi");
console.log(newArr1);                                 // give new lenght of array 
console.log(arr);                                     // [ 'Mango', 'banana', 'Apple', 'grapes', 'Litchi' ]


let newArr2 = arr.unshift("pineapple");
console.log(arr);                                    // [ 'pineapple', 'Mango', 'banana', 'Apple', 'grapes', 'Litchi' ]

let newArr3 = arr.pop();
console.log(arr);                                    //[ 'pineapple', 'Mango', 'banana', 'Apple', 'grapes' ]

let newArr4 = arr.shift();
console.log(arr);                                   // [ 'Mango', 'banana', 'Apple', 'grapes' ]

console.log(arr[2]);                                // Apple
console.log(arr[6]);                                // undefined
console.log(arr.indexOf("banana"));                 // 1
console.log(arr.length);                            // 4
console.log(arr.indexOf("pen"));                    // -1

// getting elements of array using for loop
for(let i=0; i<arr.length ; i++){
    console.log(arr[i]);
}
/*
Mango
banana
Apple
grapes
*/

// looping over array elements using for of loop

for(let element of arr){
    console.log(arr.indexOf(element)+ ":" + element);
}
/*
0:Mango
1:banana
2:Apple
3:grapes
*/

console.log(arr.sort());                                // [ 'Apple', 'Mango', 'banana', 'grapes' ]

console.log(arr.sort().reverse());                      // [ 'grapes', 'banana', 'Mango', 'Apple' ]



let array = [20,10,50,30,60,40];


//finding largest element in array
let largest = array[0];

for(let i=1; i<array.length; i++){

    if(array[i]>largest){
    largest = array[i];
    }
}
console.log(largest);                           // 60


// finding the smallest element in array 

let smallest = array[0];
for(let i=1; i<arr.length ; i++){
    if(array[i] < smallest){
        smallest = array[i];
    }
}
console.log(smallest);                            //10


// finding sum of elements

let sum1 = 0;
for(i=0; i< array.length; i++){
    sum1 += array[i];
}
console.log(sum1);                                //210


// finding average of array elements

let sum2 = 0;
for (i=0; i< array.length; i++){
    sum2 += array[i];
}

let average = sum2/array.length;
console.log(average);                              // 35


//reverse of an array

let arrList = [1,2,3,4,5,6];

let arrReverse = [];

for(let i= arrList.length-1; i>=0; i--){
     arrReverse.push(arrList[i]);
}
console.log(arrReverse);                             // [ 6, 5, 4, 3, 2, 1 ]


// find even and odd number

let even =[];
let odd = [];

for(let i=0; i< arrList.length;i++){
    if(arrList[i]%2 == 0){
        even.push(arrList[i]);
    }
    else{
        odd.push(arrList[i]);
    }
}
console.log(even);                              // [ 2, 4, 6 ]
console.log(odd);                               // [ 1, 3, 5 ]
