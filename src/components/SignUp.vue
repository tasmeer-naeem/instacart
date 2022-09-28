<template>
  <div class="signup">
      sign up
     <br><br>
     <form @submit.prevent="handleSubmit" >
     <input type="text" name="first_name" placeholder="first name" v-model="first_name" ><br>
      <input type="text" name="last_name" placeholder="last name" v-model="last_name"><br>
     <input type="text" name="email" placeholder="email" v-model="email"><br>
      <input type="text" name="new_password" placeholder="new password" v-model="new_password"><br>
      <input type="text" name="confirm_password" placeholder="confirm password" v-model="confirm_password"><br>
      <button type="submit" >Submit</button>
      </form>
  </div>
</template>

<script>
//import * as Vue from 'vue'
//import VueAxios from 'vue-axios'
//import axios from 'axios'
export default {
            name : "SignUp",

            data(){
              return{
                first_name:'',
                last_name:'',
                email:'',
                new_password:'',
                confirm_password:''
              }
            },

            methods:{
              async handleSubmit(){
               const dataa = {
                 first_name:this.first_name,
                last_name:this.last_name,
                  email:this.email,
                 new_password:this.new_password,
                 confirm_password:this.confirm_password
                }
               // console.log("submit",dataa)
              let res = await fetch("http://localhost:3000/register",{
                 method:"POST",
                 headers: {'Content-Type' : 'application/json'},
                 body: JSON.stringify(dataa)
               })
               const data = await res.json();
               console.log(data)

               this.$router.push("/signin")

              // let res = await axios.post("http://localhost:3000/register",dataa)
              // console.log(res)
              //  axios.post('http://localhost:7000/register',dataa)
              //  .then((res)=>{
              //     console.log(res)
              //  })
              //   .catch((e)=>{
              //     console.log(e)
              //   })
              }
            },
            
}
</script>

<style>
.signup{
    display: inline-grid;

}
</style>