import anime from "animejs"
import { changeEl } from "./changeEl"

let monitorMid = document.querySelector('.monitor-mid') as any
let monitorLeft = document.querySelector('.monitor-left') as any
let monitorRight = document.querySelector('.monitor-right') as any

let midLampMid = monitorMid.contentDocument.querySelector('#灯中中')
let midLampLeft = monitorMid.contentDocument.querySelector('#灯中左')
let midLampRight = monitorMid.contentDocument.querySelector('#灯中右')
let midButtonReturn = monitorMid.contentDocument.querySelector('#返回键')
let midButtonLeft = monitorMid.contentDocument.querySelector('#左按键')
let midButtonRight = monitorMid.contentDocument.querySelector('#右按键')
let midMaskMid = document.querySelector('.mid-lamp-mid') as any
let midMaskLeft = document.querySelector('.mid-lamp-left') as any
let midMaskRight = document.querySelector('.mid-lamp-right') as any
let midLampMidLine = midLampMid.querySelectorAll('#技术部 line')
let midLampRightPath = midLampRight.querySelectorAll('#视频部 path')
// 
let midCanvas1 = monitorMid.contentDocument.querySelector('#真_显示屏-1 #内容')
let midCanvas2 = monitorMid.contentDocument.querySelector('#真_显示屏-2 #内容')
let midCanvas3 = monitorMid.contentDocument.querySelector('#真_显示屏-3 #内容')
// 
let midUpBool: boolean = false
let midCanvasInt1: number = 120000000 // js的取余数循环和正常人不一样我赌他不按一亿次
let midCanvasInt2: number = 120000000 // js的取余数循环和正常人不一样我赌他不按一亿次
let midCanvasInt3: number = 120000000 // js的取余数循环和正常人不一样我赌他不按一亿次
// FIXME 起程终的可选找时间去掉都检查一下
let leftLampUp = monitorLeft.contentDocument.querySelector('#光上')
let leftLampDown = monitorLeft.contentDocument.querySelector('#光下')
let leftMaskUp = document.querySelector('.left-lamp-up') as any
let leftMaskDown = document.querySelector('.left-lamp-down') as any

let rightCanvas1 = monitorRight.contentDocument.querySelector('#真_显示屏-1 #内容')
let rightCanvas2 = monitorRight.contentDocument.querySelector('#真_显示屏-2 #内容')
let rightFrameRight = monitorRight.contentDocument.querySelector('#右框架')

// 记录状态
let dict: { [key1: string]: any[] } = {
  licheng: [
    midMaskLeft,
    midMaskMid,
    midMaskRight,
  ],
  bumen: [
    midMaskLeft,
    midMaskMid,
    midMaskRight,
  ]
}
let state1: string
let state2: any

export async function monitor() {
  midLampControl()
  cursorPointer()
  midUp(midMaskMid)
  midUp(midMaskLeft)
  midUp(midMaskRight)
  midButtonReturn.addEventListener('click', monitorReturn)
  midButtonLeft.addEventListener('click', () => {
    if (state1 == "licheng") {
      midCanvasInt2--
    } else if (state1 == "bumen") {
      midCanvasInt3--
    } else {
      midCanvasInt1--
    }
    midCanvasShow()
    rightCanvasShow()
  })
  midButtonRight.addEventListener('click', () => {
    if (state1 == "licheng") {
      midCanvasInt2++
    } else if (state1 == "bumen") {
      midCanvasInt3++
    } else {
      midCanvasInt1++
    }
    midCanvasShow()
    rightCanvasShow()
  })
  leftLampControl()
  rightMonitorshow(leftMaskUp)
  rightMonitorshow(leftMaskDown)
}

function cursorPointer() {
  midButtonReturn.style.cursor = 'pointer'
  midButtonLeft.style.cursor = 'pointer'
  midButtonRight.style.cursor = 'pointer'
}

function midLampControl() {
  midLampMidControl()
  midLampLeftControl()
  midLampRightControl()
}

function midLampMidControl() {
  midLampMid.querySelector('#光').style.transition = "opacity 0.5s"
  midLampMid.querySelector('#技_连接线').style.transition = "stroke 0.5s"
  midLampMid.querySelector('#技术部 path').style.transition = "stroke 0.5s"
  midLampMidLine.forEach((line: any) => {
    line.style.transition = "stroke 0.5s";
  });
  midLampMid.querySelector('#承').style.transition = "fill 0.5s"
  midLampMid.querySelector('#承_连接线').style.transition = "stroke 0.5s"
  midMaskMid.addEventListener('mouseover', midLampMidRemoveOverLis1)
  midMaskMid.addEventListener('mouseout', midLampMidRemoveOutLis1)
}

function midLampMidRemoveOverLis1() {
  midLampMid.querySelector('#光').style.opacity = '0.52'
  midLampMid.querySelector('#技_连接线').style.stroke = '#0AFFE6'
  midLampMid.querySelector('#技术部 path').style.stroke = '#0AFFE6'
  midLampMidLine.forEach((line: any) => {
    line.style.stroke = '#0AFFE6'
  });
}

function midLampMidRemoveOutLis1() {
  midLampMid.querySelector('#光').style.opacity = '0'
  midLampMid.querySelector('#技_连接线').style.stroke = '#6e6e6e'
  midLampMid.querySelector('#技术部 path').style.stroke = '#6e6e6e'
  midLampMidLine.forEach((line: any) => {
    line.style.stroke = '#6e6e6e'
  });
}
function midLampMidRemoveOverLis12() {
  midLampMid.querySelector('#技_连接线').style.stroke = '#0AFFE6'
  midLampMid.querySelector('#技术部 path').style.stroke = '#0AFFE6'
  midLampMidLine.forEach((line: any) => {
    line.style.stroke = '#0AFFE6'
  });
}

function midLampMidRemoveOutLis12() {
  midLampMid.querySelector('#技_连接线').style.stroke = '#6e6e6e'
  midLampMid.querySelector('#技术部 path').style.stroke = '#6e6e6e'
  midLampMidLine.forEach((line: any) => {
    line.style.stroke = '#6e6e6e'
  });
}

function midLampMidRemoveOverLis2() {
  midLampMid.querySelector('#光').style.opacity = '0.52'
  midLampMid.querySelector('#承').style.fill = '#0AFFE6'
  midLampMid.querySelector('#承_连接线').style.stroke = '#0AFFE6'
}

function midLampMidRemoveOutLis2() {
  midLampMid.querySelector('#光').style.opacity = '0'
  midLampMid.querySelector('#承').style.fill = '#6E6E6E'
  midLampMid.querySelector('#承_连接线').style.stroke = '#6E6E6E'
}
function midLampMidRemoveOverLis22() {
  midLampMid.querySelector('#承').style.fill = '#0AFFE6'
  midLampMid.querySelector('#承_连接线').style.stroke = '#0AFFE6'
}

function midLampMidRemoveOutLis22() {
  midLampMid.querySelector('#承').style.fill = '#6E6E6E'
  midLampMid.querySelector('#承_连接线').style.stroke = '#6E6E6E'
}

function midLampLeftControl() {
  midLampLeft.querySelector('#光').style.transition = "opacity 0.5s";
  midLampLeft.querySelector('#美_连接线').style.transition = "stroke 0.5s";
  midLampLeft.querySelector('#美工部 line').style.transition = "stroke 0.5s";
  midLampLeft.querySelector('#美工部 path').style.transition = "stroke 0.5s";
  midLampLeft.querySelector('#美工部 circle').style.transition = "fill 0.5s";
  midLampLeft.querySelector('#起').style.transition = "fill 0.5s"
  midLampLeft.querySelector('#起_连接线').style.transition = "stroke 0.5s"
  midMaskLeft.addEventListener('mouseover', midLampLeftRemoveOverLis1)
  midMaskLeft.addEventListener('mouseout', midLampLeftRemoveOutLis1)
}

function midLampLeftRemoveOverLis1() {
  midLampLeft.querySelector('#光').style.opacity = '0.52'
  midLampLeft.querySelector('#美_连接线').style.stroke = '#74DDFF'
  midLampLeft.querySelector('#美工部 line').style.stroke = '#74DDFF'
  midLampLeft.querySelector('#美工部 path').style.stroke = '#74DDFF'
  midLampLeft.querySelector('#美工部 circle').style.fill = '#74DDFF'
}

function midLampLeftRemoveOutLis1() {
  midLampLeft.querySelector('#光').style.opacity = '0'
  midLampLeft.querySelector('#美_连接线').style.stroke = '#6e6e6e'
  midLampLeft.querySelector('#美工部 line').style.stroke = '#6e6e6e'
  midLampLeft.querySelector('#美工部 path').style.stroke = '#6e6e6e'
  midLampLeft.querySelector('#美工部 circle').style.fill = '#6e6e6e'
}
function midLampLeftRemoveOverLis12() {
  midLampLeft.querySelector('#美_连接线').style.stroke = '#74DDFF'
  midLampLeft.querySelector('#美工部 line').style.stroke = '#74DDFF'
  midLampLeft.querySelector('#美工部 path').style.stroke = '#74DDFF'
  midLampLeft.querySelector('#美工部 circle').style.fill = '#74DDFF'
}

function midLampLeftRemoveOutLis12() {
  midLampLeft.querySelector('#美_连接线').style.stroke = '#6e6e6e'
  midLampLeft.querySelector('#美工部 line').style.stroke = '#6e6e6e'
  midLampLeft.querySelector('#美工部 path').style.stroke = '#6e6e6e'
  midLampLeft.querySelector('#美工部 circle').style.fill = '#6e6e6e'
}

function midLampLeftRemoveOverLis2() {
  midLampLeft.querySelector('#光').style.opacity = '0.52'
  midLampLeft.querySelector('#起').style.fill = '#74DDFF'
  midLampLeft.querySelector('#起_连接线').style.stroke = '#74DDFF'
}

function midLampLeftRemoveOutLis2() {
  midLampLeft.querySelector('#光').style.opacity = '0'
  midLampLeft.querySelector('#起').style.fill = '#6E6E6E'
  midLampLeft.querySelector('#起_连接线').style.stroke = '#6E6E6E'
}
function midLampLeftRemoveOverLis22() {
  midLampLeft.querySelector('#起').style.fill = '#74DDFF'
  midLampLeft.querySelector('#起_连接线').style.stroke = '#74DDFF'
}

function midLampLeftRemoveOutLis22() {
  midLampLeft.querySelector('#起').style.fill = '#6E6E6E'
  midLampLeft.querySelector('#起_连接线').style.stroke = '#6E6E6E'
}


function midLampRightControl() {
  midLampRight.querySelector('#光').style.transition = "opacity 0.5s";
  midLampRight.querySelector('#视_连接线').style.transition = "stroke 0.5s";
  midLampRightPath.forEach((path: any) => {
    path.style.transition = "stroke 0.5s";
  });
  midLampRight.querySelector('#终').style.transition = "fill 0.5s"
  midLampRight.querySelector('#终_连接线').style.transition = "stroke 0.5s"
  midMaskRight.addEventListener('mouseover', midLampRightRemoveOverLis1)
  midMaskRight.addEventListener('mouseout', midLampRightRemoveOutLis1)
}

function midLampRightRemoveOverLis1() {
  midLampRight.querySelector('#光').style.opacity = '0.52'
  midLampRight.querySelector('#视_连接线').style.stroke = '#B95FFF'
  midLampRightPath.forEach((path: any) => {
    path.style.stroke = '#B95FFF'
  });
}

function midLampRightRemoveOutLis1() {
  midLampRight.querySelector('#光').style.opacity = '0'
  midLampRight.querySelector('#视_连接线').style.stroke = '#6e6e6e'
  midLampRightPath.forEach((path: any) => {
    path.style.stroke = '#6e6e6e'
  });
}
function midLampRightRemoveOverLis12() {
  midLampRight.querySelector('#视_连接线').style.stroke = '#B95FFF'
  midLampRightPath.forEach((path: any) => {
    path.style.stroke = '#B95FFF'
  });
}

function midLampRightRemoveOutLis12() {
  midLampRight.querySelector('#视_连接线').style.stroke = '#6e6e6e'
  midLampRightPath.forEach((path: any) => {
    path.style.stroke = '#6e6e6e'
  });
}

function midLampRightRemoveOverLis2() {
  midLampRight.querySelector('#光').style.opacity = '0.52'
  midLampRight.querySelector('#终').style.fill = '#B95FFF'
  midLampRight.querySelector('#终_连接线').style.stroke = '#B95FFF'
}

function midLampRightRemoveOutLis2() {
  midLampRight.querySelector('#光').style.opacity = '0'
  midLampRight.querySelector('#终').style.fill = '#6E6E6E'
  midLampRight.querySelector('#终_连接线').style.stroke = '#6E6E6E'
}
function midLampRightRemoveOverLis22() {
  midLampRight.querySelector('#终').style.fill = '#B95FFF'
  midLampRight.querySelector('#终_连接线').style.stroke = '#B95FFF'
}

function midLampRightRemoveOutLis22() {
  midLampRight.querySelector('#终').style.fill = '#6E6E6E'
  midLampRight.querySelector('#终_连接线').style.stroke = '#6E6E6E'
}


function midUp(el: any) {
  midCanvas1.style.opacity = "0"
  midCanvas2.style.opacity = "1"
  midCanvas3.style.opacity = "0"
  el.addEventListener('click', () => {
    if (!midUpBool) {
      anime({
        targets: [monitorMid, document.querySelector('.monitor-mid-mask')],
        translateY: '-45.5vh',
        easing: 'linear',
        duration: 500,
        delay: 0
      })
      anime({
        targets: [monitorLeft, document.querySelector('.monitor-left-mask')],
        translateX: '19.48vw',
        easing: 'linear',
        duration: 500,
        delay: 0
      })
      anime({
        targets: document.querySelectorAll('.intro'),
        opacity: 0,
        duration: 1000,
        delay: 0
      })
      changeEl(midCanvas1)
      midUpBool = true
    }
  })
}

function midCanvasShow() {
  // 部门
  if (state1 == "bumen") {
    switch (midCanvasInt3 % 3) {
      case 0:
        state2 = midMaskLeft
        anime({
          targets: midCanvas3,
          translateY: 0,
        })
        break
      case 1:
        state2 = midMaskMid
        anime({
          targets: midCanvas3,
          translateY: '21vh',
        })
        break
      case 2:
        state2 = midMaskRight
        anime({
          targets: midCanvas3,
          translateY: '40vh',
        })
        break
    }
  } else if (state1 == "licheng") {
    // 历程
    switch (midCanvasInt2 % 3) {
      case 0:
        state2 = midMaskLeft
        anime({
          targets: midCanvas2,
          translateY: 0,
        })
        break
      case 1:
        state2 = midMaskMid
        anime({
          targets: midCanvas2,
          translateY: '21vh',
        })
        break
      case 2:
        state2 = midMaskRight
        anime({
          targets: midCanvas2,
          translateY: '40vh',
        })
        break
    }
  } else {
    switch (midCanvasInt1 % 3) {
      case 0:
        anime({
          targets: midCanvas1,
          translateY: 0,
        })
        break
      case 1:
        anime({
          targets: midCanvas1,
          translateY: '21vh',
        })
        break
      case 2:
        anime({
          targets: midCanvas1,
          translateY: '40vh',
        })
        break
    }
  }
  showLampCanvasThen(undefined)
  rightCanvasShow()
}

function leftLampControl() {
  leftLampUpControl()
  leftLampDownControl()
}

function leftLampUpControl() {
  let leftLampUpCircle = leftLampUp.querySelectorAll('circle')
  leftLampUpCircle.forEach((circle: any) => {
    circle.style.transition = "opacity 0.5s"
  });
  leftMaskUp.addEventListener('mouseover', () => {
    leftLampUpCircle.forEach((circle: any) => {
      circle.style.opacity = '1'
    })
  })
  leftMaskUp.addEventListener('mouseout', () => {
    leftLampUpCircle.forEach((circle: any) => {
      circle.style.opacity = '0'
    })
  })
  leftMaskUp.addEventListener('click', () => {
    changeEl(midCanvas2)
    leftLampUpCircle.forEach((circle: any) => {
      circle.style.opacity = '0'
    })
    anime({
      targets: leftLampUp.querySelector('#历_程-3'),
      fill: '#F99360',
      easing: 'linear',
      duration: 500,
      delay: 0
    })
    anime({
      targets: monitorLeft.contentDocument.querySelector('#历_程-2'),
      fill: '#F44D33',
      easing: 'linear',
      duration: 500,
      delay: 0
    })
    anime({
      targets: [Array.prototype.slice.call(monitorLeft.contentDocument.querySelectorAll('#组_25 path')), monitorLeft.contentDocument.querySelector('#路径_37')],
      stroke: '#F99360',
      easing: 'linear',
      duration: 500,
      delay: 0
    })
    anime({
      targets: leftLampDown.querySelector('#部_门-3'),
      fill: '#c0ffd7',
      easing: 'linear',
      duration: 500,
      delay: 0
    })
    anime({
      targets: monitorLeft.contentDocument.querySelector('#部_门'),
      fill: '#91F8B6',
      easing: 'linear',
      duration: 500,
      delay: 0
    })
    anime({
      targets: [Array.prototype.slice.call(monitorLeft.contentDocument.querySelectorAll('#组_20 path')), monitorLeft.contentDocument.querySelector('#路径_38')],
      stroke: '#c0ffd7',
      easing: 'linear',
      duration: 500,
      delay: 0
    })
    anime({
      targets: monitorLeft.contentDocument.querySelector('#radial-gradient_1 stop'),
      stopColor: "#ff9747"
    })
    anime({
      targets: monitorLeft.contentDocument.querySelector('#radial-gradient stop'),
      stopColor: "#c0ffd7"
    })
  })
}

function leftLampDownControl() {
  let leftLampDownCircle = leftLampDown.querySelectorAll('circle')
  leftLampDownCircle.forEach((circle: any) => {
    circle.style.transition = "opacity 0.5s"
  });
  leftMaskDown.addEventListener('mouseover', () => {
    leftLampDownCircle.forEach((circle: any) => {
      circle.style.opacity = '1'
    });
  })
  leftMaskDown.addEventListener('mouseout', () => {
    leftLampDownCircle.forEach((circle: any) => {
      circle.style.opacity = '0'
    });
  })
  leftMaskDown.addEventListener('click', () => {
    changeEl(midCanvas3)
    anime({
      targets: leftLampDown.querySelector('#部_门-3'),
      fill: '#F99360',
      easing: 'linear',
      duration: 500,
      delay: 0
    })
    anime({
      targets: monitorLeft.contentDocument.querySelector('#部_门'),
      fill: '#F44D33',
      easing: 'linear',
      duration: 500,
      delay: 0
    })
    anime({
      targets: [Array.prototype.slice.call(monitorLeft.contentDocument.querySelectorAll('#组_20 path')), monitorLeft.contentDocument.querySelector('#路径_38')],
      stroke: '#F99360',
      easing: 'linear',
      duration: 500,
      delay: 0
    })
    anime({
      targets: leftLampUp.querySelector('#历_程-3'),
      fill: '#c0ffd7',
      easing: 'linear',
      duration: 500,
      delay: 0
    })
    anime({
      targets: monitorLeft.contentDocument.querySelector('#历_程-2'),
      fill: '#91F8B6',
      easing: 'linear',
      duration: 500,
      delay: 0
    })
    anime({
      targets: [Array.prototype.slice.call(monitorLeft.contentDocument.querySelectorAll('#组_25 path')), monitorLeft.contentDocument.querySelector('#路径_37')],
      stroke: '#c0ffd7',
      easing: 'linear',
      duration: 500,
      delay: 0
    })
    anime({
      targets: monitorLeft.contentDocument.querySelector('#radial-gradient stop'),
      stopColor: "#ff9747"
    })
    anime({
      targets: monitorLeft.contentDocument.querySelector('#radial-gradient_1 stop'),
      stopColor: "#c0ffd7"
    })
    midLampLeftRemoveOverLis1()
    midMaskLeft.removeEventListener('mouseover', midLampLeftRemoveOverLis1)
    midMaskLeft.removeEventListener('mouseout', midLampLeftRemoveOutLis1)
  })
}
// 右边机器出来
function rightMonitorshow(el: any) {
  el.addEventListener('click', () => {
    if (el == leftMaskUp) {
      anime({
        targets: rightCanvas1,
        opacity: 0.83,
        duration: 1000,
        delay: 0
      })
      anime({
        targets: rightCanvas2,
        opacity: 0,
        duration: 1000,
        delay: 0
      })
    }
    else if (el == leftMaskDown) {
      anime({
        targets: rightCanvas1,
        opacity: 0,
        duration: 1000,
        delay: 0
      })
      anime({
        targets: rightCanvas2,
        opacity: 0.83,
        duration: 1000,
        delay: 0
      })
    }
    switch (el) {
      case leftMaskUp:
        state1 = "licheng"
        state2 = midMaskLeft
        break
      case leftMaskDown:
        state1 = "bumen"
        state2 = midMaskLeft
        break
    }
    showLampCanvas()
    anime({
      targets: [monitorMid, document.querySelector('.monitor-mid-mask')],
      translateY: '-53.2vh',
      translateX: '-8.2vw',
      easing: 'linear',
      duration: 500,
      delay: 0
    })
    if (el == leftMaskUp) {
      anime({
        targets: [monitorLeft, document.querySelector('.monitor-left-mask')],
        translateX: '14vw',
        easing: 'linear',
        duration: 500,
        delay: 0
      })
    } else if (el == leftMaskDown) {
      anime({
        targets: [monitorLeft, document.querySelector('.monitor-left-mask')],
        translateX: '14.61vw',
        easing: 'linear',
        duration: 500,
        delay: 0
      })
    }
    anime({
      targets: monitorRight,
      translateX: '-34.01vw',
      easing: 'linear',
      duration: 500,
      delay: 0
    })
    anime({
      targets: [rightCanvas1, rightCanvas2],
      translateX: '2.2vw',
      translateY: '1.2vh',
      easing: 'linear',
      duration: 500,
      delay: 0
    })
    anime({
      targets: rightFrameRight,
      translateX: '1.5vw',
      easing: 'linear',
      duration: 500,
      delay: 0
    })
  })

}

function showLampCanvas() {
  // 初始状态
  showLampCanvasInitial()
  // 变化状态
  Object.values(dict[state1]).forEach((el) => {
    el.addEventListener('click', showLampCanvasThen)
  })
}

function showLampCanvasInitial() {
  midLampLeftRemoveOutLis1()
  midLampLeftRemoveOutLis2()
  midLampMidRemoveOutLis1()
  midLampMidRemoveOutLis2()
  midLampRightRemoveOutLis1()
  midLampRightRemoveOutLis2()
  midLampLeftRemoveOutLis12()
  midLampLeftRemoveOutLis22()
  midLampMidRemoveOutLis12()
  midLampMidRemoveOutLis22()
  midLampRightRemoveOutLis12()
  midLampRightRemoveOutLis22()
  midMaskLeft.removeEventListener('mouseover', midLampLeftRemoveOverLis1)
  midMaskLeft.removeEventListener('mouseover', midLampLeftRemoveOverLis2)
  midMaskLeft.removeEventListener('mouseout', midLampLeftRemoveOutLis1)
  midMaskLeft.removeEventListener('mouseout', midLampLeftRemoveOutLis2)
  midMaskLeft.removeEventListener('mouseover', midLampLeftRemoveOverLis12)
  midMaskLeft.removeEventListener('mouseover', midLampLeftRemoveOverLis22)
  midMaskLeft.removeEventListener('mouseout', midLampLeftRemoveOutLis12)
  midMaskLeft.removeEventListener('mouseout', midLampLeftRemoveOutLis22)
  midMaskLeft.removeEventListener('mouseover', showLampCanvasOn)
  midMaskLeft.removeEventListener('mouseout', showLampCanvasOff)
  midMaskMid.removeEventListener('mouseover', midLampMidRemoveOverLis1)
  midMaskMid.removeEventListener('mouseover', midLampMidRemoveOverLis2)
  midMaskMid.removeEventListener('mouseout', midLampMidRemoveOutLis1)
  midMaskMid.removeEventListener('mouseout', midLampMidRemoveOutLis2)
  midMaskMid.removeEventListener('mouseover', midLampMidRemoveOverLis12)
  midMaskMid.removeEventListener('mouseover', midLampMidRemoveOverLis22)
  midMaskMid.removeEventListener('mouseout', midLampMidRemoveOutLis12)
  midMaskMid.removeEventListener('mouseout', midLampMidRemoveOutLis22)
  midMaskMid.removeEventListener('mouseover', showLampCanvasOn)
  midMaskMid.removeEventListener('mouseout', showLampCanvasOff)
  midMaskRight.removeEventListener('mouseover', midLampRightRemoveOverLis1)
  midMaskRight.removeEventListener('mouseover', midLampRightRemoveOverLis2)
  midMaskRight.removeEventListener('mouseout', midLampRightRemoveOutLis1)
  midMaskRight.removeEventListener('mouseout', midLampRightRemoveOutLis2)
  midMaskRight.removeEventListener('mouseover', midLampRightRemoveOverLis12)
  midMaskRight.removeEventListener('mouseover', midLampRightRemoveOverLis22)
  midMaskRight.removeEventListener('mouseout', midLampRightRemoveOutLis12)
  midMaskRight.removeEventListener('mouseout', midLampRightRemoveOutLis22)
  midMaskRight.removeEventListener('mouseover', showLampCanvasOn)
  midMaskRight.removeEventListener('mouseout', showLampCanvasOff)
  if (state1 == "licheng") {
    midMaskMid.addEventListener('mouseover', midLampMidRemoveOverLis22)
    midMaskMid.addEventListener('mouseout', midLampMidRemoveOutLis22)
    midMaskRight.addEventListener('mouseover', midLampRightRemoveOverLis22)
    midMaskRight.addEventListener('mouseout', midLampRightRemoveOutLis22)
    midLampLeftRemoveOverLis2()
    midMaskLeft.addEventListener('mouseover', showLampCanvasOn)
    midMaskLeft.addEventListener('mouseout', showLampCanvasOff)
  } else if (state1 == "bumen") {
    midMaskMid.addEventListener('mouseover', midLampMidRemoveOverLis12)
    midMaskMid.addEventListener('mouseout', midLampMidRemoveOutLis12)
    midMaskRight.addEventListener('mouseover', midLampRightRemoveOverLis12)
    midMaskRight.addEventListener('mouseout', midLampRightRemoveOutLis12)
    midLampLeftRemoveOverLis1()
    midMaskLeft.addEventListener('mouseover', showLampCanvasOn)
    midMaskLeft.addEventListener('mouseout', showLampCanvasOff)
  }
}

function showLampCanvasOn(el: any) {
  switch (el.target) {
    case midMaskLeft:
      midLampLeft.querySelector('#光').style.opacity = '1'
      break
    case midMaskMid:
      midLampMid.querySelector('#光').style.opacity = '1'
      break
    case midMaskRight:
      midLampRight.querySelector('#光').style.opacity = '1'
      break
  }
}

function showLampCanvasOff(el: any) {
  switch (el.target) {
    case midMaskLeft:
      midLampLeft.querySelector('#光').style.opacity = '0.52'
      break
    case midMaskMid:
      midLampMid.querySelector('#光').style.opacity = '0.52'
      break
    case midMaskRight:
      midLampRight.querySelector('#光').style.opacity = '0.52'
      break
  }
}

function showLampCanvasThen(el: any) {
  let state2Initial
  if (el != undefined) {
    state2Initial = state2
    state2 = el.target
    if (state1 == "licheng") {
      switch (state2) {
        case midMaskLeft:
          midCanvasInt2 = 120000000
          break
        case midMaskMid:
          midCanvasInt2 = 120000001
          break
        case midMaskRight:
          midCanvasInt2 = 120000002
          break
      }
    } else if (state1 == "bumen") {
      switch (state2) {
        case midMaskLeft:
          midCanvasInt3 = 120000000
          break
        case midMaskMid:
          midCanvasInt3 = 120000001
          break
        case midMaskRight:
          midCanvasInt3 = 120000002
          break
      }
    }
    midCanvasShow()
  } else {
    switch (state2) {
      case midMaskLeft:
        state2Initial = midMaskRight
        break
      case midMaskMid:
        state2Initial = midMaskLeft
        break
      case midMaskRight:
        state2Initial = midMaskMid
        break
    }
  }
  if (state1 == "licheng") {
    switch (state2) {
      case midMaskLeft:
        midMaskLeft.removeEventListener('mouseover', midLampLeftRemoveOverLis22)
        midMaskLeft.removeEventListener('mouseout', midLampLeftRemoveOutLis22)
        midLampLeftRemoveOverLis2()
        midMaskLeft.addEventListener('mouseover', showLampCanvasOn)
        midMaskLeft.addEventListener('mouseout', showLampCanvasOff)
        break
      case midMaskMid:
        midMaskMid.removeEventListener('mouseover', midLampMidRemoveOverLis22)
        midMaskMid.removeEventListener('mouseout', midLampMidRemoveOutLis22)
        midLampMidRemoveOverLis2()
        midMaskMid.addEventListener('mouseover', showLampCanvasOn)
        midMaskMid.addEventListener('mouseout', showLampCanvasOff)
        break
      case midMaskRight:
        midMaskRight.removeEventListener('mouseover', midLampRightRemoveOverLis22)
        midMaskRight.removeEventListener('mouseout', midLampRightRemoveOutLis22)
        midLampRightRemoveOverLis2()
        midMaskRight.addEventListener('mouseover', showLampCanvasOn)
        midMaskRight.addEventListener('mouseout', showLampCanvasOff)
        break
    }
    if (state2Initial != state2) {
      switch (state2Initial) {
        case midMaskLeft:
          midMaskLeft.removeEventListener('mouseover', showLampCanvasOn)
          midMaskLeft.removeEventListener('mouseout', showLampCanvasOff)
          midLampLeftRemoveOutLis2()
          midMaskLeft.addEventListener('mouseover', midLampLeftRemoveOverLis22)
          midMaskLeft.addEventListener('mouseout', midLampLeftRemoveOutLis22)
          break
        case midMaskMid:
          midMaskMid.removeEventListener('mouseover', showLampCanvasOn)
          midMaskMid.removeEventListener('mouseout', showLampCanvasOff)
          midLampMidRemoveOutLis2()
          midMaskMid.addEventListener('mouseover', midLampMidRemoveOverLis22)
          midMaskMid.addEventListener('mouseout', midLampMidRemoveOutLis22)
          break
        case midMaskRight:
          midMaskRight.removeEventListener('mouseover', showLampCanvasOn)
          midMaskRight.removeEventListener('mouseout', showLampCanvasOff)
          midLampRightRemoveOutLis2()
          midMaskRight.addEventListener('mouseover', midLampRightRemoveOverLis22)
          midMaskRight.addEventListener('mouseout', midLampRightRemoveOutLis22)
          break
      }
    }
  } else if (state1 == "bumen") {
    switch (state2) {
      case midMaskLeft:
        midMaskLeft.removeEventListener('mouseover', midLampLeftRemoveOverLis12)
        midMaskLeft.removeEventListener('mouseout', midLampLeftRemoveOutLis12)
        midLampLeftRemoveOverLis1()
        midMaskLeft.addEventListener('mouseover', showLampCanvasOn)
        midMaskLeft.addEventListener('mouseout', showLampCanvasOff)
        break
      case midMaskMid:
        midMaskMid.removeEventListener('mouseover', midLampMidRemoveOverLis12)
        midMaskMid.removeEventListener('mouseout', midLampMidRemoveOutLis12)
        midLampMidRemoveOverLis1()
        midMaskMid.addEventListener('mouseover', showLampCanvasOn)
        midMaskMid.addEventListener('mouseout', showLampCanvasOff)
        break
      case midMaskRight:
        midMaskRight.removeEventListener('mouseover', midLampRightRemoveOverLis12)
        midMaskRight.removeEventListener('mouseout', midLampRightRemoveOutLis12)
        midLampRightRemoveOverLis1()
        midMaskRight.addEventListener('mouseover', showLampCanvasOn)
        midMaskRight.addEventListener('mouseout', showLampCanvasOff)
        break
    }
    if (state2Initial != state2) {
      switch (state2Initial) {
        case midMaskLeft:
          midMaskLeft.removeEventListener('mouseover', showLampCanvasOn)
          midMaskLeft.removeEventListener('mouseout', showLampCanvasOff)
          midLampLeftRemoveOutLis1()
          midMaskLeft.addEventListener('mouseover', midLampLeftRemoveOverLis12)
          midMaskLeft.addEventListener('mouseout', midLampLeftRemoveOutLis12)
          break
        case midMaskMid:
          midMaskMid.removeEventListener('mouseover', showLampCanvasOn)
          midMaskMid.removeEventListener('mouseout', showLampCanvasOff)
          midLampMidRemoveOutLis1()
          midMaskMid.addEventListener('mouseover', midLampMidRemoveOverLis12)
          midMaskMid.addEventListener('mouseout', midLampMidRemoveOutLis12)
          break
        case midMaskRight:
          midMaskRight.removeEventListener('mouseover', showLampCanvasOn)
          midMaskRight.removeEventListener('mouseout', showLampCanvasOff)
          midLampRightRemoveOutLis1()
          midMaskRight.addEventListener('mouseover', midLampRightRemoveOverLis12)
          midMaskRight.addEventListener('mouseout', midLampRightRemoveOutLis12)
          break
      }
    }
  }
}
//  返回
function monitorReturn() {
  state1 = ''
  midCanvasInt1 = 120000000
  midCanvasInt2 = 120000000
  midCanvasInt3 = 120000000
  if (midUpBool) {
    anime({
      targets: [monitorMid, document.querySelector('.monitor-mid-mask')],
      translateY: 0,
      translateX: 0,
      easing: 'linear',
      duration: 500,
      delay: 0
    })
    anime({
      targets: [monitorLeft, document.querySelector('.monitor-left-mask')],
      translateX: 0,
      easing: 'linear',
      duration: 500,
      delay: 0
    })
    anime({
      targets: monitorRight,
      translateX: 0,
      easing: 'linear',
      duration: 500,
      delay: 0
    })
    anime({
      targets: [rightCanvas1, rightCanvas2],
      translateX: 0,
      translateY: 0,
      easing: 'linear',
      duration: 500,
      delay: 0
    })
    anime({
      targets: rightFrameRight,
      translateX: 0,
      easing: 'linear',
      duration: 500,
      delay: 0
    })
    anime({
      targets: document.querySelectorAll('.intro'),
      opacity: 1,
      duration: 1000,
      delay: 0
    })

    midUpBool = false
  }
  changeEl(midCanvas2)
  midMaskLeft.removeEventListener('click', showLampCanvasThen)
  midMaskLeft.removeEventListener('mouseover', midLampLeftRemoveOverLis1)
  midMaskLeft.removeEventListener('mouseover', midLampLeftRemoveOverLis2)
  midMaskLeft.removeEventListener('mouseout', midLampLeftRemoveOutLis1)
  midMaskLeft.removeEventListener('mouseout', midLampLeftRemoveOutLis2)
  midMaskLeft.removeEventListener('mouseover', showLampCanvasOn)
  midMaskLeft.removeEventListener('mouseout', showLampCanvasOff)
  midMaskMid.removeEventListener('click', showLampCanvasThen)
  midMaskMid.removeEventListener('mouseover', midLampMidRemoveOverLis1)
  midMaskMid.removeEventListener('mouseover', midLampMidRemoveOverLis2)
  midMaskMid.removeEventListener('mouseout', midLampMidRemoveOutLis1)
  midMaskMid.removeEventListener('mouseout', midLampMidRemoveOutLis2)
  midMaskMid.removeEventListener('mouseover', showLampCanvasOn)
  midMaskMid.removeEventListener('mouseout', showLampCanvasOff)
  midMaskRight.removeEventListener('click', showLampCanvasThen)
  midMaskRight.removeEventListener('mouseover', midLampRightRemoveOverLis1)
  midMaskRight.removeEventListener('mouseover', midLampRightRemoveOverLis2)
  midMaskRight.removeEventListener('mouseout', midLampRightRemoveOutLis1)
  midMaskRight.removeEventListener('mouseout', midLampRightRemoveOutLis2)
  midMaskRight.removeEventListener('mouseover', showLampCanvasOn)
  midMaskRight.removeEventListener('mouseout', showLampCanvasOff)
  midLampLeftRemoveOutLis1()
  midLampLeftRemoveOutLis2()
  midLampMidRemoveOutLis1()
  midLampMidRemoveOutLis2()
  midLampRightRemoveOutLis1()
  midLampRightRemoveOutLis2()
  midMaskLeft.addEventListener('mouseover', midLampLeftRemoveOverLis1)
  midMaskLeft.addEventListener('mouseout', midLampLeftRemoveOutLis1)
  midMaskMid.addEventListener('mouseover', midLampMidRemoveOverLis1)
  midMaskMid.addEventListener('mouseout', midLampMidRemoveOutLis1)
  midMaskRight.addEventListener('mouseover', midLampRightRemoveOverLis1)
  midMaskRight.addEventListener('mouseout', midLampRightRemoveOutLis1)
  // 侧边还原颜色
  anime({
    targets: leftLampDown.querySelector('#部_门-3'),
    fill: '#c0ffd7',
    easing: 'linear',
    duration: 500,
    delay: 0
  })
  anime({
    targets: monitorLeft.contentDocument.querySelector('#部_门'),
    fill: '#91F8B6',
    easing: 'linear',
    duration: 500,
    delay: 0
  })
  anime({
    targets: [Array.prototype.slice.call(monitorLeft.contentDocument.querySelectorAll('#组_20 path')), monitorLeft.contentDocument.querySelector('#路径_38')],
    stroke: '#c0ffd7',
    easing: 'linear',
    duration: 500,
    delay: 0
  })
  anime({
    targets: [Array.prototype.slice.call(monitorLeft.contentDocument.querySelectorAll('#组_20 path')), monitorLeft.contentDocument.querySelector('#路径_38')],
    stroke: '#c0ffd7',
    easing: 'linear',
    duration: 500,
    delay: 0
  })
  anime({
    targets: leftLampUp.querySelector('#历_程-3'),
    fill: '#c0ffd7',
    easing: 'linear',
    duration: 500,
    delay: 0
  })
  anime({
    targets: monitorLeft.contentDocument.querySelector('#历_程-2'),
    fill: '#91F8B6',
    easing: 'linear',
    duration: 500,
    delay: 0
  })
  anime({
    targets: [Array.prototype.slice.call(monitorLeft.contentDocument.querySelectorAll('#组_25 path')), monitorLeft.contentDocument.querySelector('#路径_37')],
    stroke: '#c0ffd7',
    easing: 'linear',
    duration: 500,
    delay: 0
  })
  anime({
    targets: monitorLeft.contentDocument.querySelector('#radial-gradient stop'),
    stopColor: "#ff9747"
  })
  anime({
    targets: monitorLeft.contentDocument.querySelector('#radial-gradient_1 stop'),
    stopColor: "#c0ffd7"
  })
}

function rightCanvasShow() {
  if (state1 == "licheng") {
    switch (midCanvasInt2 % 3) {
      case 0:
        anime({
          targets: rightCanvas1,
          translateY: 0,
          easing: 'linear',
          duration: 1000,
          delay: 0
        })
        break
      case 1:
        anime({
          targets: rightCanvas1,
          translateY: '110vh',
          easing: 'linear',
          duration: 1000,
          delay: 0
        })
        break
      case 2:
        anime({
          targets: rightCanvas1,
          translateY: '240vh',
          easing: 'linear',
          duration: 1000,
          delay: 0
        })
        break
    }
  } else if (state1 == "bumen") {
    switch (midCanvasInt3 % 3) {
      case 0:
        anime({
          targets: rightCanvas2,
          translateY: 0,
          easing: 'linear',
          duration: 1000,
          delay: 0
        })
        break
      case 1:
        anime({
          targets: rightCanvas2,
          translateY: '110vh',
          easing: 'linear',
          duration: 1000,
          delay: 0
        })
        break
      case 2:
        anime({
          targets: rightCanvas2,
          translateY: '240vh',
          easing: 'linear',
          duration: 1000,
          delay: 0
        })
        break
    }
  }
}