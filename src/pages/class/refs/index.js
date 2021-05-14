import React, { Component, createRef } from 'react';
import Child from './child'
import InputForward from './forward'

export default class Refs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      a: 0
    };
    this.domRef = createRef()
    this.childRef = createRef()
    this.inputRef = createRef()
  }
  componentDidMount() {
    console.log(this.domRef)
    console.log(this.domRef.current.innerHTML)
    console.log(this.childRef.current)
    this.inputRef.current.focus()
  }

  handeleChild(str) {
    // 父组件触发子组件的方法
    console.log(this.state)
    var b = this.state.a + 1
    this.setState({
      a: b
    })
    str = str + b
    this.childRef.current.changeText(str)
  }
  render() {
    return (
      <div>
        <h1 ref={this.domRef}>refs text</h1>
        <Child ref={this.childRef}></Child>
        <button onClick={() => { this.handeleChild('new test') }}>修改child的值</button>
        <InputForward ref={this.inputRef}></InputForward>
      </div>
    )
  }
}