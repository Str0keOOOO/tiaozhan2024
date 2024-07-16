let monitorMid = document.querySelector('.monitor-mid') as any
let monitorLeft = document.querySelector('.monitor-left') as any
let monitorRight = document.querySelector('.monitor-right') as any
let text1 = monitorMid.contentDocument.querySelectorAll('text')
let text2 = monitorLeft.contentDocument.querySelectorAll('text')
let text3 = monitorRight.contentDocument.querySelectorAll('text')
let text = [text1, text2, text3]

export function draggable() {
  text.forEach((el) => {
    el.forEach(function (textElement: any) {
      textElement.style.userSelect = 'none';
      textElement.style.MozUserSelect = 'none'; // Firefox  
      textElement.style.MsUserSelect = 'none';  // IE 10+  
      textElement.style.WebkitUserSelect = 'none'; // Safari, Chrome  
    });
  })
}