let firt_number = parseInt(prompt("Enter a digit"));
let second_number = parseInt(prompt("Enter second digit"));

// selection of choice of operator
let choice = prompt('Enter an operator, + = addition, - = subtraction, / = division, * = multiplication ')

// the sum of the two numbers variable
let add = firt_number + second_number;
let subtract = firt_number - second_number;
let divide = firt_number / second_number;
let multiply = firt_number * second_number;

//result output based on selected operators

if(choice === "+"){
   alert ('The sum of ' + firt_number + ' and ' + second_number + ' is: ' + add);
}
else if (choice === "-"){
   alert('The result of ' + firt_number + ' minus' + second_number + ' is: ' + subtract);
}
else if (choice === "/"){
   alert('The result of ' + firt_number + ' divided by' + second_number + ' is: ' + divide);
}
else if (choice === "*"){
   alert('The result of ' + firt_number + ' multiplied by' + second_number + ' is: ' + multiply);
}