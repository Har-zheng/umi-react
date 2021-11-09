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
    display: 'flex',
    aliginItems: 'center',
    justifyContent: 'center',
  },
  close: {
    position: 'absolute',
    top: '10px',
    right: '10px'
  }
}
export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      showModal:nextProps.show
    })
  }
  handleClose = () => {
    console.log(this.props)
    const { onClose } = this.props
    onClose && onClose()
  }
  render() {
    const { show, styleBody, styleClose } = this.props
    const _styleBody = {
      ...Styles.body,
      ...styleBody
    }
    const _styleClose = {
      ...Styles.close,
      ...styleClose
    }
    const { showModal } = this.state;
    return (
      <div>
        {showModal ? < CreatePortal style={Styles.modal}>
          <div style={_styleBody}>
            {this.props.children}
            <Icon type="cross" size="lg" style={_styleClose} onClick={this.handleClose}></Icon>
          </div>
        </CreatePortal> : null}
      </div>
    )
  }
}