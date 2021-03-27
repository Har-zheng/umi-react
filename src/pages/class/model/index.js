import React, { Component } from 'react';
import CreatePortal from '@/components/CreatePortal/index'
import Model from '@/components/Model/index'
import { Button } from  'antd-mobile'

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  handleClick =( ) => {
    this.setState({
      show: false
    })
  }
  handleClose= ()=> {
    this.setState({
      show: true
    })
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={ this.handleClick}>Model</Button>
        <Model 
        show= {this.state.show}
        onClose={this.handleClose}>model</Model>
      </div>
    )
  }
}