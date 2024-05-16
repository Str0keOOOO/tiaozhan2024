let dict: { [key1: string]: { [key2: string]: number } } = {
  blank: {
    meigong: 1,
    jishu: 2,
    shiping: 3,
  },
  licheng: {
    qi: 4,
    cheng: 5,
    zhuan: 6
  },
  bumen: {
    meigong: 7,
    jishu: 8,
    shiping: 9,
  }
}
let monitorMid = document.querySelector('.monitor-mid') as any
let monitorLeft = document.querySelector('.monitor-left') as any
let monitorRight = document.querySelector('.monitor-right') as any

let midLampMid = monitorMid.contentDocument.querySelector('#灯中中')
let midLampLeft = monitorMid.contentDocument.querySelector('#灯中左')
let midLampRight = monitorMid.contentDocument.querySelector('#灯中右')
let midReturn = monitorMid.contentDocument.querySelector('#返回键')
let midAdvance = monitorMid.contentDocument.querySelector('#左按键')
let midBack = monitorMid.contentDocument.querySelector('#右按键')

// 不够细节
let leftLampUp = monitorLeft.contentDocument.querySelector('#光上')
let leftLampDown = monitorLeft.contentDocument.querySelector('#光下')

// FIXME 修复元素可以被选中的bug
export async function monitor() {
  cursorPointer()
}

function cursorPointer() {
  //FIXME 不好
  midLampRight.querySelector('#网格').style.cursor = 'pointer'
  midLampMid.querySelector('#网格-2').style.cursor = 'pointer'
  midLampLeft.querySelector('#网格-3').style.cursor = 'pointer'
}