import './style.css'
import './css/tailwind.css'
import { enterAnime } from './anime/enter'
import { sidebar } from './anime/sidebar'
import { monitor } from './anime/monitor'
import { toTop } from './anime/scrollToTop'

// FIXME  怎么没用
// window.onbeforeunload = toTop

enterAnime()
sidebar()
monitor()

document.onselectstart = function () { return false }
document.oncontextmenu = function () { return false }
document.ondragstart = function () { return false }

// TODO解决自己电脑蓝屏问题