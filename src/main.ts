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

urlSet()
window.onload = function () {
  enterAnime()
  sidebar()
  monitor()
  draggable()
  scrollRun()
  enterlogoMask()
}