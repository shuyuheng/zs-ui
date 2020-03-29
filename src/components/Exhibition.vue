<template>
  <div class="sz-Exhibition">
    <div class="sz-title">{{title}}</div>
    <div class="sz-center">
      <div class="sz-left">
        <div class="sz-left-item">
          <slot />
        </div>
      </div>
      <div class="sz-right">
        <div class="sz-right-item">
          <!-- 功能暂定 -->
          <slot name="controller"/>
        </div>
      </div>
    </div>
    <!-- 代码展示区域 -->
    <div :style="{height:togCode ? codeHeight+'px' : '0px' }" class="sz-code" ref="sz-code">
      <Code :code="code" />
       <div class="table-item"  v-for="(item,i) in data" :key="i">
            <div class="sz-pez-title">{{item.title}}</div>
            <table class="sz-exTable" cellspacing="0" cellpadding="0" border="1">
              <thead>
                <tr>
                  <th  v-for="(item1,i1) in item.tableKey" :key="i1">
                    {{item1.name}}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item1,i1) in item.table" :key="i1">
                  <td v-for="(item2,i2) in item.tableKey" :key="i2">
                    {{item1[item2.key]}}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    </div>
    <div class="sz-toggle-code" @click="togCode = !togCode">
      <svg
        t="1584924840084"
        class="sz-icon"
        :class="{'sz-icon-active':togCode}"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2665"
        width="200"
        height="200"
      >
        <path
          d="M171.15136 341.00224l684.02176 0-342.016 341.99552L171.15136 341.00224z"
          p-id="2666"
          fill="#bfbfbf"
        />
      </svg>
      <span class="sz-toggle-text">{{ !togCode ? '显示代码':'隐藏代码'}}</span>
    </div>
  </div>
</template>

<script>
// 引入 code 组件
import Code from "./ShowCode";
export default {
  name: "sz-Exhibition",
  components: {
    Code
  },
  props: {
    data: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    code: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      togCode: true,
      codeHeight: "auto",
      code1: this.code,
      keyword: ["export", "default", "return"]
    };
  },
  created() {},
  mounted() {
    this.codeHeight = this.$refs["sz-code"].offsetHeight;
    this.togCode = false;
  },
  methods: {}
};
</script>

<style>
.sz-Exhibition div,
.sz-Exhibition {
  box-sizing: border-box;
}
.sz-Exhibition {
  border-top: 1px solid #eee;
  padding: 20px;
  padding-bottom: 0px;
  width: 80%;
  background-color: white;
  position: relative;
  box-shadow: 29px 31px 26px -28px #333;
  border-radius: 20px;
  overflow: hidden;
}
.sz-Exhibition .sz-title {
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  color: #323233;
  text-align: left;
}
.sz-Exhibition .sz-center {
  padding: 20px;
  height: 400px;
  display: flex;
}
.sz-Exhibition .sz-center > div {
  /* background-color: #eee; */
  flex: 1;
  overflow: auto;
  position: relative;
}
/* 左侧demo居中显示 */
.sz-Exhibition .sz-center .sz-left .sz-left-item {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); /*2d移动*/
}
.sz-Exhibition .sz-center .sz-right {
  /* background-color: bisque; */
  overflow: auto;
  border: 20px solid transparent;
  box-sizing: border-box;
}
/* 隐藏滚动条 */
.sz-Exhibition .sz-center > div::-webkit-scrollbar {
  display: none;
}
.sz-Exhibition .sz-code {
  border-top: 1px solid #eee;
  margin: 0 -20px;
  background-color: #272822;
  color: #f8ebbc;
  padding: 0 60px;
  font-size: 16px;
}
.sz-Exhibition .sz-toggle-code {
  margin: 0 -20px;
  background-color: #ffffffb6;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
  padding: 10px;
}
.sz-Exhibition .sz-icon {
  width: 20px;
  height: 20px;
  vertical-align: middle;
  transition: transform 0.3s;
  position: relative;
  left: 25px;
  transition: all 0.5s;
}
.sz-Exhibition .sz-icon-active {
  transform: rotate(-180deg);
}

.sz-Exhibition .sz-toggle-text {
  display: inline-block;
  opacity: 0;
  overflow: hidden;
  vertical-align: middle;
  transition: all 0.5s;
  font-size: 13px;
  color: #999;
  position: relative;
  left: 25px;
  padding: 0 5px;
}
.sz-Exhibition:hover .sz-toggle-text {
  opacity: 1;
  left: 0px;
}
.sz-Exhibition:hover .sz-icon {
  left: 0;
}

/* Vue动画区域 */
.sz-Exhibition .sz-code {
  transition: all 0.4s;
  overflow: hidden;
}
/* table表格区域 */
.sz-Exhibition .sz-pez-title {
  color: #6182e3;
  border-left: 3px solid #dfe2e5;
  padding-left: 10px;
  margin: 10px 0;
  text-align: left;
}
.sz-Exhibition .sz-exTable {
  width: 100%;
  /* 边开给你细线 */
  border-collapse: collapse;
  border: 1px solid #dfe2e5;
  font-size: 1.5vh;
}
.sz-Exhibition .sz-exTable td,
.sz-Exhibition .sz-exTable th {
  text-align: center;
  border-color: #dfe2e5;
  line-height: 35px;
}
.sz-Exhibition .sz-exTable th {
  color:white;
}
.sz-Exhibition .sz-exTable td {
  color: #ddd;
}
.sz-Exhibition .table-item:last-child{
  margin-bottom: 40px;
}
</style>