import anime from "animejs";

const time = 1000
let monitorMid = document.querySelector('.monitor-mid') as any

export function changeEl(el: any) {
  if (el == monitorMid.contentDocument.querySelector('#真_显示屏-1 #内容')) {
    anime({
      targets: monitorMid.contentDocument.querySelector('#真_显示屏-1 #内容'),
      opacity: 1,
      duration: time,
      delay: 0
    })
    anime({
      targets: monitorMid.contentDocument.querySelector('#真_显示屏-2 #内容'),
      opacity: 0,
      duration: time,
      delay: 0
    })
    anime({
      targets: monitorMid.contentDocument.querySelector('#真_显示屏-3 #内容'),
      opacity: 0,
      duration: time,
      delay: 0
    })
  }
  else if (el == monitorMid.contentDocument.querySelector('#真_显示屏-2 #内容')) {
    anime({
      targets: monitorMid.contentDocument.querySelector('#真_显示屏-1 #内容'),
      opacity: 0,
      duration: time,
      delay: 0
    })
    anime({
      targets: monitorMid.contentDocument.querySelector('#真_显示屏-2 #内容'),
      opacity: 1,
      duration: time,
      delay: 0
    })
    anime({
      targets: monitorMid.contentDocument.querySelector('#真_显示屏-3 #内容'),
      opacity: 0,
      duration: time,
      delay: 0
    })
  }
  else if (el == monitorMid.contentDocument.querySelector('#真_显示屏-3 #内容')) {
    anime({
      targets: monitorMid.contentDocument.querySelector('#真_显示屏-1 #内容'),
      opacity: 0,
      duration: time,
      delay: 0
    })
    anime({
      targets: monitorMid.contentDocument.querySelector('#真_显示屏-2 #内容'),
      opacity: 0,
      duration: time,
      delay: 0
    })
    anime({
      targets: monitorMid.contentDocument.querySelector('#真_显示屏-3 #内容'),
      opacity: 1,
      duration: time,
      delay: 0
    })
  }
}