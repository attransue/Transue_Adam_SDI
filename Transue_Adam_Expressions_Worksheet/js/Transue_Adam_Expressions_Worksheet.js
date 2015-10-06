/**
// Dog years problem
var ageInHumanYears;  // Creates the empty variable to be used to receive the age in human years
const humanToDogYears = 7; // The constant that will be used to calculate the total
var ageInDogYears; // The empty container for the results of the calculations

ageInHumanYears = prompt("How old is sparky in human years?"); //Prompts the user for an input of the age of sparky in human years.
ageInDogYears = ageInHumanYears * humanToDogYears; // Takes the user input and multiplies it by the constant of 7 years.
console.log("Sparky is " + ageInDogYears + " years old in dog years"); // Prints out the results of the multiplication

**/
// Slices of Pizza Problem

var slicesInPie; // Creates empty variable for how many times each pipe was sliced.
var numberOfPartyGoers; // Creates a null variable for how many fun loving party goers are in attendance.
var totalPizzasOrdered; // Creates a null value for how many pies are ordered
var numberOfTotalSlices; // Variable to determine the total number of slices that have resulted from all the pizzas that were ordered.
var slicesPerPerson; // Creates empty variable for the amount of slices eaten per person.

slicesInPie = prompt("How many slices are contained in each pie that was orderd?"); // REcieves the value for sliceInPie Variable
numberOfPartyGoers = prompt("How many fun loving people are attending this party?"); // Recieves the value for numberOfPartyGoers Variable
totalPizzasOrdered = prompt("What is the total number of pizzas that were ordered.") // Receives the value for totalPizzasOrdered Variable
numberOfTotalSlices = slicesInPie * totalPizzasOrdered; //Calculates how many slice of pizza are at the party all together.
slicesPerPerson = numberOfTotalSlices / numberOfPartyGoers; // Figures out the total slices per person

console.log("The total number of slices that was eaten by each party person was " + slicesPerPerson + " slices."); // Prints the results.