// 1. Global Scope 
let park = "Everyone can access agrden";

function parkVisit(){
console.log(park);                          // Everyone can access agrden
}
parkVisit();
console.log(park );                         // Everyone can access agrden


//2. Local OR Function  Scope : a function code 

function inside(){
    let fridge = "Fridge can be opened inhouse only";
    console.log(fridge);                          // Fridge can be opened inhouse only
}

inside();
//console.log(fridge);                            // fridge is not defined


// 3. Block Scope  : anu curly braces with if , for is a block 

if (true){
    let safeVault = "Gold access Granted"
    console.log(safeVault);                         // Gold access Granted
}
//console.log(safeVault);                           // safeVault is not defined


// 4. Difference between function/local VS Block scope : A block lives inside a function, but a function can not live inside a block.
// var does not repect block scope but does respect Function/local scopr

function scopes(){
    if (true){
        var varScope = "Can be accessed inside whole function";
        let letScope = "Limited to this for loop Block";
        const constScope = "Also Limited to if loop block";

    console.log("Inside if Loop: ", varScope);                 // Inside if Loop:  Can be accessed inside whole function
    console.log("Inside if Loop: ", letScope);                 // Inside if Loop:  Limited to this for loop Block
    console.log("Inside if Loop: ", constScope);               // Inside if Loop:  Also Limited to if loop block
    }
    console.log("Outside Loop: ", varScope);                   // Outside Loop:  Can be accessed inside whole function
    console.log("Outside Loop: ", letScope);                  // letScope is not defined
    console.log("Outside Loop: ", constScope);                  // constScope is not defined
};

scopes();






