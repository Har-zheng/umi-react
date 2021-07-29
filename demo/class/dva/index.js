import React, { Component } from 'react';
import Search from './search'
import Lists from './list'
import { connect } from 'dva'

class Dva extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Search {...this.props}></Search>
        <Lists {...this.props} />
      </div>
    )
  }
}
export default connect(({search})=> ({ search }))(Dva)