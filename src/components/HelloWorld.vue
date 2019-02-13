<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
     return {
     }
  },
  methods: {
     //构建自定义信息窗体
    createInfoWindow() {
      const title = []
      title.push('编 号： 0003')
      title.push('状 态： 正常')
      const content1 = []
      content1.push('<img src="">地址：北京市朝阳区阜通东大街6号院3号楼东北8.3公里')
      content1.push('电话：010-64733333')
      const content = content1.join('<br/>')
      const info = document.createElement('div')
      info.className = 'custom-info input-card content-window-card'
      //可以通过下面的方式修改自定义窗体的宽高
      //   info.style.width = '100px'
      // 定义顶部标题
      const top = document.createElement('div')
      const titleD = document.createElement('div')
      //   const closeX = document.createElement('img')
      top.className = 'info-top'
      titleD.innerHTML = title
      //   closeX.src = 'https://webapi.amap.com/images/close2.gif'
      //   closeX.onclick = map.clearInfoWindow();
      top.appendChild(titleD)
      //   top.appendChild(closeX)
      info.appendChild(top)
      //   // 定义中部内容
      const middle = document.createElement('div')
      middle.className = 'info-middle'
      middle.style.backgroundColor = 'white'
      middle.innerHTML = content
      info.appendChild(middle)
      // 定义底部内容
      const bottom = document.createElement('div')
      bottom.className = 'info-bottom'
      bottom.style.position = 'relative'
      bottom.style.top = '0px'
      bottom.style.margin = '0 auto'
      //   const sharp = document.createElement('img')
      //   sharp.src = 'https://webapi.amap.com/images/sharp.png'
      //   bottom.appendChild(sharp)
      info.appendChild(bottom)
      return info
    },
    jump() {
      alert(document.getElementById('box'))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
