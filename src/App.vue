<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  //  beforeCreate: function() {
  //   if (
  //     (!this.$authenticated() && this.$route.meta.protected) ||
  //     (this.$route.name == "Other" && !this.$authenticated())
  //   )
  //     this.$router.push("/auth/login");
  //   else if (this.$authenticated()) {
  //     this.$router.push("/");
  //   }
  // },
  watch: {
    $route: {
      handler: function() {
        document.title = this.$route.meta.title + " | Money Right";
      }
    }
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
