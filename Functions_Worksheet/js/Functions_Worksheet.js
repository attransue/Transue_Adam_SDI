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