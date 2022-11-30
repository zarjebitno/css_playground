const btn = document.querySelector('button')

btn.addEventListener('click', ({target}) => {
  if(!target.classList.contains('movement')) {
    target.classList.add('movement')
  }
})