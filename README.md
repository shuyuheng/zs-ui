 # sz-ui  组件库  

> Szui组件库搭建中 ... 感谢您的测试  我们会让您的编程更简洁、高效

## 合作人

舒榆衡  徐子笙  赵恒   李勇  于景尧  王涛  关瑞

### 安装方法

~~~npm
npm i sz-ui
~~~

### 使用方法

~~~javascript
// 引入sz-ui组件
import Szui from 'sz-ui'
// 引入css文件
import  'sz-ui/dist/sz-ui.css'
// 使用sz-ui
Vue.use(Szui)
~~~

## Components

### 1. zs-Sweiper 轮播图

> 1.使用方法

~~~html
<template>
  <zs-Sweiper :data="images" width="700" height="400" :time="1" auto>
    <template v-slot:default="{data:data}">
      {{data}}
      <img :src="data.src" width="100%" height="100%" />
    </template>
    <!-- <div slot="left-btn">left</div>
    <div slot="right-btn">right</div>-->
  </zs-Sweiper>
</template>

<script>
export default {
  data() {
    return {
      // 轮播图数据
      images: [
        {
          src: "http://www.shuyuhng.top:9999/img/aa.bdab5332.jpg"
        },
        {
          src: "http://www.shuyuhng.top:9999/img/aa.bdab5332.jpg"
        },
        {
          src: "http://www.shuyuhng.top:9999/img/aa.bdab5332.jpg"
        },
        {
          src: "http://www.shuyuhng.top:9999/img/aa.bdab5332.jpg"
        },
        {
          src: "http://www.shuyuhng.top:9999/img/aa.bdab5332.jpg"
        },
        {
          src: "http://www.shuyuhng.top:9999/img/aa.bdab5332.jpg"
        },
        {
          src: "http://www.shuyuhng.top:9999/img/aa.bdab5332.jpg"
        }
      ]
    };
  }
};
</script>
~~~

> 配置文件
>
> > 属性配置
>
> |      参数      |       说明       | 选填 |     类型      |           可选值            | 默认值  |
> | :------------: | :--------------: | :--: | :-----------: | :-------------------------: | :-----: |
> |      data      |     基础数据     |  否  |     Array     |            ----             |  ----   |
> |     width      |    轮播图宽度    |  是  | Number/String |            ----             |   700   |
> |     height     |    轮播图高度    |  是  | Number/String |            -----            |   400   |
> |      type      |    轮播图类型    |  是  |    String     | infinite/default/fade/stack | default |
> |      time      |   每次滚动时间   |  是  |    Number     |            ----             |   0.8   |
> |      auto      |   是否自动播放   |  是  |    Boolean    |         true/false          |  false  |
> |    autoTime    |  自动播放的时间  |  是  |    Number     |            ----             |  3000   |
> |  noIndicator   |  是否显示指示器  |  是  |    Boolean    |         true/false          |  false  |
> |     noBtn      |   是否显示按钮   |  是  |    Boolean    |         true/false          |  false  |
> | bottomBtnClass | 给指示器绑定类名 |  是  |    String     |            ----             |  ----   |
>
> > 插槽
>
> | 插槽名称  |    说明    |
> | :-------: | :--------: |
> |  default  | 轮播图内容 |
> | left-btn  | 左边的按钮 |
> | right-btn | 右边的按钮 |