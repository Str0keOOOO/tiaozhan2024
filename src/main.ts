import './style.css'
import './css/tailwind.css'
import { enterAnime } from './anime/enter'
import { sidebar } from './anime/sidebar'
import { monitor } from './anime/monitor'
import { toTop } from './anime/scrollToTop'
import { draggable } from './anime/draggable'

window.onbeforeunload = toTop

enterAnime()
sidebar()
monitor()
draggable()

document.onselectstart = function () { return false }
document.oncontextmenu = function () { return false }
document.ondragstart = function () { return false }