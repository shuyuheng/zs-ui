import Vue from 'vue'
import App from './App.vue'

// 
// import Steep from './components/Steep'
// // 注册
// Vue.component(Steep.name,Steep)
// // 
import Buttons from './components/Buttons'
Vue.component(Buttons.name,Buttons)

// import {Slide} from '../packages'
// Vue.use(Slide)
// import {Sweiper} from '../packages'
// Vue.use(Sweiper)
// 全局导入
// import Szui from '../packages'
// Vue.use(Szui)

// import Demo from './components/Demo'
// Vue.component(Demo.name,Demo)




Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
