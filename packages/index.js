// 整个自定义组件库的一个入口

// 导入所有组件
// import Steep from './Steep'
let comNames = [
    'Sweiper',
    'Slide'
]
// 定义要被导出的对象
const exportObj = {}

// 对应的字体文件也得导入
// 例如   import '**/***.css'

// 将所有的组件放入数组中 利于遍历注册
const components = []
// 循环导入 存入数组
comNames.forEach(key =>{
    let obj = require(__dirname + '/' + key).default
    // 加入组件数组中
    components.push(obj)
    let newObj = new Object()
    newObj.install = function(Vue)  {
        Vue.component(obj.name,obj)
    }
    // newObj.name = obj.name
    // 加入导出的对象 用于按需导入
    exportObj[key] = newObj
})

// 必须导出一个 install 方法 或者对象中又 install 方法
exportObj.install = function(Vue){
    // 原理就是 在 vue框架中 调用 Vue.use()  时 会执行这个函数  我们在这个函数中
    // 完成对应的配置即可  注册所有的组件
    components.forEach(item => {
        Vue.component(item.name,item)
    })
}
// 这一步是为了 如果直接引入文件 就不用调用 Vue.use()
if(typeof window != 'undefined' && window.Vue){
    exportObj.install(window.Vue)
}
// 导出对象   module.exprots 比 export default 跟利于按需导入
module.exports =  exportObj