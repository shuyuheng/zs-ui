import Vue from 'vue'
import App from './App.vue'

// 测试 引入自定义组件库
import AA from '../packages'
Vue.use(AA)
// 安装之后测试


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
