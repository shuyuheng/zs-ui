<template>
    <div @mousedown="keydown" @mouseup="mouseup" class="sz-slide" ref="slide">
      <slot></slot>
    </div>
</template>

<script>
// 滑动组件
export default {
  name: "sz-Slide",
  data() {
    return {
        width:null,
        height:null
    };
  },
  methods: {
    // 鼠标按下
    keydown(e) {
      let x = e.offsetX;
      let y = e.offsetY;
      console.log("按下", x, y);
    },
    mouseup(e) {
      let x = e.offsetX;
      let y = e.offsetY;
      console.log("弹起", x, y);
    }
  },
  mounted () {
    //   获取宽高
    this.width = this.$refs.slide.clientWidth
    this.height = this.$refs.slide.clientHeight
    console.log('宽高',this.width,this.height)
  }
};
</script>

<style>
.sz-slide{
    display: inline-block;
}
</style>