let firstNumber = 0;
let operator = 0;
let secondNumber = 0;



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
        return add(firstNum, secondNum);
    } else if (operator == "-") {
        return subtract(firstNum, secondNum);
    } else if (operator == "*") {
        return multiply(firstNum, secondNum);
    } else {
        return divide(firstNum, secondNum);
    }
}

console.log(operate(1,8,"/"))