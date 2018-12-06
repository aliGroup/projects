<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <router-link :to="{path:'/home_user'}">cc</router-link>
    <router-link :to="{path:'/'}">dd</router-link>
    <div id="left" style="width: 220px;height: auto"><router-view name="top"></router-view></div>
    <div id="right" style="width: 100%;height: auto;"><router-view name="middle"></router-view></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
