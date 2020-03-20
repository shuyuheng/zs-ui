<template>
  <zs-Sweiper :data="images" width="700" height="400" :time="1" auto>
    <template v-slot:default="{data:data}">
      {{data}}
      <img :src="data.src" width="100%" height="100%" />
    </template>
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

<style>
</style>