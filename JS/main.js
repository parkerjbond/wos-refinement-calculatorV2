const btn = document.getElementById('cell-six');
const childOne = document.querySelector('.child-one');

btn.addEventListener('click', () => {
  childOne.classList.toggle('is-expanded');
});
