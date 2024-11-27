export function handleClick(dom: HTMLElement, callback: () => void) {
  dom.addEventListener('touchend', () => {
    callback()
  })
  dom.addEventListener('click', () => {
    callback()
  })
}