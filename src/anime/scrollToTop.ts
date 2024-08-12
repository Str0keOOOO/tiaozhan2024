export function scrollToTop() {
  var topHeight = document.documentElement.scrollTop
  var speed = topHeight / 10 > 100 ? topHeight / 10 : 100
  scrollBy(0, -speed)
  // 模拟鼠标向上滚动事件
  var scrolldelay = setTimeout('scrollToTop()', 50) as any
  // 清除滚动事件，避免无法向下移动
  if (topHeight === 0) {
    clearTimeout(scrolldelay)
    scrolldelay = null
  }
}

export function toTop() {
  window.scrollTo(0, 0)
  return null
}