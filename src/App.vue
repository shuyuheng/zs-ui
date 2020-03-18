<template>
  <div>
    <div style="width:1200px;height:600px"
    >
      轮播图 
      <steep :data="images"
      type="stack"
      loop
      bottomBtnClass="ll"
      >
        <div
        style="color:red;font-size:45px"
        :slot="'steep_item'+i"
        v-for="(item,i) in images"
        :key="i"
        >内容：{{i}}</div>
      </steep>
      <!-- 测试使用 -->
      <zs-Sweiper :data=images>
        
      </zs-Sweiper>
    </div>
  </div>
</template>

<script>
import steep from "./components/Steep.vue";

export default {
  components: {
    steep, //轮播图
  },
  data() {
    return {
      // 轮播图数据
      images: [
        {
          src: require("./assets/images/aa.jpg")
        },
        {
          src: require("./assets/images/bb.jpg")
        },
        {
          src: require("./assets/images/cc.jpg")
        },
        {
          src: require("./assets/images/dd.jpg")
        },
        {
          src: require("./assets/images/ee.jpg")
        },
        {
          src: require("./assets/images/ff.jpg")
        }
      ]
    };
  }
};
</script>

<style>
</style>