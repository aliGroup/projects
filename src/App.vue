<template>
  <div id="app">
    <!--<img src="./assets/logo.png" alt="">-->
    <!--<router-view></router-view>-->
    <div id="Container">
      <div id="bgContainer">
        <img :src="dcc" alt="查看功能"/>
        <img :src="dce" alt="收藏" @click="test()"/>
        <img :src="dcb" alt="搜索"/>
      </div>
      <div>

      </div>
      <div>

      </div>
      <span id="Sname">店名</span>
      <marquee id="Notice">this is Notice</marquee>
      <div class="dhb"></div>
      <img src="" alt=""/>
    </div>
  </div>
</template>

<script>
  import cc from "./assets/3.ico"
  import dd from "./assets/4.ico"
  import aa from "./assets/1.ico"
  import ee from "./assets/5.ico"
  export default {
  name: 'App',
    data() {
      return {
        dcc: dd,
        dcb:cc,
        dca:aa,
        dce:ee
      }
    },
    methods: {
      test: function () {
        let count=this.dce;
        if(this.dce === count)
        {
          this.dce=this.dca;
        }
        this.dca=count;
      }
    }
}
</script>
<!--vue只需要操作数据从而改变dom，不要太过频繁的操作dom-->
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
    height: 15px;
    width: 15px;
    position: relative;
    display: inline-block;
    padding-right: 3px;
    right: -123px;
    top: 5px;
    cursor:pointer;
  }
  #Sname{
    margin: 0;
    padding: 0;
    position: absolute;
    left: 160px;
    top: 31px;
    font-size:13px;
  }
  #Notice{
    margin: 0;
    padding: 0;
    position: absolute;
    left: 160px;
    top: 52px;
    font-size: 11px;
    width: 160px;
  }
.dhb {
  position: relative;
  width: 500px;
  height: 300px;
  border: 1px solid black;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  line-height: 300px;
}
.dhb:before,
.dhb:after {
  position: absolute;
  content: "";
  display: block;
  border: 1px solid black;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
}
.dhb:before {
  width: 50px;
  height: 50px;
  bottom: -25px;
  right: 25px;
}
.dhb:after {
  width: 20px;
  height: 20px;
  bottom: -50px;
  right: 0;
}
</style>
