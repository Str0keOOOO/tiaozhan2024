import anime from "animejs"
import { getScrollbarWidth } from "./scrollBar"

let bodyMask: any
let list: any
let mail: any
let tiaozhan: any
let logo: any
let jishuLine: any
let meigongLine: any
let meigongCircle: any
let shipingLine: any
let building: any

export function enterAnime() {
  bodyMask = document.querySelector('.body-mask') as any
  list = document.querySelector('.list') as any
  mail = document.querySelector('.mail') as any
  tiaozhan = document.querySelector('.tiaozhan') as any
  logo = document.querySelectorAll('.enter-logo') as any
  jishuLine = Array.prototype.slice.call(logo[0].contentDocument.querySelectorAll('#line'))
  meigongLine = Array.prototype.slice.call(logo[1].contentDocument.querySelectorAll('#line'))
  meigongCircle = Array.prototype.slice.call(logo[1].contentDocument.querySelectorAll('#circle'))
  shipingLine = Array.prototype.slice.call(logo[2].contentDocument.querySelectorAll('#line'))
  building = document.querySelector('.building') as any
  setTimeout(() => {
    bgAnime()
    logoColor()
    logoRotate()
    buildingUp()
    title()
    sidebar()
    tiaozhan.style.overflow = 'visible'
    bodyMask.style.display = 'none'
    setTimeout(() => {
      document.body.style.overflowY = "scroll"
      list.style.visibility = 'visible'
      mail.style.visibility = 'visible'
    }, 3600)
    document.body.style.cursor = "default"
  }, 500)
}
// 前进动画
function bgAnime() {
  anime({
    targets: document.querySelector('.bg-1'),
    backgroundColor: '#000000',
    easing: 'easeInOutCubic',
    duration: 1000,
    delay: 0
  })
}

function logoColor() {
  anime({
    targets: jishuLine,
    stroke: '#0AFFE6',
    easing: 'easeInOutCubic',
    duration: 1000,
    delay: 0
  })
  anime({
    targets: meigongLine,
    stroke: '#74DDFF',
    easing: 'easeInOutCubic',
    duration: 1000,
    delay: 0
  })
  anime({
    targets: meigongCircle,
    fill: '#74DDFF',
    easing: 'easeInOutCubic',
    duration: 1000,
    delay: 0
  })
  anime({
    targets: shipingLine,
    stroke: '#B95FFF',
    easing: 'easeInOutCubic',
    duration: 1000,
    delay: 0
  })
  anime({
    targets: logo[3],
    translateY: [
      { value: '-2rem', easing: 'easeInOutCubic', duration: 1000, delay: 0 },
      { value: '-23.165vh', easing: 'linear', duration: 1, delay: 0 }
    ],
    opacity: [
      { value: 0, easing: 'easeInOutCubic', duration: 1000, delay: 0 },
      { value: 1, easing: 'linear', duration: 500, delay: 2100 }
    ],
    scale: [
      { value: 0.1, easing: 'easeInOutCubic', duration: 1000, delay: 0 },
      { value: 0.5, easing: 'linear', duration: 500, delay: 2100 }
    ],
  })
  anime({
    targets: logo[4],
    opacity: 1,
    easing: 'easeInOutCubic',
    duration: 1000,
    delay: 0
  })
}

function logoRotate() {
  anime({
    targets: logo[0],
    translateY: '3.4rem',
    opacity: { value: 0, easing: 'easeInOutCubic', duration: 1000, delay: 2100 },
    rotate: 90,
    easing: 'easeInOutCubic',
    duration: 800,
    delay: 1000
  })
  anime({
    targets: logo[1],
    translateX: [
      { value: '-4.2rem', easing: 'easeInOutCubic', duration: 800, delay: 1000 },
      { value: 0, easing: 'easeInOutCubic', duration: 1000, delay: 300 }
    ],
    opacity: { value: 0, easing: 'easeInOutCubic', duration: 1000, delay: 2100 },
    rotate: 30,
    easing: 'easeInOutCubic',
    duration: 800,
    delay: 1000
  })
  anime({
    targets: logo[2],
    translateX: [
      { value: '4.2rem', easing: 'easeInOutCubic', duration: 800, delay: 1000 },
      { value: 0, easing: 'easeInOutCubic', duration: 1000, delay: 300 }
    ],
    opacity: { value: 0, easing: 'easeInOutCubic', duration: 1000, delay: 2100 },
    rotate: -30,
    easing: 'easeInOutCubic',
    duration: 800,
    delay: 1000
  })
}

function buildingUp() {
  building.style.opacity = '1'
  anime({
    targets: building,
    bottom: 0,
    easing: 'easeInOutCubic',
    duration: 800,
    delay: 1400
  })
}

function title() {
  anime({
    targets: document.querySelector('.title-anime'),
    opacity: [
      { value: 1, easing: 'linear', duration: 1, delay: 1000 }
    ],
    left: "120vw",
    top: "16vh",
    transform: "rotate(-40deg)",
    easing: 'easeInOutCubic',
    duration: 1000,
    delay: 2100
  })
  anime({
    targets: document.querySelector('.title-bg'),
    opacity: 1,
    easing: 'easeInOutCubic',
    duration: 1000,
    delay: 2100
  })
  anime({
    targets: document.querySelector('.title-1'),
    scale: 10,
    opacity: 1,
    easing: 'easeInOutCubic',
    duration: 1000,
    delay: 2100
  })
  anime({
    targets: document.querySelector('.title-2'),
    scale: 10,
    opacity: 1,
    easing: 'easeInOutCubic',
    duration: 1000,
    delay: 2100
  })
  anime({
    targets: document.querySelector('.police'),
    opacity: 1,
    easing: 'easeInOutCubic',
    duration: 1000,
    delay: 2100
  })
}

function sidebar() {
  anime({
    targets: document.querySelector('.list'),
    opacity: 1,
    easing: 'linear',
    duration: 500,
    delay: 3100
  })
  anime({
    targets: document.querySelector('.mail'),
    opacity: 1,
    easing: 'linear',
    duration: 500,
    delay: 3100
  })
  anime({
    targets: document.querySelector('.sidebar-left'),
    opacity: 1,
    translateX: '0vw',
    easing: 'linear',
    duration: 500,
    delay: 3100
  })
  anime({
    targets: document.querySelector('.sidebar-right'),
    opacity: 1,
    translateX: `calc(-${getScrollbarWidth()}px - 0vw)`,
    easing: 'linear',
    duration: 500,
    delay: 3100
  })
  anime({
    targets: document.querySelector('.bottom-arrow'),
    opacity: 1,
    easing: 'linear',
    duration: 500,
    delay: 3100
  })
}