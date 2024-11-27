import anime from "animejs"

const bg1Element = document.querySelector(".bg-1") as any
const bg2Element = document.querySelector(".bg-2") as any
const breakPoints = [
  bg1Element.offsetTop,
  bg2Element.offsetTop,
]

function turnPage() {
  anime({
    targets: document.documentElement,
    scrollTop: breakPoints[1],
    duration: 1000,
    easing: "easeOutQuint",
  })
}

function backPage() {
  anime({
    targets: document.documentElement,
    scrollTop: breakPoints[0],
    duration: 1000,
    easing: "easeOutQuint",
  })
}

export function scrollRun() {
  let timer = null as any
  let nextTop = 0
  let previosTop = 0

  let triggerLine = (breakPoints[0] * 11 + breakPoints[1]) / 12

  function scrollEnd() {
    nextTop = document.documentElement.scrollTop
    if (nextTop === previosTop) {
      if (nextTop > triggerLine && nextTop < breakPoints[1]) {
        anime({
          targets: document.documentElement,
          scrollTop: breakPoints[1],
          duration: Math.abs(breakPoints[1] - nextTop) * 2,
          easing: "easeOutQuint",
        })
        triggerLine = (breakPoints[0] + breakPoints[1] * 11) / 12
      } else if (nextTop < triggerLine) {
        anime({
          targets: document.documentElement,
          scrollTop: breakPoints[0],
          duration: Math.abs(breakPoints[0] - nextTop) * 2,
          easing: "easeOutQuint",
        })
        triggerLine = (breakPoints[0] * 11 + breakPoints[1]) / 12
      }
    }
  }
  document.addEventListener("scroll", () => {
    clearTimeout(timer)
    timer = setTimeout(scrollEnd, 80)
    previosTop = document.documentElement.scrollTop
  })
  document.addEventListener("keydown", event => {
    if (event.key === "ArrowDown" && document.documentElement.scrollTop < breakPoints[1]) {
      turnPage()
    }
  })
  document.addEventListener("keydown", event => {
    if (event.key === "ArrowUp" && document.documentElement.scrollTop === breakPoints[1]) {
      backPage()
    }
  })
  window.addEventListener("resize", () => {
    breakPoints[0] = bg1Element.offsetTop
    breakPoints[1] = bg2Element.offsetTop
  })
}

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

export function enterlogoMask() {
  const enterLogo = document.getElementById('enter-logo') as any
  const enterLogoMask = document.querySelector('.enter-logo-mask') as any
  enterLogoMask.style.top = `${enterLogo.offsetTop}px`
  let resizeTimeout: number | null = null
  window.addEventListener('resize', () => {
    if (resizeTimeout) {
      clearTimeout(resizeTimeout)
    }
    resizeTimeout = setTimeout(() => {
      enterLogoMask.style.top = `${enterLogo.offsetTop}px`
    }, 500)
  })
}