const burgerButton = document.querySelector('.header__burger')
const menu = document.querySelector('.header__menu')

if (burgerButton && menu) {
  burgerButton.addEventListener('click', () => {
    const isOpen = burgerButton.classList.toggle('is-active')

    menu.classList.toggle('is-open', isOpen)
    burgerButton.setAttribute('aria-expanded', String(isOpen))
    burgerButton.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню')
  })

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      burgerButton.classList.remove('is-active')
      menu.classList.remove('is-open')
      burgerButton.setAttribute('aria-expanded', 'false')
      burgerButton.setAttribute('aria-label', 'Открыть меню')
    })
  })
}
