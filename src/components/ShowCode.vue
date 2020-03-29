<template>
  <pre class="sz-show-code">
        <span class="line" v-for="(item,i) in code1" :key="i"> <template v-for="(item1,i1) in item"><template v-if="item1.includes(' ') || item1 == ''">{{item1}}</template><span
  :class="disposeClass(item1)"
  v-else
  :key="i1"
>{{item1}}</span></template></span>
      </pre>
</template>

<script>
export default {
  name: "sz-Code",
  props: {
    code: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      code1: this.code,
      keyword: ["export", "default", "return","import",'from','npm','let','const','var']
    };
  },
  created() {
    let arr = this.code1
      .replace("<js>", "<script>")
      .replace("</js>", "<script>")
      .split(/\n/);
    arr.forEach((item, i) => {
      arr[i] = item.split(/(\s{1}|=|>|\/>)/g);
      arr[i] = arr[i].map(item => {
        return item;
      });
    });
    this.code1 = arr;
  },
  methods: {
    disposeClass(item) {
      if (
        item.includes("<") ||
        item.includes(">") ||
        this.keyword.indexOf(item.trim()) != -1
      ) {
        return "nt";
      }
      if (item.includes('"') || item.includes("'")) return "s";
      if (item.includes('{') || item.includes("}")) return "kuo";
      if (item.includes('(') || item.includes(")")) return "xkuo";
      if (item.includes(":") || item.includes("=")) return "na";
    }
  }
};
</script>

<style>
pre.sz-show-code {
  color: #ebebad;
  text-align: left;
  padding: 0;
  margin: 0;
  width: 100%;
  white-space: pre-wrap; /* css3.0 */
  white-space: -moz-pre-wrap; /* Firefox */
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word; /* Internet Explorer 5.5+ */
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
.sz-show-code .line {
  display: block;
  word-break: break-all;
  word-wrap: break-word;
}
.sz-show-code .nt {
  color: #f92672;
}
.sz-show-code .kuo{
  color: #ffb728;
}
.sz-show-code .xkuo{
  color: #1c9efe;
}
.sz-show-code .s {
  color: #dadb5a;
}
.sz-show-code .na {
  color: #ae81ff;
}
</style>