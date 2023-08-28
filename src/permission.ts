import router from '@/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({ showSpinner: false }); // 进度环显示/隐藏

// 白名单路由
const whiteList = ['/login'];

router.beforeEach(async (to, from, next) => {
  next()
});

router.afterEach(() => {
  NProgress.done();
});