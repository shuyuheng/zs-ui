<template>
  <div>
    <br />
    <br />
    <br />
    <br />

    <sz-Slide @direction="direction">
      <div style="width:700px;height:400px;background-color:green;">
      </div>
    </sz-Slide>

    <br />
    
    <br />
    <br />
    <br />

    <sz-Sweiper :model="images" :time="0.5" auto type="infinite" slide>
      <template v-slot:default="{data:data}">
        {{data}}
        <img :src="data.src" width="100%" height="100%" @click="fn" />
      </template>
    </sz-Sweiper>

    <!-- <demo></demo> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 轮播图数据
      images: [
        {
          title: "第一张图片",
          src: "http://www.shuyuhng.top:9999/img/aa.bdab5332.jpg"
        },
        {
          title: "第二张图片",
          src: "http://www.shuyuhng.top:9999/img/aa.bdab5332.jpg"
        },
        {
          title: "第三张图片",
          src: "http://www.shuyuhng.top:9999/img/aa.bdab5332.jpg"
        }
      ]
    };
  },
  methods: {
    direction(direction) {
      switch (direction) {
        case "left":
          console.log("左滑");
          break;
        case "right":
          console.log("右滑");
          break;
        case "up":
          console.log("上滑");
          break;
        case "down":
          console.log("下滑");
          break;
        default:
          break;
      }
    },
    move(moveData) {
      console.log(moveData);
    },
    fn(){
      console.log('7878')
    }
  }
};
</script>

<style>
</style>