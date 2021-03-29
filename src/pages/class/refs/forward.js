import React, { forwardRef } from 'react';
const inputForwardRef = forwardRef((props, ref) => {
  return (
    <div>
      姓名: <input ref={ ref }/>
    </div>
  )
})
export default inputForwardRef

// export default class Demo extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {

//     };
//   }

//   render() {
//     return (
//       <div>

//       </div>
//     )
//   }
// }