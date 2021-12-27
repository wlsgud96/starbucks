const searchEl = document.querySelector('.search');
// const searchInputEl = document.querySelectorAll('.search input');
const searchInputEl = searchEl.querySelector('input'); //최적화해서 찾는다고 생각하면됨

searchEl.addEventListener('click', function() {
  //Logic..
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const thisyear = document.querySelector('.this-year');
thisyear.textContent = new Date().getFullYear(); //2021
