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
          path: '/user/edit',
          component: './user/edit',
          title: '设置用户'
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
        {
          path: '/login',
          component: './login',
          title: '登录'
        },
        {
          path: '/register',
          component: './register',
          title: '注册'
        },
      ],
    },
  ]
};
