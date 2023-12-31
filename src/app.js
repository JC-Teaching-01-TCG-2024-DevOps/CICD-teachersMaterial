// Function to change colour
const update_background_colour = () => {
  const x = document.querySelector('body').style.backgroundColor
  document.querySelector('body').style.backgroundColor =
    x === 'lightgoldenrodyellow' ? 'azure' : 'lightgoldenrodyellow'
}
