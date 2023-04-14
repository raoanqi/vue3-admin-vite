import {createApp} from 'vue'
import App from './App.vue'
import router from './router/index'

// 引入element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入normalize.css
import 'normalize.css/normalize.css'

// 创建应用实例
const app = createApp(App)

// 注册路由，组件库，并完成挂载
app.use(router)
app.use(ElementPlus)
app.mount('#app')