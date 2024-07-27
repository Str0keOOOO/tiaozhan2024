import anime from "animejs"

let bodyMask = document.querySelector('.body-mask') as any
let list = document.querySelector('.list') as any
let mail = document.querySelector('.mail') as any
let tiaozhan = document.querySelector('.tiaozhan') as any
let logo = document.querySelectorAll('.enter-logo') as any
let jishuLine = Array.prototype.slice.call(logo[0].contentDocument.querySelectorAll('#line'))
let meigongLine = Array.prototype.slice.call(logo[1].contentDocument.querySelectorAll('#line'))
let meigongCircle = Array.prototype.slice.call(logo[1].contentDocument.querySelectorAll('#circle'))
let shipingLine = Array.prototype.slice.call(logo[2].contentDocument.querySelectorAll('#line'))
let building = document.querySelector('.building') as any

let isEnter: boolean = false
export async function enterAnime() {
  bodyMask.addEventListener("click", () => {
    if (!isEnter) {
      bgAnime()
      logoColor()
      logoRotate()
      buildingUp()
      title()
      sidebar()
      tiaozhan.style.overflow = 'visible'
      bodyMask.style.display = 'none'
      setTimeout(() => {
        document.body.style.overflowY = "scroll";
        list.style.visibility = 'visible'
        mail.style.visibility = 'visible'
      }, 2500);
      document.body.style.cursor = "default"
      isEnter = true
    }
  })
}
// 前进动画
function bgAnime() {
  anime({
    targets: document.querySelector('.bg-1'),
    backgroundColor: '#000000',
    easing: 'easeInOutCubic',
    duration: 300,
    delay: 0
  })
}

function logoColor() {
  anime({
    targets: jishuLine,
    stroke: '#0AFFE6',
    easing: 'easeInOutCubic',
    duration: 300,
    delay: 0
  })
  anime({
    targets: meigongLine,
    stroke: '#74DDFF',
    easing: 'easeInOutCubic',
    duration: 300,
    delay: 0
  })
  anime({
    targets: meigongCircle,
    fill: '#74DDFF',
    easing: 'easeInOutCubic',
    duration: 300,
    delay: 0
  })
  anime({
    targets: shipingLine,
    stroke: '#B95FFF',
    easing: 'easeInOutCubic',
    duration: 300,
    delay: 0
  })
  anime({
    targets: logo[3],
    translateY: [
      { value: '-2rem', easing: 'easeInOutCubic', duration: 300, delay: 0 },
      { value: '-23.165vh', easing: 'linear', duration: 1, delay: 0 }
    ],
    opacity: [
      { value: 0, easing: 'easeInOutCubic', duration: 300, delay: 0 },
      { value: 1, easing: 'linear', duration: 300, delay: 1900 }
    ],
    scale: [
      { value: 0.1, easing: 'easeInOutCubic', duration: 300, delay: 0 },
      { value: 0.5, easing: 'linear', duration: 300, delay: 1900 }
    ],
  })
  anime({
    targets: logo[4],
    opacity: 1,
    easing: 'easeInOutCubic',
    duration: 300,
    delay: 0
  })
}

function logoRotate() {
  anime({
    targets: logo[0],
    translateY: '3.4rem',
    opacity: { value: 0, easing: 'easeInOutCubic', duration: 800, delay: 1400 },
    rotate: 90,
    easing: 'easeInOutCubic',
    duration: 800,
    delay: 300
  })
  anime({
    targets: logo[1],
    translateX: [
      { value: '-4.2rem', easing: 'easeInOutCubic', duration: 800, delay: 300 },
      { value: 0, easing: 'easeInOutCubic', duration: 800, delay: 300 }
    ],
    opacity: { value: 0, easing: 'easeInOutCubic', duration: 800, delay: 1400 },
    rotate: 30,
    easing: 'easeInOutCubic',
    duration: 800,
    delay: 300
  })
  anime({
    targets: logo[2],
    translateX: [
      { value: '4.2rem', easing: 'easeInOutCubic', duration: 800, delay: 300 },
      { value: 0, easing: 'easeInOutCubic', duration: 800, delay: 300 }
    ],
    opacity: { value: 0, easing: 'easeInOutCubic', duration: 800, delay: 1400 },
    rotate: -30,
    easing: 'easeInOutCubic',
    duration: 800,
    delay: 300
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
      { value: 1, easing: 'linear', duration: 1, delay: 300 }
    ],
    left: "120vw",
    top: "16vh",
    transform: "rotate(-40deg)",
    easing: 'easeInOutCubic',
    duration: 800,
    delay: 1400
  })
  anime({
    targets: document.querySelector('.title-bg'),
    opacity: 1,
    easing: 'easeInOutCubic',
    duration: 800,
    delay: 1400
  })
  anime({
    targets: document.querySelector('.title-1'),
    scale: 10,
    opacity: 1,
    easing: 'easeInOutCubic',
    duration: 800,
    delay: 1400
  })
  anime({
    targets: document.querySelector('.title-2'),
    scale: 10,
    opacity: 1,
    easing: 'easeInOutCubic',
    duration: 800,
    delay: 1400
  })
}

function sidebar() {
  anime({
    targets: document.querySelector('.list'),
    opacity: 1,
    easing: 'linear',
    duration: 300,
    delay: 2200
  })
  anime({
    targets: document.querySelector('.mail'),
    opacity: 1,
    easing: 'linear',
    duration: 300,
    delay: 2200
  })
  anime({
    targets: document.querySelector('.sidebar-left'),
    opacity: 1,
    translateX: '2vw',
    easing: 'linear',
    duration: 300,
    delay: 2200
  })
  anime({
    targets: document.querySelector('.sidebar-right'),
    opacity: 1,
    translateX: '-2vw',
    easing: 'linear',
    duration: 300,
    delay: 2200
  })
  anime({
    targets: document.querySelector('.bottom-arrow'),
    opacity: 1,
    easing: 'linear',
    duration: 300,
    delay: 2200
  })
}