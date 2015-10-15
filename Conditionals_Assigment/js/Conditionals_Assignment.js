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
var grossIncome; // sets a variable that totals the amount of gross income
var payCheck; // sets a variable that receives the pay check total
var billsAmount; // sets a variable for total of all bills
var billsCanBePaid = false;// boolean variable for weather or not monthly bills can be paid

// user input

payRate = prompt("Please enter the rate at which your employer pays per hour");// prompts user for the input of hourly rate
if (payRate === ""){// checks to see if input value was an empty string
    alert("Please enter your input again there seems to have been an error receiving the input");// if input was an empty string alerts the user that no input was received
    payRate = prompt("Please enter the rate at which your employer pays per hour");// prompts user to re-input the value desired
}else{// if the input value was anything other then an empty string
    alert("Thank You Kindly");// alerts the user and thanks them for the input

}
payRate = Number(payRate);//cast user input into a number

weeklyHours = prompt("Please enter how many hours you work per week");// prompts user for the input of total hours worked weekly
if (weeklyHours === ""){// checks to see if input value was an empty string
    alert("Please enter your input again there seems to have been an error receiving the input");// if input was an empty string alerts the user that no input was received
    weeklyHours = prompt("Please enter how many hours you work per week");// prompts user to re-input the value desired
}else {// if the input value was anything other then an empty string
    alert("Thank You Kindly");// alerts the user and thanks them for the input
}
weeklyHours = Number(weeklyHours);//cast user input into a number

freqOfPay = prompt("How many paychecks will you get this month?");// prompts user for the input of how often user gets paid
if (freqOfPay === "") {// checks to see if input value was an empty string
    alert("Please enter your input again there seems to have been an error receiving the input");// if input was an empty string alerts the user that no input was received
    freqOfPay = prompt("How many paychecks will you get this month?");// prompts user to re-input the value desired
}else {// if the input value was anything other then an empty string
    alert("Thank You Kindly");// alerts the user and thanks them for the input
}
freqOfPay = Number(freqOfPay);//cast user input into a number

    phoneBill = prompt("Please enter the amount your carrier charges you to stay in contact with the world.");// prompts user for the input of phone bill cost
if (phoneBill === "") {// checks to see if input value was an empty string
    alert("Please enter your input again there seems to have been an error receiving the input");// if input was an empty string alerts the user that no input was received
    phoneBill = prompt("Please enter the amount your carrier charges you to stay in contact with the world.");// prompts user to re-input the value desired
}else{// if the input value was anything other then an empty string
    alert("Thank You Kindly");// alerts the user and thanks them for the input
}
phoneBill = Number(phoneBill);//cast user input into a number

carNote = prompt("How much do you have to pay for your car each month?"); // prompts user for the input of how much the car payment is
if (carNote === "") {// checks to see if input value was an empty string
    alert("Please enter your input again there seems to have been an error receiving the input");// if input was an empty string alerts the user that no input was received
    carNote = prompt("How much do you have to pay for your car each month?");// prompts user to re-input the value desired
}else{// if the input value was anything other then an empty string
    alert("Thank You Kindly");// alerts the user and thanks them for the input
}
carNote = Number(carNote);//cast user input into a number

carIns = prompt("What is your car insurance monthly?");// prompts user for the input of cost of car insurance
if (carIns === "") {// checks to see if input value was an empty string
    alert("Please enter your input again there seems to have been an error receiving the input");// if input was an empty string alerts the user that no input was received
    carIns = prompt("What is your car insurance monthly?");// prompts user to re-input the value desired
}else{// if the input value was anything other then an empty string
    alert("Thank You Kindly");// alerts the user and thanks them for the input
}
carIns = Number(carIns);//cast user input into a number

//Math like expressions go in this section


grossIncome = weeklyHours * payRate;// calculates the gross income amount based off of the input values
billsAmount = phoneBill + carIns + carNote; // totals all the bills together



if(freqOfPay === 1){ // checks to see if the freqOfPay variable is = 1
    payCheck = grossIncome; // setts the payCheck variable = grossIncome
} else if(freqOfPay === 2){ // checks to see if the freqOfPay variable is = 2
    payCheck = (grossIncome * 2); // sets the paycheck variable = grossIncome * 2
} else if(freqOfPay === 4){ // checks to see if the freqOfPay variable is = 4
    payCheck = (grossIncome * 4); // sets the paycheck variable = grossIncome * 4
}

billsCanBePaid = confirm("Your monthly income is $" + payCheck + " Your monthly bills total $" + billsAmount + " Is your monthly income more then your bills amount?  ('OK' for Yes 'Cancel' for No");
console.log("bills value = " + billsCanBePaid);


// outputs in here



if(billsCanBePaid === true && (freqOfPay ===2 || freqOfPay === 4)){
    console.log("Based of the monthly income you will be able to pay all of your bills totaling $" + (billsAmount));
    console.log("You will only need to set aside $" + billsAmount / freqOfPay + " out of each paycheck to be able to succsesfully pay your bills");
} else{

    if (billsCanBePaid >= carIns + carNote) {
        console.log("You can pay your car loan and your car insurance totaling $" + (carIns + carNote));
    } else if (billsCanBePaid >= carNote + phoneBill) {
        console.log("You can pay your car payment and your phone bill totaling $" + carNote + phoneBill);
    } else if (billsCanBePaid >= carIns + phoneBill) {
        console.log("You can pay your car insurance and your phone bill totaling $" + carIns + phoneBill);
    } else if (billsCanBePaid >= carIns && carNote && phoneBill) {
        console.log("You can pay either your phone bill, your car loan, or your car insurance. So please choose wisely!");
    } else if (billsCanBePaid >= carIns && carNote) {
        console.log("You can pay either your car loan, or your car insurance. So please choose wisely!");
    } else if (billsCanBePaid >= carIns && phoneBill) {
        console.log("You can pay either your phone bill or your car insurance. So please choose wisely!");
    } else if (billsCanBePaid >= carNote && phoneBill) {
        console.log("You can pay either your phone bill or your car loan. So please choose wisely!");
    }
}