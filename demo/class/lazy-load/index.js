import React, { Component, lazy ,Suspense} from 'react';
// import Demo from './demo'
const Demo = lazy(()=> import('./demo'))

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
       flag:false
    };
  }

componentWillMount() {
  setTimeout(()=> {
    this.setState({
      flag: true
    })
  }, 2000)
}

  render() {
    return (
      <div>
        { this.state.flag ? <Suspense fallback={<div>loading....</div>}>
          <Demo/>
        </Suspense>: null }
        {/* 子组件未来解析前执行 */}
        
      </div>
    )
  }
}