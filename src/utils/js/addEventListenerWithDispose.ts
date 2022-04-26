export function addEventListenerWithDispose (el: any, name: string, handler: () => void) {
  el.addEventListener(name, handler)
  return () => el.removeEventListener(name, handler)
}
