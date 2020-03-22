<template>
  <div
    class="sz-slide"
    ref="slide"
    @mousedown.stop="keydown"
    @mouseup.stop="mouseup"
    @mousemove.stop="mousemove"
    @mouseleave.stop="mouseleave"
  >
    <slot></slot>
  </div>
</template>

<script>
// 滑动组件
export default {
  name: "sz-Slide",
  props: {
    // 灵敏度
    sensitivity: {
      type: [String, Number],
      default: 40
    }
  },
  data() {
    return {
      isSlide: false,
      direction: null,
      startCor: {
        x: 0,
        y: 0
      }
    };
  },
  created() {
  },
  methods: {
    // 鼠标按下
    keydown(e) {
      this.startCor.x = e.offsetX;
      this.startCor.y = e.offsetY;
      //   允许移动
      this.isSlide = true;
    },
    mouseup(e) {
      //   禁止移动
      this.isSlide = false;
      let x = e.offsetX;
      let y = e.offsetY;
      let caX = this.startCor.x - x;
      let caY = this.startCor.y - y;
      //   判断
      if (Math.abs(caX) > Math.abs(caY)) {
        // 判断灵敏度
        if (Math.abs(caX) <= this.sensitivity) return;
        if (caX > 0) {
          this.direction = "left";
        } else {
          this.direction = "right";
        }
      } else {
        if (Math.abs(caY) <= this.sensitivity) return;
        if (caY > 0) {
          this.direction = "up";
        } else {
          this.direction = "down";
        }
      }
      // 发送事件
      this.$emit('direction', this.direction)
    },
    mousemove(e) {
      if (this.isSlide) {
        let obj ={x:0,y:0}
        obj.x = e.offsetX- this.startCor.x;
        obj.y = e.offsetY - this.startCor.y;
        // 发送事件
        this.$emit('move', obj)
      }
    },
    mouseleave() {
      this.isSlide = false;
    }
  },
};
</script>

<style>
.sz-slide {
  width: 100%;
  height: 100%;
  /* 禁止用户选中 */
  user-select: none;
}
.sz-slide * {
 /* 禁止用户选中 */
  user-select: none;
  -webkit-user-drag: none;
  user-drag: none;
}
</style>