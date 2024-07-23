// 定义一个类型来注解 touchmove 事件的处理函数  
type TouchMoveHandler = (event: TouchEvent) => void;

// 保存对阻止touchmove函数的引用  
let preventTouchMoveFunction: TouchMoveHandler = (e) => {
  e.preventDefault();
};

// 导出阻止touchmove的函数  
export function preventTouchmove(): void {
  document.body.addEventListener('touchmove', preventTouchMoveFunction, { passive: false });
}

// 导出允许touchmove的函数  
export function allowTouchmove(): void {
  let body = document.body as any
  body.removeEventListener('touchmove', preventTouchMoveFunction, { passive: false });
}
// FIXME  不一定需要