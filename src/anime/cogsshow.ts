import anime from "animejs"

let monitorMid: any
let monitorLeft: any
let monitorRight: any
let midMaskMid: any
let midMaskLeft: any
let midMaskRight: any

export function cogsShow(state1: string, state2: any) {
  monitorMid = document.querySelector('.monitor-mid') as any
  monitorLeft = document.querySelector('.monitor-left') as any
  monitorRight = document.querySelector('.monitor-right') as any
  midMaskMid = monitorMid.contentDocument.querySelectorAll('#光')[1] as any
  midMaskLeft = monitorMid.contentDocument.querySelectorAll('#光')[2] as any
  midMaskRight = monitorMid.contentDocument.querySelectorAll('#光')[0] as any
  cogsShowLeft(state1)
  cogsShowMid(state1,state2)
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

function cogsShowMid(state1: string,state2: any) {
  let cogs1 = monitorMid.contentDocument.querySelector('#设置_填充')
  let cogs3 = monitorMid.contentDocument.querySelector('#齿轮')
  let cogs4 = monitorMid.contentDocument.querySelector('#齿轮-2')
  let cogs5 = monitorMid.contentDocument.querySelector('#设置_填充-3')
  let side1 = monitorMid.contentDocument.querySelector('#侧边装饰-4')
  let side2 = monitorMid.contentDocument.querySelector('#侧边装饰-2')
  if (state1 == 'licheng') {
    anime({
      targets: cogs1,
      transform: 'translate(640.647 1841.04) rotate(45)',
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: cogs3,
      transform: 'translate(1065.519 1796.04) rotate(-270)',
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: cogs4,
      transform: 'translate(496.461 1796.041) rotate(-90)',
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: cogs5,
      transform: 'translate(905.087 1841.04) rotate(135)',
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: side1,
      transform: "translate(0 312)",
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
    if (state2 == midMaskLeft) {
      anime({
        targets: side2,
        transform: "translate(0 0)",
        easing: 'easeOutCubic',
        duration: 1200,
        delay: 0
      })
    } else if (state2 == midMaskMid) {
      anime({
        targets: side2,
        transform: "translate(0 152)",
        easing: 'easeOutCubic',
        duration: 1200,
        delay: 0
      })
    } else if (state2 == midMaskRight) {
      anime({
        targets: side2,
        transform: "translate(0 -22)",
        easing: 'easeOutCubic',
        duration: 1200,
        delay: 0
      })
    }
  } else if (state1 == 'bumen') {
    anime({
      targets: cogs1,
      transform: 'translate(640.647 1841.04) rotate(18)',
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: cogs3,
      transform: 'translate(1065.519 1796.04) rotate(-300)',
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: cogs4,
      transform: 'translate(496.461 1796.041) rotate(-60)',
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
      targets: side1,
      transform: "translate(0 -24)",
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
    if (state2 == midMaskLeft) {
      anime({
        targets: side2,
        transform: "translate(0 0)",
        easing: 'easeOutCubic',
        duration: 1200,
        delay: 0
      })
    } else if (state2 == midMaskMid) {
      anime({
        targets: side2,
        transform: "translate(0 151)",
        easing: 'easeOutCubic',
        duration: 1200,
        delay: 0
      })
    } else if (state2 == midMaskRight) {
      anime({
        targets: side2,
        transform: "translate(0 292)",
        easing: 'easeOutCubic',
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
      targets: side1,
      transform: "translate(0 140)",
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: side2,
      transform: "translate(0 0)",
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
  }
}

function cogsShowRight(state1: string, state2: any) {
  let cogs1 = monitorRight.contentDocument.querySelector('#齿轮')
  let cogs2 = monitorRight.contentDocument.querySelector('#齿轮-2')
  let sideCogs = [monitorRight.contentDocument.querySelector('#齿轮_侧面'), monitorRight.contentDocument.querySelector('#齿轮_侧面-2')]
  let frame= monitorRight.contentDocument.querySelector('#右框架 #左框架')
  let motor= monitorRight.contentDocument.querySelector('#发动机')  
  if (state1 == "licheng") {
    if (state2 == midMaskLeft) {
      anime({
        targets: cogs1,
        transform: "translate(1691.876 1558.383) rotate(-46)",
        easing: 'easeOutCubic',
        duration: 1200,
        delay: 0
      })
      anime({
        targets: cogs2,
        transform: "translate(1691.876 1269.46) rotate(-38)",
        easing: 'easeOutCubic',
        duration: 1200,
        delay: 0
      })
      anime({
        targets: sideCogs,
        transform: "translate(0 -119)",
        easing: 'easeOutCubic',
        duration: 1200,
        delay: 0
      })
    } else if (state2 == midMaskMid) {
      anime({
        targets: cogs1,
        transform: "translate(1691.876 1558.383) rotate(-115)",
        easing: 'easeOutCubic',
        duration: 1200,
        delay: 0
      })
      anime({
        targets: cogs2,
        transform: "translate(1691.876 1269.46) rotate(-131)",
        easing: 'easeOutCubic',
        duration: 1200,
        delay: 0
      })
      anime({
        targets: sideCogs,
        transform: "translate(0 -318)",
        easing: 'easeOutCubic',
        duration: 1200,
        delay: 0
      })
    } else if (state2 == midMaskRight) {
      anime({
        targets: cogs1,
        transform: "translate(1691.876 1558.383) rotate(-233)",
        easing: 'easeOutCubic',
        duration: 1200,
        delay: 0
      })
      anime({
        targets: cogs2,
        transform: "translate(1691.876 1269.46) rotate(-218)",
        easing: 'easeOutCubic',
        duration: 1200,
        delay: 0
      })
      anime({
        targets: sideCogs,
        transform: "translate(0 -455)",
        easing: 'easeOutCubic',
        duration: 1200,
        delay: 0
      })
    }
    anime({
      targets: frame,
      transform: "translate(-2800.572 -5272)",
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: motor,
      transform: "translate(-2817.248 -5117)",
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
  } else if (state1 == "bumen") {
    if (state2 == midMaskLeft) {
      anime({
        targets: cogs1,
        transform: "translate(1711.876 1558.383) rotate(-89)",
        easing: 'easeOutCubic',
        duration: 1200,
        delay: 0
      })
      anime({
        targets: cogs2,
        transform: "translate(1711.876 1269.46) rotate(-93)",
        easing: 'easeOutCubic',
        duration: 1200,
        delay: 0
      })
      anime({
        targets: sideCogs,
        transform: "translate(0 -102)",
        easing: 'easeOutCubic',
        duration: 1200,
        delay: 0
      })
    } else if (state2 == midMaskMid) {
      anime({
        targets: cogs1,
        transform: "translate(1711.876 1558.383) rotate(-135)",
        easing: 'easeOutCubic',
        duration: 1200,
        delay: 0
      })
      anime({
        targets: cogs2,
        transform: "translate(1711.876 1269.46) rotate(-134)",
        easing: 'easeOutCubic',
        duration: 1200,
        delay: 0
      })
      anime({
        targets: sideCogs,
        transform: "translate(0 -231)",
        easing: 'easeOutCubic',
        duration: 1200,
        delay: 0
      })
    } else if (state2 == midMaskRight) {
      anime({
        targets: cogs1,
        transform: "translate(1711.876 1558.383) rotate(-210)",
        easing: 'easeOutCubic',
        duration: 1200,
        delay: 0
      })
      anime({
        targets: cogs2,
        transform: "translate(1711.876 1269.46) rotate(-165)",
        easing: 'easeOutCubic',
        duration: 1200,
        delay: 0
      })
      anime({
        targets: sideCogs,
        transform: "translate(0 -460)",
        easing: 'easeOutCubic',
        duration: 1200,
        delay: 0
      })
    }
    anime({
      targets: frame,
      transform: "translate(-2780.572 -5272)",
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: motor,
      transform: "translate(-2797.248 -5117)",
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
  } else {
    anime({
      targets: cogs1,
      transform: "translate(1711.876 1558.383) rotate(-46)",
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: cogs2,
      transform: "translate(1711.876 1269.46) rotate(-38)",
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: sideCogs,
      transform: "translate(0 0)",
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: frame,
      transform: "translate(-2780.572 -5272)",
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
    anime({
      targets: motor,
      transform: "translate(-2797.248 -5117)",
      easing: 'easeOutCubic',
      duration: 1200,
      delay: 0
    })
  }
}

export function CogsShowmidUp() {
  monitorMid = document.querySelector('.monitor-mid') as any
  monitorLeft = document.querySelector('.monitor-left') as any
  monitorRight = document.querySelector('.monitor-right') as any
  midMaskMid = monitorMid.contentDocument.querySelectorAll('#光')[1] as any
  midMaskLeft = monitorMid.contentDocument.querySelectorAll('#光')[2] as any
  midMaskRight = monitorMid.contentDocument.querySelectorAll('#光')[0] as any
  let cogs3 = monitorMid.contentDocument.querySelector('#齿轮')
  let cogs4 = monitorMid.contentDocument.querySelector('#齿轮-2')
  anime({
    targets: cogs3,
    transform: 'translate(1065.519 1796.04) rotate(-300)',
    easing: 'linear',
    duration: 1200,
    delay: 0
  })
  anime({
    targets: cogs4,
    transform: 'translate(496.461 1796.041) rotate(-60)',
    easing: 'easeOutCubic',
    duration: 1200,
    delay: 0
  })
  let cogs1 = monitorLeft.contentDocument.querySelector('#齿轮')
  let cogs2 = monitorLeft.contentDocument.querySelector('#设置_填充')
  let cogs0 = monitorLeft.contentDocument.querySelector('#设置_填充-2')
  anime({
    targets: cogs1,
    transform: 'translate(243.542 1873.247) rotate(90)',
    easing: 'easeOutCubic',
    duration: 1200,
    delay: 0
  })
  anime({
    targets: cogs2,
    transform: 'translate(273.079 1234.412) rotate(-45)',
    easing: 'easeOutCubic',
    duration: 1200,
    delay: 0
  })
  anime({
    targets: cogs0,
    transform: 'translate(249.079 1349.412) rotate(90)',
    easing: 'easeOutCubic',
    duration: 1200,
    delay: 0
  })
}