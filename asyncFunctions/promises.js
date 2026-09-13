// How to create a promise 
let weather = new Promise((resolve, reject) => {
    let weatherIsRainy = true;
    if(weatherIsRainy){
        resolve("It is rainign, YAY!!");
    }
    else{
        reject("It is to Sunny");
    }
});

// How to use promises using .then(), .catch(), .finally()
weather
.then((message) => {
    console.log("Sucess : ", message);
})
.catch((error) => {
    console.log(("error : ", error));
})
.finally(() => {
    ("Finally report done.")
});
// Sucess :  It is rainign, YAY!!


// Another exmaple 

let foodOrder = new Promise((resolve, reject) => {
    let order = false;
    if(order){
        resolve("your order is ready");
    }
    else{
        reject("NO Ingredients left");
    }
});
foodOrder
.then((message)=> {
    console.log(message);
})
.catch((error)=> {
    console.log(error);
})
.finally(() => {
    console.log("Order is completed");
});
/*
NO Ingredients left
Order is completed
*/


// Promise chaining 

function stepOne(){
    return Promise.resolve("Step 1 done");
};
function stepTwo(previousResult){
    return previousResult + " -> Step 2 done";
};
stepOne()
.then((resolve1) => stepTwo(resolve1))
.then((resolve2) => console.log((resolve2)));
// Step 1 done -> Step 2 done


// fetch() in promises 
// 1. We ask fetch to go to this URL and grab data
fetch("https://catfact.ninja/fact.")
// 2. The server answers! We take the raw response and convert it to JSON
.then((response) => response.json())
// 3. The JSON data is ready! Now we can print it or display it
.then((data) => {
    console.log("Here is your data:", data);
    console.log("Cat Fact:", data.fact); // Extracts just the text of the fact
})
// 4. If the internet goes down or the URL is broken, catch the error
.catch((error) => {
    console.error("Something went wrong:", error);
})
.finally(() => {
    console.log("the fetch request is completed ");
});
/*
Here is your data: { message: 'Not Found', code: 404 }
Cat Fact: undefined
the fetch request is completed 
*/