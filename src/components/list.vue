<template>
<div>
<h1>{{msg[0]}}</h1>
  <h2>{{cd}}</h2>
  <ul>
    <li v-for="back in msg">{{back}}</li>
  </ul>
</div>
</template>

<script>
  export default {
    name: 'list',
    data () {
      return {msg:["1","2","3","4"], cd: "进入路径"}
    }
  }
</script>

<style scoped>
ul{
  padding:0;
  margin:0;
}
  li{
    margin:0;
  }
</style>
