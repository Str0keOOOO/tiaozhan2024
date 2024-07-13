import anime from "animejs";
import { scrollToTop } from "./scrollToTop";

let sidebarLeft = document.querySelector('.sidebar-left')
let sidebarRight = document.querySelector('.sidebar-right')
let list = document.querySelector('.list') as any
let mail = document.querySelector('.mail') as any
let mask = document.querySelector('.sidebar-mask') as any
// FIXME 需要修从头开始的时候sidebar消失的bug
export async function sidebar() {
  list.addEventListener('click', () => {
    scrollToTop()
    document.body.style.overflowY = "hidden";
    mask.style.display = 'block'
    anime({
      targets: sidebarLeft,
      right: '70vw',
      easing: 'linear',
      duration: 200,
    })
    anime({
      targets: mask,
      opacity: 0.75,
      easing: 'linear',
      duration: 200,
    })
  })
  mail.addEventListener('click', () => {
    scrollToTop()
    document.body.style.overflowY = "hidden";
    mask.style.display = 'block'
    anime({
      targets: sidebarRight,
      left: '70vw',
      easing: 'linear',
      duration: 200,
    })
    anime({
      targets: mask,
      opacity: 0.75,
      easing: 'linear',
      duration: 200,
    })
  })
  mask.addEventListener('click', () => {
    document.body.style.overflowY = "scroll";
    mask.style.display = 'none'
    anime({
      targets: sidebarLeft,
      right: '98vw',
      easing: 'linear',
      duration: 200,
    })
    anime({
      targets: sidebarRight,
      left: '98vw',
      easing: 'linear',
      duration: 200,
    })
    anime({
      targets: mask,
      opacity: 0,
      easing: 'linear',
      duration: 200,
    })
  })
}