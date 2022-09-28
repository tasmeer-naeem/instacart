<template>
<div>
  <NavBar/>
    <router-view/>
</div>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'


//import moment from 'moment'
import NavBar from './components/NavBar.vue' 
export default {
  name: 'App',
  components: {
    NavBar
},

  mounted(){
      // let m = moment().format('yyyy-MM-DD')
      // console.log(m)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
