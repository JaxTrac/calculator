let firstNumber = 0;
let operator = 0;
let secondNumber = 0;
let displayValue = 0;
let display = document.getElementsByClassName("display")[0];
display.textContent = displayValue;




function add(a,b) {
    return a + b;
  };
  
function subtract(a,b) {
    return a - b;
  };
  
function multiply(a,b) {
    return a * b;
  };
  
function divide(a,b) {
    return a / b;
  };


function operate(firstNum, secondNum, operator) {
    if (operator == "+") {
        displayValue = add(firstNum, secondNum);
    } else if (operator == "-") {
        displayValue = subtract(firstNum, secondNum);
    } else if (operator == "*") {
        displayValue = multiply(firstNum, secondNum);
    } else {
        displayValue = divide(firstNum, secondNum);
    }
    display.textContent = displayValue;
}

if(document.getElementsByClassName("equal").clicked == true)
{
  operate(firstNumber, secondNumber, operator);
}

operate(1,100,"+");