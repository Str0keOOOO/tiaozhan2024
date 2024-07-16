import './style.css'
import './css/tailwind.css'
import { enterAnime } from './anime/enter'
import { sidebar } from './anime/sidebar'
import { monitor } from './anime/monitor'
import { toTop } from './anime/scrollToTop'
import { resizeElementToShortSide } from './anime/monitorMask'

window.onbeforeunload = toTop

enterAnime()
sidebar()
monitor()

document.onselectstart = function () { return false }
document.oncontextmenu = function () { return false }
document.ondragstart = function () { return false }




// function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
//   let timeout: ReturnType<typeof setTimeout> | null = null;

//   return function debouncedFunction(...args: Parameters<T>): void {
//     const context = this;

//     // 如果定时器已存在，则清除它  
//     if (timeout !== null) {
//       clearTimeout(timeout);
//     }

//     // 设置新的定时器  
//     timeout = setTimeout(() => {
//       func.apply(context, args);
//     }, wait);
//   };
// }

// 使用示例  
// window.addEventListener('resize', debounce(function() {  
//   resizeElementToShortSide(document.querySelector('.monitor-mid-mask'), 2.3542)
// }, 250));



// resizeElementToShortSide(document.querySelector('.monitor-mid-mask'), 2.3542);
// resizeElementToShortSide(document.querySelector('.monitor-left-mask'), 0.19064);
// window.addEventListener('resize', () => {
//   resizeElementToShortSide(document.querySelector('.monitor-mid-mask'), 2.3542);
// });
// window.addEventListener('resize', () => {
//   resizeElementToShortSide(document.querySelector('.monitor-left-mask'), 0.19064);
// });