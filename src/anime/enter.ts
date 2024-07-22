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
let buildingLibrary = document.querySelector('.building-library')
let buildingGate = document.querySelector('.building-gate')
let buildingClassroom = document.querySelector('.building-classroom')

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
      }, 3600);
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
    easing: 'easeOutCubic',
    duration: 1000,
    delay: 0
  })
}

function logoColor() {
  anime({
    targets: jishuLine,
    stroke: '#0AFFE6',
    easing: 'easeOutCubic',
    duration: 1000,
    delay: 0
  })
  anime({
    targets: meigongLine,
    stroke: '#74DDFF',
    easing: 'easeOutCubic',
    duration: 1000,
    delay: 0
  })
  anime({
    targets: meigongCircle,
    fill: '#74DDFF',
    easing: 'easeOutCubic',
    duration: 1000,
    delay: 0
  })
  anime({
    targets: shipingLine,
    stroke: '#B95FFF',
    easing: 'easeOutCubic',
    duration: 1000,
    delay: 0
  })
  anime({
    targets: logo[3],
    translateY: [
      { value: '-2rem', easing: 'easeOutCubic', duration: 1000, delay: 0 },
      { value: '-23.165vh', easing: 'linear', duration: 1, delay: 0 }
    ],
    opacity: [
      { value: 0, easing: 'easeOutCubic', duration: 1000, delay: 0 },
      { value: 1, easing: 'linear', duration: 500, delay: 2100 }
    ],
    scale: [
      { value: 0.1, easing: 'easeOutCubic', duration: 1000, delay: 0 },
      { value: 0.5, easing: 'linear', duration: 500, delay: 2100 }
    ],
  })
  anime({
    targets: logo[4],
    opacity: 1,
    easing: 'easeOutCubic',
    duration: 1000,
    delay: 0
  })
}

function logoRotate() {
  anime({
    targets: logo[0],
    translateY: '7.31rem',
    opacity: { value: 0, easing: 'easeOutCubic', duration: 1000, delay: 2100 },
    rotate: 90,
    easing: 'easeOutCubic',
    duration: 800,
    delay: 1000
  })
  anime({
    targets: logo[1],
    translateY: '0.05rem',
    translateX: [
      { value: '-11.78rem', easing: 'easeOutCubic', duration: 800, delay: 1000 },
      { value: '4.24rem', easing: 'easeOutCubic', duration: 1000, delay: 300 }
    ],
    opacity: { value: 0, easing: 'easeOutCubic', duration: 1000, delay: 2100 },
    rotate: 30,
    easing: 'easeOutCubic',
    duration: 800,
    delay: 1000
  })
  anime({
    targets: logo[2],
    translateY: '-0.1rem',
    translateX: [
      { value: '10.28rem', easing: 'easeOutCubic', duration: 800, delay: 1000 },
      { value: '-4.24rem', easing: 'easeOutCubic', duration: 1000, delay: 300 }
    ],
    opacity: { value: 0, easing: 'easeOutCubic', duration: 1000, delay: 2100 },
    rotate: -30,
    easing: 'easeOutCubic',
    duration: 800,
    delay: 1000
  })
}
// FIXME 对齐到底部
// FIXME 包括monitor同样的问题
function buildingUp() {
  building.style.opacity = '1'
  anime({
    targets: building,
    translateY: '-12.30vh',
    easing: 'easeOutCubic',
    duration: 300,
    delay: 1800
  })
  anime({
    targets: buildingLibrary,
    top: '0vh',
    easing: 'easeOutCubic',
    duration: 300,
    delay: 1800
  })
  anime({
    targets: buildingGate,
    top: '6.88125vh',
    easing: 'easeOutCubic',
    duration: 300,
    delay: 1800
  })
  anime({
    targets: buildingClassroom,
    top: '0.619vh',
    easing: 'easeOutCubic',
    duration: 300,
    delay: 1800
  })
}

function title() {
  anime({
    targets: document.querySelector('.title-bg'),
    opacity: 1,
    easing: 'easeOutCubic',
    duration: 1000,
    delay: 2100
  })
  anime({
    targets: document.querySelector('.title-1'),
    scale: 10,
    opacity: 1,
    easing: 'easeOutCubic',
    duration: 1000,
    delay: 2100
  })
  anime({
    targets: document.querySelector('.title-2'),
    scale: 10,
    opacity: 1,
    easing: 'easeOutCubic',
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
    right: '98vw',
    easing: 'linear',
    duration: 500,
    delay: 3100
  })
  anime({
    targets: document.querySelector('.sidebar-right'),
    opacity: 1,
    left: '98vw',
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