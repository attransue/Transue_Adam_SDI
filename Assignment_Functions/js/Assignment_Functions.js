/**
 Adam Transue
 Functions Assignment
 SDI 1510
 **/

// Variable assignment
var powerBallNumbers;
var powPlay;
var pAssignment = [];
var fAssignment = []; // creates an array for the fl lottery assignment
var choice = prompt("Would you like to view the Powerball Numbers or Florida State Lottery Numbers?"); // variable to recieve the users input
// functions creation

function powerBallDraw(max, min){ // creates a function that recieves the high and low values required for the random number gen
    var pAssignment = [];
    var finalNumber;// creates a variable for the power play number
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
    for (fCount = 0; fCount <=5; fCount++){// creates the loop to generate all the lottery numbers
        var fDrawnNumber = Math.round(Math.random() * (max - min) + min); // creates a variable and has it perform the random number generation and assigns it to the variable
        fAssignment.push(fDrawnNumber)// assigns the random number to the array in its own index
    }
    return fAssignment; // returns the array of florida lottery numbers
}

function userChoice(userInput){// creates a function for the verafication of the users input
    while(userInput === ""){// starts the while loop for any empty inputs that are entered
        userInput = prompt("Please Enter a Valid Choice, Either the Powerball or the Florida Lottery!"); // if there is an empty input promts for another input
    }
    return userInput;// returns the users input
}
choice = userChoice(choice);
console.log("You choose " + choice);

powerBallNumbers = powerBallDraw(59, 1);
powPlay = powerPlayNumber();
console.log(powerBallNumbers);
//console.log("Your powerball numbers are " + pAssignment[0] + ", " + pAssignment[1] + ", " + pAssignment[2] + ", " + pAssignment[3] + ", " + pAssignment[4] + " And the powerplay number is " + pAssignment[5]);
flLotteryDraw(35, 1);
console.log(fAssignment);
