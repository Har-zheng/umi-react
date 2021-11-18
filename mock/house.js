export default {
  'post /api/house/search': (req, res) => {

    console.log('=============' + req.body.pageNum);
    let data;
    if (req.body.pageNum < 4) {
      data = [
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
        {
          id: 5,
          img: 'https://youimg1.c-ctrip.com/target/100q11000000qsj8y3D34_D_450_600_R5_Q80.jpg',
          title: '东城民宿',
          info: '东城区交通方便',
          price: '100',
        },
        {
          id: 6,
          img: 'https://youimg1.c-ctrip.com/target/0103l1200081so14iAEBF_R_280_372_Q90.jpg',
          title: '西城民宿',
          info: '西城区山水怡情',
          price: '120',
        },
        {
          id: 7,
          img: 'https://youimg1.c-ctrip.com/target/100t12000000rryww0F62_R_280_372_Q90.jpg',
          title: '新区民宿',
          info: '新区民宿位置优越',
          price: '200',
        },
        {
          id: 8,
          img: 'https://youimg1.c-ctrip.com/target/100t12000000rryww0F62_R_280_372_Q90.jpg',
          title: '老城民宿',
          info: '老城区风景秀美',
          price: '220',
        },
        {
          id: 9,
          img: 'https://youimg1.c-ctrip.com/target/100q11000000qsj8y3D34_D_450_600_R5_Q80.jpg',
          title: '东城民宿',
          info: '东城区交通方便',
          price: '100',
        },
        {
          id: 10,
          img: 'https://youimg1.c-ctrip.com/target/0103l1200081so14iAEBF_R_280_372_Q90.jpg',
          title: '西城民宿',
          info: '西城区山水怡情',
          price: '120',
        },
        {
          id: 11,
          img: 'https://youimg1.c-ctrip.com/target/100t12000000rryww0F62_R_280_372_Q90.jpg',
          title: '新区民宿',
          info: '新区民宿位置优越',
          price: '200',
        },
        {
          id: 12,
          img: 'https://youimg1.c-ctrip.com/target/100t12000000rryww0F62_R_280_372_Q90.jpg',
          title: '老城民宿',
          info: '老城区风景秀美',
          price: '220',
        },
      ]
    } else {
      data = []
    }
    res.json({
      status: 200,
      data
    })
  },
  'post /api/house/detail': (req, res) => {
    res.json({
      status: 200,
      data: {
        id: 8,
        banner: [
          'https://youimg1.c-ctrip.com/target/100t12000000rryww0F62_R_280_372_Q90.jpg',
          'https://youimg1.c-ctrip.com/target/0103l1200081so14iAEBF_R_280_372_Q90.jpg',
          'https://youimg1.c-ctrip.com/target/100q11000000qsj8y3D34_D_450_600_R5_Q80.jpg',
        ],
        info: {
          title: '老城民宿',
          msg: '老城区风景秀美',
          price: '220',
          publishTime: 1595238771000,
          startTime: 1595238771000,
          endTime: 1597917171000,
        }
      }
    });
  },
  'post /api/comments/lists': (req, res) => {
    setTimeout(() => {
      let data;
      if (req.body.pageNum < 4) {
        data = [
          {
            id: 1,
            avatar: '//hbimg.huabanimg.com/2b01828ad8d6379e1f98ccfd1c4c7210cc28b44df62d-87bxVo_fw658/format/webp',
            username: 'user',
            createTime: 1595238771000,
            info: '房屋很满意'
          },
          {
            id: 2,
            avatar: 'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg',
            username: 'user',
            createTime: 1595238771000,
            info: '空气清新'
          },
          {
            id: 3,
            avatar: 'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png',
            username: 'user',
            createTime: 1595238771000,
            info: '态度温和'
          },
          {
            id: 4,
            avatar: 'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg',
            username: 'user',
            createTime: 1595238771000,
            info: '早餐味道美'
          },
          {
            id: 5,
            avatar: 'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png',
            username: 'user',
            createTime: 1595238771000,
            info: '态度温和'
          },
          {
            id: 6,
            avatar: 'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg',
            username: 'user',
            createTime: 1595238771000,
            info: '早餐味道美'
          },
          {
            id: 7,
            avatar: 'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png',
            username: 'user',
            createTime: 1595238771000,
            info: '态度温和'
          },
          {
            id: 8,
            avatar: 'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg',
            username: 'user',
            createTime: 1595238771000,
            info: '早餐味道美'
          },
        ]
      } else {
        data = [];
      }
      res.json({
        status: 200,
        data
      });
    }, 100);
  },
  'post /api/comments/add': (req, res) => {
    res.json({
      status: 200,
      data: 'ok'
    });
  }
}