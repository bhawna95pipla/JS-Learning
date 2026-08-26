// if Statement

//example 1
let customerAge = 60;
let trainTicketPrice = 120;

if(customerAge >=55)
{
    trainTicketPrice = 100;
}
console.log("Your Train Ticket Price is :", trainTicketPrice);

//example 2
let temperature =32;
if(temperature >30)
{
    console.log("Turning on the AC now");
    
};

// example 3
let cartTotal = 100;
let shippingCost = 20;
if(cartTotal >= 100)
{
    console.log("Shipping Cost is 0, Final Bill!!", cartTotal );
    
};

// if else Statement

// example 1
let roomLight = "green"
if(roomLight === "blue")
{
    console.log("Good Evening!!");
}
else
{
    console.log("Good Morning!!");
};

//example 2
let accountBalance;
let withdrawAmount=1000;
if(accountBalance > withdrawAmount)
{
    console.log("Transaction Approved, You can proceed to withdraw!");
}
else{
    console.log("Insufficient Funds In Account, Cannot Proceed further!");
};

//example 3

let darkMode = true;
if(darkMode === true)
{
    console.log("Applying Black color to background");
}
else{
    console.log("Applying White color to background ");
    };


// Exmaple 4   Leap year 

let year = 1974;

if(year%4 === 0)
{
    console.log( year + " is a Leap Year");
}
else{
    console.log( year + " is NOT a Leap Year");
}


// Exmaple 5 Leap year with ternary operator 
let yearStatus = (year%4 ==0) ? "Leap Year" : "Not a Leap Year";
console.log(yearStatus);        



//else if Statement 

// example 1
let loginStatus = false;

if(loginStatus === true)
{
    console.log("User has Signed in Start Timing");
}
else if(loginStatus === false)
{
    console.log("User has not Signned in Yet! ");
}
else 
{
    console.log("Still Waiting for User's login Status!!");
    
};

//example 2
let age =15;
if(age<13)
{
    console.log("Person is child");
}
else if(age >=13 && age <=20)
{
    console.log("Person ia Teenager");
}
else
{
    console.log("Person is an Adult");
};

// example 3
let speed = 75;
if(speed <=60)
{
    console.log("Safe Speed!");
}
else if(speed >60 && speed <= 80)
{
    console.log("Warning!!, You will be fined.");
}
else
{
    console.log("Over Limit!!, Halt.");
};    



//Switch Statements


// Example 1 number is Positive, Negative, or Zero
let num = -7;

switch(num){

    case 1 :
        console.log("NUmber value is 1 & it is Positive number");
        break;

     case 7:
        console.log("Number value is 1 & it is Positive number");
        break;

     case-7:
        console.log("Number value is -7 & it is Negative number");
        break;
        
    default:
        console.log("No matching number");
        break;
        
};


//Example 2: Day of the Week
let day =5;

switch(day){
case 1:
    console.log("It's Monday");
    break;
case 2:
    console.log("It's Tuesday");
    break;
case 3:
    console.log("It's Wednesday");
    break;
case 4:
    console.log("It's Thursday");
    break;
case 5:
    console.log("It's Friday");
    break;
default:
    console.log("It's Weekend!! Yay");
    break;            
};
// strung , character 

//Example 3 switch with no break 
let today =3;

switch(today){
case 1:
    console.log("Today is Monday");
case 2:
    console.log("Today is  Tuesday");
case 3:
    console.log("Today is Wednesday");
case 4:
    console.log("Today is  Thursday");
case 5:
    console.log("Today is  Friday");
default:
    console.log("Weekend Started!!");           
};


//Example calculator

let num1 = 10;
let num2 = 5;
let calculate = "+";

switch(calculate){
case "+" :
    result = num1 + num2;
    break;
case "-" :
    result = num1 - num2;
    break;     
case "*" :
    result = num1 * num2;
    break;
case "/" :
    result = num1 / num2;
    break;
case "**" :
    result = num1 ** num2;
    break;
default:
    console.log("No valid calculating opeartor");
};
console.log(result);
// Output : 15


// Example Calculator with no break 

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
//Outout :  100000


// switch calculator print all calculations  and print all value in the end 
switch(calculate){
case "+" :
    result1 = num1 + num2;

case "-" :
    result2 = num1 - num2;
     
case "*" :
    result3 = num1 * num2;
    
case "/" :
    result4 = num1 / num2;
    
case "**" :
    result5 = num1 ** num2;
    
default:
    console.log("No valid calculating opeartor");
};
console.log(result1, result2, result3, result4, result5);
//output : 15 5 50 2 100000


//  switch calculator with all value wihtout break 

switch(calculate){
case "+" :
    result = num1 + num2;
    console.log( result);
    
case "-" :
    result = num1 - num2;
    console.log( result);
     
case "*" :
    result = num1 * num2;
    console.log( result);
    
case "/" :
    result = num1 / num2;
    console.log( result);
    
case "**" :
    result = num1 ** num2;
    console.log( result);
    
default:
    console.log("No valid calculating opeartor");
};

//output :
// 15
// 5
// 50
// 2
// 100000
//No valid calculating opeartor


// String example with switch 
let dayOfWeek = "wednesday";

switch(dayOfWeek){
case "Monday":
    console.log("It's Monday");
    break;
case "Tuesday":
    console.log("It's Tuesday");
    break;
case "Wednesday":
    console.log("It's Wednesday");
    break;
case "Thursday":
    console.log("It's Thursday");
    break;
case "Friday":
    console.log("It's Friday");
    break;
default:
    console.log("It's Weekend!! Yay");
    break;            
};

// output : It's Weekend!! Yay   


// Swtich example with case added after default 

let weekDay = "Sunday";

switch(weekDay){
case "Monday":
    console.log("It's Monday");
    break;
case "Tuesday":
    console.log("It's Tuesday");
    break;
case "Wednesday":
    console.log("It's Wednesday");
    break;
case "Thursday":
    console.log("It's Thursday");
    break;
case "Friday":
    console.log("It's Friday");
    break;
default:
    console.log("It's Weekend!! Yay");  
case "Saturday":
   console.log("It's Saturday");
    break;               
};

// Output : with break after default
//  It's Weekend!! Yay

// Output : without break after default 
// It's Weekend!! Yay
// It's Saturday


// Switch example with character 

let singleCharacter = "g";

switch(singleCharacter){
case "a":
    console.log("apple");
    break;
case "b":
    console.log("Banana");
    break;
case "c":
    console.log("cat");
    break;
case "D":
    console.log("Delta");
    break;
case "ef":
    console.log("else if");
    break;
default :
     console.log("No character Matched");
     break;
case "g":
    console.log("grapes");
    break;
}

// outputs
// a : apple
// D : Delta
// ef : else if 
// g : Grapes




