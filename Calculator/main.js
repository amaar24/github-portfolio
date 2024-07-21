let currentInput = "";
let currentOperator = "";
let previousInput = "";

// function to add current and new number and update result
function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

// function to set hte current operator
function setOperator(operator) {
  if (currentInput === "") return; // if currentInput is empty then it returns
  if (previousInput !== "") {
    calculateResult(); // if the previous number is not empty, then it calculates the number current/previous input
  }
  currentOperator = operator; // current operator = selected operator
  previousInput = currentInput; // current --> previous
  currentInput = ""; // then the current becomes free
}

// funcction to perform the operations
function calculateResult() {
  if (currentInput === "" || previousInput === "") return; // if current or previous input is empty, then return as calculation can't be performed
  const previous = parseInt(previousInput); // converts current and previous numbers into Int
  const current = parseInt(currentInput);
  let result; // create variable = result

  switch (currentOperator) {
    case "+":
      result = previous + current;
      break;
    case "-":
      result = previous - current;
      break;
    case "*":
      result = previous * current;
      break;
    case "/":
      result = previous / current;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  currentOperator = "";
  previousInput = "";
  updateDisplay();
}

// function to clear inputs and display
function clearDisplay() {
  currentInput = "";
  currentOperator = "";
  previousInput = "";
  updateDisplay(); // onced the inputs are cleard, the display updates and clears too.
}

function updateDisplay() {
  document.getElementById("display").value = currentInput; //to display the current number that has been selected
}
