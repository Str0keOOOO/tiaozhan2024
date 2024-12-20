import anime from "animejs"

export function changeEl(el: any, curve: string) {
  let monitorMid = document.querySelector('.monitor-mid') as any
  if (el == monitorMid.querySelector('#真_显示屏-1 #内容')) {
    anime({
      targets: monitorMid.querySelector('#真_显示屏-1 #内容'),
      opacity: 1,
      easing: curve,
      duration: 1200,
      delay: 0

    })
    anime({
      targets: monitorMid.querySelector('#真_显示屏-2 #内容'),
      opacity: 0,
      easing: curve,
      duration: 1200,
      delay: 0
    })
    anime({
      targets: monitorMid.querySelector('#真_显示屏-3 #内容'),
      opacity: 0,
      easing: curve,
      duration: 1200,
      delay: 0
    })
  }
  else if (el == monitorMid.querySelector('#真_显示屏-2 #内容')) {
    anime({
      targets: monitorMid.querySelector('#真_显示屏-1 #内容'),
      opacity: 0,
      easing: curve,
      duration: 1200,
      delay: 0
    })
    anime({
      targets: monitorMid.querySelector('#真_显示屏-2 #内容'),
      opacity: 1,
      easing: curve,
      duration: 1200,
      delay: 0
    })
    anime({
      targets: monitorMid.querySelector('#真_显示屏-3 #内容'),
      opacity: 0,
      easing: curve,
      duration: 1200,
      delay: 0
    })
  }
  else if (el == monitorMid.querySelector('#真_显示屏-3 #内容')) {
    anime({
      targets: monitorMid.querySelector('#真_显示屏-1 #内容'),
      opacity: 0,
      easing: curve,
      duration: 1200,
      delay: 0
    })
    anime({
      targets: monitorMid.querySelector('#真_显示屏-2 #内容'),
      opacity: 0,
      easing: curve,
      duration: 1200,
      delay: 0
    })
    anime({
      targets: monitorMid.querySelector('#真_显示屏-3 #内容'),
      opacity: 1,
      easing: curve,
      duration: 1200,
      delay: 0
    })
  }
}