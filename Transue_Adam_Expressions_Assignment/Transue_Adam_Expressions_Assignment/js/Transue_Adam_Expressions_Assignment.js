/**
 * Created by adamtransue on 10/3/15.
 */
/**
 Adam Transue
 SDI 1510
 Expressions Assignment
 **/

/**
 This program will take user input for determined values and will calculate the friction loss through
 a piece of fire hose. Which is determinate of the diameter of the hose and the gallons per minute of water and the
 length of said hose.
 **/




// Variables Will Be Declared here.
var lengthOfHose;  // Empty variable that will be assigned the user input value for the length of the hose
var gallonsPerMinute;  // Empty variable that will be assigned the user input value for the GPM of water that is being flowed
var diameterCoefficient;  // Empty variable that will be assigned the user input value for the Diameter of the Hose being Used
var calculationsTable = []; // An array to be used to store the values of the user input
var frictionLoss; // Variable for the final results of the calculations.


// User inputs will happen here.
lengthOfHose = prompt("Please Enter the Total Length of the Hose Being Used.");  // Assigns the input value to lengthOfHose
console.log("Length of Hose = " + lengthOfHose + " feet.");  // Prints the length of hose input
gallonsPerMinute = prompt("Please Enter the Amount of Water Being Used in Gallons Per Minute.");  // Assigns Value to gallonsPerMinute
console.log("Total Gallons Per Minute = " + gallonsPerMinute); // Prints the gallons per minute
diameterCoefficient = prompt("Using the Following Table Please Enter The Coefficient That represents the Diameter of hose being used. \n.75 inches = 1100 \n1.0 inches = 150 \n1.25 inches = 80 \n1.5 inches = 24 \n1.75 inches = 15.5 \n2.0 inches = 8 \n2.5 inches = 2 \n3.0 inches = 0.677 \n3.5 inches = 0.34 \n4.0 inches = 0.2 \n4.5 inches = 0.1 \n5.0 inches = 0.08 \n6.0 inches = 0.05"); // Assigns value to diameterCoefficient
console.log("The coefficient for the diameter of hose is " + diameterCoefficient);  // prints out the coefficient that is used


//Variables will be assigned to the array here
calculationsTable[0] = lengthOfHose; // assignment of the length of hose to the Array at index 0
calculationsTable[1] = gallonsPerMinute;  //assignment of the gallons per minute to the Array at index 1
calculationsTable[2] = diameterCoefficient;  // assignment of the diameter of hose coefficient to the Array at index 2


//Math type stuff will happen here.

frictionLoss = calculationsTable[2] * ((calculationsTable[1] / 100) * (calculationsTable[1] / 100)) * (calculationsTable[0] / 100); // The formula for friction loss is the coefficient for the diameter of hose * (gpm/100)^2 * the length of the house /100




// Outputs will happen here.
alert("Your friction loss for the given inputs is " + frictionLoss + " psi."); // prints the total friction loss from the given inputs
alert("Please note that the larger the hose that is used the less friction loss that occurs."); // just a friendly reminder to the user about how friction loss works.


/**
 Values tested
 length of hose|       | 100  | 250  | 1500 | 650
 gallons per minute    | 200  | 400  | 1200 | 975
 Diameter Coefficient  | 15.5 | 0.08 | 0.05 | 8.0
 Friction Loss         | 93   | 3.2  | 108  | 4943.25

 **/