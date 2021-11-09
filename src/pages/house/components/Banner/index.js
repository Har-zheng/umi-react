import React, { useState, useEffect } from 'react';
import AwesomeSwiper from 'react-awesome-swiper'
export default function (props) {
  const [config, setConfig] = useState({
    loop:true,
    autoplay:{
      delay: 1500
    },
    pagination:{
      el: '.swiper-pagination'
    }
  })

  useEffect(() => {

  }, [])

  return (
    <AwesomeSwiper  className='banner' config={config}>
      <div className='swiper-wrapper'>
        <div className='swiper-slide'>
          <img alt='banner' src={'https://youimg1.c-ctrip.com/target/100q11000000qsj8y3D34_D_450_600_R5_Q80.jpg'} ></img>
        </div>
        <div className='swiper-slide'>
          <img alt='banner' src={'https://youimg1.c-ctrip.com/target/100q11000000qsj8y3D34_D_450_600_R5_Q80.jpg'} ></img>
        </div>
        <div className='swiper-slide'>
          <img alt='banner' src={'https://youimg1.c-ctrip.com/target/100q11000000qsj8y3D34_D_450_600_R5_Q80.jpg'} ></img>
        </div>
      </div>
      <div className='swiper-pagination'></div>
    </AwesomeSwiper>
  )
}