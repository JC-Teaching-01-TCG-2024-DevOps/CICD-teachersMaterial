// Function to change colour
const updateBackgroundColour = () => {
  const x = document.querySelector('body').style.backgroundColor
  document.querySelector('body').style.backgroundColor =
    x === 'lightgoldenrodyellow' ? 'azure' : 'lightgoldenrodyellow'
}

module.exports = updateBackgroundColour