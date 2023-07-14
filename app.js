const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active')
  menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)

// Scroll nav

const body = document.body
let lastScroll = 0

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset

  if (currentScroll <= 0) {
    body.classList.remove('scroll-up')
  }

  if (currentScroll > lastScroll && !body.classList.contains('scroll-down')) {
    body.classList.remove('scroll-up')
    body.classList.add('scroll-down')
  }

  if (currentScroll < lastScroll && body.classList.contains('scroll-down')) {
    body.classList.remove('scroll-down')
    body.classList.add('scroll-up')
  }

  lastScroll = currentScroll
})
