import ElementPlus from 'element-plus'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import "~/styles/index.scss";
import "uno.css";

import "element-plus/theme-chalk/src/message.scss";
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const app = createApp(App,{
    locale: zhCn,
  })

app.use(ElementPlus)
app.use(createPinia())
app.use(router)

app.mount('#app')
