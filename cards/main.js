let activeIndex = 0

const cardGroups = document.querySelectorAll('.card-group')
const actionButtons = document.querySelectorAll('.swiper-actions button')

actionButtons.forEach(btn => btn.addEventListener('click', ({target}) => {
  const direction = target.id
  handleClick(direction)
}))

const handleClick = (direction) => {
  const currentCardGroup = document.querySelector(`[data-index="${activeIndex}"`)

  if(direction === 'swipe-right') {
    const nextIndex = activeIndex + 1 <= cardGroups.length - 1 ? activeIndex + 1 : 0
  
    const nextCardGroup = document.querySelector(`[data-index="${nextIndex}"]`)
  
    currentCardGroup.dataset.status = "after"
  
    nextCardGroup.dataset.status = "becoming-active-from-before"
  
    setTimeout(() => {
      nextCardGroup.dataset.status = "active"
      activeIndex = nextIndex
    })
  } else if (direction === 'swipe-left') {
    const nextIndex = activeIndex - 1 < 0 ? cardGroups.length - 1 : activeIndex - 1

    const prevCardGroup = document.querySelector(`[data-index="${nextIndex}"]`)

    currentCardGroup.dataset.status = "before"

    prevCardGroup.dataset.status = "becoming-active-from-after"

    setTimeout(() => {
      prevCardGroup.dataset.status = "active"
      activeIndex = nextIndex
    })
  }
}