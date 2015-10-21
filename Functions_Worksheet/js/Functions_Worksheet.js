/**
 Adam Transue
 SDI 1510
 Functions_Worksheet
 **/

const pi = 3.14; // constant to be used for the calculation of circles
var radius  = prompt("Please enter the radius for your circle");
function calcCirCircumference(){ // creates a function that takes one argument (radius)
     var circumference = 2 * pi *radius; // does the math for the circumference of a circle
    return circumference; // returns the value of the math above
}
console.log(calcCirCircumference()); // prints out the value of the function



// Stung!

const stingsPerPound = 8.666666667; // constant for how man stings per pound to kill an animal

function amountToKill(weight){ // creates a function the receives weight
   var total = weight * stingsPerPound; // solves the math for amountToKill
    return total; // returns the number of stings it requires
}

weight = prompt("What does the animal in question weigh?"); // prompts the user for the amount the animal weighs
console.log("It will take a total of " + amountToKill(weight) + " stings to kill an animal weighing " + weight + " pounds"); // prints out the amount of stings it requires to kill an animal weighing "X" amount of pounds