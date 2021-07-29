

import React, { Component } from 'react';
// 新版本  react的生命周期方法
export default class ComponentOld extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: 'demo'
    };
    console.log('constructor')
    // this.handleClick = this.handleClick.bind(this)
  }
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps')
    console.log(props, state)
    return state
  }

  // 新版本的结合使用  1 getSnapshotBeforeUpdate    2 componentDidUpdate
  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate')
    return 'getSnapshotBeforeUpdate'
  }
  componentDidUpdate(props, state, snapshot) {

    console.log(snapshot)
  }

  handleClick = () => {
    console.log('react  click')
    this.setState({
      text: 'react123'
    })
  }
  render() {
    console.log('render')
    return (
      // 绑定事件  事件绑定的几种方式 1 constructor  2 his.handleClick.bind(this) 3  () =>  this.handleClick()
      // 
      // <div onClick={this.handleClick}>
      <div onClick={this.handleClick}>
        Component-Old-{this.state.text}
      </div>
    )
  }
}