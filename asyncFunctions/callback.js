// Callback functions 
function display(result){
console.log(result);                                     // 25 after the callback is completed
};

function add(num1, num2, myCallback){
    let sum = num1 + num2;
    console.log("Sum is: ", sum);                         // 25
    console.log(myCallback);                              // [Function: display] referring to fucntion display
    myCallback(sum);                                      // 25
    console.log(myCallback);                              //[Function: display]
};

add(10,15, display);           


// Example : with 2 different callabck functions 

function email(message){
    console.log("You have an Email : " + message);
};

function sms(message){
    console.log("You have a SMS : " + message);
};

function balance(amount, notification){
    if(amount < 100){
        notification("Low Balance Recharge");
    }
    else{
        notification("User Balance is enough to call");
    }
};

balance(50,email);                                      // You have an Email : Low Balance Recharge
balance(50, sms);                                       // You have a SMS : Low Balance Recharge
balance(100,email);                                     // You have an Email : User Balance is enough to call