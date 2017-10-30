function fixedMonthlyAmountToPayFixed(balance, monthlyRate, string) {
    // main calculation
    var temp = balance;
    balance = balance * (1 + monthlyRate);
    accInterest = accInterest + (balance - temp);

    if (balance >= monthlyAmountToPayFixed) {
        balance = balance - monthlyAmountToPayFixed;
        balance = (Math.round(balance * 100) / 100).toFixed(2);
        //console.log('Month ' + monthCounter);
        //balance = Math.round(balance * 100) / 100
        //console.log('Pay £' + monthlyAmountToPayFixed);
        //console.log('Remaining balance: £' + balance);
        //console.log('===========================');
        monthCounter++;
        return fixedMonthlyAmountToPayFixed(balance,monthlyRate,string);
    } else {
        string += 'Overall you have accumulated £' + accInterest.toFixed(2)  + ' of interest.\n';
        string += 'To pay off your debt, it will take you ' + monthCounter + ' months.\n';
        //string += '=================================================\n';
        return string;
    };
};

function fixedMonths(){
    var temp = balance;
    balance = balance * (1 + monthlyRate);
    accInterest = accInterest + (balance - temp);

    if (balance >= monthlyRatePayments) {
        balance = balance - monthlyRatePayments;
        balance = (Math.round(balance * 100) / 100).toFixed(2);
        monthCounter--;
        fixedMonths();
    } else {
        // console.log('Overall you have accumulated £' + accInterest.toFixed(2)  + ' of interest.');
        // console.log('To pay off your debt in ' + monthNumber + ' months, you will need to make monthly repayments of £' + monthlyRatePayments.toFixed(2));
        // console.log('========================================================================================');
    };

};

// How much you owe
var balance = 1739.80;
// get whole number and convert to decimal (eg. rate is in the format 23%)
var yearlyRate = 22.9;
// The interest that has been accumulated
var accInterest = 0;

// Method 1
// Has to be more than 2% of the balance to work
var monthlyAmountToPayFixed = 188.21;
var monthCounter = 1;

// Method 2
// Input no of months
var monthNumber = 18;
var monthlyRatePayments = balance / monthNumber;

// Change Annual rate of interest to monthlyRate
var monthlyRate = Math.pow(yearlyRate, 1/12);
monthlyRate = monthlyRate / 100;
//console.log(monthlyRate);
monthlyRate = Math.round(monthlyRate * 10000) / 10000;
//console.log(monthlyRate);

// if (monthlyAmountToPayFixed < (balance/100)*2){
//     console.log("ERROR - monthlyRate payments can not be less that 2% of your balance");
// } else {
//     // For fixed monthlyRate amount to pay
//     fixedMonthlyAmountToPayFixed();

//     // For fexiable monthlyRate amount to pay
//     fixedMonths()
// };

function callScript(){
        var balance = document.getElementById("balance-owed").value;
        var interestRate = document.getElementById("interest-rate").value;
        var monthlyPay = document.getElementById("monthly-pay").value;
        var monthlyRate = Math.pow(interestRate, 1/12);
        monthlyRate = monthlyRate / 100;
        //console.log(monthlyRate);
        monthlyRate = Math.round(monthlyRate * 10000) / 10000;
        var str = "";
        var res = fixedMonthlyAmountToPayFixed(balance,monthlyRate,str);
        console.log(res);
        var p = document.getElementById('results');
        p.innerHTML = res;
};