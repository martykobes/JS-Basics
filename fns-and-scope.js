//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

function isTyler(name) {
    if (name === "Tyler") {
        return true;
    }
    else {
        return false;
    }
}
isTyler(name);



//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


function getName() {
    var name = prompt("What is your name?");
    return name;
}
getName();

//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

 function hi() {
     var me = getName();
     alert("Welcome, " + me);
     
 }
hi();


//Next problem




//What is the difference between arguments and parameters?

parameters are variables used in function definitions
parmeters are the values passed into the function


//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  false,null,NaN,"",0,undefined
  if (marty === false);



//Next Problem



//Create a function called myName that returns your name

 function myName(a) {
     return a;
 }
myName();

//Now save the function definition of myName into a new variable called newMyName

var newMyName = myName;

//Now alert the result of invoking newMyName
newMyName


//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

function outerFn() {
    return function() {
        return "Marty";
        
    }
}


//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();

//Now invoke innerFn.
innerFn();