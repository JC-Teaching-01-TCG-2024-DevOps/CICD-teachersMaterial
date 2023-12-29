// Function to change colour
const updateBG = () => {
  const x = document.querySelector('body').style.backgroundColor
  document.querySelector('body').style.backgroundColor =
    x === 'lightgoldenrodyellow' ? 'azure' : 'lightgoldenrodyellow'
}

// function to add numbers
export const calcResult = (value1, value2) => {
  return value1 + value2
}

// function for form submit
const runCalc = (e) => {
  e.preventDefault();
  const noOne = document.querySelector('#noOne').value
  const noTwo = document.querySelector('#noTwo').value
  console.log(noOne, noTwo);
  document.querySelector('#formResult').innerHTML = `Result is: ${calcResult(+noOne, +noTwo)}`
  document.querySelector('#form1').reset();
}



document.querySelector('#my-btn').addEventListener('click', updateBG)
document.querySelector('#form1').addEventListener('submit', runCalc)
