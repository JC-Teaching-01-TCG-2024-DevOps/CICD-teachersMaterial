updateBG = () => {
  const x = document.querySelector('body').style.backgroundColor;
  document.querySelector('body').style.backgroundColor = (x === 'lightgoldenrodyellow') ? 'azure' : 'lightgoldenrodyellow';
};

document.querySelector('#myBtn').addEventListener('click', updateBG);