import anime from "animejs"

// let dict: { [key1: string]: { [key2: string]: number } } = {
//   blank: {
//     meigong: 1,
//     jishu: 2,
//     shiping: 3,
//   },
//   licheng: {
//     qi: 4,
//     cheng: 5,
//     zhuan: 6
//   },
//   bumen: {
//     meigong: 7,
//     jishu: 8,
//     shiping: 9,
//   }
// }
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
let midCanvas = monitorMid.contentDocument.querySelector('#内容')
let midUpBool: boolean = false
let midCanvasInt: number = 100000002 // js的取余数循环和正常人不一样我赌他不按一亿次
// FIXME 起程终的可选找时间去掉都检查一下
let leftLampUp = monitorLeft.contentDocument.querySelector('#光上')
let leftLampDown = monitorLeft.contentDocument.querySelector('#光下')
let leftMaskUp = document.querySelector('.left-lamp-up') as any
let leftMaskDown = document.querySelector('.left-lamp-down') as any

let rightCanvas = monitorRight.contentDocument.querySelector('#真_显示屏')
let rightFrameRight = monitorRight.contentDocument.querySelector('#右框架')

export async function monitor() {
  midLampControl()
  cursorPointer()
  midUp(midMaskMid)
  midUp(midMaskLeft)
  midUp(midMaskRight)
  midButtonReturn.addEventListener('click', monitorReturn)
  midButtonLeft.addEventListener('click', () => {
    midCanvasInt--
    midCanvasShow()
  })
  midButtonRight.addEventListener('click', () => {
    midCanvasInt++
    midCanvasShow()
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
  midMaskMid.addEventListener('mouseover', midLampMidRemoveOverLis)
  midMaskMid.addEventListener('mouseout', midLampMidRemoveOutLis)
}

function midLampMidRemoveOverLis() {
  midLampMid.querySelector('#光').style.opacity = '0.52'
  midLampMid.querySelector('#技_连接线').style.stroke = '#0AFFE6'
  midLampMid.querySelector('#技术部 path').style.stroke = '#0AFFE6'
  midLampMidLine.forEach((line: any) => {
    line.style.stroke = '#0AFFE6'
  });
}

function midLampMidRemoveOutLis() {
  midLampMid.querySelector('#光').style.opacity = '0'
  midLampMid.querySelector('#技_连接线').style.stroke = '#6e6e6e'
  midLampMid.querySelector('#技术部 path').style.stroke = '#6e6e6e'
  midLampMidLine.forEach((line: any) => {
    line.style.stroke = '#6e6e6e'
  });
}

function midLampLeftControl() {
  midLampLeft.querySelector('#光').style.transition = "opacity 0.5s";
  midLampLeft.querySelector('#美_连接线').style.transition = "stroke 0.5s";
  midLampLeft.querySelector('#美工部 line').style.transition = "stroke 0.5s";
  midLampLeft.querySelector('#美工部 path').style.transition = "stroke 0.5s";
  midLampLeft.querySelector('#美工部 circle').style.transition = "fill 0.5s";
  midMaskLeft.addEventListener('mouseover', midLampLeftRemoveOverLis)
  midMaskLeft.addEventListener('mouseout', midLampLeftRemoveOutLis)
}

function midLampLeftRemoveOverLis() {
  midLampLeft.querySelector('#光').style.opacity = '0.52'
  midLampLeft.querySelector('#美_连接线').style.stroke = '#74DDFF'
  midLampLeft.querySelector('#美工部 line').style.stroke = '#74DDFF'
  midLampLeft.querySelector('#美工部 path').style.stroke = '#74DDFF'
  midLampLeft.querySelector('#美工部 circle').style.fill = '#74DDFF'
}

function midLampLeftRemoveOutLis() {
  midLampLeft.querySelector('#光').style.opacity = '0'
  midLampLeft.querySelector('#美_连接线').style.stroke = '#6e6e6e'
  midLampLeft.querySelector('#美工部 line').style.stroke = '#6e6e6e'
  midLampLeft.querySelector('#美工部 path').style.stroke = '#6e6e6e'
  midLampLeft.querySelector('#美工部 circle').style.fill = '#6e6e6e'
}

function midLampRightControl() {
  midLampRight.querySelector('#光').style.transition = "opacity 0.5s";
  midLampRight.querySelector('#视_连接线').style.transition = "stroke 0.5s";
  midLampRightPath.forEach((path: any) => {
    path.style.transition = "stroke 0.5s";
  });
  midMaskRight.addEventListener('mouseover', midLampRightRemoveOverLis)
  midMaskRight.addEventListener('mouseout', midLampRightRemoveOutLis)
}

function midLampRightRemoveOverLis() {
  midLampRight.querySelector('#光').style.opacity = '0.52'
  midLampRight.querySelector('#视_连接线').style.stroke = '#B95FFF'
  midLampRightPath.forEach((path: any) => {
    path.style.stroke = '#B95FFF'
  });
}

function midLampRightRemoveOutLis() {
  midLampRight.querySelector('#光').style.opacity = '0'
  midLampRight.querySelector('#视_连接线').style.stroke = '#6e6e6e'
  midLampRightPath.forEach((path: any) => {
    path.style.stroke = '#6e6e6e'
  });
}

function midUp(el: any) {
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
      anime({
        targets: midCanvas,
        opacity: 1,
        duration: 1000,
        delay: 0
      })
      midUpBool = true
    }
  })
}

function midCanvasShow() {
  switch (midCanvasInt % 3) {
    case 0:
      anime({
        targets: midCanvas,
        translateY: 0,
      })
      break
    case 1:
      anime({
        targets: midCanvas,
        translateY: '21vh',
      })
      break
    case 2:
      anime({
        targets: midCanvas,
        translateY: '40vh',
      })
      break
  }
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
    leftLampUpCircle.forEach((circle: any) => {
      circle.style.opacity = '0'
    })
  })
  leftMaskUp.addEventListener('click', () => {
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
    midLampLeftRemoveOverLis()
    midMaskLeft.removeEventListener('mouseover', midLampLeftRemoveOverLis)
    midMaskLeft.removeEventListener('mouseout', midLampLeftRemoveOutLis)
  })
}
// 右边机器出来
function rightMonitorshow(el: any) {
  el.addEventListener('click', () => {
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
      targets: rightCanvas,
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

function monitorReturn() {
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
      targets: rightCanvas,
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
    midLampLeftRemoveOutLis()
    midMaskLeft.addEventListener('mouseover', midLampLeftRemoveOverLis)
    midMaskLeft.addEventListener('mouseout', midLampLeftRemoveOutLis)
    midUpBool = false
  }
}