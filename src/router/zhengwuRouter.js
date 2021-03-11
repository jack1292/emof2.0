export const zhengwuRouter = [
  {
    path: '',
    redirect: 'work'
  },
  {
    path: 'work',
    meta: {
      title: '办公平台',
    },
    component: () => import('../views/zhengwu/page/work'),
  },
  {
    path: 'search',
    meta: {
      title: '查询平台',
    },
    component: () => import('../views/zhengwu/page/search'),
  },
  {
    path: 'manage',
    meta: {
      title: '管理平台',
    },
    component: () => import('../views/zhengwu/page/manage'),
  },
  {
    path: 'train',
    meta: {
      title: '培训平台',
    },
    component: () => import('../views/zhengwu/page/train'),
  },

]