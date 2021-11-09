import React, { useState, useEffect } from 'react';
import { Model } from '@/components'
import { TextareaItem ,Button} from 'antd-mobile'
export default function (props) {
  const [show, setShow] = useState(false)

  const handleClick = () => {
    console.log('handleClick');
    setShow(true)
  }
  const handleChange = (value)=> {
    console.log(value);
  }
  const handleSubmit =()=> {

  }
  const handleClose=()=> {
    setShow(false)
  }

  useEffect(() => {

  }, [])

  return (
    <>
      <div className='footer' onClick={handleClick}>
        评论~
      </div>
      <Model show={show}
        styleBody={{
          height: '220px',
          bottom: '0px',
          top: 'unset',
        }}
        onClose={handleClose}
      >
        <div className="modal-comment">
          <TextareaItem rows={2} count={200} onChange={handleChange} />
          <Button className='comment-btn' type={'warning'} onClick={handleSubmit}>评论</Button>
        </div>
      </Model>
    </>
  )
}