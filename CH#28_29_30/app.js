var num1= prompt("Enter First Number:",);
num1=parseInt(num1);
var num2= prompt("Enter Second Number:",);
num2=parseInt(num2);
console.log(num1+num2);

// uuse of ParseFloat()
var num3= prompt("Enter First Number:",);
num3=parseFloat(num3);
var num4= prompt("Enter Second Number:",);
num4=parseInt(num4);
console.log(num3+num4);
// use of Number()
var num3= prompt("Enter First Number:",);
num3=Number(num3);
var num4= prompt("Enter Second Number:",);
num4=Number(num4);
console.log(num3+num4);

//Use of toFixed Decimal Number
var roundNumber=Math.random();
console.log(roundNumber.toFixed(6));

//Convert Number to String
var numberAsNumber = 1234;
var typeCheck = typeof(numberAsNumber);
console.log(typeCheck);
var numberAsString = numberAsNumber.toString();
console.log(numberAsNumber);
var typeCheck = typeof(numberAsNumber);
console.log(typeCheck);
