//1. Sum of All Elements in an Array

let arr= [10,20,30,40,50,60];
let sum =0;

for(let i=0; i <arr.length; i++)
{
    sum += arr[i];
}
console.log("Sum :" , sum);


// 2. Finding largest element in array

let arrTwo =[12,30,15,110,70];
let largest = arr[0];

for(let i=1; i<arrTwo.length; i++){
    if(arrTwo[i] > largest){
        largest = arrTwo[i];
    }
}
console.log("largets number :", largest);


//3. Reverse the array [1, 2, 3, 4, 5] without using reverse()


let arrThree = [1,2,3,4,5,6]
let reverse = [];

for(let i=arrThree.length-1; i>=0; i--){
    reverse.push(arrThree[i]);
}
console.log("Reverse Array: ", reverse);