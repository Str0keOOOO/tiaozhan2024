let monitorMid, monitorLeft, monitorRight, text1, text2, text3, text

export function draggable() {
  monitorMid = document.querySelector('.monitor-mid') as any
  monitorLeft = document.querySelector('.monitor-left') as any
  monitorRight = document.querySelector('.monitor-right') as any
  text1 = monitorMid.contentDocument.querySelectorAll('text')
  text2 = monitorLeft.contentDocument.querySelectorAll('text')
  text3 = monitorRight.contentDocument.querySelectorAll('text')
  text = [text1, text2]
  text.forEach((el) => {
    el.forEach(function (textElement: any) {
      textElement.style.userSelect = 'none';
      textElement.style.MozUserSelect = 'none'; // Firefox  
      textElement.style.MsUserSelect = 'none';  // IE 10+  
      textElement.style.WebkitUserSelect = 'none'; // Safari, Chrome  
    });
  })
}
