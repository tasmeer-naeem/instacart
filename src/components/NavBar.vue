<template>
  <div class="navbar">
      <router-link to="/">Home</router-link>
      <router-link to="/signup">Sign UP</router-link>
      <router-link to="/signin">Sign In</router-link>

  </div>
</template>

<script>
export default {
        name : "NavBar"
}
</script>

<style>
.navbar{
    display: flex;
    justify-content: space-evenly;
}
</style>