import React, { Component } from 'react';
import CreatePortal from '@/components/CreatePortal/index'
import Model from '@/components/Model/index'
import { Button } from 'antd-mobile'

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  handleClick = () => {
    console.log(this.state)
    this.setState({
      show: true
    })
  }
  handleClose = () => {
    console.log(this.state)
    this.setState({
      show: false
    })
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.handleClick}>Model</Button>
        <Model
          show={this.state.show}
          onClose={this.handleClose}>model</Model>
      </div>
    )
  }
}