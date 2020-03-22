<template>
  <div :style="reStyle()" class="steep" @mouseover="clearTimer" @mouseout="openTimer">
    <div v-if="!noBtn" class="steep-left steep-btn" @click="leftFn">
      <slot name="left-btn">
        <span class="default-btn">《</span>
      </slot>
    </div>
    <!-- 中间的类容 -->
    <Slide @direction="direction" >
      <div
        class="steep-content"
        :class="[type,{'noTransition':transition}]"
        :style="'transition-duration:'+time+'s;'+steepSetWidth"
      >
        <div
          :style="'transition-duration:'+time+'s;'+reStyle()"
          class="steep-item"
          :class="{
        'show':type == 'fade' && currentIndex == i,
        'front':type == 'stack' && currentIndex == i,
        'xianglingl':(xlIndex[0]==i),
        'xianglingf':( xlIndex[1] == i),
      }"
          v-for="(item,i) in data"
          :key="i"
        >
          <div class="slot-item">
            <!-- 轮播内容区域 -->
            <slot :data="item"></slot>
          </div>
        </div>
      </div>
    </Slide>
    <div v-if="!noBtn" class="steep-right steep-btn" @click="rightFn">
      <slot name="right-btn">
        <span class="default-btn">》</span>
      </slot>
    </div>
    <!-- 底部的指示器 -->
    <div class="indicator" v-if="!noIndicator">
      <div
        class="steep-indicator-item"
        v-for="(item,i) in dataLength()"
        :key="i"
        :class="[bottomBtnClass,{'active':comIndex == i}]"
        @click="minBtn(i)"
      ></div>
    </div>
  </div>
</template>

<script>
// 引入滑动组件
import Slide from "./Slide";
export default {
  name: "sz-Sweiper",
  components: {
    Slide
  },
  props: {
    bottomBtnClass: String,
    // 轮播图数据
    model: {
      // 数据类型
      type: Array,
      // 此属性必填
      required: true
    },
    width: {
      type: [String, Number],
      default: 700
    },
    height: {
      type: [String, Number],
      default: 400
    },
    type: {
      type: String,
      default: "default"
    },
    // 动画事件
    time: {
      type: Number,
      default: 0.8
    },
    auto: {
      type: Boolean,
      default: false
    },
    autoTime: {
      type: Number,
      default: 3000
    },
    // 指示器
    noIndicator: {
      type: Boolean,
      default: false
    },
    // 左右按钮
    noBtn: {
      type: Boolean,
      default: false
    },
    slide: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    steepSetWidth() {
      if (this.type == "default" || this.type == "infinite") {
        return `width:${this.steepWidth}px;transform: translateX(${-this
          .currentIndex * this.width}px);`;
      }
      return "";
    },
    // 计算当前索引
    comIndex() {
      // 判断
      if (this.type == "infinite" && this.currentIndex == this.data.length - 1)
        return 0;
      return this.currentIndex;
    },
    // 计算相邻索引
    xlIndex() {
      let up = this.currentIndex - 1;
      let don = this.currentIndex + 1;
      // 判断
      up = up == -1 ? this.data.length - 1 : up;
      don = don == this.data.length ? 0 : don;
      return [up, don];
    }
  },
  methods: {
    direction(direction) {
      if (!this.slide) return;
      switch (direction) {
        case "left":
          this.rightFn();
          break;
        case "right":
          this.leftFn();
          break;
        default:
          break;
      }
    },
    // 按钮点击
    minBtn(i) {
      // 开锁
      this.lock = true;
      this.transition = false;
      // 判断是否是最后一个点击第一个
      if (
        this.type == "infinite" &&
        this.currentIndex == this.data.length - 2 &&
        i == 0
      ) {
        this.transition = true;
        return this.rightFn();
      }
      if (
        this.type == "infinite" &&
        this.currentIndex == 0 &&
        i == this.data.length - 2
      ) {
        this.transition = true;
        return this.leftFn();
      }
      this.currentIndex = i;
    },
    // 返回数组长度
    dataLength() {
      if (this.type == "infinite") return this.data.length - 1;
      return this.data.length;
    },
    // 设置对应宽高
    reStyle() {
      // 判断]
      let width = this.width;
      let height = this.height;
      if (!isNaN(width)) width += "px";
      if (!isNaN(height)) height += "px";
      return `width: ${width};height: ${height};`;
    },
    //左右按钮
    rightFn() {
      // 验证锁
      if (!this.lock) return;
      // 锁上
      this.lock = false;
      // 延迟开锁
      this.unlocking();
      // 如果是无限滚动
      if (
        this.currentIndex == this.data.length - 1 &&
        this.type == "infinite"
      ) {
        this.currentIndex = 0;

        return setTimeout(() => {
          // 先开锁
          this.lock = true;
          this.rightFn();
        }, 1);
      }
      this.transition = false;
      this.currentIndex++;
      // 如果是无限模式
      if (
        this.currentIndex == this.data.length - 1 &&
        this.type == "infinite"
      ) {
        setTimeout(() => {
          this.transition = true;
          this.currentIndex = 0;
        }, this.time * 1000);
        return;
      }
      if (this.currentIndex == this.data.length) {
        this.currentIndex = 0;
      }
    },
    leftFn() {
      // 验证锁
      if (!this.lock) return;
      // 锁上
      this.lock = false;
      // 延迟开锁
      this.unlocking();
      // 如果是无限滚动
      if (this.currentIndex == 0 && this.type == "infinite") {
        this.currentIndex = this.data.length - 1;
        return setTimeout(() => {
          // 先开锁
          this.lock = true;
          this.leftFn();
        }, 1);
      }
      this.transition = false;
      this.currentIndex--;
      // 如果是无限模式
      if (this.currentIndex == 0 && this.type == "infinite") {
        setTimeout(() => {
          this.transition = true;
          this.currentIndex = this.data.length - 1;
        }, this.time * 1000);
        return;
      }
      if (this.currentIndex < 0) {
        this.currentIndex = this.data.length - 1;
      }
    },
    // 开锁
    unlocking() {
      setTimeout(() => {
        this.lock = true;
      }, this.time * 1000);
    },
    // 开启定时器
    openTimer() {
      // 判断是否可以开启
      if (!this.auto) return;
      // 开局清除
      clearInterval(this.timer);
      // 启动
      this.timer = setInterval(() => {
        this.rightFn();
      }, this.autoTime);
    },
    // 清除定时器
    clearTimer() {
      clearInterval(this.timer);
    },
    resetData() {
      let arr = [];
      this.model.forEach((item, i) => {
        arr[i] = item;
      });
      // 设置宽高
      if (this.type == "default") {
        this.steepWidth = this.width * arr.length;
      }
      if (this.type == "infinite") {
        arr.push(arr[0]);
        this.steepWidth = this.width * arr.length;
      }
      this.data = arr;
    }
  },
  data() {
    return {
      steepWidth: 0,
      // 当前显示那一张图片
      currentIndex: 0,
      transition: true,
      // 锁
      lock: true,
      // 定时器
      timer: null,
      data: []
    };
  },
  created() {
    // 刷新数据
    this.resetData();
  },
  // 加载完毕
  mounted() {
    this.openTimer();
  },
  beforeDestroy() {
    // 清除定时器
    this.clearTimer();
  },
  provide() {
    return {
      data: this.data
    };
  },
  watch: {
    cityName: {
      handler() {
        this.resetData();
      },
      deep: true
    },
    type: {
      handler() {
        this.resetData();
      },
      deep: true
    }
  }
};
</script>

<style>
.steep {
  position: relative;
  overflow: hidden;
}
.steep .steep-btn {
  position: absolute;
  top: 50%;
  min-width: 60px;
  min-height: 60px;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 3;
}
.steep .steep-btn .default-btn {
  display: block;
  width: 100%;
  height: 100%;
  line-height: 60px;
  text-align: center;
  background-color: rgba(99, 99, 99, 0.5);
  color: wheat;
  font-size: 22px;
  user-select: none;
}
.steep .steep-btn .default-btn:hover {
  background-color: rgba(44, 44, 44, 0.5);
  color: aqua;
}
.steep .steep-left {
  left: 0;
}
.steep .steep-right {
  right: 0;
}
.steep .steep-content {
  height: 100%;
  position: relative;
}
.steep .steep-item .slot-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
/* 默认 */
.steep .steep-content.default,
.steep .steep-content.infinite {
  transition: transform;
}
.steep .steep-content.default .steep-item,
.steep .steep-content.infinite .steep-item {
  float: left;
  position: relative;
}
/* 淡入淡出动画 */
.steep .steep-content.fade .steep-item {
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity;
  opacity: 0;
}
/* 淡出 */
.steep .steep-content.fade div.steep-item.show {
  opacity: 1;
}
/* 无限 */
.noTransition {
  transition: none !important;
}
/* 层叠 */
.steep .steep-content.stack .steep-item {
  position: absolute;
  opacity: 0;
  z-index: -1;
  left: 0%;
  top: 0%;
  transform: scale(0.5);
  transition-property: all;
}
.steep-content.stack .steep-item.front {
  z-index: 1;
  opacity: 1;
  transform: scale(0.7);
  left: 0%;
}
/* 相邻的 */
.steep-content.stack .steep-item.xianglingf {
  z-index: 0;
  opacity: 1;
  transform: scale(0.5);
  left: 62%;
  top: 10%;
}
.steep-content.stack .steep-item.xianglingl {
  z-index: 0;
  opacity: 1;
  transform: scale(0.5);
  left: -62%;
  top: 10%;
}
/* 指示器 */
.steep .indicator {
  width: 80%;
  height: 40px;
  /* background-color: red; */
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  text-align: center;
  line-height: 40px;
}
.steep-indicator-item {
  display: inline-block;
  padding: 3px 10px;
  background-color: rgba(44, 44, 44, 0.2);
  margin: 0 2px;
  vertical-align: middle;
  cursor: pointer;
}
.steep-indicator-item.active {
  background-color: sandybrown;
}
/* .ll{
  border-radius: 50%;
} */
</style>