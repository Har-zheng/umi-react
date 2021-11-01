import { useEffect } from 'react';

let observer
export default function useObserverHook(ele, callback, watch = []) {

  useEffect(() => {
    observer = new IntersectionObserver(entries => {
      callback && callback(entries);
    })
    const node= document.querySelector(ele)
    observer.observe(node)
    return () => {
      if(observer && node){
      // 解绑元素
      observer.unobserve(node)
      // 停止监听
      observer.disconnect()
      }
    }
  }, watch)

}