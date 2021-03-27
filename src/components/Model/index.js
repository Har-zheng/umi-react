import React, { Component } from 'react';
import CreatePortal from '@/components/CreatePortal'
import { Icon } from 'antd-mobile'

const Styles = {
  modal: {
    position: 'relative',
    top: '0',
    left: '0',
    zIndex: '999'
  },
  body: {
    backgroundColor: '#fff',
    position: 'fixed',
    height: '100%',
    width: '100%',
    top: '0',
    left: '0',
    display:'flex',
    aliginItems: 'center',
    justifyContent: 'center',
  },
  close: {
    position: 'fixed',
    top: '10px',
    right: '10px'
  }
}
export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }
  handleClose = () => {
    const { onclose } = this.props
    onclose && onclose()
  }
  render() {
    const { show } = this.props
    return (
      <div>
        {show ? < CreatePortal style={Styles.modal}>
          <div style={Styles.body}>
            {this.props.children}
            <Icon type="cross" size="lg" style={Styles.close} onClick={this.handleClose}></Icon>
          </div>
        </CreatePortal> : null}
      </div>
    )
  }
}