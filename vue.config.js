const path = require('path')
module.exports = {
    // 扩展 webpack 配置 ，使 packages 加入编译
    chainWebpack:config => {
        config.module
        .rule('js')
        .include.add(path.resolve(__dirname,'packages')).end()
        .use('babel')
        .loader('babel-loader')
        .tap(options => {
            // 修改
            return options
        })
    }
}