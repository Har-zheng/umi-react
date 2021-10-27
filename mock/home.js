export default {
  'post /api/commons/citys': (req,res)  => {
    res.json({
      status: 200,
      data: [[{ label: '杭州', value: '10001' }, { label: '苏州', value: '10002' }]],
    })
  },
  'post /api/house/hot': (req,res)  => {
    res.json({
      status: 200,
      data: [
        {
          id: 1,
          img: 'https://youimg1.c-ctrip.com/target/100q11000000qsj8y3D34_D_450_600_R5_Q80.jpg',
          title: '东城民宿',
          info: '东城区交通方便',
          price: '100',
        },
        {
          id: 2,
          img: 'https://youimg1.c-ctrip.com/target/0103l1200081so14iAEBF_R_280_372_Q90.jpg',
          title: '西城民宿',
          info: '西城区山水怡情',
          price: '120',
        },
        {
          id: 3,
          img: 'https://youimg1.c-ctrip.com/target/100t12000000rryww0F62_R_280_372_Q90.jpg',
          title: '新区民宿',
          info: '新区民宿位置优越',
          price: '200',
        },
        {
          id: 4,
          img: 'https://youimg1.c-ctrip.com/target/100t12000000rryww0F62_R_280_372_Q90.jpg',
          title: '老城民宿',
          info: '老城区风景秀美',
          price: '220',
        },
      ]
    })
  }
}