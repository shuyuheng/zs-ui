 *

 *attribute --属性*

  *"width"  轮播图宽度 默认700px*

  *"height" 轮播图高度 默认400px*

  *"type"  轮播图类型 infinite[无限] default fade[淡入淡出]  stack 层叠*

  *"time"  动画时间 1s/2s/0.5s*

  *"isImg"  是否显示图片 默认显示  true/false*

  *"isIndicator" 是否显示指示器  true/false*

  *"isBtn"   是否显示左右按钮*

  *"loop"  是否循环播放默认false  true/false*

  *"loopTime" 循环播放间隔时间 2000/1000/Number*

  *"bottomBtnClass" 定义小按钮*

 *slot  --具名插槽*

  *"left-btn"  左边的按钮*

  *"right-btn" 右边的按钮*



*==============================*

*使用方法*



   **

   <zs-Sweiper :data=images>

​     <div

​    style="color:red;font-size:45px"

​    :slot="'steep_item'+i"

​    v-for="(item,i) in images"

​    :key="i"

​    \>内容：{{i}}</div>

   </zs-Sweiper>

   **

*基础数据结构*

*// 轮播图数据*

   *images: [*

​    *{*

​     *src: require("./assets/images/aa.jpg")*

​    *},*

​    *{*

​     *src: require("./assets/images/bb.jpg")*

​    *},*

​    *{*

​     *src: require("./assets/images/cc.jpg")*

​    *},*

​    *{*

​     *src: require("./assets/images/dd.jpg")*

​    *},*

​    *{*

​     *src: require("./assets/images/ee.jpg")*

​    *},*

​    *{*

​     *src: require("./assets/images/ff.jpg")*

​    *}*

   *]*





*============================*

# components

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

