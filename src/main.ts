import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import './style.css'
import App from './App.vue'


//引入路由
import {router} from '@/routers/index'
// import router from './routers'


//引入pinia
import { createPinia } from 'pinia'


//引入阿里云图标库
import  "@/assets/iconfont/iconfont.js";

import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'

const app = createApp(App);

//挂载
app.component('SvgIcon',SvgIcon)

//注册路由
app.use(router);

//注册pinia
app.use(createPinia())

// 注册 Element-Plus
app.use(ElementPlus, {
  locale: zhCn,
});

// 注册 Element-Plus Icon 组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app');


