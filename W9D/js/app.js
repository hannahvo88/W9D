// Function 1
// var num1 = 12;
// var num2 = 58;

function addition (a, b){
    var addNum = (a+ b)*5;
    return addNum;
}

var result = addition(12, 10);
console.log(result);


var result1 = addition(4, 5);
console.log(result1);


var result2 = addition(8, 9);
console.log(result2);



// Function 2

var message = "Hello World! Welcome to my site";
var messagelength = message.length;


var message1 = "Today is a wonderful day";
var messagelength1 = message1.length;


var message2 = "So hard?";
var messagelength2 = message2.length;


function charCount (messagelength){
   
    if (messagelength > 10){
        return true;

    }else {
        return false;
    }
}
var messagelength = charCount(messagelength);
console.log(messagelength);

var messagelength1 = charCount(messagelength1);
console.log(messagelength1);

var messagelength2 = charCount(messagelength2);
console.log(messagelength2);



// Function 3

let username =["Philip" ,"Nancy", "Phoebe", "Amy", "Madie"]

let username1 =["Nancy", "Phoebe", "Amy", "Madie","Philip"]

let username2 =[ "Huong", "Nancy", "Phuong", "Madie","Philip"]

function stringFinder (username){
    for (i=0; i < 5; i++){
        var str = username[i];
        // console.log(str);
        var search = str.startsWith("Ph");
        if (search == true) {
            console.log(str);
            return str;
        }

    
        // str.startsWith("Ph");
        // return true; 
    }
}
stringFinder(username);

stringFinder(username1);

stringFinder(username2);

