import './style.css'
import './css/tailwind.css'
import { enterAnime } from './anime/enter'
import { sidebar } from './anime/sidebar'
import { monitor } from './anime/monitor'
import { toTop, scrollRun, enterlogoMask } from './anime/scrollToTop'
import { draggable } from './anime/draggable'
import { urlSet } from './anime/url'

window.onbeforeunload = toTop
document.onselectstart = function (el) { return (el.target as any).nodeType === Node.TEXT_NODE }
document.oncontextmenu = function () { return false }
document.ondragstart = function () { return false }

let midBoolean = false;
let leftBoolean = false;
let rightBoolean = false;
(document.querySelector('.monitor-mid') as any).onload = () => {
  midBoolean = true
}
(document.querySelector('.monitor-left') as any).onload = () => {
  leftBoolean = true
}
(document.querySelector('.monitor-right') as any).onload = () => {
  rightBoolean = true
}

window.onload = async function () {
  await urlSet()
  window.scrollTo({top: 0})
  enterAnime()
  sidebar()
  draggable()
  scrollRun()
  enterlogoMask();
  (document.querySelector('.monitor-mid') as any).onload = () => {
    midBoolean = true
  }
  (document.querySelector('.monitor-left') as any).onload = () => {
    leftBoolean = true
  }
  (document.querySelector('.monitor-right') as any).onload = () => {
    rightBoolean = true
  }
  const intervalId = setInterval(() => {
    if (midBoolean && leftBoolean && rightBoolean) {
      clearInterval(intervalId)
      monitor()
      return
    }
  }, 50)
}