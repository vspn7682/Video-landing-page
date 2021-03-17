const header = document.querySelector('#header')
const bars = document.querySelector('#bars')
const menu = document.querySelector('.menu')
const ul = document.querySelector('.menu ul')
const times = document.querySelector('#times')

bars.addEventListener('click', () => {
    header.classList.add('shrink')
    menu.classList.add('active');
    ul.classList.add('show')
    bars.style.display = 'none'
    times.style.opacity = 1
})

times.addEventListener('click', () => {
    header.classList.remove('shrink')
    menu.classList.remove('active')
    ul.classList.remove('show')
    bars.style.display = 'block'
    times.style.opacity = 0
})