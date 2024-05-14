import anime from "animejs"

// FIXME 还没弄
var isEnter: boolean = false
export async function enter() {
  document.body.addEventListener("click", () => {
    if (!isEnter) {
      bgAnime()
      logoColor()
      logoRotate()
      buildingUp()
      title()
      sidebar()
      // FIXME 元素上的cursor有问题
      document.body.style.cursor = "default"
      document.body.style.overflowY="scroll";
      isEnter = true
    }
  })
}


function bgAnime() {
  anime({
    targets: document.querySelector('.bg-1'),
    backgroundColor: '#000000',
  })
}

function logoColor() {
  // FIXME 把这个该死的报错解决了，本来没有错误看着闹心 
  var logo = document.querySelectorAll('.enter-logo')
  var jishuLine = Array.prototype.slice.call(logo[0].contentDocument.querySelectorAll('#line'))
  var meigongLine = Array.prototype.slice.call(logo[1].contentDocument.querySelectorAll('#line'))
  var meigongCircle = Array.prototype.slice.call(logo[1].contentDocument.querySelectorAll('#circle'))
  var shipingLine = Array.prototype.slice.call(logo[2].contentDocument.querySelectorAll('#line'))
  //  TODO 把动画搞好看点
  anime({
    targets: jishuLine,
    stroke: '#0AFFE6',
    duration: 500,
    delay: 0
  })
  anime({
    targets: meigongLine,
    stroke: '#74DDFF',
    duration: 500,
    delay: 0
  })
  anime({
    targets: meigongCircle,
    fill: '#74DDFF',
    duration: 500,
    delay: 0
  })
  anime({
    targets: shipingLine,
    stroke: '#B95FFF',
    duration: 500,
    delay: 0
  })
  anime({
    targets: logo[3],
    top: [
      { value: '-53vh', duration: 100, delay: 2500 }
    ],
    opacity: [
      { value: 0, duration: 200, delay: 0 },
      { value: 1, duration: 500, delay: 2500 }
    ],
    scale: [
      { value: 0.1, duration: 200, delay: 0 },
      { value: 0.5, duration: 500, delay: 2500 }
    ],
    duration: 200,
    delay: 0,
    easing: 'linear'
  })
  anime({
    targets: logo[4],
    opacity: 1,
    translateY: '2.5rem',
    width: '19.375rem',
    duration: 200,
    easing: 'linear'
  })
}

function logoRotate() {
  // 时间点1000
  // FIXME 修改位置怎么能用cal
  var a = screen.height
  var logo = document.querySelectorAll('.enter-logo')
  anime({
    targets: logo[0],
    rotate: 90,
    top: a / 3,
    duration: 1000,
    delay: 1000
  })
  anime({
    targets: logo[1],
    rotate: 30,
    top: a / 3 - 150,
    left: '20vw',
    duration: 1000,
    delay: 1000
  })
  anime({
    targets: logo[2],
    rotate: -30,
    top: a / 3 - 350,
    left: '70vw',
    duration: 1000,
    delay: 1000
  })
  anime({
    targets: logo[4],
    top: '-6vh',
    duration: 1000,
    delay: 1000
  })
}

function buildingUp() {
  // 时间点2000
  var building = document.querySelector('.building')
  var buildingLibrary = document.querySelector('.building-library')
  var buildingGate = document.querySelector('.building-gate')
  var buildingClassroom = document.querySelector('.building-classroom')
  // FIXME 修改缩小之后对不齐的问题
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
  // 时间点2100
  var logo = document.querySelectorAll('.enter-logo')
  // FIXME 后面做个更好看的
  for (var i = 0; i < 3; i++) {
    anime({
      targets: logo[i],
      opacity: 0,
      easing: 'linear',
      duration: 500,
      delay: 2500
    })
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
}

function sidebar() {
  // 时间点3000
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
    right: '97.5vw',
    easing: 'linear',
    duration: 500,
    delay: 2500
  })
  anime({
    targets: document.querySelector('.sidebar-right'),
    left: '97.5vw',
    easing: 'linear',
    duration: 500,
    delay: 2500
  })
}