<template>
  <b-form class>
    <label>
      Nome de usuário:
      <br />
      <b-input type="text" placeholder="Garry" v-model="username" />
    </label>
    <br />
    <label>
      Sua senha:
      <br />
      <b-input type="password" placeholder="•••••••••" v-model="password" />
    </label>
    <br />
    <transition mode="out-in" name="fade">
        <div v-if="!request.onRequest">
      <b-button
        :disabled="request.onRequest"
        type="button"
        @click="auth"
        variant="success"
      >Entrar</b-button>
      </div>
      <b-spinner variant="success" v-if="request.onRequest" />
    </transition>
  </b-form>
</template>

<script>
// import LoginService from "../controller/LoginService";
export default {
  data() {
    return {
      username: "",
      password: "",
      request: {
        onRequest: false,
        success: false,
        msg: "",
      },
    };
  },
  methods: {
    auth: function () {
      this.request.onRequest = true;

      setTimeout(() => {
        this.request.onRequest = false;
      }, 3000);
      //   LoginService.do(this.username, this.password).then((res) => {
      //       console.log(res);
      //   });
    },
  },
};
</script>

<style scoped>
</style>