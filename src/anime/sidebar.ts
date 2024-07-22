import anime from "animejs";
import { scrollToTop } from "./scrollToTop";

let sidebarLeft = document.querySelector('.sidebar-left')
let sidebarRight = document.querySelector('.sidebar-right')
let list = document.querySelector('.list') as any
let mail = document.querySelector('.mail') as any
let mask = document.querySelector('.sidebar-mask') as any
export async function sidebar() {
  list.addEventListener('click', () => {
    scrollToTop()
    document.body.style.overflowY = "hidden";
    mask.style.display = 'block'
    anime({
      targets: sidebarLeft,
      right: '33.33vw',
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
    document.body.style.overflowY = "hidden";
    mask.style.display = 'block'
    anime({
      targets: sidebarRight,
      left: '33.33vw',
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
    document.body.style.overflowY = "scroll";
    mask.style.display = 'none'
    anime({
      targets: sidebarLeft,
      right: '98vw',
      easing: 'easeInOutCubic',
      duration: 300,
      delay: 0
    })
    anime({
      targets: sidebarRight,
      left: '98vw',
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