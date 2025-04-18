import anime from "animejs"
import { changeEl } from "./changeEl"
import { cogsShow } from "./cogsshow"
import { handleClick } from "./isTouchDevice"

let monitorMid: any
let monitorLeft: any
let monitorRight: any
let midLampMid: any
let midLampLeft: any
let midLampRight: any
let midButtonReturn: any
let midButtonLeft: any
let midButtonRight: any
let midMaskMid: any
let midMaskLeft: any
let midMaskRight: any
let midLampMidLine: any
let midLampRightPath: any
let monitorMidTop: any
let monitorMidBottom: any
let midCanvas1: any
let midCanvas2: any
let midCanvas3: any
let leftLampUp: any
let leftLampDown: any
let leftMaskUp1: any
let leftMaskDown1: any
let leftMaskUp2: any
let leftMaskDown2: any
let leftMaskUp3: any
let leftMaskDown3: any
let rightCanvas2: any
let rightCanvas1: any
let rightFrameRight: any

let bgMask = document.querySelector('.bg-mask') as any

// 记录状态
let dict: { [key1: string]: any[] }
let midUpBool: boolean = false
let midButtonInitial: string
let midCanvasInt1: number = 120000000
let midCanvasInt2: number = 120000000
let midCanvasInt3: number = 120000000
let state1: string
let state2: any

export function monitor() {
  monitorMid = document.querySelector('.monitor-mid') as any
  monitorLeft = document.querySelector('.monitor-left') as any
  monitorRight = document.querySelector('.monitor-right') as any
  midLampMid = monitorMid.querySelector('#灯中中')
  midLampLeft = monitorMid.querySelector('#灯中左')
  midLampRight = monitorMid.querySelector('#灯中右')
  midButtonReturn = monitorMid.querySelector('#返回键')
  midButtonLeft = monitorMid.querySelector('#左按键')
  midButtonRight = monitorMid.querySelector('#右按键')
  midMaskMid = monitorMid.querySelectorAll('#光')[1] as any
  midMaskLeft = monitorMid.querySelectorAll('#光')[2] as any
  midMaskRight = monitorMid.querySelectorAll('#光')[0] as any
  midLampMidLine = midLampMid.querySelectorAll('#技术部 line')
  midLampRightPath = midLampRight.querySelectorAll('#视频部 path')
  monitorMidTop = monitorMid.querySelectorAll('.机器上')
  monitorMidBottom = monitorMid.querySelectorAll('.机器下')
  midCanvas1 = monitorMid.querySelector('#真_显示屏-1 #内容')
  midCanvas2 = monitorMid.querySelector('#真_显示屏-2 #内容')
  midCanvas3 = monitorMid.querySelector('#真_显示屏-3 #内容')
  leftLampUp = monitorLeft.querySelector('#光上')
  leftLampDown = monitorLeft.querySelector('#光下')
  leftMaskUp1 = monitorLeft.querySelector('#矩形_60')
  leftMaskDown1 = monitorLeft.querySelector('#矩形_61')
  leftMaskUp2 = leftLampUp.querySelector('#椭圆_19')
  leftMaskDown2 = leftLampDown.querySelector('#椭圆_19')
  leftMaskUp3 = leftLampUp.querySelector('#椭圆_20')
  leftMaskDown3 = leftLampDown.querySelector('#椭圆_20')
  rightCanvas2 = monitorRight.querySelector('#真_显示屏-1 #内容')
  rightCanvas1 = monitorRight.querySelector('#真_显示屏-2 #内容')
  rightFrameRight = monitorRight.querySelector('#右框架')
  dict = {
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
  rightCanvas1.style.opacity = '0'
  rightCanvas2.style.opacity = '0'
  midLampControl()
  cursorPointer()
  midButtonHover()
  midUp(midMaskMid)
  midUp(midMaskLeft)
  midUp(midMaskRight)
  midButtonReturn.addEventListener('click', monitorReturn)
  midButtonLeft.addEventListener('click', () => {
    midButtonInitial = 'left'
    if (state1 == "licheng") {
      midCanvasInt2--
    } else if (state1 == "bumen") {
      midCanvasInt3--
    } else {
      midCanvasInt1--
    }
    midCanvasShow()
    rightCanvasShow()
    cogsShow(state1, state2)
  })
  midButtonRight.addEventListener('click', () => {
    midButtonInitial = 'right'
    if (state1 == "licheng") {
      midCanvasInt2++
    } else if (state1 == "bumen") {
      midCanvasInt3++
    } else {
      midCanvasInt1++
    }
    midCanvasShow()
    rightCanvasShow()
    cogsShow(state1, state2)
  })
  leftLampControl()
  rightMonitorshow(leftMaskUp1)
  rightMonitorshow(leftMaskUp2)
  rightMonitorshow(leftMaskUp3)
  rightMonitorshow(leftMaskDown1)
  rightMonitorshow(leftMaskDown2)
  rightMonitorshow(leftMaskDown3)
}

function cursorPointer() {
  midButtonReturn.style.cursor = 'pointer'
  midButtonLeft.style.cursor = 'pointer'
  midButtonRight.style.cursor = 'pointer'
}

function midButtonHover() {
  midButtonReturn.style.transition = "opacity 300ms ease-out"
  midButtonReturn.querySelector('#返回键-2').style.transition = "opacity 300ms ease-out"
  midButtonReturn.querySelector('#返回').style.transition = "opacity 300ms ease-out"
  midButtonLeft.style.transition = "opacity 300ms ease-out"
  midButtonLeft.querySelector('#navigate-leftt').style.transition = "opacity 300ms ease-out"
  midButtonLeft.querySelector('#左按键-2').style.transition = "opacity 300ms ease-out"
  midButtonRight.style.transition = "opacity 300ms ease-out"
  midButtonRight.querySelector('#navigate-rightt').style.transition = "opacity 300ms ease-out"
  midButtonRight.querySelector('#右按键-2').style.transition = "opacity 300ms ease-out"
  midButtonReturn.addEventListener('mouseover', () => {
    midButtonReturn.style.stroke = '#7B6E63'
    midButtonReturn.querySelector('#返回键-2').style.stroke = '#7B6E63'
    midButtonReturn.querySelector('#返回键-2').style.fill = '#C3A886'
    midButtonReturn.querySelector('#返回').style.stroke = '#707070'
    midButtonReturn.querySelector('#返回').style.fill = '#FFEBE6'
  })
  midButtonReturn.addEventListener('mouseout', () => {
    midButtonReturn.style.stroke = '#A19082'
    midButtonReturn.querySelector('#返回键-2').style.stroke = '#A19082'
    midButtonReturn.querySelector('#返回键-2').style.fill = '#E3C49C'
    midButtonReturn.querySelector('#返回').style.stroke = '#707070'
    midButtonReturn.querySelector('#返回').style.fill = '#FF7958'
  })
  midButtonLeft.addEventListener('mouseover', () => {
    midButtonLeft.style.stroke = '#717A82'
    midButtonLeft.querySelector('#左按键-2').style.stroke = '#717A82'
    midButtonLeft.querySelector('#左按键-2').style.fill = '#A5AAAE'
    midButtonLeft.querySelector('#navigate-leftt').style.stroke = '#707070'
    midButtonLeft.querySelector('#navigate-leftt').style.fill = '#FFEBE6'
  })
  midButtonLeft.addEventListener('mouseout', () => {
    midButtonLeft.style.stroke = '#94A0AB'
    midButtonLeft.querySelector('#左按键-2').style.stroke = '#94A0AB'
    midButtonLeft.querySelector('#左按键-2').style.fill = '#CAD0D4'
    midButtonLeft.querySelector('#navigate-leftt').style.stroke = '#707070'
    midButtonLeft.querySelector('#navigate-leftt').style.fill = '#FF7958'
  })
  midButtonRight.addEventListener('mouseover', () => {
    midButtonRight.style.stroke = '#717A82'
    midButtonRight.querySelector('#右按键-2').style.stroke = '#717A82'
    midButtonRight.querySelector('#右按键-2').style.fill = '#A5AAAE'
    midButtonRight.querySelector('#navigate-rightt').style.stroke = '#707070'
    midButtonRight.querySelector('#navigate-rightt').style.fill = '#FFEBE6'
  })
  midButtonRight.addEventListener('mouseout', () => {
    midButtonRight.style.stroke = '#94A0AB'
    midButtonRight.querySelector('#右按键-2').style.stroke = '#94A0AB'
    midButtonRight.querySelector('#右按键-2').style.fill = '#CAD0D4'
    midButtonRight.querySelector('#navigate-rightt').style.stroke = '#707070'
    midButtonRight.querySelector('#navigate-rightt').style.fill = '#FF7958'
  })
}

function midLampControl() {
  midLampMidControl()
  midLampLeftControl()
  midLampRightControl()
}

function midLampMidControl() {
  midLampMid.querySelector('#光').style.transition = "opacity 300ms ease-out"
  midLampMid.querySelector('#技_连接线').style.transition = "stroke 300ms ease-out"
  midLampMid.querySelector('#技术部 path').style.transition = "stroke 300ms ease-out"
  midLampMidLine.forEach((line: any) => {
    line.style.transition = "stroke 300ms ease-out"
  })
  midLampMid.querySelector('#承').style.transition = "fill 300ms ease-out"
  midLampMid.querySelector('#承_连接线').style.transition = "stroke 300ms ease-out"
  midMaskMid.addEventListener('mouseover', midLampMidRemoveOverLis1)
  midMaskMid.addEventListener('mouseout', midLampMidRemoveOutLis1)
}

function midLampMidRemoveOverLis1() {
  midLampMid.insertBefore(midLampMid.querySelector('#承'), midLampMid.querySelector('#技术部'))
  midLampMid.querySelector('#光').style.opacity = '0.52'
  midLampMid.querySelector('#技_连接线').style.stroke = '#0AFFE6'
  midLampMid.querySelector('#技术部 path').style.stroke = '#0AFFE6'
  midLampMidLine.forEach((line: any) => {
    line.style.stroke = '#0AFFE6'
  })
}

function midLampMidRemoveOutLis1() {
  midLampMid.insertBefore(midLampMid.querySelector('#承'), midLampMid.querySelector('#技术部'))
  midLampMid.querySelector('#光').style.opacity = '0'
  midLampMid.querySelector('#技_连接线').style.stroke = '#6e6e6e'
  midLampMid.querySelector('#技术部 path').style.stroke = '#6e6e6e'
  midLampMidLine.forEach((line: any) => {
    line.style.stroke = '#6e6e6e'
  })
}
function midLampMidRemoveOverLis12() {
  midLampMid.insertBefore(midLampMid.querySelector('#承'), midLampMid.querySelector('#技术部'))
  midLampMid.querySelector('#技_连接线').style.stroke = '#0AFFE6'
  midLampMid.querySelector('#技术部 path').style.stroke = '#0AFFE6'
  midLampMidLine.forEach((line: any) => {
    line.style.stroke = '#0AFFE6'
  })
}

function midLampMidRemoveOutLis12() {
  midLampMid.insertBefore(midLampMid.querySelector('#承'), midLampMid.querySelector('#技术部'))
  midLampMid.querySelector('#技_连接线').style.stroke = '#6e6e6e'
  midLampMid.querySelector('#技术部 path').style.stroke = '#6e6e6e'
  midLampMidLine.forEach((line: any) => {
    line.style.stroke = '#6e6e6e'
  })
}

function midLampMidRemoveOverLis2() {
  midLampMid.insertBefore(midLampMid.querySelector('#技术部'), midLampMid.querySelector('#承'))
  midLampMid.querySelector('#光').style.opacity = '0.52'
  midLampMid.querySelector('#承').style.fill = '#0AFFE6'
  midLampMid.querySelector('#承_连接线').style.stroke = '#0AFFE6'
}

function midLampMidRemoveOutLis2() {
  midLampMid.insertBefore(midLampMid.querySelector('#技术部'), midLampMid.querySelector('#承'))
  midLampMid.querySelector('#光').style.opacity = '0'
  midLampMid.querySelector('#承').style.fill = '#6E6E6E'
  midLampMid.querySelector('#承_连接线').style.stroke = '#6E6E6E'
}

function midLampMidRemoveOverLis22() {
  midLampMid.insertBefore(midLampMid.querySelector('#技术部'), midLampMid.querySelector('#承'))
  midLampMid.querySelector('#承').style.fill = '#0AFFE6'
  midLampMid.querySelector('#承_连接线').style.stroke = '#0AFFE6'
}

function midLampMidRemoveOutLis22() {
  midLampMid.insertBefore(midLampMid.querySelector('#技术部'), midLampMid.querySelector('#承'))
  midLampMid.querySelector('#承').style.fill = '#6E6E6E'
  midLampMid.querySelector('#承_连接线').style.stroke = '#6E6E6E'
}

function midLampLeftControl() {
  midLampLeft.querySelector('#光').style.transition = "opacity 300ms ease-out"
  midLampLeft.querySelector('#美_连接线').style.transition = "stroke 300ms ease-out"
  midLampLeft.querySelector('#美工部 line').style.transition = "stroke 300ms ease-out"
  midLampLeft.querySelector('#美工部 path').style.transition = "stroke 300ms ease-out"
  midLampLeft.querySelector('#美工部 circle').style.transition = "fill 300ms ease-out"
  midLampLeft.querySelector('#起').style.transition = "fill 300ms ease-out"
  midLampLeft.querySelector('#起_连接线').style.transition = "stroke 300ms ease-out"
  midMaskLeft.addEventListener('mouseover', midLampLeftRemoveOverLis1)
  midMaskLeft.addEventListener('mouseout', midLampLeftRemoveOutLis1)
}

function midLampLeftRemoveOverLis1() {
  midLampLeft.insertBefore(midLampLeft.querySelector('#起'), midLampLeft.querySelector('#美工部'))
  midLampLeft.querySelector('#光').style.opacity = '0.52'
  midLampLeft.querySelector('#美_连接线').style.stroke = '#74DDFF'
  midLampLeft.querySelector('#美工部 line').style.stroke = '#74DDFF'
  midLampLeft.querySelector('#美工部 path').style.stroke = '#74DDFF'
  midLampLeft.querySelector('#美工部 circle').style.fill = '#74DDFF'
}

function midLampLeftRemoveOutLis1() {
  midLampLeft.insertBefore(midLampLeft.querySelector('#起'), midLampLeft.querySelector('#美工部'))
  midLampLeft.querySelector('#光').style.opacity = '0'
  midLampLeft.querySelector('#美_连接线').style.stroke = '#6e6e6e'
  midLampLeft.querySelector('#美工部 line').style.stroke = '#6e6e6e'
  midLampLeft.querySelector('#美工部 path').style.stroke = '#6e6e6e'
  midLampLeft.querySelector('#美工部 circle').style.fill = '#6e6e6e'
}
function midLampLeftRemoveOverLis12() {
  midLampLeft.insertBefore(midLampLeft.querySelector('#起'), midLampLeft.querySelector('#美工部'))
  midLampLeft.querySelector('#美_连接线').style.stroke = '#74DDFF'
  midLampLeft.querySelector('#美工部 line').style.stroke = '#74DDFF'
  midLampLeft.querySelector('#美工部 path').style.stroke = '#74DDFF'
  midLampLeft.querySelector('#美工部 circle').style.fill = '#74DDFF'
}

function midLampLeftRemoveOutLis12() {
  midLampLeft.insertBefore(midLampLeft.querySelector('#起'), midLampLeft.querySelector('#美工部'))
  midLampLeft.querySelector('#美_连接线').style.stroke = '#6e6e6e'
  midLampLeft.querySelector('#美工部 line').style.stroke = '#6e6e6e'
  midLampLeft.querySelector('#美工部 path').style.stroke = '#6e6e6e'
  midLampLeft.querySelector('#美工部 circle').style.fill = '#6e6e6e'
}

function midLampLeftRemoveOverLis2() {
  midLampLeft.insertBefore(midLampLeft.querySelector('#美工部'), midLampLeft.querySelector('#起'))
  midLampLeft.querySelector('#光').style.opacity = '0.52'
  midLampLeft.querySelector('#起').style.fill = '#74DDFF'
  midLampLeft.querySelector('#起_连接线').style.stroke = '#74DDFF'
}

function midLampLeftRemoveOutLis2() {
  midLampLeft.insertBefore(midLampLeft.querySelector('#美工部'), midLampLeft.querySelector('#起'))
  midLampLeft.querySelector('#光').style.opacity = '0'
  midLampLeft.querySelector('#起').style.fill = '#6E6E6E'
  midLampLeft.querySelector('#起_连接线').style.stroke = '#6E6E6E'
}

function midLampLeftRemoveOverLis22() {
  midLampLeft.insertBefore(midLampLeft.querySelector('#美工部'), midLampLeft.querySelector('#起'))
  midLampLeft.querySelector('#起').style.fill = '#74DDFF'
  midLampLeft.querySelector('#起_连接线').style.stroke = '#74DDFF'
}

function midLampLeftRemoveOutLis22() {
  midLampLeft.insertBefore(midLampLeft.querySelector('#美工部'), midLampLeft.querySelector('#起'))
  midLampLeft.querySelector('#起').style.fill = '#6E6E6E'
  midLampLeft.querySelector('#起_连接线').style.stroke = '#6E6E6E'
}

function midLampRightControl() {
  midLampRight.querySelector('#光').style.transition = "opacity 300ms ease-out"
  midLampRight.querySelector('#视_连接线').style.transition = "stroke 300ms ease-out"
  midLampRightPath.forEach((path: any) => {
    path.style.transition = "stroke 300ms ease-out"
  })
  midLampRight.querySelector('#终').style.transition = "fill 300ms ease-out"
  midLampRight.querySelector('#终_连接线').style.transition = "stroke 300ms ease-out"
  midMaskRight.addEventListener('mouseover', midLampRightRemoveOverLis1)
  midMaskRight.addEventListener('mouseout', midLampRightRemoveOutLis1)
}

function midLampRightRemoveOverLis1() {
  midLampRight.insertBefore(midLampRight.querySelector('#终'), midLampRight.querySelector('#视频部'))
  midLampRight.querySelector('#光').style.opacity = '0.52'
  midLampRight.querySelector('#视_连接线').style.stroke = '#B95FFF'
  midLampRightPath.forEach((path: any) => {
    path.style.stroke = '#B95FFF'
  })
}

function midLampRightRemoveOutLis1() {
  midLampRight.insertBefore(midLampRight.querySelector('#终'), midLampRight.querySelector('#视频部'))
  midLampRight.querySelector('#光').style.opacity = '0'
  midLampRight.querySelector('#视_连接线').style.stroke = '#6e6e6e'
  midLampRightPath.forEach((path: any) => {
    path.style.stroke = '#6e6e6e'
  })
}

function midLampRightRemoveOverLis12() {
  midLampRight.insertBefore(midLampRight.querySelector('#终'), midLampRight.querySelector('#视频部'))
  midLampRight.querySelector('#视_连接线').style.stroke = '#B95FFF'
  midLampRightPath.forEach((path: any) => {
    path.style.stroke = '#B95FFF'
  })
}

function midLampRightRemoveOutLis12() {
  midLampRight.insertBefore(midLampRight.querySelector('#终'), midLampRight.querySelector('#视频部'))
  midLampRight.querySelector('#视_连接线').style.stroke = '#6e6e6e'
  midLampRightPath.forEach((path: any) => {
    path.style.stroke = '#6e6e6e'
  })
}

function midLampRightRemoveOverLis2() {
  midLampRight.insertBefore(midLampRight.querySelector('#视频部'), midLampRight.querySelector('#终'))
  midLampRight.querySelector('#光').style.opacity = '0.52'
  midLampRight.querySelector('#终').style.fill = '#B95FFF'
  midLampRight.querySelector('#终_连接线').style.stroke = '#B95FFF'
}

function midLampRightRemoveOutLis2() {
  midLampRight.insertBefore(midLampRight.querySelector('#视频部'), midLampRight.querySelector('#终'))
  midLampRight.querySelector('#光').style.opacity = '0'
  midLampRight.querySelector('#终').style.fill = '#6E6E6E'
  midLampRight.querySelector('#终_连接线').style.stroke = '#6E6E6E'
}

function midLampRightRemoveOverLis22() {
  midLampRight.insertBefore(midLampRight.querySelector('#视频部'), midLampRight.querySelector('#终'))
  midLampRight.querySelector('#终').style.fill = '#B95FFF'
  midLampRight.querySelector('#终_连接线').style.stroke = '#B95FFF'
}

function midLampRightRemoveOutLis22() {
  midLampRight.insertBefore(midLampRight.querySelector('#视频部'), midLampRight.querySelector('#终'))
  midLampRight.querySelector('#终').style.fill = '#6E6E6E'
  midLampRight.querySelector('#终_连接线').style.stroke = '#6E6E6E'
}

function midUp(el: any) {
  midCanvas1.style.opacity = "0"
  midCanvas2.style.opacity = "1"
  midCanvas3.style.opacity = "0"
  handleClick(el, () => {
    bgMask.style.background = 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.92) 66%, transparent)'
    if (!midUpBool) {
      anime({
        targets: monitorMid,
        translateY: '-23vw',
        easing: 'easeOutCubic',
        duration: 1200,
        delay: 0
      })
      anime({
        targets: monitorLeft,
        translateX: '17.5vw',
        easing: 'easeOutCubic',
        duration: 1200,
        delay: 0
      })
      anime({
        targets: [document.querySelectorAll('.intro'), document.querySelectorAll('.bottom-arrow')[1]],
        opacity: 0,
        easing: 'easeOutCubic',
        duration: 1200,
        delay: 0
      })
      changeEl(midCanvas1, 'easeOutCubic')
      midUpBool = true
    }
  })
  el.addEventListener('touchend', () => {
    bgMask.style.background = 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.92) 66%, transparent)'
    if (!midUpBool) {
      anime({
        targets: monitorMid,
        translateY: '-23vw',
        easing: 'easeOutCubic',
        duration: 1200,
        delay: 0
      })
      anime({
        targets: monitorLeft,
        translateX: '17.5vw',
        easing: 'easeOutCubic',
        duration: 1200,
        delay: 0
      })
      anime({
        targets: [document.querySelectorAll('.intro'), document.querySelectorAll('.bottom-arrow')[1]],
        opacity: 0,
        easing: 'easeOutCubic',
        duration: 1200,
        delay: 0
      })
      changeEl(midCanvas1, 'easeOutCubic')
      midUpBool = true
    }
  })
}

function midCanvasShow() {
  if (state1 == "bumen") {
    switch (midCanvasInt3 % 3) {
      case 0:
        state2 = midMaskLeft
        anime({
          targets: midCanvas3,
          transform: "translate(0 3)",
          easing: 'easeInOutCubic',
          duration: 1200,
          delay: 0
        })
        break
      case 1:
        state2 = midMaskMid
        anime({
          targets: midCanvas3,
          transform: "translate(0 168)",
          easing: 'easeInOutCubic',
          duration: 1200,
          delay: 0
        })
        break
      case 2:
        state2 = midMaskRight
        anime({
          targets: midCanvas3,
          transform: "translate(0 332)",
          easing: 'easeInOutCubic',
          duration: 1200,
          delay: 0
        })
        break
    }
  } else if (state1 == "licheng") {
    switch (midCanvasInt2 % 3) {
      case 0:
        state2 = midMaskLeft
        anime({
          targets: midCanvas2,
          transform: "translate(0 7)",
          easing: 'easeInOutCubic',
          duration: 1200,
          delay: 0
        })
        break
      case 1:
        state2 = midMaskMid
        anime({
          targets: midCanvas2,
          transform: "translate(0 138)",
          easing: 'easeInOutCubic',
          duration: 1200,
          delay: 0
        })
        break
      case 2:
        state2 = midMaskRight
        anime({
          targets: midCanvas2,
          transform: "translate(0 312)",
          easing: 'easeInOutCubic',
          duration: 1200,
          delay: 0
        })
        break
    }
  } else {
    switch (midCanvasInt1 % 3) {
      case 0:
        anime({
          targets: midCanvas1,
          transform: "translate(0 5)",
          easing: 'easeInOutCubic',
          duration: 800,
          delay: 0
        })
        break
      case 1:
        anime({
          targets: midCanvas1,
          transform: "translate(0 168)",
          easing: 'easeInOutCubic',
          duration: 800,
          delay: 0
        })
        break
      case 2:
        anime({
          targets: midCanvas1,
          transform: "translate(0 329)",
          easing: 'easeInOutCubic',
          duration: 800,
          delay: 0
        })
        break
    }
  }
  showLampCanvasThen(undefined)
  rightCanvasShow()
  cogsShow(state1, state2)
}

function leftLampControl() {
  leftLampUpControl()
  leftLampDownControl()
}

function leftLampUpControl() {
  let leftLampUpCircle = leftLampUp.querySelectorAll('circle')
  leftLampUpCircle.forEach((circle: any) => {
    circle.style.transition = "opacity 300ms ease-out"
  })
  leftMaskUp1.addEventListener('mouseover', () => {
    leftLampUpCircle.forEach((circle: any) => {
      circle.style.opacity = '1'
    })
  })
  leftMaskUp1.addEventListener('mouseout', () => {
    leftLampUpCircle.forEach((circle: any) => {
      circle.style.opacity = '0'
    })
  })
  handleClick(leftMaskUp1, () => {
    if (state2 == undefined) {
      changeEl(midCanvas2, 'easeOutCubic')
    } else {
      changeEl(midCanvas2, 'easeInOutCubic')
    }
    leftLampUpCircle.forEach((circle: any) => {
      circle.style.opacity = '0'
    })
    anime({
      targets: leftLampUp.querySelector('#历_程-3'),
      fill: '#F99360',
      easing: 'easeInOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: monitorLeft.querySelector('#历_程-2'),
      fill: '#F44D33',
      easing: 'easeInOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: [Array.prototype.slice.call(monitorLeft.querySelectorAll('#组_25 path')), monitorLeft.querySelector('#路径_37')],
      fill: '#F99360',
      stroke: '#F99360',
      easing: 'easeInOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: leftLampDown.querySelector('#部_门-3'),
      fill: '#c0ffd7',
      easing: 'easeInOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: monitorLeft.querySelector('#部_门'),
      fill: '#91F8B6',
      easing: 'easeInOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: [Array.prototype.slice.call(monitorLeft.querySelectorAll('#组_20 path')), monitorLeft.querySelector('#路径_38')],
      fill: '#c0ffd7',
      stroke: '#c0ffd7',
      easing: 'easeInOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: monitorLeft.querySelector('#radial-gradient_1-left stop'),
      stopColor: "#ff9747",
      easing: 'easeInOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: monitorLeft.querySelector('#radial-gradient-left stop'),
      stopColor: "#c0ffd7",
      easing: 'easeInOutCubic',
      duration: 1200,
      delay: 0
    })
    state1 = 'licheng'
    state2 = midMaskLeft
    midCanvasInt2 = 120000000
    midCanvasShow()
    rightCanvasShow()
  })
  leftMaskUp2.addEventListener('mouseover', () => {
    leftLampUpCircle.forEach((circle: any) => {
      circle.style.opacity = '1'
    })
  })
  leftMaskUp2.addEventListener('mouseout', () => {
    leftLampUpCircle.forEach((circle: any) => {
      circle.style.opacity = '0'
    })
  })
  handleClick(leftMaskUp2, () => {
    if (state2 == undefined) {
      changeEl(midCanvas2, 'easeOutCubic')
    } else {
      changeEl(midCanvas2, 'easeInOutCubic')
    }
    leftLampUpCircle.forEach((circle: any) => {
      circle.style.opacity = '0'
    })
    anime({
      targets: leftLampUp.querySelector('#历_程-3'),
      fill: '#F99360',
      easing: 'easeInOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: monitorLeft.querySelector('#历_程-2'),
      fill: '#F44D33',
      easing: 'easeInOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: [Array.prototype.slice.call(monitorLeft.querySelectorAll('#组_25 path')), monitorLeft.querySelector('#路径_37')],
      fill: '#F99360',
      stroke: '#F99360',
      easing: 'easeInOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: leftLampDown.querySelector('#部_门-3'),
      fill: '#c0ffd7',
      easing: 'easeInOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: monitorLeft.querySelector('#部_门'),
      fill: '#91F8B6',
      easing: 'easeInOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: [Array.prototype.slice.call(monitorLeft.querySelectorAll('#组_20 path')), monitorLeft.querySelector('#路径_38')],
      fill: '#c0ffd7',
      stroke: '#c0ffd7',
      easing: 'easeInOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: monitorLeft.querySelector('#radial-gradient_1-left stop'),
      stopColor: "#ff9747",
      easing: 'easeInOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: monitorLeft.querySelector('#radial-gradient-left stop'),
      stopColor: "#c0ffd7",
      easing: 'easeInOutCubic',
      duration: 1200,
      delay: 0
    })
    state1 = 'licheng'
    state2 = midMaskLeft
    midCanvasInt2 = 120000000
    midCanvasShow()
    rightCanvasShow()
  })
  leftMaskUp3.addEventListener('mouseover', () => {
    leftLampUpCircle.forEach((circle: any) => {
      circle.style.opacity = '1'
    })
  })
  leftMaskUp3.addEventListener('mouseout', () => {
    leftLampUpCircle.forEach((circle: any) => {
      circle.style.opacity = '0'
    })
  })
  handleClick(leftMaskUp3, () => {
    if (state2 == undefined) {
      changeEl(midCanvas2, 'easeOutCubic')
    } else {
      changeEl(midCanvas2, 'easeInOutCubic')
    }
    leftLampUpCircle.forEach((circle: any) => {
      circle.style.opacity = '0'
    })
    anime({
      targets: leftLampUp.querySelector('#历_程-3'),
      fill: '#F99360',
      easing: 'easeInOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: monitorLeft.querySelector('#历_程-2'),
      fill: '#F44D33',
      easing: 'easeInOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: [Array.prototype.slice.call(monitorLeft.querySelectorAll('#组_25 path')), monitorLeft.querySelector('#路径_37')],
      fill: '#F99360',
      stroke: '#F99360',
      easing: 'easeInOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: leftLampDown.querySelector('#部_门-3'),
      fill: '#c0ffd7',
      easing: 'easeInOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: monitorLeft.querySelector('#部_门'),
      fill: '#91F8B6',
      easing: 'easeInOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: [Array.prototype.slice.call(monitorLeft.querySelectorAll('#组_20 path')), monitorLeft.querySelector('#路径_38')],
      fill: '#c0ffd7',
      stroke: '#c0ffd7',
      easing: 'easeInOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: monitorLeft.querySelector('#radial-gradient_1-left stop'),
      stopColor: "#ff9747",
      easing: 'easeInOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: monitorLeft.querySelector('#radial-gradient-left stop'),
      stopColor: "#c0ffd7",
      easing: 'easeInOutCubic',
      duration: 1200,
      delay: 0
    })
    state1 = 'licheng'
    state2 = midMaskLeft
    midCanvasInt2 = 120000000
    midCanvasShow()
    rightCanvasShow()
  })
}

function leftLampDownControl() {
  let leftLampDownCircle = leftLampDown.querySelectorAll('circle')
  leftLampDownCircle.forEach((circle: any) => {
    circle.style.transition = "opacity 300ms ease-out"
  })
  leftMaskDown1.addEventListener('mouseover', () => {
    leftLampDownCircle.forEach((circle: any) => {
      circle.style.opacity = '1'
    })
  })
  leftMaskDown1.addEventListener('mouseout', () => {
    leftLampDownCircle.forEach((circle: any) => {
      circle.style.opacity = '0'
    })
  })
  handleClick(leftMaskDown1, () => {
    if (state2 == undefined) {
      changeEl(midCanvas3, 'easeOutCubic')
    } else {
      changeEl(midCanvas3, 'easeInOutCubic')
    }
    anime({
      targets: leftLampDown.querySelector('#部_门-3'),
      fill: '#F99360',
      easing: 'easeInOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: monitorLeft.querySelector('#部_门'),
      fill: '#F44D33',
      easing: 'easeInOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: [Array.prototype.slice.call(monitorLeft.querySelectorAll('#组_20 path')), monitorLeft.querySelector('#路径_38')],
      fill: '#F99360',
      stroke: '#F99360',
      easing: 'easeInOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: leftLampUp.querySelector('#历_程-3'),
      fill: '#c0ffd7',
      easing: 'easeInOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: monitorLeft.querySelector('#历_程-2'),
      fill: '#91F8B6',
      easing: 'easeInOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: [Array.prototype.slice.call(monitorLeft.querySelectorAll('#组_25 path')), monitorLeft.querySelector('#路径_37')],
      fill: '#c0ffd7',
      stroke: '#c0ffd7',
      easing: 'easeInOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: monitorLeft.querySelector('#radial-gradient-left stop'),
      stopColor: "#ff9747",
      easing: 'easeInOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: monitorLeft.querySelector('#radial-gradient_1-left stop'),
      stopColor: "#c0ffd7",
      easing: 'easeInOutCubic',
      duration: 1200,
      delay: 0
    })
    midLampLeftRemoveOverLis1()
    midMaskLeft.removeEventListener('mouseover', midLampLeftRemoveOverLis1)
    midMaskLeft.removeEventListener('mouseout', midLampLeftRemoveOutLis1)
    state1 = 'bumen'
    state2 = midMaskLeft
    midCanvasInt3 = 120000000
    midCanvasShow()
    rightCanvasShow()
  })
  leftMaskDown2.addEventListener('mouseover', () => {
    leftLampDownCircle.forEach((circle: any) => {
      circle.style.opacity = '1'
    })
  })
  leftMaskDown2.addEventListener('mouseout', () => {
    leftLampDownCircle.forEach((circle: any) => {
      circle.style.opacity = '0'
    })
  })
  handleClick(leftMaskDown2, () => {
    if (state2 == undefined) {
      changeEl(midCanvas3, 'easeOutCubic')
    } else {
      changeEl(midCanvas3, 'easeInOutCubic')
    }
    anime({
      targets: leftLampDown.querySelector('#部_门-3'),
      fill: '#F99360',
      easing: 'easeInOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: monitorLeft.querySelector('#部_门'),
      fill: '#F44D33',
      easing: 'easeInOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: [Array.prototype.slice.call(monitorLeft.querySelectorAll('#组_20 path')), monitorLeft.querySelector('#路径_38')],
      fill: '#F99360',
      stroke: '#F99360',
      easing: 'easeInOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: leftLampUp.querySelector('#历_程-3'),
      fill: '#c0ffd7',
      easing: 'easeInOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: monitorLeft.querySelector('#历_程-2'),
      fill: '#91F8B6',
      easing: 'easeInOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: [Array.prototype.slice.call(monitorLeft.querySelectorAll('#组_25 path')), monitorLeft.querySelector('#路径_37')],
      fill: '#c0ffd7',
      stroke: '#c0ffd7',
      easing: 'easeInOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: monitorLeft.querySelector('#radial-gradient-left stop'),
      stopColor: "#ff9747",
      easing: 'easeInOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: monitorLeft.querySelector('#radial-gradient_1-left stop'),
      stopColor: "#c0ffd7",
      easing: 'easeInOutCubic',
      duration: 1200,
      delay: 0
    })
    midLampLeftRemoveOverLis1()
    midMaskLeft.removeEventListener('mouseover', midLampLeftRemoveOverLis1)
    midMaskLeft.removeEventListener('mouseout', midLampLeftRemoveOutLis1)
    state1 = 'bumen'
    state2 = midMaskLeft
    midCanvasInt3 = 120000000
    midCanvasShow()
    rightCanvasShow()
  })
  leftMaskDown3.addEventListener('mouseover', () => {
    leftLampDownCircle.forEach((circle: any) => {
      circle.style.opacity = '1'
    })
  })
  leftMaskDown3.addEventListener('mouseout', () => {
    leftLampDownCircle.forEach((circle: any) => {
      circle.style.opacity = '0'
    })
  })
  handleClick(leftMaskDown3, () => {
    if (state2 == undefined) {
      changeEl(midCanvas3, 'easeOutCubic')
    } else {
      changeEl(midCanvas3, 'easeInOutCubic')
    }
    anime({
      targets: leftLampDown.querySelector('#部_门-3'),
      fill: '#F99360',
      easing: 'easeInOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: monitorLeft.querySelector('#部_门'),
      fill: '#F44D33',
      easing: 'easeInOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: [Array.prototype.slice.call(monitorLeft.querySelectorAll('#组_20 path')), monitorLeft.querySelector('#路径_38')],
      fill: '#F99360',
      stroke: '#F99360',
      easing: 'easeInOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: leftLampUp.querySelector('#历_程-3'),
      fill: '#c0ffd7',
      easing: 'easeInOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: monitorLeft.querySelector('#历_程-2'),
      fill: '#91F8B6',
      easing: 'easeInOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: [Array.prototype.slice.call(monitorLeft.querySelectorAll('#组_25 path')), monitorLeft.querySelector('#路径_37')],
      fill: '#c0ffd7',
      stroke: '#c0ffd7',
      easing: 'easeInOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: monitorLeft.querySelector('#radial-gradient-left stop'),
      stopColor: "#ff9747",
      easing: 'easeInOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: monitorLeft.querySelector('#radial-gradient_1-left stop'),
      stopColor: "#c0ffd7",
      easing: 'easeInOutCubic',
      duration: 1200,
      delay: 0
    })
    midLampLeftRemoveOverLis1()
    midMaskLeft.removeEventListener('mouseover', midLampLeftRemoveOverLis1)
    midMaskLeft.removeEventListener('mouseout', midLampLeftRemoveOutLis1)
    state1 = 'bumen'
    state2 = midMaskLeft
    midCanvasInt3 = 120000000
    midCanvasShow()
    rightCanvasShow()
  })
}
// 右边机器出来
function rightMonitorshow(el: any) {
  handleClick(el, () => {
    anime({
      targets: monitorMidTop[0],
      transform: "translate(0 -50)",
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: [monitorMidBottom[0], monitorMidBottom[1], monitorMidBottom[2], monitorMidBottom[3]],
      transform: "translate(0 40)",
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
    if (el == leftMaskUp1 || el == leftMaskUp2 || el == leftMaskUp3) {
      anime({
        targets: rightCanvas1,
        opacity: 0.95,
        easing: 'easeOutCubic',
        duration: 1200,
        delay: 0
      })
      anime({
        targets: rightCanvas2,
        opacity: 0,
        easing: 'easeOutCubic',
        duration: 1200,
        delay: 0
      })
    }
    else if (el == leftMaskDown1 || el == leftMaskDown2 || el == leftMaskDown3) {
      anime({
        targets: rightCanvas1,
        opacity: 0,
        easing: 'easeOutCubic',
        duration: 1200,
        delay: 0
      })
      anime({
        targets: rightCanvas2,
        opacity: 0.95,
        easing: 'easeOutCubic',
        duration: 1200,
        delay: 0
      })
    }
    switch (el) {
      case leftMaskUp1:
        state1 = "licheng"
        state2 = midMaskLeft
        break
      case leftMaskUp2:
        state1 = "licheng"
        state2 = midMaskLeft
        break
      case leftMaskUp3:
        state1 = "licheng"
        state2 = midMaskLeft
        break
      case leftMaskDown1:
        state1 = "bumen"
        state2 = midMaskLeft
        break
      case leftMaskDown2:
        state1 = "bumen"
        state2 = midMaskLeft
        break
      case leftMaskDown3:
        state1 = "bumen"
        state2 = midMaskLeft
        break
    }
    showLampCanvas()
    cogsShow(state1, state2)
    anime({
      targets: monitorMid,
      translateY: '-27vw',
      translateX: '-8vw',
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
    if (el == leftMaskUp1 || el == leftMaskUp2 || el == leftMaskUp3) {
      anime({
        targets: monitorLeft,
        translateX: '13.5vw',
        easing: 'easeOutCubic',
        duration: 1200,
        delay: 0
      })
    } else if (el == leftMaskDown1 || el == leftMaskDown2 || el == leftMaskDown3) {
      anime({
        targets: monitorLeft,
        translateX: '13vw',
        easing: 'easeOutCubic',
        duration: 1200,
        delay: 0
      })
    }
    anime({
      targets: monitorRight,
      translateX: '-31vw',
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: [monitorRight.querySelector('#真_显示屏-1'), monitorRight.querySelector('#真_显示屏-2')],
      transform: "translate(10.067 11.867)",
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: rightFrameRight,
      translateX: '1.5vw',
      easing: 'easeOutCubic',
      duration: 1200,
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
    rightCanvasShow()
    cogsShow(state1, state2)
  } else {
    if (midButtonInitial == 'right') {
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
    if (midButtonInitial == 'left') {
      switch (state2) {
        case midMaskLeft:
          state2Initial = midMaskMid
          break
        case midMaskMid:
          state2Initial = midMaskRight
          break
        case midMaskRight:
          state2Initial = midMaskLeft
          break
      }
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
export function monitorReturn() {
  dict = {
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
  monitorMid = document.querySelector('.monitor-mid') as any
  monitorLeft = document.querySelector('.monitor-left') as any
  monitorRight = document.querySelector('.monitor-right') as any
  midLampMid = monitorMid.querySelector('#灯中中')
  midLampLeft = monitorMid.querySelector('#灯中左')
  midLampRight = monitorMid.querySelector('#灯中右')
  midButtonReturn = monitorMid.querySelector('#返回键')
  midButtonLeft = monitorMid.querySelector('#左按键')
  midButtonRight = monitorMid.querySelector('#右按键')
  midMaskMid = monitorMid.querySelectorAll('#光')[1] as any
  midMaskLeft = monitorMid.querySelectorAll('#光')[2] as any
  midMaskRight = monitorMid.querySelectorAll('#光')[0] as any
  midLampMidLine = midLampMid.querySelectorAll('#技术部 line')
  midLampRightPath = midLampRight.querySelectorAll('#视频部 path')
  monitorMidTop = monitorMid.querySelectorAll('.机器上')
  monitorMidBottom = monitorMid.querySelectorAll('.机器下')
  midCanvas1 = monitorMid.querySelector('#真_显示屏-1 #内容')
  midCanvas2 = monitorMid.querySelector('#真_显示屏-2 #内容')
  midCanvas3 = monitorMid.querySelector('#真_显示屏-3 #内容')
  leftLampUp = monitorLeft.querySelector('#光上')
  leftLampDown = monitorLeft.querySelector('#光下')
  leftMaskUp1 = monitorLeft.querySelector('#矩形_60')
  leftMaskDown1 = monitorLeft.querySelector('#矩形_61')
  leftMaskUp2 = leftLampUp.querySelector('#椭圆_19')
  leftMaskDown2 = leftLampDown.querySelector('#椭圆_19')
  leftMaskUp3 = leftLampUp.querySelector('#椭圆_20')
  leftMaskDown3 = leftLampDown.querySelector('#椭圆_20')
  rightCanvas2 = monitorRight.querySelector('#真_显示屏-1 #内容')
  rightCanvas1 = monitorRight.querySelector('#真_显示屏-2 #内容')
  rightFrameRight = monitorRight.querySelector('#右框架')
  rightCanvas1.style.opacity = '0'
  rightCanvas2.style.opacity = '0'
  bgMask.style.background = 'linear-gradient(to top, rgba(0, 0, 0, 0.83), rgba(0, 0, 0, 0.64) 66%, transparent)'
  anime({
    targets: monitorMidTop[0],
    transform: "translate(0 0)",
    easing: 'easeOutCubic',
    duration: 1200,
    delay: 0
  })
  anime({
    targets: [monitorMidBottom[0], monitorMidBottom[1], monitorMidBottom[2], monitorMidBottom[3]],
    transform: "translate(0 0)",
    easing: 'easeOutCubic',
    duration: 1200,
    delay: 0
  })
  anime({
    targets: rightCanvas1,
    opacity: 0,
    easing: 'easeOutCubic',
    duration: 1200,
    delay: 0
  })
  anime({
    targets: rightCanvas2,
    opacity: 0,
    easing: 'easeOutCubic',
    duration: 1200,
    delay: 0
  })
  state1 = ''
  state2 = undefined
  midCanvasInt1 = 120000000
  midCanvasInt2 = 120000000
  midCanvasInt3 = 120000000
  if (midUpBool) {
    anime({
      targets: monitorMid,
      translateY: 0,
      translateX: 0,
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: monitorLeft,
      translateX: 0,
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: monitorRight,
      translateX: 0,
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: [monitorRight.querySelector('#真_显示屏-1'), monitorRight.querySelector('#真_显示屏-2')],
      transform: "translate(6.067 10.867)",
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: rightFrameRight,
      translateX: 0,
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: [document.querySelectorAll('.intro'), document.querySelectorAll('.bottom-arrow')[1]],
      opacity: 1,
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
    midUpBool = false
  }
  anime({
    targets: midCanvas2,
    transform: "translate(0 7)",
    easing: 'easeInOutCubic',
    duration: 1200,
    delay: 0
  })
  cogsShow(state1, state2)
  changeEl(midCanvas2, 'easeOutCubic')
  midMaskLeft.removeEventListener('click', showLampCanvasThen)
  midMaskLeft.removeEventListener('touchend', showLampCanvasThen)
  midMaskLeft.removeEventListener('mouseover', midLampLeftRemoveOverLis1)
  midMaskLeft.removeEventListener('mouseover', midLampLeftRemoveOverLis2)
  midMaskLeft.removeEventListener('mouseout', midLampLeftRemoveOutLis1)
  midMaskLeft.removeEventListener('mouseout', midLampLeftRemoveOutLis2)
  midMaskLeft.removeEventListener('mouseover', showLampCanvasOn)
  midMaskLeft.removeEventListener('mouseout', showLampCanvasOff)
  midMaskMid.removeEventListener('click', showLampCanvasThen)
  midMaskMid.removeEventListener('touchend', showLampCanvasThen)
  midMaskMid.removeEventListener('mouseover', midLampMidRemoveOverLis1)
  midMaskMid.removeEventListener('mouseover', midLampMidRemoveOverLis2)
  midMaskMid.removeEventListener('mouseout', midLampMidRemoveOutLis1)
  midMaskMid.removeEventListener('mouseout', midLampMidRemoveOutLis2)
  midMaskMid.removeEventListener('mouseover', showLampCanvasOn)
  midMaskMid.removeEventListener('mouseout', showLampCanvasOff)
  midMaskRight.removeEventListener('click', showLampCanvasThen)
  midMaskRight.removeEventListener('touchend', showLampCanvasThen)
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
    easing: 'easeOutCubic',
    duration: 1200,
    delay: 0
  })
  anime({
    targets: monitorLeft.querySelector('#部_门'),
    fill: '#91F8B6',
    easing: 'easeOutCubic',
    duration: 1200,
    delay: 0
  })
  anime({
    targets: [Array.prototype.slice.call(monitorLeft.querySelectorAll('#组_20 path')), monitorLeft.querySelector('#路径_38')],
    fill: '#c0ffd7',
    stroke: '#c0ffd7',
    easing: 'easeOutCubic',
    duration: 1200,
    delay: 0
  })
  anime({
    targets: [Array.prototype.slice.call(monitorLeft.querySelectorAll('#组_20 path')), monitorLeft.querySelector('#路径_38')],
    fill: '#c0ffd7',
    stroke: '#c0ffd7',
    easing: 'easeOutCubic',
    duration: 1200,
    delay: 0
  })
  anime({
    targets: leftLampUp.querySelector('#历_程-3'),
    fill: '#c0ffd7',
    easing: 'easeOutCubic',
    duration: 1200,
    delay: 0
  })
  anime({
    targets: monitorLeft.querySelector('#历_程-2'),
    fill: '#91F8B6',
    easing: 'easeOutCubic',
    duration: 1200,
    delay: 0
  })
  anime({
    targets: [Array.prototype.slice.call(monitorLeft.querySelectorAll('#组_25 path')), monitorLeft.querySelector('#路径_37')],
    fill: '#c0ffd7',
    stroke: '#c0ffd7',
    easing: 'easeOutCubic',
    duration: 1200,
    delay: 0
  })
  anime({
    targets: monitorLeft.querySelector('#radial-gradient-left stop'),
    stopColor: "#c0ffd7",
    easing: 'easeOutCubic',
    duration: 1200,
    delay: 0
  })
  anime({
    targets: monitorLeft.querySelector('#radial-gradient_1-left stop'),
    stopColor: "#c0ffd7",
    easing: 'easeOutCubic',
    duration: 1200,
    delay: 0
  })
}

function rightCanvasShow() {
  if (state1 == "licheng") {
    switch (midCanvasInt2 % 3) {
      case 0:
        anime({
          targets: rightCanvas1,
          transform: "translate(0 0)",
          easing: 'easeInOutCubic',
          duration: 1200,
          delay: 0
        })
        break
      case 1:
        anime({
          targets: rightCanvas1,
          transform: "translate(0 1120)",
          easing: 'easeInOutCubic',
          duration: 1200,
          delay: 0
        })
        break
      case 2:
        anime({
          targets: rightCanvas1,
          transform: "translate(0 2240)",
          easing: 'easeInOutCubic',
          duration: 1200,
          delay: 0
        })
        break
    }
  } else if (state1 == "bumen") {
    switch (midCanvasInt3 % 3) {
      case 0:
        anime({
          targets: rightCanvas2,
          transform: "translate(0 -20)",
          easing: 'easeInOutCubic',
          duration: 1200,
          delay: 0
        })
        break
      case 1:
        anime({
          targets: rightCanvas2,
          transform: "translate(0 1018)",
          easing: 'easeInOutCubic',
          duration: 1200,
          delay: 0
        })
        break
      case 2:
        anime({
          targets: rightCanvas2,
          transform: "translate(0 2167)",
          easing: 'easeInOutCubic',
          duration: 1200,
          delay: 0
        })
        break
    }
  }
}