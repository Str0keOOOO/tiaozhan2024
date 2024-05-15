import './style.css'
import './css/tailwind.css'
import { enterAnime } from './anime/enter'
import { sidebar } from './anime/sidebar'

enterAnime()
sidebar()

document.onselectstart = function () { return false }
document.oncontextmenu = function () { return false }
document.ondragstart = function () { return false } 