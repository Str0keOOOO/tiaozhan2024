export function getScrollbarWidth() {
  // 创建一个包含滚动条的容器元素
  let outer = document.createElement('div') as any
  outer.style.visibility = 'hidden'
  outer.style.overflow = 'scroll' // 强制显示滚动条
  outer.style.width = '100px'
  outer.style.position = 'absolute'
  outer.style.top = '-9999px'
  document.body.appendChild(outer)
  // 创建一个不包含滚动条的内部元素
  let inner = document.createElement('div')
  inner.style.width = '100%'
  outer.appendChild(inner)
  // 计算滚动条的宽度
  let scrollbarWidth = outer.offsetWidth - inner.offsetWidth
  // 清理
  outer.parentNode.removeChild(outer)
  return scrollbarWidth
}