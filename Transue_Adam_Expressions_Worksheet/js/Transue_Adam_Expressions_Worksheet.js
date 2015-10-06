/**
// Dog years problem
var ageInHumanYears;  // Creates the empty variable to be used to receive the age in human years
const humanToDogYears = 7; // The constant that will be used to calculate the total
var ageInDogYears; // The empty container for the results of the calculations

ageInHumanYears = prompt("How old is sparky in human years?"); //Prompts the user for an input of the age of sparky in human years.
ageInDogYears = ageInHumanYears * humanToDogYears; // Takes the user input and multiplies it by the constant of 7 years.
console.log("Sparky is " + ageInDogYears + " years old in dog years"); // Prints out the results of the multiplication


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



// Pizza Problem 2

var slicesInPie; // Creates empty variable for how many times each pipe was sliced.
var numberOfPartyGoers; // Creates a null variable for how many fun loving party goers are in attendance.
var totalPizzasOrdered; // Creates a null value for how many pies are ordered
var numberOfTotalSlices; // Variable to determine the total number of slices that have resulted from all the pizzas that were ordered.
var slicesPerPerson; // Creates empty variable for the amount of slices eaten per person.
var sparkysSlices; // creates variable for what sparky gets.

slicesInPie = prompt("How many slices are contained in each pie that was orderd?"); // REcieves the value for sliceInPie Variable
numberOfPartyGoers = prompt("How many fun loving people are attending this party?"); // Recieves the value for numberOfPartyGoers Variable
totalPizzasOrdered = prompt("What is the total number of pizzas that were ordered.") // Receives the value for totalPizzasOrdered Variable
numberOfTotalSlices = slicesInPie * totalPizzasOrdered; //Calculates how many slice of pizza are at the party all together.
slicesPerPerson = numberOfTotalSlices / numberOfPartyGoers; // Figures out the total slices per person
sparkysSlices = numberOfTotalSlices % numberOfPartyGoers; // Totals the amount of slices that sparky gets using the mod function

console.log("The total number of slices that was eaten by sparky was " + sparkysSlices + " slices."); // Prints the results.

 **/


//Average Shopping Bill

var billOne; // sets up variable for bill 1.
var billTwo;  // sets up variable for bill 2.
var billThree;   // sets up variable for bill 3.
var billFour;   // sets up variable for bill 4.
var billFive;   // sets up variable for bill 5.
var tableOfBills = []; //Sets up array for storing the value of the bills.
var totalOfBills; // sets up variable for the total of the bills.
const numberOfBills = 5; // sets up the constant for the number of bills that will be used for the division side of average of the bills.
var averageOfBills;  // sets up variable for average of the bills.

billOne = prompt("What was the bill for the First Grocery Trip?"); // prompts for first bill
billTwo = prompt("What was the bill for the Second Grocery Trip?"); // prompts for second bill
billThree = prompt("What was the bill for the Third Grocery Trip?"); // prompts for third bill
billFour = prompt("What was the bill for the Fourth Grocery Trip?");// prompts for fourth bill
billFive = prompt("What was the bill for the Fifth Grocery Trip?"); // prompts for fifth bill

tableOfBills[0] = Number(billOne); // assigns bill one to array
tableOfBills[1] = Number(billTwo); // assigns bill two to array
tableOfBills[2] = Number(billThree);  // assigns bill three to array
tableOfBills[3] = Number(billFour); // assigns bill four to array
tableOfBills[4] = Number(billFive); // assigns bill five to array

totalOfBills = tableOfBills[0] + tableOfBills[1] + tableOfBills[2] + tableOfBills[3] + tableOfBills[4]; // figures out the total of all bills
console.log("The total that was spent on Groceries the last five times is $" + totalOfBills + ".");// prints results of total of bills
averageOfBills = totalOfBills / numberOfBills; // calcs the average of the bills
console.log("The average of what was spent is $" + averageOfBills); // prints the average of the bills
