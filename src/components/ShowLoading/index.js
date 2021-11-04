import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import './index.less'
import { CommonEnum } from '@/enums'

export default function ShowLoading(props) {
  const [state, setState] = useState()

  useEffect(() => {

  }, [])

  return (
    <div>
      {props.showLoading ? <div id={ CommonEnum.LOADING_ID } className='loading-info'>
        Loading...</div> : <div id={ CommonEnum.LOADING_ID } className='loading-info'>我是有底线的....</div>}

    </div>
  )
}

ShowLoading.defaultProps = {
  showLoading: true
};
ShowLoading.propTypes = {
  showLoading: PropTypes.bool
}