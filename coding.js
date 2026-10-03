console.log(undefined);                                // undefined
console.log(null);                                     // null



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

     
