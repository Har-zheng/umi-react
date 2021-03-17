import React, { PureComponent } from 'react';
// PureComponent   对 shouldComponentUpdate方法的二次封装
export default class ComponentOld extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      text: 'demo'
    };
    console.log('constructor')
    // this.handleClick = this.handleClick.bind(this)
  }
  componentWillMount() {
    console.log('componentWillMount')
  }
  componentDidMount() {
    console.log('componentDidMount')
  }
  componentDidUpdate(){
    console.log('componentDidUpdate')
  }
  componentWillUpdate(){
    console.log('componentWillUpdate')
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  // 返回 bello之  true继续渲染  false 停止渲染
  // shouldComponentUpdate(props, state){
  //   console.log('shouldComponentUpdate')
  //   console.log(props, state)
  //   if(state.text === 'react123'&& this.state.text !== state.text) return true
  //   else return false
  // }
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
