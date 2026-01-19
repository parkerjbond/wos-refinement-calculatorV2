const btn = document.getElementById('cell-six');
const childOne = document.querySelector('.child-one');

btn.addEventListener('click', () => {
  childOne.classList.toggle('is-expanded');

  if (childOne.classList.contains('is-expanded')) {
    btn.innerHTML = '<h3>Recline Tower Details</h3>';
  } else {
    btn.innerHTML = '<h3>Expand Tower Details</h3>';
  }
});
