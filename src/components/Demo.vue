<template>
  <div class="demo-box">
    <!-- 左边固定的盒子 -->
    <div class="demo-left">
      <!-- 左侧内容区域-->
      <div class="demo-left-item">
        <ol>
          <li>demo</li>
          <li>demo</li>
          <li>demo</li>
          <li>demo</li>
          <li>demo</li>
          <li>demo</li>
          <li>demo</li>
          <li>demo</li>
          <li>demo</li>
          <li>demo</li>
          <li>demo</li>
          <li>demo</li>
          <li>demo</li>
          <li>demo</li>
          <li>demo</li>
          <li>demo</li>
          <li>demo</li>
          <li>demo</li>
          <li>demo</li>
          <li>demo</li>
          <li>demo</li>
          <li>demo</li>
          <li>demo</li>
          <li>demo</li>
          <li>demo</li>
          <li>demo</li>
          <li>demo</li>
          <li>demo</li>
          <li>demo</li>
          <li>demo</li>
          <li>demo</li>
          <li>demo</li>
          <li>demo</li>
          <li>demo</li>
          <li>demo</li>
          <li>demo</li>
          <li>demo</li>
          <li>demo</li>
          <li>demo</li>
          <li>demo</li>
          <li>demo</li>
        </ol>
      </div>
    </div>
    <!-- 右侧内容区域 -->
    <div class="demo-right">
      <ol>
        <li>demo</li>
        <li>demo</li>
        <li>demo</li>
        <li>demo</li>
        <li>demo</li>
        <li>demo</li>
        <li>demo</li>
        <li>demo</li>
        <li>demo</li>
        <li>demo</li>
        <li>demo</li>
        <li>demo</li>
        <li>demo</li>
        <li>demo</li>
        <li>demo</li>
        <li>demo</li>
        <li>demo</li>
        <li>demo</li>
        <li>demo</li>
        <li>demo</li>
        <li>demo</li>
        <li>demo</li>
        <li>demo</li>
        <li>demo</li>
        <li>demo</li>
        <li>demo</li>
        <li>demo</li>
        <li>demo</li>
        <li>demo</li>
        <li>demo</li>
        <li>demo</li>
        <li>demo</li>
        <li>demo</li>
        <li>demo</li>
        <li>demo</li>
        <li>demo</li>
        <li>demo</li>
        <li>demo</li>
        <li>demo</li>
        <li>demo</li>
        <li>demo</li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: "demo"
};
</script>

<style>
/* 左侧主要定位盒子 用于固定到左侧不动 */
.demo-left {
  width: 30%;
  height: 100%;
  background-color: chartreuse;
  position: fixed;
  top: 0px;
  left: 0px;
  overflow: auto;
}
/* 隐藏滚动条 */
.demo-left::-webkit-scrollbar {
  display: none;
}


/* 右侧内容  需要浮动到右侧 为左侧腾出位置 */
.demo-right {
  width: 70%;
  float: right;
  background-color: brown;
}
/* 包裹左右两侧的大盒子需要清除浮动 否则 下面的盒子会被遮挡 */
/* 清除浮动 */
.demo-box::after {
  content: "";
  display: block;
  clear: both;
}



/* 清除默认样式 =========== 无用*/
* {
  margin: 0;
}
ol li {
  height: 60px;
  line-height: 60px;
  text-align: center;
}
</style>