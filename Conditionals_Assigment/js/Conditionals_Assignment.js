/**
Adam Transue
 Conditionals Assignment
 SDI 1510
 **/

// Monthly Budget Calculator

    // Variable Assignment
var payRate; // sets a variable for inputted hourly rate
var weeklyHours; // sets a variable for inputted weekly hours worked
var freqOfPay;// sets a variable for how often pay is received
var phoneBill; // sets a variable for how much the phone bill costs
var carNote;  // sets a variable for how much the car payment is
var carIns; // sets a variable for how much the car insurance costs

// user input

payRate = prompt("Please enter the rate at which your employer pays per hour");// prompts user for the input of hourly rate
if (payRate === ""){// checks to see if input value was an empty string
    alert("Please enter your input again there seems to have been an error receiving the input");// if input was an empty string alerts the user that no input was received
    payRate = prompt("Please enter the rate at which your employer pays per hour");// prompts user to re-input the value desired
}else{// if the input value was anything other then an empty string
    alert("Thank You Kindly");// alerts the user and thanks them for the input
}
weeklyHours = prompt("Please enter how many hours you work per week");// prompts user for the input of total hours worked weekly
if (weeklyHours === ""){// checks to see if input value was an empty string
    alert("Please enter your input again there seems to have been an error receiving the input");// if input was an empty string alerts the user that no input was received
    weeklyHours = prompt("Please enter how many hours you work per week");// prompts user to re-input the value desired
}else {// if the input value was anything other then an empty string
    alert("Thank You Kindly");// alerts the user and thanks them for the input
}
freqOfPay = prompt("How many paychecks will you get this month?");// prompts user for the input of how often user gets paid
if (freqOfPay === "") {// checks to see if input value was an empty string
    alert("Please enter your input again there seems to have been an error receiving the input");// if input was an empty string alerts the user that no input was received
    freqOfPay = prompt("How many paychecks will you get this month?");// prompts user to re-input the value desired
}else {// if the input value was anything other then an empty string
    alert("Thank You Kindly");// alerts the user and thanks them for the input
}
    phoneBill = prompt("Please enter the amount your carrier charges you to stay in contact with the world.");// prompts user for the input of phone bill cost
if (phoneBill === "") {// checks to see if input value was an empty string
    alert("Please enter your input again there seems to have been an error receiving the input");// if input was an empty string alerts the user that no input was received
    phoneBill = prompt("Please enter the amount your carrier charges you to stay in contact with the world.");// prompts user to re-input the value desired
}else{// if the input value was anything other then an empty string
    alert("Thank You Kindly");// alerts the user and thanks them for the input
}
carNote = prompt("How much do you have to pay for your car each month?"); // prompts user for the input of how much the car payment is
if (carNote === "") {// checks to see if input value was an empty string
    alert("Please enter your input again there seems to have been an error receiving the input");// if input was an empty string alerts the user that no input was received
    carNote = prompt("How much do you have to pay for your car each month?");// prompts user to re-input the value desired
}else{// if the input value was anything other then an empty string
    alert("Thank You Kindly");// alerts the user and thanks them for the input
}
carIns = prompt("What is your car insurance monthly?");// prompts user for the input of cost of car insurance
if (carIns === "") {// checks to see if input value was an empty string
    alert("Please enter your input again there seems to have been an error receiving the input");// if input was an empty string alerts the user that no input was received
    carIns = prompt("What is your car insurance monthly?");// prompts user to re-input the value desired
}else{// if the input value was anything other then an empty string
    alert("Thank You Kindly");// alerts the user and thanks them for the input
}

//Math like expressions go in this section

