import anime from "animejs";

export async function sidebar() {
  var sidebarLeft = document.querySelector('.sidebar-left')
  var sidebarRight = document.querySelector('.sidebar-right')
  var list = document.querySelector('.list') as any
  var mail = document.querySelector('.mail') as any
  var mask = document.querySelector('.sidebar-mask') as any
  list.addEventListener('click', () => {
    scrollToTop()
    document.body.style.overflowY = "hidden";
    mask.style.display = 'block'
    anime({
      targets: sidebarLeft,
      right: '70vw',
      easing: 'linear',
      duration: 200,
    })
    anime({
      targets: mask,
      opacity: 0.75,
      easing: 'linear',
      duration: 200,
    })
  })
  mail.addEventListener('click', () => {
    scrollToTop()
    document.body.style.overflowY = "hidden";
    mask.style.display = 'block'
    anime({
      targets: sidebarRight,
      left: '70vw',
      easing: 'linear',
      duration: 200,
    })
    anime({
      targets: mask,
      opacity: 0.75,
      easing: 'linear',
      duration: 200,
    })
  })
  mask.addEventListener('click', () => {
    document.body.style.overflowY = "scroll";
    mask.style.display = 'none'
    anime({
      targets: sidebarLeft,
      right: '98vw',
      easing: 'linear',
      duration: 200,
    })
    anime({
      targets: sidebarRight,
      left: '98vw',
      easing: 'linear',
      duration: 200,
    })
    anime({
      targets: mask,
      opacity: 0,
      easing: 'linear',
      duration: 200,
    })
  })
}

function scrollToTop() {
  var topHeight = document.documentElement.scrollTop
  var speed = topHeight / 10 > 100 ? topHeight / 10 : 100
  scrollBy(0, -speed)
  // 模拟鼠标向上滚动事件
  var scrolldelay = setTimeout('scrollToTop()', 50) as any
  // 清除滚动事件，避免无法向下移动
  if (topHeight === 0) {
    clearTimeout(scrolldelay);
    scrolldelay = null;
  }
}