import AboutVue from "@/views/About.vue"
import HomeVue from "@/views/Home.vue"
import { RouteRecordRaw, createRouter, createWebHashHistory,createWebHistory} from "vue-router"

// 每个路由都需要映射到一个组件。
const routes:RouteRecordRaw[]= [
  { 
    path: '/', 
    name:'home',
    component:()=>import('@/views/home/index.vue'),
    meta:{
      title:'首页'
    },


    // children:[
    //   {
    //     path:"/",
    //     name:"home",
    //     component:()=>import('@/views/home/index.vue'),
    //     meta:{
    //       title:'首页'
    //     }
    //   }
    // ]


},
{ 
  path: '/article', 
  name:'article',
  component:()=>import('@/views/article/articleList.vue'),
  meta:{
    title:'文章列表'
  },


  // children:[
  //   {
  //     path:"/",
  //     name:"home",
  //     component:()=>import('@/views/article/articleList.vue'),

  //     meta:{
  //       title:'首页'
  //     }
  //   }
  // ]


},
{ 
  path: '/document', 
  name:'document',
  component:()=>import('@/views/document/index.vue'),
  meta:{
    title:'文档列表'
  },


  children:[
    {
      path:"/document1",
      name:"document1",
      component:()=>import('@/views/document/index.vue'),

      meta:{
        title:'首页'
      }
    },
    {
      path:"/document2",
      name:"document2",
      component:()=>import('@/views/document/index.vue'),

      meta:{
        title:'首页'
      }
    }
  ]


},
 
]

// 创建路由实例并传递 `routes` 配置
// const router = createRouter({
//   // 使用 hash 模式。
//   history: createWebHashHistory(),
//   routes, // `routes: routes` 的缩写
// })

// 创建router
const router = createRouter({
  // 配置为Hash模式
  // history:createWebHashHistory()

  // 配置为history模式
  history: createWebHistory(process.env.BASE_URL),
  // 配置toures
  routes,
  // 路由跳转时返回顶部
  scrollBehavior() {
      return { top: 0 }
  }
})

// export default router
export {router}
