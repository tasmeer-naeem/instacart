<template>
  <div class="signin">
      sign in
        <br><br>
      <form @submit.prevent="handleLogin">
      <input type="text" name="email" placeholder="email" v-model="email" ><br>
      <input type="text" name="password" placeholder="password"  v-model="password"><br>
      <button type="submit" >Submit</button>
      </form>
  </div>
</template>

<script>
//import axios from 'axios'
export default {
            name : "SignIn",
            data(){
              return{
                email:'',
                password:''
              }
            },

            methods:{
             async handleLogin(){
              //  console.log('login')

              // const dataa={
              //   email:this.email,
              //   password:this.password
              // }

            // let res =  await this.axios.post("http://localhost:7000/login",dataa)
            //  console.log('res',res)

            this.$router.push('/')
              }
            }
}
</script>

<style>
.signin{
    display: inline-grid;
}
</style>