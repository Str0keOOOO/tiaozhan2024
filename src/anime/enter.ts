import anime from "animejs"

var isEnter: boolean = false
export async function enterAnime() {
  var bodyMask = document.querySelector('.body-mask') as any
  bodyMask.addEventListener("click", () => {
    if (!isEnter) {
      bgAnime()
      logoColor()
      logoRotate()
      buildingUp()
      title()
      sidebar()
      document.body.style.overflowY = "visible";
      var tiaozhan = document.querySelector('.tiaozhan') as any
      tiaozhan.style.overflow = 'visible'
      bodyMask.style.display = 'none'
      setTimeout(() => {
        document.body.style.overflowY = "scroll";
        var list = document.querySelector('.list') as any
        list.style.visibility = 'visible'
        var mail = document.querySelector('.mail') as any
        mail.style.visibility = 'visible'
        var enterLogoMask = document.querySelector('.enter-logo-mask') as any
        enterLogoMask.style.display = 'block'
      }, 3000);
      document.body.style.cursor = "default"
      isEnter = true
    }
  })
  var enterLogoMask = document.querySelector('.enter-logo-mask') as any
  enterLogoMask.addEventListener('click', () => {
    console.log(2);
    if (isEnter) {
      bgAnimeBack()
      scrollToTop()
      titleBack()
      sidebarBack()
      colorBack()
      buildingDown()
      document.body.style.overflowY = "hidden";
      enterLogoMask.style.display = 'none'
      setTimeout(() => {
        var list = document.querySelector('.list') as any
        list.style.visibility = 'hidden'
        var mail = document.querySelector('.mail') as any
        mail.style.visibility = 'hidden'
        var enterLogoMask = document.querySelector('.enter-logo-mask') as any
        enterLogoMask.style.display = 'none'
        document.body.style.cursor = "pointer"
        var bodyMask = document.querySelector('.body-mask') as any
        bodyMask.style.display = 'block'
      }, 2000);
      isEnter = false
    }
  })
}
// 前进动画
function bgAnime() {
  anime({
    targets: document.querySelector('.bg-1'),
    backgroundColor: '#000000',
  })
}

function logoColor() {
  var logo = document.querySelectorAll('.enter-logo') as any
  var jishuLine = Array.prototype.slice.call(logo[0].contentDocument.querySelectorAll('#line'))
  var meigongLine = Array.prototype.slice.call(logo[1].contentDocument.querySelectorAll('#line'))
  var meigongCircle = Array.prototype.slice.call(logo[1].contentDocument.querySelectorAll('#circle'))
  var shipingLine = Array.prototype.slice.call(logo[2].contentDocument.querySelectorAll('#line'))
  anime({
    targets: jishuLine,
    stroke: '#0AFFE6',
    duration: 2000,
    delay: 0
  })
  anime({
    targets: meigongLine,
    stroke: '#74DDFF',
    duration: 2000,
    delay: 0
  })
  anime({
    targets: meigongCircle,
    fill: '#74DDFF',
    duration: 2000,
    delay: 0
  })
  anime({
    targets: shipingLine,
    stroke: '#B95FFF',
    duration: 2000,
    delay: 0
  })
  anime({
    targets: logo[3],
    translateY: [
      { value: '-2rem', duration: 2000, delay: 0 },
      { value: '-55.165vh', duration: 100, delay: 500 }
    ],
    opacity: [
      { value: 0, duration: 2000, delay: 0 },
      { value: 1, duration: 500, delay: 500 }
    ],
    scale: [
      { value: 0.1, duration: 2000, delay: 0 },
      { value: 0.5, duration: 500, delay: 500 }
    ],
  })
  anime({
    targets: logo[4],
    opacity: 1,
    duration: 200,
    easing: 'linear'
  })
}

function logoRotate() {
  var logo = document.querySelectorAll('.enter-logo')
  anime({
    targets: logo[0],
    translateY: '7.31rem',
    opacity: { value: 0, duration: 1000, delay: 2000 },
    rotate: 90,
    duration: 1000,
    delay: 1000
  })
  anime({
    targets: logo[1],
    translateY: '0.05rem',
    translateX: [
      { value: '-15.28rem', duration: 1000, delay: 1000 },
      { value: '4.24rem', duration: 1000, delay: 0 }
    ],
    opacity: { value: 0, duration: 1000, delay: 2000 },
    rotate: 30,
    duration: 1000,
    delay: 1000
  })
  anime({
    targets: logo[2],
    translateY: '-0.1rem',
    translateX: [
      { value: '15.28rem', duration: 1000, delay: 1000 },
      { value: '-4.24rem', duration: 1000, delay: 0 }
    ],
    opacity: { value: 0, duration: 1000, delay: 2000 },
    rotate: -30,
    duration: 1000,
    delay: 1000
  })
  anime({
    targets: logo[4],
    translateY: '12.125rem',
    duration: 1000,
    delay: 1000
  })
}

function buildingUp() {
  var building = document.querySelector('.building') as any
  var buildingLibrary = document.querySelector('.building-library')
  var buildingGate = document.querySelector('.building-gate')
  var buildingClassroom = document.querySelector('.building-classroom')
  building.style.opacity = '1'
  anime({
    targets: building,
    translateY: '-31.92vh',
    easing: 'linear',
    duration: 100,
    delay: 2000
  })
  anime({
    targets: buildingLibrary,
    top: '0vh',
    duration: 100,
    delay: 2000
  })
  anime({
    targets: buildingGate,
    top: '16.284vh',
    duration: 100,
    delay: 2000
  })
  anime({
    targets: buildingClassroom,
    top: '0.437vh',
    duration: 100,
    delay: 2000
  })
}

function title() {
  anime({
    targets: document.querySelector('.title-bg'),
    opacity: 1,
    easing: 'linear',
    duration: 500,
    delay: 2500
  })
  anime({
    targets: document.querySelector('.title-1'),
    scale: 10,
    opacity: 1,
    easing: 'linear',
    duration: 500,
    delay: 2500
  })
  anime({
    targets: document.querySelector('.title-2'),
    scale: 10,
    opacity: 1,
    easing: 'linear',
    duration: 500,
    delay: 2500
  })
}

function sidebar() {
  anime({
    targets: document.querySelector('.list'),
    opacity: 1,
    easing: 'linear',
    duration: 500,
    delay: 2500
  })
  anime({
    targets: document.querySelector('.mail'),
    opacity: 1,
    easing: 'linear',
    duration: 500,
    delay: 2500
  })
  anime({
    targets: document.querySelector('.sidebar-left'),
    right: '97.3vw',
    easing: 'linear',
    duration: 500,
    delay: 2500
  })
  anime({
    targets: document.querySelector('.sidebar-right'),
    left: '98vw',
    easing: 'linear',
    duration: 500,
    delay: 2500
  })
  anime({
    targets: document.querySelector('.bottom-arrow'),
    opacity: 1,
    easing: 'linear',
    duration: 500,
    delay: 2500
  })
}
// 回退动画
function bgAnimeBack() {
  var logo = document.querySelectorAll('.enter-logo') as any
  anime({
    targets: logo[3],
    translateY: 0,
    scale: 1,
    duration: 1000,
    delay: 0
  })
  anime({
    targets: [document.querySelector('.tiaozhan'), logo[0], logo[1], logo[2]],
    opacity: 1,
    duration: 5000,
    delay: 0
  })
  anime({
    targets: [logo[0], logo[1], logo[2]],
    translateY: 0,
    translateX: 0,
    rotate: 0,
    duration: 1,
    delay: 0,
  })
  anime({
    targets: logo[4],
    opacity: 0,
    translateY: { value: 0, duration: 1, delay: 500 },
    duration: 500,
    delay: 0
  })
}

function scrollToTop() {
  var topHeight = document.documentElement.scrollTop
  var speed = topHeight / 10 > 100 ? topHeight / 10 : 100
  scrollBy(0, -speed)
  // 模拟鼠标向上滚动事件
  var scrolldelay = setTimeout('scrollToTop()', 50) as any
  // 清除滚动事件，避免无法向下移动
  if (topHeight === 0) {
    clearTimeout(scrolldelay);
    scrolldelay = null;
  }
}

function titleBack() {
  anime({
    targets: document.querySelector('.title-bg'),
    opacity: 0,
    duration: 500,
    delay: 0
  })
  anime({
    targets: document.querySelector('.title-1'),
    scale: 10,
    opacity: 0,
    duration: 500,
    delay: 0
  })
  anime({
    targets: document.querySelector('.title-2'),
    scale: 10,
    opacity: 0,
    duration: 500,
    delay: 0
  })
}

function sidebarBack() {
  anime({
    targets: document.querySelector('.list'),
    opacity: 0,
    duration: 500,
    delay: 0
  })
  anime({
    targets: document.querySelector('.mail'),
    opacity: 0,
    duration: 500,
    delay: 0
  })
  anime({
    targets: document.querySelector('.sidebar-left'),
    opacity: 0,
    duration: 500,
    delay: 0
  })
  anime({
    targets: document.querySelector('.sidebar-right'),
    opacity: 0,
    duration: 500,
    delay: 0
  })
}

function colorBack() {
  var logo = document.querySelectorAll('.enter-logo') as any
  var jishuLine = Array.prototype.slice.call(logo[0].contentDocument.querySelectorAll('#line'))
  var meigongLine = Array.prototype.slice.call(logo[1].contentDocument.querySelectorAll('#line'))
  var meigongCircle = Array.prototype.slice.call(logo[1].contentDocument.querySelectorAll('#circle'))
  var shipingLine = Array.prototype.slice.call(logo[2].contentDocument.querySelectorAll('#line'))
  anime({
    targets: document.querySelector('.bg-1'),
    backgroundColor: '#FFFFFF',
    duration: 1000,
    delay: 1000
  })
  anime({
    targets: jishuLine,
    stroke: '#FF3300',
    duration: 1000,
    delay: 0
  })
  anime({
    targets: meigongLine,
    stroke: '#FF3300',
    duration: 1000,
    delay: 0
  })
  anime({
    targets: meigongCircle,
    fill: '#FF3300',
    duration: 1000,
    delay: 0
  })
  anime({
    targets: shipingLine,
    stroke: '#FF3300',
    duration: 1000,
    delay: 0
  })
}

function buildingDown() {
  var building = document.querySelector('.building')
  var buildingLibrary = document.querySelector('.building-library')
  var buildingGate = document.querySelector('.building-gate')
  var buildingClassroom = document.querySelector('.building-classroom')
  anime({
    targets: building,
    opacity: { value: 0, duration: 200, delay: 0 },
    translateY: 0,
    easing: 'linear',
    duration: 1,
    delay: 900
  })
  anime({
    targets: buildingLibrary,
    top: 0,
    easing: 'linear',
    duration: 1,
    delay: 900
  })
  anime({
    targets: buildingGate,
    top: 0,
    easing: 'linear',
    duration: 1,
    delay: 900
  })
  anime({
    targets: buildingClassroom,
    top: 0,
    easing: 'linear',
    duration: 1,
    delay: 900
  })
  anime({
    targets: document.querySelector('.bottom-arrow'),
    opacity: 0,
    easing: 'linear',
    duration: 1000,
    delay: 0
  })
}