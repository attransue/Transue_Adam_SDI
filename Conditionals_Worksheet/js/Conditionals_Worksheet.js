/**
 * Created by adamtransue on 10/12/15.
 */
/**
 Adam Transue
 Conditionals WorkSheet
 SDI 1510
 **/

// Group one problem F to C
var newTemp; // variable for math results

var userTemp = prompt("Please enter the temperature you would like to convert."); // pulls from the user the temp and stores it as a variable
userTemp = Number(userTemp); // casts the user input to a number
var userUnits = prompt("Please enter 'C' for celsius or 'F' for Fahrenheit"); // prompts the user for if the temp is "c" or "f"
if (userUnits === "C"){ // if the user input was "C"
 newTemp = userTemp * 9 / 5 + 32; //converts the userTemp to "F"
 console.log("Your Temperature converted to F equals " + newTemp); // Prints out the results
}else if(userUnits ==="F"){ // if the user input was "F"
 newTemp = (userTemp - 32) / 9 * 5; // converts the userTemp to "C"
 console.log("Your Temperature converted to C equals " + newTemp); // prints out the newTemp as "C"
}

// Group two problem Grade Letter Calculator
var test1 = prompt("Please enter your results from your first test."); // prompts user for input for first test
test1 = Number(test1); // cast input value to a number
var test2 = prompt("Please enter your results from your second test");  // prompts user for input for second test
test2 = Number(test2); // cast input value to a number
var assign1 = prompt("Please enter your results from your first assignment"); // prompts user for input for first assign
assign1 = Number(assign1); // cast input value to a number
var assign2 = prompt("Please enter your results from your second assignment"); // prompts user for input for second assign
assign2 = Number(assign2); // cast input value to a number
var assign3 = prompt("Please enter your results from your third assignment"); // prompts user for input for third assign
assign3 = Number(assign3); // cast input value to a number
var quiz1 = prompt("Please enter your results from your quiz"); // prompts user for input for your quiz
quiz1 = Number(quiz1); // cast input value to a number
var average; // variable for the average of all assign
var totAssign = 6; // constant used for the average operation

average = (test1 + test2 + assign1 + assign2 + assign3 + quiz1) / totAssign; // figures out the average by adding up all the assign and dividing by 6
if ((average <= 100) && (average >= 95)){ // check to see if average is within the range for a A+
 console.log("You received a grade of " + average + " Which results in a grade of an A+."); // prints out the letter grade
}else if ((average < 95) && (average >= 90)){ // check to see if average is within the range for a A
 console.log("You received a grade of " + average + " Which results in a grade of an A.");// prints out the letter grade
}else if ((average < 90) && (average >= 85)){ // check to see if average is within the range for a B+
 console.log("You received a grade of " + average + " Which results in a grade of an B+.");// prints out the letter grade
}else if ((average < 85) && (average >= 80)){ // check to see if average is within the range for a B
 console.log("You received a grade of " + average + " Which results in a grade of an B.");// prints out the letter grade
}else if ((average < 80) && (average >= 76)){ // check to see if average is within the range for a C+
 console.log("You received a grade of " + average + " Which results in a grade of an C+.");// prints out the letter grade
}else if ((average < 76) && (average >= 73)){ // check to see if average is within the range for a C
 console.log("You received a grade of " + average + " Which results in a grade of an C.");// prints out the letter grade
}else if ((average < 72) && (average >= 70)){ // check to see if average is within the range for a D
 console.log("You received a grade of " + average + " Which results in a grade of an D.");// prints out the letter grade
}else{ // check to see if average is within the range for a F
 console.log("You received a grade of " + average + " Which results in a grade of an F.");// prints out the letter grade
}
