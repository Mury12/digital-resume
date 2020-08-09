<template>
  <div id="auth-page">
    <b-row class="justify-content-center align-items-center h-100">
      <b-col cols="12">
        <div class="brand-logo mb-5">
          <img src="../../../assets/logo.png" />
          <img src="../../../assets/logobot.png"  class="ml-3 mb-3" width=50/>
        </div>
        <login-form />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import LoginForm from "./LoginForm";
export default {
  data() {
    return {};
  },
  components: {
    LoginForm,
  },
};
</script>

<style scoped>
#auth-page {
  height: 70vh;
  width: 100%;
}
</style>