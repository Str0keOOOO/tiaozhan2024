import anime from "animejs"
import { scrollToTop } from "./scrollToTop"
import { getScrollbarWidth } from "./scrollBar"

let sidebarLeft = document.querySelector('.sidebar-left') as any
let sidebarRight = document.querySelector('.sidebar-right') as any
let list = document.querySelector('.list') as any
let mail = document.querySelector('.mail') as any
let mask = document.querySelector('.sidebar-mask') as any

export async function sidebar() {
  list.addEventListener('click', () => {
    scrollToTop()
    document.body.style.overflowY = "hidden"
    sidebarLeft.style.overflow = "auto"
    mask.style.display = 'block'
    anime({
      targets: sidebarLeft,
      translateX: '40vw',
      easing: 'easeInOutCubic',
      duration: 500,
      delay: 0
    })
    anime({
      targets: mask,
      opacity: 0.75,
      easing: 'easeInOutCubic',
      duration: 500,
      delay: 0
    })
  })
  mail.addEventListener('click', () => {
    scrollToTop()
    document.body.style.overflowY = "hidden"
    sidebarRight.style.overflow = "auto"
    mask.style.display = 'block'
    anime({
      targets: sidebarRight,
      translateX: 'calc(0px - 40vw)',
      easing: 'easeInOutCubic',
      duration: 500,
      delay: 0
    })
    anime({
      targets: mask,
      opacity: 0.75,
      easing: 'easeInOutCubic',
      duration: 500,
      delay: 0
    })
  })
  mask.addEventListener('click', () => {
    document.body.style.overflowY = "scroll"
    sidebarLeft.style.overflow = "hidden"
    sidebarRight.style.overflow = "hidden"
    mask.style.display = 'none'
    anime({
      targets: sidebarLeft,
      translateX: '0vw',
      easing: 'easeInOutCubic',
      duration: 300,
      delay: 0
    })
    anime({
      targets: sidebarRight,
      translateX: `calc(-${getScrollbarWidth()}px - 0vw)`,
      easing: 'easeInOutCubic',
      duration: 300,
      delay: 0
    })
    anime({
      targets: mask,
      opacity: 0,
      easing: 'easeInOutCubic',
      duration: 300,
      delay: 0
    })
  })
}