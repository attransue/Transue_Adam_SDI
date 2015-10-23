/**
 Adam Transue
 Functions Assignment
 SDI 1510
 **/

// Variable assignment
var powerBallNumbers;
var floridaLotterNumbers;
var powPlay;
var pAssignment = [];
var fAssignment = []; // creates an array for the fl lottery assignment
var choice = prompt("Would you like to view the Powerball Numbers or Florida State Lottery Numbers?"); // variable to recieve the users input
// functions creation

function powerBallDraw(max, min){ // creates a function that recieves the high and low values required for the random number gen
    var pAssignment = [];
    for(var powerBallCount = 1; powerBallCount <=5; powerBallCount++){// creates the loop to generate all the power ball numbers
        pAssignment [powerBallCount] = Math.random() * (max - min) + min; // creates a variable and has it perform the random number generation and assigns it to the variable
        pAssignment [powerBallCount] = Math.round(pAssignment[powerBallCount]);// rounds the value to the closet hole number

    }

    return pAssignment;// returns the array of powerball numbers


    }

function powerPlayNumber(pPNum){// creates a function to generate the powerPlay number
    pPNum = Math.round(Math.random() * (35 - 1) + 1); // creates a variable for the power play number and assigns it a value using the random num gen
    return pPNum; // returns the power play number
}

function flLotteryDraw(max, min){// creates a function that recieves the high and low values required for the random number gen
    var fAssignment = [];
    for (fCount = 0; fCount <=5; fCount++){// creates the loop to generate all the lottery numbers
        var fDrawnNumber = Math.round(Math.random() * (max - min) + min); // creates a variable and has it perform the random number generation and assigns it to the variable
        fAssignment.push(fDrawnNumber)// assigns the random number to the array in its own index
    }
    return fAssignment; // returns the array of florida lottery numbers
}

function userChoice(userInput){// creates a function for the verafication of the users input
    while(userInput === "") {// starts the while loop for any empty inputs that are entered
        userInput = prompt("Please Enter a Valid Choice, Either the Powerball or the Florida Lottery!"); // if there is an empty input promts for another input

    }
    return userInput; // returns the user input
}

var pOrF = userChoice(choice); // creates a new variable for the results of the userChoice function
floridaLotterNumbers = flLotteryDraw(35, 1);// assigns the value of the florida lottery function to the floridaLotterNumbers var

if (pOrF ==="Powerball" || pOrF === "powerball" || pOrF ===  "Power ball" || pOrF ===  "power ball" || pOrF ===  "Power Ball") { // conditional to check if any one of several forms of "power ball" are input and then spits out the powerball numbers
    powerBallNumbers = powerBallDraw(59, 1); // assigns the value of the power ball function to the powerBallNumbers var
    powPlay = powerPlayNumber();// assigns the value of the power play function to the powPlay var
    console.log("Your Powerball Numbers are" + powerBallNumbers); // prints the results of power ball numbers
    console.log("And Your Powerplay number is " + powPlay); // prints the results of the power play number
} else if (pOrF === "Florida Lottery" || pOrF ===  "florida lottery" || pOrF ===  "Florida" || pOrF ===  "lottery" || pOrF ===  "Lottery") { // conditional to check if any one of several forms of "Floirda Lottery" are input and then spits out the Florida Lottery numbers
    console.log("The Lottery Numbers For the State of Florida are " + floridaLotterNumbers); // prints the variable for florida state lottery numbers
} else { // for every thing else
    alert("That is not a valid string please reload the page and try again!!!") // instructs the user to try again by reloading the page
}





