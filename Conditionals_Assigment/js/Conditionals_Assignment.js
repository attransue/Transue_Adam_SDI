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

payRate = prompt("Please enter the rate at which your employer pays per hour");//
if (payRate === ""){
    alert("Please enter your input again there seems to have been an error receiving the input");
    payRate = prompt("Please enter the rate at which your employer pays per hour");
}else{
    alert("Thank You Kindly");
}
weeklyHours = prompt("Please enter how many hours you work per week");
if (weeklyHours === ""){
    alert("Please enter your input again there seems to have been an error receiving the input");
    weeklyHours = prompt("Please enter how many hours you work per week");
}else {
    alert("Thank You Kindly");
}
freqOfPay = prompt("How many paychecks will you get this month?");
if (freqOfPay === "") {
    alert("Please enter your input again there seems to have been an error receiving the input");
    freqOfPay = prompt("How many paychecks will you get this month?");
}else {
    alert("Thank You Kindly");
}
    phoneBill = prompt("Please enter the amount your carrier charges you to stay in contact with the world.");
if (phoneBill === "") {
    alert("Please enter your input again there seems to have been an error receiving the input");
    phoneBill = prompt("Please enter the amount your carrier charges you to stay in contact with the world.");
}else{
    alert("Thank You Kindly");
}
carNote = prompt("How much do you have to pay for your car each month?");
if (carNote === "") {
    alert("Please enter your input again there seems to have been an error receiving the input");
    carNote = prompt("How much do you have to pay for your car each month?");
}else{
    alert("Thank You Kindly");
}
carIns = prompt("What is your car insurance monthly?");
if (carIns === "") {
    alert("Please enter your input again there seems to have been an error receiving the input");
    carIns = prompt("What is your car insurance monthly?");
}else{
    alert("Thank You Kindly");
}