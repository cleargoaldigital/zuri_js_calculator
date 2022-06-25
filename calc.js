let firstNum = prompt("Enter a digit");
let secondNum = prompt("Enter second digit");

let choice = prompt('Enter an operator, + = addition, - = subtraction, / = division, * = multiplication and % = remainder: ')
//result output based on selected operators

if(choice = "+"){
   return firstNum + secondNum;
}

else if (choice = "-"){
   return firstNum - secondNum;
}

else if (choice = "*"){
   return firstNum * secondNum;
}

else if (choice = "/"){
   return firstNum / secondNum;
}

// let person = prompt("Please enter your name", "Harry Potter");

if (person != null) {
  document.getElementById("demo").innerHTML =
  "Hello " + person + "! How are you today?";
}