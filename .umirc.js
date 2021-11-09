// ref: https://umijs.org/config/
export default {
  routes: [
    {
      path: '/',
      component: './../layouts/index',
      routes: [
        {
          path: '/',
          component: './home/index',
          title: '首页'
        },
        {
          path: '/order',
          component: './order/index',
          title: '订单'
        },
        {
          path: '/user',
          component: './user/index',
          title: '我的'
        },
        {
          path: '/search',
          component: './search/index',
          title: '搜索'
        },
        {
          path: '/observer',
          component: './observer',
          title: '搜索'
        },
        {
          path: '/house',
          component: './house',
          title: '房屋详情'
        },
      ],
    },
  ]
};
