
import Item from 'antd/lib/list/Item';
import React, { useState, useEffect } from 'react';

/**
 * 1, 监听图片是否进入可视区域;
 * 2, 将src属性的值替换为真实的图片地址 data-src
 * 3, 停止监听当前的节点
 * @param {*} ele
 * @param {*} callback
 * @param {*} watch
 * */

let observer;
export default function useImgHook(ele, callback, watch = []) {
  useEffect(() => {
    const nodes = document.querySelectorAll(ele);
    if (nodes && nodes.length) {
      observer = new IntersectionObserver((entries) => {
        console.log(entries);
        callback && callback(entries);
        entries.forEach(item => {
          if(item.isIntersecting){
            const dataSrc = item.target.getAttrubute('data-src')
            item.target.setAttribute('src', dataSrc)
            observer.unobserve(item.target)
          }
        })
      })
      nodes.forEach(item => {
        observer.observer(item)
      })
    }
  }, watch)

}