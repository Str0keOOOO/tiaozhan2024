import anime from "animejs"
import { scrollToTop } from "./scrollToTop"
import { monitorReturn } from "./monitor"
import { getScrollbarWidth } from "./scrollBar"

let bodyMask: any
let list: any
let mail: any
let enterLogoMask: any
let tiaozhan: any
let logo: any
let jishuLine: any
let meigongLine: any
let meigongCircle: any
let shipingLine: any
let building: any
let enterLogo: any
let isEnter: boolean = false

export function enterAnime() {
  bodyMask = document.querySelector('.body-mask') as any
  list = document.querySelector('.list') as any
  mail = document.querySelector('.mail') as any
  enterLogoMask = document.querySelector('.enter-logo-mask') as any
  tiaozhan = document.querySelector('.tiaozhan') as any
  logo = document.querySelectorAll('.enter-logo') as any
  enterLogo = document.querySelector('#enter-logo') as any
  jishuLine = Array.prototype.slice.call(logo[0].contentDocument.querySelectorAll('#line'))
  meigongLine = Array.prototype.slice.call(logo[1].contentDocument.querySelectorAll('#line'))
  meigongCircle = Array.prototype.slice.call(logo[1].contentDocument.querySelectorAll('#circle'))
  shipingLine = Array.prototype.slice.call(logo[2].contentDocument.querySelectorAll('#line'))
  building = document.querySelector('.building') as any
  // 入场动画
  isEnter = true
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
      enterLogoMask.style.display = 'block'
      enterLogoAnime()
    }, 3600)
    document.body.style.cursor = "default"
  }, 500)
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
        document.body.style.overflowY = "scroll"
        list.style.visibility = 'visible'
        mail.style.visibility = 'visible'
        enterLogoMask.style.display = 'block'
        enterLogoAnime()
      }, 3600)
      document.body.style.cursor = "default"
      isEnter = true
    }
  })
  enterLogoMask.addEventListener('click', () => {
    if (isEnter) {
      bgAnimeBack()
      scrollToTop()
      titleBack()
      sidebarBack()
      colorBack()
      buildingDown()
      enterLogoAnimeBack()
      monitorReturn()
      document.body.style.overflowY = "hidden"
      enterLogoMask.style.display = 'none'
      setTimeout(() => {
        list.style.visibility = 'hidden'
        mail.style.visibility = 'hidden'
        enterLogoMask.style.display = 'none'
        document.body.style.cursor = "pointer"
        bodyMask.style.display = 'block'
      }, 1601)
      isEnter = false
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
      { value: '-59.165vh', easing: 'linear', duration: 1, delay: 0 }
    ],
    opacity: [
      { value: 0, easing: 'easeOutCubic', duration: 1000, delay: 0 },
      { value: 1, easing: 'linear', duration: 500, delay: 2100 }
    ],
    scale: [
      { value: 0.1, easing: 'easeOutCubic', duration: 1000, delay: 0 },
      { value: 0.6, easing: 'linear', duration: 500, delay: 2100 }
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
      { value: '-15.28rem', easing: 'easeOutCubic', duration: 800, delay: 1000 },
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
      { value: '15.28rem', easing: 'easeOutCubic', duration: 800, delay: 1000 },
      { value: '-4.24rem', easing: 'easeOutCubic', duration: 1000, delay: 300 }
    ],
    opacity: { value: 0, easing: 'easeOutCubic', duration: 1000, delay: 2100 },
    rotate: -30,
    easing: 'easeOutCubic',
    duration: 800,
    delay: 1000
  })
  anime({
    targets: logo[4],
    translateY: '9.125rem',
    easing: 'easeOutCubic',
    duration: 800,
    delay: 1000
  })
}

function buildingUp() {
  building.style.opacity = '1'
  anime({
    targets: building,
    bottom: 0,
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
  anime({
    targets: document.querySelector('.police'),
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

// 回退动画
function bgAnimeBack() {
  anime({
    targets: logo[3],
    translateY: 0,
    scale: 1,
    easing: 'easeInOutCubic',
    duration: 800,
    delay: 1
  })
  anime({
    targets: [document.querySelector('.tiaozhan'), logo[0], logo[1], logo[2]],
    opacity: 1,
    easing: 'easeInOutCubic',
    duration: 800,
    delay: 1
  })
  anime({
    targets: [logo[0], logo[1], logo[2]],
    translateY: 0,
    translateX: 0,
    rotate: 0,
    easing: 'linear',
    duration: 1,
    delay: 0,
  })
  anime({
    targets: logo[4],
    opacity: 0,
    translateY: { value: 0, duration: 1, delay: 800 },
    easing: 'easeInOutCubic',
    duration: 801,
    delay: 0
  })
}

function titleBack() {
  anime({
    targets: document.querySelector('.title-bg'),
    opacity: 0,
    easing: 'easeInOutCubic',
    duration: 801,
    delay: 0
  })
  anime({
    targets: document.querySelector('.title-1'),
    scale: 10,
    opacity: 0,
    easing: 'easeInOutCubic',
    duration: 801,
    delay: 0
  })
  anime({
    targets: document.querySelector('.title-2'),
    scale: 10,
    opacity: 0,
    easing: 'easeInOutCubic',
    duration: 801,
    delay: 0
  })
  anime({
    targets: document.querySelector('.police'),
    opacity: 0,
    easing: 'easeOutCubic',
    duration: 801,
    delay: 0
  })
}

function sidebarBack() {
  anime({
    targets: document.querySelector('.list'),
    opacity: 0,
    easing: 'easeInOutCubic',
    duration: 801,
    delay: 0
  })
  anime({
    targets: document.querySelector('.mail'),
    opacity: 0,
    easing: 'easeInOutCubic',
    duration: 801,
    delay: 0
  })
  anime({
    targets: document.querySelector('.sidebar-left'),
    translateX: 0,
    opacity: 0,
    easing: 'easeInOutCubic',
    duration: 801,
    delay: 0
  })
  anime({
    targets: document.querySelector('.sidebar-right'),
    translateX: 'calc(0px - 0vw)',
    opacity: 0,
    easing: 'easeInOutCubic',
    duration: 801,
    delay: 0
  })
}

function colorBack() {
  anime({
    targets: document.querySelector('.bg-1'),
    backgroundColor: '#FFFFFF',
    easing: 'easeInOutCubic',
    duration: 800,
    delay: 801
  })
  anime({
    targets: jishuLine,
    stroke: '#FF3300',
    easing: 'easeInOutCubic',
    duration: 801,
    delay: 0
  })
  anime({
    targets: meigongLine,
    stroke: '#FF3300',
    easing: 'easeInOutCubic',
    duration: 801,
    delay: 0
  })
  anime({
    targets: meigongCircle,
    fill: '#FF3300',
    easing: 'easeInOutCubic',
    duration: 801,
    delay: 0
  })
  anime({
    targets: shipingLine,
    stroke: '#FF3300',
    easing: 'easeInOutCubic',
    duration: 801,
    delay: 0
  })
}

function buildingDown() {
  anime({
    targets: building,
    opacity: { value: 0, easing: 'easeInOutCubic', duration: 800, delay: 0 },
    bottom: '-100rem',
    easing: 'linear',
    duration: 1,
    delay: 800
  })
  anime({
    targets: document.querySelector('.bottom-arrow'),
    opacity: 0,
    easing: 'linear',
    duration: 1,
    delay: 800
  })
}

// enterlogo的放大效果
function enterLogoAnime() {
  enterLogo.style.transition = 'all 300ms ease-out'
  enterLogo.style.transformOrigin = "50% 450%"
  enterLogo.addEventListener('mouseover', enterLogoAnimeover)
  enterLogo.addEventListener('mouseout', enterLogoAnimeout)
}

function enterLogoAnimeBack() {
  enterLogo.style.transition = ''
  enterLogo.style.transformOrigin = ''
  enterLogo.removeEventListener('mouseover', enterLogoAnimeover)
  enterLogo.removeEventListener('mouseout', enterLogoAnimeout)
}

function enterLogoAnimeover() {
  enterLogo.style.scale = '1.15'
  Array.prototype.slice.call(enterLogo.contentDocument.childNodes[0].childNodes)[1].style.fill = '#FFAB95'
  Array.prototype.slice.call(enterLogo.contentDocument.childNodes[0].childNodes)[3].style.fill = '#FFAB95'
  Array.prototype.slice.call(enterLogo.contentDocument.childNodes[0].childNodes)[5].style.fill = '#FFAB95'
  Array.prototype.slice.call(enterLogo.contentDocument.childNodes[0].childNodes)[7].style.fill = '#FFAB95'
}
function enterLogoAnimeout() {
  enterLogo.style.scale = '1'
  Array.prototype.slice.call(enterLogo.contentDocument.childNodes[0].childNodes)[1].style.fill = '#ff7958'
  Array.prototype.slice.call(enterLogo.contentDocument.childNodes[0].childNodes)[3].style.fill = '#ff7958'
  Array.prototype.slice.call(enterLogo.contentDocument.childNodes[0].childNodes)[5].style.fill = '#ff7958'
  Array.prototype.slice.call(enterLogo.contentDocument.childNodes[0].childNodes)[7].style.fill = '#ff7958'
}