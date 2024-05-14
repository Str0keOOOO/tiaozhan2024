import anime from "animejs";

export async function sidebar() {
  var sidebarLeft=document.querySelector('.sidebar-left')
  var sidebarRight=document.querySelector('.sidebar-right')
  var list=document.querySelector('.list')
  var mail=document.querySelector('.mail')
  list.addEventListener('click',(e)=>{
    //TODO 还需要写一个让主body变暗的anime 
    // 为什么没这句话跑不了
    e.stopPropagation()
    anime({
      targets:sidebarLeft,
      right:'70vw',
      easing: 'linear',
      duration: 200,
    })
    // FIXME 修改关闭的bug
    document.body.addEventListener('click',()=>{
      anime({
        targets:sidebarLeft,
        right:'97.5vw',
        easing: 'linear',
        duration: 200,
      })
    })
  })
  mail.addEventListener('click',(e)=>{
    //TODO 还需要写一个让主body变暗的anime 
    e.stopPropagation()
    anime({
      targets:sidebarRight,
      left:'70vw',
      easing: 'linear',
      duration: 200,
    })
    document.body.addEventListener('click',()=>{
      anime({
        targets:sidebarRight,
        left:'97.5vw',
        easing: 'linear',
        duration: 200,
      })
    })
  })

  
}