import React, { useState, useEffect } from 'react';

export default function (props) {
  // const [houses, setHouses] = useState([
  //   {
  //     id: 1,
  //     img: 'https://youimg1.c-ctrip.com/target/100q11000000qsj8y3D34_D_450_600_R5_Q80.jpg',
  //     title: '东城民宿',
  //     info: '东城区交通方便',
  //     price: '100',
  //   },
  //   {
  //     id: 2,
  //     img: 'https://youimg1.c-ctrip.com/target/0103l1200081so14iAEBF_R_280_372_Q90.jpg',
  //     title: '西城民宿',
  //     info: '西城区山水怡情',
  //     price: '120',
  //   },
  //   {
  //     id: 3,
  //     img: 'https://youimg1.c-ctrip.com/target/100t12000000rryww0F62_R_280_372_Q90.jpg',
  //     title: '新区民宿',
  //     info: '新区民宿位置优越',
  //     price: '200',
  //   },
  //   {
  //     id: 4,
  //     img: 'https://youimg1.c-ctrip.com/target/100t12000000rryww0F62_R_280_372_Q90.jpg',
  //     title: '老城民宿',
  //     info: '老城区风景秀美',
  //     price: '220',
  //   },
  // ]);
  useEffect(() => {

  }, [])

  return (
    <div className='hot'>
      <h1>最热民宿</h1>
      <div className='hot-lists'>
        { !props.housesLoading &&  props.houses.map(item => (
          <div className="hot-lists-item" key={item.id}>
            <img src={item.img} alt="" className="img" />
            <div className="title">{item.title}</div>
            <div className="info">{item.info}</div>
            <div className="price">￥{item.price}</div>
          </div>
        ))}


      </div>

    </div>
  )
}