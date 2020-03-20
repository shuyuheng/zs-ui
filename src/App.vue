<template>
  <div>


<br>
<br>
<br>
<br>


    <sz-Slide>
      <div style="width:700px;height:400px;background-color:green;"></div>
    </sz-Slide>

<br>
<br>
<br>
<br>

    <zs-Sweiper :data="images" :time="0.5" auto>
      <template v-slot:default="{data:data}">
        {{data}}
        <img :src="data.src" width="100%" height="100%" />
      </template>
    </zs-Sweiper>




  </div>
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