const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");

const add = document.querySelector("#add");
const sub = document.querySelector("#sub");
const multiply = document.querySelector("#multiply");
const division = document.querySelector("#division");

const result = document.querySelector("#result");

const equal = document.querySelector('#equal')

let operator = ''

add.addEventListener('click', () => {
  operator = 'add';
})

sub.addEventListener("click", () => {
  operator = "sub";
});

multiply.addEventListener("click", () => {
  operator = "multiply";
});

division.addEventListener("click", () => {
  operator = "division";
});


equal.addEventListener('click', () => {
  const value1 = Number(num1.value);
  const value2 = Number(num2.value);

  let finalValue;
  
  switch (operator) {
    case "add":
      finalValue = value1 + value2;
      break;
    case "sub":
      finalValue = value1 - value2;
      break;
    case "multiply":
      finalValue = value1 * value2;
      break;
    case "division":
      finalValue = value1 / value2;
      break;
    default: 
      finalValue = 'operator not selected'
      break;
  }

  result.textContent = `Result: ${finalValue}`; // template literal
})
