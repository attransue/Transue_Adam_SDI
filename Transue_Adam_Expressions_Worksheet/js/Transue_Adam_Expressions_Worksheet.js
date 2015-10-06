// Dog years problem
var ageInHumanYears;  // Creates the empty variable to be used to receive the age in human years
const humanToDogYears = 7; // The constant that will be used to calculate the total
var ageInDogYears; // The empty container for the results of the calculations

ageInHumanYears = prompt("How old is sparky in human years?"); //Prompts the user for an input of the age of sparky in human years.
ageInDogYears = ageInHumanYears * humanToDogYears; // Takes the user input and multiplies it by the constant of 7 years.
console.log("Sparky is " + ageInDogYears + " years old in dog years"); // Prints out the results of the multiplication

