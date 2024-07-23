import anime from "animejs";
import { scrollToTop } from "./scrollToTop";
import { preventTouchmove, allowTouchmove } from "./touchmove";

let sidebarLeft = document.querySelector('.sidebar-left')
let sidebarRight = document.querySelector('.sidebar-right')
let list = document.querySelector('.list') as any
let mail = document.querySelector('.mail') as any
let mask = document.querySelector('.sidebar-mask') as any
export async function sidebar() {
  list.addEventListener('click', () => {
    // FIXME 只有一边可以回到顶部
    scrollToTop()
    document.body.style.overflowY = "hidden";
    preventTouchmove()
    mask.style.display = 'block'
    anime({
      targets: sidebarLeft,
      translateX: '66.67vw',
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
    preventTouchmove()
    mask.style.display = 'block'
    anime({
      targets: sidebarRight,
      translateX: '-66.67vw',
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
    allowTouchmove()
    mask.style.display = 'none'
    anime({
      targets: sidebarLeft,
      translateX: '2vw',
      easing: 'easeInOutCubic',
      duration: 300,
      delay: 0
    })
    anime({
      targets: sidebarRight,
      translateX: '-2vw',
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