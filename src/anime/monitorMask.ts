// 要让一个元素（比如图片、视频或者任何容器）保留其原始的长宽比，并且确保它在不同屏幕尺寸下始终以其短边（即宽度或高度中较小的一个）作为基准进行缩放
let originalWidth: number
let originalHeight: number
let width: number
let height: number

export function resizeElementToShortSide(el: any, proportion: number) {
  originalWidth = el.offsetWidth
  originalHeight = el.offsetHeight
  if (originalWidth / originalHeight >= proportion) {
    // 更宽
    height = originalHeight
    width = height * proportion
  } else {
    // 更窄
    width = originalWidth
    height = width / proportion
  }

  el.style.width = `${100 * width / window.innerWidth}vw`;
  el.style.height = `${100 * height / window.innerHeight}vh`;
}