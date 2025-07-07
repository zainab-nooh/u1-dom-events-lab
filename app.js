/*-------------------------------- Constants --------------------------------*/

const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator')
const display = document.querySelector('.display')



/*-------------------------------- Variables --------------------------------*/
let firstValue = '';
let secondValue= '';
let operator = '';
let result = '';
let isSecond = false;



/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/


calculator.addEventListener('click', (event) => {
  const value = event.target.innerText
  console.log(event.target.innerText)

  // Handle number buttons 
  if (event.target.classList.contains('number')) {
    handleNumber(value)
  }

  // Handle operator buttons like addition, multipication, subtraction and others
  if (event.target.classList.contains('operator') && value !== 'C') {
    if (firstValue !== '') {
      operator = value
      isSecond = true
    }
    return
  }

  // Handle equals button '='
  if (event.target.classList.contains('equals')) {
    if (firstValue && secondValue && operator) {
      result = calculate(Number(firstValue), Number(secondValue), operator)
      display.innerText = result
      
      // Reset for next calculation (The C button)
      firstValue = result.toString()
      secondValue = ''
      operator = ''
      isSecond = false
    }
  }

  // Handle clear button
  if (value === 'C') {
    clearCalculator()
  }
});


/*-------------------------------- Functions --------------------------------*/


function handleNumber(num) {
  if (!isSecond) {
    firstValue += num //means firstValue = fisrtvalue + num
    display.innerText = firstValue
  } else {
    secondValue += num //means secondValu = secondValue + num
    display.innerText = secondValue
  }
}
//using case to have an easier way of introducing multiple options
function calculate(num1, num2, op) {
  switch (op) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
    case '/':
      if (num2 === 0) {
        return 'Error'
      }
      return num1 / num2
    default:
      return 0
  }
}

function clearCalculator() {
  firstValue = ''
  secondValue = ''
  operator = ''
  result = ''
  isSecond = false
  display.innerText = '0'
}

// Initialize display
display.innerText = '0'
