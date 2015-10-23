/**
 Adam Transue
 Functions Assignment
 SDI 1510
 **/

// Variable assignment

var pAssignment = []; // creates an array for the powerball assignment
var fAssignment = []; // creates an array for the fl lottery assignment


function powerBallDraw(max, min){ // creates a function that recieves the high and low values required for the random number gen
    var finalNumber;// creates a variable for the power play number
    for(powerBallCount = 1; powerBallCount <=5; powerBallCount++){// creates the loop to generate all the power ball numbers
        var  pDrawnNumber = Math.round(Math.random() * (max - min) + min); // creates a variable and has it perform the random number generation and assigns it to the variable
        pAssignment.push(pDrawnNumber); // assigns the random number to the array in its own index
   }
    finalNumber = Math.round(Math.random() * (35 - 1) + 1); // creates a variable for the power play number and assigns it a value using the random num gen
    pAssignment.push(finalNumber);//assigns the random number to the array in its own index


    }

function flLotteryDraw(max, min){// creates a function that recieves the high and low values required for the random number gen
    for (fCount = 0; fCount <=5; fCount++){// creates the loop to generate all the lottery numbers
        var fDrawnNumber = Math.round(Math.random() * (max - min) + min); // creates a variable and has it perform the random number generation and assigns it to the variable
        fAssignment.push(fDrawnNumber)// assigns the random number to the array in its own index

    }
}


powerBallDraw(59, 1);
console.log("Your powerball numbers are " + pAssignment[0] + ", " + pAssignment[1] + ", " + pAssignment[2] + ", " + pAssignment[3] + ", " + pAssignment[4] + " And the powerplay number is " + pAssignment[5]);
flLotteryDraw(35, 1);
console.log(fAssignment);
