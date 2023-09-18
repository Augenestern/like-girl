import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
 
// 2. 配置路由
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("@/views/login.vue"),
  },
  {
    path: "/home",
    component: () => import("@/views/home.vue"),
  },
  {
    path: "/cardOne",
    component: () => import("@/views/card/cardOne.vue"),
  },
  {
    path: "/cardTwo",
    component: () => import("@/views/card/cardTwo.vue"),
  },
  {
    path: "/cardThree",
    component: () => import("@/views/card/cardThree.vue"),
  },
  {
    path: "/cardFour",
    component: () => import("@/views/card/cardFour.vue"),
  },
  {
    path: "/cardFive",
    component: () => import("@/views/card/cardFive.vue"),
  },
  {
    path: "/cs",
    component: () => import("@/views/cs.vue"),
  },
  // {
  //   path: '/md',
  //   // @ts-ignore
  //   component: () => import('@/pages/hexo.md'),
// },
];
// 1.返回一个 router 实列，为函数，里面有配置项（对象） history
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to,from,next)=>{
  let token = localStorage.getItem("loginToken")
  if(token){
    if(to.path == "/"){
      next({path:"/home"})
    }else{next()}
  } else {
    if(to.path != "/"){
      next({path:"/"})
    }else{next()}
  }
})
// 3导出路由   然后去 main.ts 注册 router.ts
export default router