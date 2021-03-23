import React, { Component } from 'react';

export default class ErrorBoundary extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flag: false
    };
  }

  static getDerivedStateFromError(error) {
    console.log(error)
    return {
      flag: true
    }
  }
  componentDidCatch(error, info) {

  }
  render() {
    return (
      <div>
        { this.state.flag ? <h1>发生错误</h1> : this.props.children}
      </div>
    )
  }
}