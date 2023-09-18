import { createApp } from 'vue'
import App from './App.vue'
 
import router from "./routes/index"; 
import { createPinia } from 'pinia' 
import * as echarts from 'echarts';
import Vant from 'vant';
import '../node_modules/vant/lib/index.css';
import { ImagePreview } from 'vant';
import piniaPluginPersistedstate  from 'pinia-plugin-persistedstate'
import VueLazyload from 'vue-lazyload';

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app= createApp(App)
app.config.globalProperties.$echarts = echarts
app.use(pinia)
app.use(VueLazyload)
app.use(Vant)
app.use(ImagePreview)
app.use(router)  
app.mount('#app')
