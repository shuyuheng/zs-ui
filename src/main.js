import Vue from 'vue'
import App from './App.vue'

// 
import Steep from './components/Steep'
// 注册
Vue.component(Steep.name,Steep)
// 
import Slide from './components/Slide'
Vue.component(Slide.name,Slide)

// import Steep from '../packages'
// Vue.use(Steep)





Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
