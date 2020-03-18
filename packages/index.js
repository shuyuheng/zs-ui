// 整个自定义组件库的一个入口

// 导入所有组件
import Steep from './Steep'
// 对应的字体文件也得导入
// 例如   import '**/***.css'

// 将所有的组件放入数组中 利于遍历注册
const components = [  
    Steep,
]

// 必须导出一个 install 方法 或者对象中又 install 方法
let install = function(Vue){
    // 原理就是 在 vue框架中 调用 Vue.use()  时 会执行这个函数  我们在这个函数中
    // 完成对应的配置即可  注册所有的组件
    components.forEach(item => {
        Vue.component(item.name,item)
    })
    console.log(123)

}
// 这一步是为了 如果直接引入文件 就不用调用 Vue.use()
if(typeof window != 'undefined' && window.Vue){
    install(window.Vue)
}
// 导出
export default  {
    install
}