/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */

/* Function Declaration - Add Numbers */
function add(number1, number2) {
  return number1 + number2;
}

/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2) {
  return number1 - number2;
};

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

/* Open Function Use - Divide Numbers */
function divide(number1, number2) {
  if (number2 !== 0) {
    return number1 / number2;
  } else {
    return "Cannot divide by zero";
  }
}

/* Decision Structure */

/* ARRAY METHODS - Functional Programming */

/* Output Source Array */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.getElementById("array").textContent = numbersArray.join(", ");

/* Output Odds Only Array */
let oddNumbers = numbersArray.filter((number) => number % 2 === 1);
document.getElementById("odds").textContent = oddNumbers.join(", ");

/* Output Evens Only Array */
let evenNumbers = numbersArray.filter((number) => number % 2 === 0);
document.getElementById("evens").textContent = evenNumbers.join(", ");

/* Output Sum of Org. Array */
let sumOfArray = numbersArray.reduce((sum, number) => sum + number, 0);
document.getElementById("sumOfArray").textContent = sumOfArray;

/* Output Multiplied by 2 Array */
let multipliedArray = numbersArray.map((number) => number * 2);
document.getElementById("multiplied").textContent = multipliedArray.join(", ");

/* Output Sum of Multiplied by 2 Array */
let sumOfMultipliedArray = multipliedArray.reduce(
  (sum, number) => sum + number,
  0
);
document.getElementById("sumOfMultiplied").textContent = sumOfMultipliedArray;

/* Additional Instructions - Function to Get Year */

document.getElementById("year").innerHTML = new Date().getFullYear();

/* Additional Instructions - Event Listeners */

/* Addition Feature */
document.getElementById("addNumbers").addEventListener("click", function () {
  let addNumber1 = Number(document.getElementById("add1").value);
  let addNumber2 = Number(document.getElementById("add2").value);
  document.getElementById("sum").value = add(addNumber1, addNumber2);
});

/* Subtraction Feature */
document
  .getElementById("subtractNumbers")
  .addEventListener("click", function () {
    let subtractNumber1 = Number(document.getElementById("subtract1").value);
    let subtractNumber2 = Number(document.getElementById("subtract2").value);
    document.getElementById("difference").value = subtract(
      subtractNumber1,
      subtractNumber2
    );
  });

/* Multiplication Feature */
document
  .getElementById("multiplyNumbers")
  .addEventListener("click", function () {
    let multiplyNumber1 = Number(document.getElementById("factor1").value);
    let multiplyNumber2 = Number(document.getElementById("factor2").value);
    document.getElementById("product").value = multiply(
      multiplyNumber1,
      multiplyNumber2
    );
  });

/* Division Feature */
document.getElementById("divideNumbers").addEventListener("click", function () {
  let divideNumber1 = Number(document.getElementById("dividend").value);
  let divideNumber2 = Number(document.getElementById("divisor").value);
  document.getElementById("quotient").value = divide(
    divideNumber1,
    divideNumber2
  );
});
