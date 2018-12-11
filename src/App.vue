<template>
  <div id="app">
    <!--<img src="./assets/logo.png" alt="">-->
    <!--<router-view></router-view>-->
    <div id="Container">
      <div id="bgContainer">
        <img src="assets/3.ico" alt="查看功能"/>
        <img src="assets/1.ico" alt="收藏"/>
        <img src="assets/4.ico" alt="搜索"/>
      </div>
      <div></div>
      <div></div>`
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:100%;
  height:100%;
  padding:0;
  margin:0;
}
  #Container{
    width:100%;
    height:100%;
    padding:0;
    margin:0;
  }
  #bgContainer{
    widht:100%;
    height:95px;
    background: url("./assets/2.jpg");
    -webkit-background-size:cover;
    background-size:cover ;
  }
  #bgContainer>img{
    width:100%;
    height:100%;
  }
</style>
