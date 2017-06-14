// simple nodejs calculator..

var readline = require('readline-sync');

var num1 = readline.question("Please enter your first number: ");
var num2 = readline.question("Please enter your second number: ");

console.log("Your first number is: " + num1);
console.log("Your second number is: " + num2);

var operator = readline.question("Please enter an operator ( + , - , / , * ): ");

/**
 * Calculate two numbers
 * @param {Number} num1
 * @param {Number} num2
 * @return {Number} result
 */
function calculate(num1,num2) {
	  
    if(isNaN(num1) || isNaN(num2)) {

      // not a number!
      console.log("Please add numeric value only.");
       return;

    } else {

      // calculate numbers as per operator
      switch(operator) {

        // addition 
        case '+':
             return num1+num2;
        break;

        // subtraction
        case '-':
             return num1-num2;
        break;

        // division
        case '/':
              return num1/num2;
        break;

        // multiplication
        case '*':
              return num1*num2;
        break;
        
        // wrong operator!
        default:        
              console.log("Please enter correct operator.");

      }
      
    }    
    return 0;
}

// print result
var result =  calculate(parseInt(num1),parseInt(num2));
if(result) {
  console.log("Your result is: "+result);
}