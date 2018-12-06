import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import list from '../components/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorldLink',
      component:HelloWorld,
      children:[{
        path:'home_user',
          components:{
          top:HelloWorld,middle:list
        }
      }]
    },
    {
      path:"/list",
      name:"listLink",
      component:list
    },
    {
      path:"*",
      redirect:"/"
    }
  ],
  mode:"history"
})







































