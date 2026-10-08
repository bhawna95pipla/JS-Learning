console.log(undefined);                                // undefined
console.log(typeof undefined);                         // undefined

console.log(null);                                     // null
console.log(typeof null);                              // object



let num1 = 10;
let num2 = 5;
let calculate = "/";

switch(calculate){
case "+" :
    result = num1 + num2;

case "-" :
    result = num1 - num2;
     
case "*" :
    result = num1 * num2;
    
case "/" :
    result = num1 / num2;
    
case "**" :
    result = num1 ** num2;
    
default:
    console.log("No valid calculating opeartor");
};
console.log(result);                                           
/*
Output:
No valid calculating opeartor
100000
*/


// rental bike
let age=17;
let balance =20;
let isRaining = false;
let bikeStatus;

if(isRaining){
 bikeStatus = "Rental service suspended";
}
else if(age<14){
    bikeStatus = "Not allowed biking";
}
else if(balance<15){
    bikeStatus = "insufficient balance, Visit again";
}
else{
    bikeStatus = "Permission granted, Pick bike";
}

console.log(bikeStatus);                              //  Permission granted, Pick bike




// Switch statements

let mode = "ECO" ;
let systemStatus;
let powerDraw;

switch(mode){
    case "HEAT":
        systemStatus = "Heating Active";
        powerDraw    = "High";
        break;

    case "COOL":
       systemStatus = "Cooling Active";
        powerDraw    = "High";
        break; 
        
     case "ECO":
     case "SAVER":   
       systemStatus = "Eco Ventilation";
        powerDraw    = "Low";
        break;  
    
    case "OFF":
       systemStatus = "System Idle";
        powerDraw    = "None";
        break; 

     default:
        systemStatus = "Error: Unknown Mode";
        powerDraw = "Unknown";
        break;      
}

console.log("Status :" + systemStatus, ", Power :" + powerDraw );
// OUTPUT :  Status :Eco Ventilation , Power :Low

     

function outer(morning){
    return function inner(night){
        return morning + night;
    }
}
const greet = outer("Goodmorning");
console.log(greet(" & now Good night"));



(function (){
    console.log("helo");
})();


const num = Math.random();
console.log(num);


const randomNum = Math.floor(Math.random()*20);
console.log(randomNum);

const date = new Date();
console.log(date);


// // Try catch throw finally 
try{
    console.log("try1....");
    
    try{
        console.log("try2.....");
    
        try{
            console.log("try3....")
            console.log(toy);
            console.log("Hello try3");
        }
        catch(catch3){
            console.log("catch3....");
        }
    }
    catch(catch2){
            console.log("catch2.....");
        }
}
catch(catch1){
    console.log("catch1....")
}
finally{
    console.log("finally")
};
// /*
// try1....
// try2.....
// try3....
// catch3....
// finally
// */



// // mutlitple try with one finally & no catch 

try{
    console.log("try1....");
    
    try{
        console.log("try2.....");
    
        try{
            console.log("try3....")
            console.log(toy);
            console.log("Hello try3");
        }
        finally{
    console.log("finally..3.....");
        }  
    }
    finally{
    console.log("finally..2....")
    }
}
finally{
    console.log("finally..1.....")
};

// /*
// try1....
// try2.....
// try3....
// finally..3.....
// finally..2....
// finally..1.....
// ReferenceError: toy is not defined
// */



// // Without catch try & finally where try is passed
try{
    console.log("try1....");
}
finally{
    console.log("finally")
};
// /*
// try1....
// finally
// */


// // try & finally where try is failing 

try{
    console.log(pen);
}
finally{
    console.log("finally123")
};

// /*
// finally123    finally will run 
// ReferenceError: pen is not defined
// and code will stop at try only finally will not run since we don't have catch 
// */


// // try & finally where no catch but throw 

try{
    console.log(pen);
    throw new Error("No pen available")
}
finally{
    console.log("finally....")
};

// /*
// finally....
// ReferenceError: pen is not defined
// */


// // try with no catch & finally

// try{
//     console.log(name);
// };

// /*
// SyntaxError: Missing catch or finally after try
// */



// try with 1 catch & 2 finally
try{
    console.log(text);
    throw new Error("No text available");
}
catch(error){
    console.log("error is :" , error.message);
}
finally{
    console.log("final A");
}
// finally{
//     console.log("final B");
// };

/*
SyntaxError: Unexpected token 'finally'   when 2 finally are added 
*/


// try with 1 catch & 2 throw , 1 finally

try{
    console.log(car);
    throw new Error("No text available");
    throw new Error("Throw arror 2....")
}
catch(error){
    console.log("error is :" , error.message);
}
finally{
    console.log("final A");
};

/*
error is : car is not defined
final A
*/