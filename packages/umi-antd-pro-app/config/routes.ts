export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './User/Login',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    name: 'Demo',
    path: '/demo',
    routes: [
      {
        path: '',
        redirect: '/demo/virtual-cascader'
      },
      {
        name: 'VirtualCascader',
        path: 'virtual-cascader',
        component: './Demo/VirtualCascader',
      },
      {
        name: 'PreviousCount',
        path: 'previous-count',
        component: './Demo/PreviousCount',
      },
      {
        name: '滚动提示模态框',
        path: 'scroll-top-modal',
        component: './Demo/ScrollTipModal',
      },
      {
        name: 'transition',
        path: 'transition',
        component: './Demo/TransitionDemo'
      }
    ],
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    path: '*',
    component: './404',
  },
];
