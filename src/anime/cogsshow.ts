import anime from "animejs"

let monitorMid = document.querySelector('.monitor-mid') as any
let monitorLeft = document.querySelector('.monitor-left') as any
let monitorRight = document.querySelector('.monitor-right') as any
let midMaskMid = monitorMid.contentDocument.querySelectorAll('#光')[1] as any
let midMaskLeft = monitorMid.contentDocument.querySelectorAll('#光')[2] as any
let midMaskRight = monitorMid.contentDocument.querySelectorAll('#光')[0] as any

export function cogsShow(state1: string, state2: any) {
  cogsShowLeft(state1)
  cogsShowMid(state1)
  cogsShowRight(state1, state2)
}

function cogsShowLeft(state1: string) {
  let cogs1 = monitorLeft.contentDocument.querySelector('#齿轮')
  let cogs2 = monitorLeft.contentDocument.querySelector('#设置_填充')
  let cogs3 = monitorLeft.contentDocument.querySelector('#设置_填充-2')
  if (state1 == 'licheng') {
    anime({
      targets: cogs1,
      transform: 'translate(243.542 1873.247) rotate(-21)',
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: cogs2,
      transform: 'translate(273.079 1234.412) rotate(73)',
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: cogs3,
      transform: 'translate(249.079 1349.412) rotate(-68)',
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
  } else if (state1 == 'bumen') {
    anime({
      targets: cogs1,
      transform: 'translate(243.542 1873.247) rotate(56)',
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: cogs2,
      transform: 'translate(273.079 1234.412) rotate(63)',
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: cogs3,
      transform: 'translate(249.079 1349.412) rotate(-16)',
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
  } else {
    anime({
      targets: cogs1,
      transform: 'translate(243.542 1873.247) rotate(10)',
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: cogs2,
      transform: 'translate(273.079 1234.412) rotate(24)',
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: cogs3,
      transform: 'translate(249.079 1349.412) rotate(24)',
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
  }
}

function cogsShowMid(state1: string) {
  let cogs1 = monitorMid.contentDocument.querySelector('#设置_填充')
  let cogs2 = monitorMid.contentDocument.querySelector('#设置_填充-2')
  let cogs3 = monitorMid.contentDocument.querySelector('#齿轮')
  let cogs4 = monitorMid.contentDocument.querySelector('#齿轮-2')
  let cogs5 = monitorMid.contentDocument.querySelector('#设置_填充-3')
  let cogs6 = monitorMid.contentDocument.querySelector('#设置_填充-4')
  let spring1 = monitorMid.contentDocument.querySelector('#弹簧')
  let spring2 = monitorMid.contentDocument.querySelector('#弹簧-2')
  let side = monitorMid.contentDocument.querySelector('#侧边装饰-4')
  if (state1 == 'licheng' || state1 == 'bumen') {
    anime({
      targets: cogs1,
      transform: 'translate(640.647 1841.04) rotate(90)',
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: cogs2,
      transform: 'translate(1037.779 2022.502) rotate(90)',
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: cogs3,
      transform: 'translate(1065.519 1796.04) rotate(45)',
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: cogs4,
      transform: 'translate(496.461 1796.041) rotate(-45)',
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: cogs5,
      transform: 'translate(905.087 1841.04) rotate(90)',
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: cogs6,
      transform: 'translate(504.002 2017.772) rotate(90)',
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: spring1,
      d: "M3463.227,7441.622s40.01-19.142,39.568-34.168-39.568-25.1-39.568-25.1-39.947-9.058-39.947-26.361,39.947-25.187,39.947-25.187,39.568-6.205,39.568-26.865-39.568-28.544-39.568-28.544-39.947-3.273-39.947-20.651,39.947-25.187,39.947-25.187,39.568-6.791,39.568-23-39.568-39.206-39.568-39.206",
      transform: "translate(-2687.374 -5177.347)",
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: spring2,
      d: "M3464.187,7446.573s40.971-19.487,40.518-34.785-40.518-25.556-40.518-25.556-40.906-9.22-40.906-26.838,40.906-25.641,40.906-25.641,40.518-6.315,40.518-27.349-40.518-29.06-40.518-29.06-40.906-3.333-40.906-21.024,40.906-25.641,40.906-25.641,40.518-6.914,40.518-23.419-40.518-39.914-40.518-39.914",
      transform: "translate(-2576.822 -5179.243)",
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
    if (state1 == 'bumen') {
      anime({
        targets: side,
        transform: "translate(0 231)",
        easing: 'easeInOutCubic',
        duration: 1200,
        delay: 0
      })
    } else {
      anime({
        targets: side,
        transform: "translate(0 140)",
        easing: 'easeInOutCubic',
        duration: 1200,
        delay: 0
      })
    }
  } else {
    anime({
      targets: cogs1,
      transform: 'translate(640.647 1841.04) rotate(18)',
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: cogs2,
      transform: 'translate(1037.779 2022.502) rotate(31)',
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: cogs3,
      transform: 'translate(1065.519 1796.04) rotate(-31)',
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: cogs4,
      transform: 'translate(496.461 1796.041) rotate(18)',
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: cogs5,
      transform: 'translate(905.087 1841.04) rotate(156)',
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: cogs6,
      transform: 'translate(504.002 2017.772) rotate(148)',
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: spring1,
      d: "M3463.227,7259.2s40.01-6.41,39.568-11.443-39.568-8.407-39.568-8.407-39.947-3.034-39.947-8.829,39.947-8.435,39.947-8.435,39.568-2.078,39.568-9-39.568-9.56-39.568-9.56-39.947-1.1-39.947-6.917,39.947-8.435,39.947-8.435,39.568-2.274,39.568-7.7-39.568-13.131-39.568-13.131",
      transform: "translate(-2687.374 -4994.929)",
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: spring2,
      d: "M3464.187,7264.155s40.971-6.757,40.518-12.061-40.518-8.86-40.518-8.86-40.906-3.2-40.906-9.3,40.906-8.89,40.906-8.89,40.518-2.19,40.518-9.482-40.518-10.075-40.518-10.075-40.906-1.155-40.906-7.289,40.906-8.89,40.906-8.89,40.518-2.4,40.518-8.119-40.518-13.838-40.518-13.838",
      transform: "translate(-2576.822 -4996.825)",
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: side,
      transform: "translate(0 140)",
      easing: 'easeInOutCubic',
      duration: 1200,
      delay: 0
    })
  }
}

function cogsShowRight(state1: string, state2: any) {
  let cogs1 = monitorRight.contentDocument.querySelector('#齿轮')
  let cogs2 = monitorRight.contentDocument.querySelector('#齿轮-2')
  let sideCogs = [monitorRight.contentDocument.querySelector('#齿轮_侧面'), monitorRight.contentDocument.querySelector('#齿轮_侧面-2')]
  if (state1 == "licheng") {
    if (state2 == midMaskLeft) {
      anime({
        targets: cogs1,
        transform: "translate(1812.876 1548.383) rotate(-46)",
        easing: 'easeInOutCubic',
        duration: 1200,
        delay: 0
      })
      anime({
        targets: cogs2,
        transform: "translate(1812.876 1289.46) rotate(-38)",
        easing: 'easeInOutCubic',
        duration: 1200,
        delay: 0
      })
      anime({
        targets: sideCogs,
        transform: "translate(0 -119)",
        easing: 'easeInOutCubic',
        duration: 1200,
        delay: 0
      })
    } else if (state2 == midMaskMid) {
      anime({
        targets: cogs1,
        transform: "translate(1812.876 1548.383) rotate(-115)",
        easing: 'easeInOutCubic',
        duration: 1200,
        delay: 0
      })
      anime({
        targets: cogs2,
        transform: "translate(1812.876 1289.46) rotate(-131)",
        easing: 'easeInOutCubic',
        duration: 1200,
        delay: 0
      })
      anime({
        targets: sideCogs,
        transform: "translate(0 -318)",
        easing: 'easeInOutCubic',
        duration: 1200,
        delay: 0
      })
    } else if (state2 == midMaskRight) {
      anime({
        targets: cogs1,
        transform: "translate(1812.876 1548.383) rotate(-233)",
        easing: 'easeInOutCubic',
        duration: 1200,
        delay: 0
      })
      anime({
        targets: cogs2,
        transform: "translate(1812.876 1289.46) rotate(-218)",
        easing: 'easeInOutCubic',
        duration: 1200,
        delay: 0
      })
      anime({
        targets: sideCogs,
        transform: "translate(0 -455)",
        easing: 'easeInOutCubic',
        duration: 1200,
        delay: 0
      })
    }
  } else if (state1 == "bumen") {
    if (state2 == midMaskLeft) {
      anime({
        targets: cogs1,
        transform: "translate(1812.876 1548.383) rotate(-46)",
        easing: 'easeInOutCubic',
        duration: 1200,
        delay: 0
      })
      anime({
        targets: cogs2,
        transform: "translate(1812.876 1289.46) rotate(-38)",
        easing: 'easeInOutCubic',
        duration: 1200,
        delay: 0
      })
      anime({
        targets: sideCogs,
        transform: "translate(0 -102)",
        easing: 'easeInOutCubic',
        duration: 1200,
        delay: 0
      })
    } else if (state2 == midMaskMid) {
      anime({
        targets: cogs1,
        transform: "translate(1812.876 1548.383) rotate(-135)",
        easing: 'easeInOutCubic',
        duration: 1200,
        delay: 0
      })
      anime({
        targets: cogs2,
        transform: "translate(1812.876 1289.46) rotate(-134)",
        easing: 'easeInOutCubic',
        duration: 1200,
        delay: 0
      })
      anime({
        targets: sideCogs,
        transform: "translate(0 -231)",
        easing: 'easeInOutCubic',
        duration: 1200,
        delay: 0
      })
    } else if (state2 == midMaskRight) {
      anime({
        targets: cogs1,
        transform: "translate(1812.876 1548.383) rotate(-210)",
        easing: 'easeInOutCubic',
        duration: 1200,
        delay: 0
      })
      anime({
        targets: cogs2,
        transform: "translate(1812.876 1289.46) rotate(-165)",
        easing: 'easeInOutCubic',
        duration: 1200,
        delay: 0
      })
      anime({
        targets: sideCogs,
        transform: "translate(0 -460)",
        easing: 'easeInOutCubic',
        duration: 1200,
        delay: 0
      })
    }
  } else {
    anime({
      targets: cogs1,
      transform: "translate(1812.876 1548.383) rotate(-46)",
      easing: 'easeInOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: cogs2,
      transform: "translate(1812.876 1289.46) rotate(-38)",
      easing: 'easeInOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: sideCogs,
      transform: "translate(0 0)",
      easing: 'easeInOutCubic',
      duration: 1200,
      delay: 0
    })
  }
}