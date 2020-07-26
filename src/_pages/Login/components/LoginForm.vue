<template>
  <b-form class @keyup.enter="auth">
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
    <transition mode="out-in" name="shrink-fade">
      <div v-if="!request.onRequest">
        <b-button :disabled="request.onRequest" type="button" @click="auth" variant="success">Entrar</b-button>
      </div>
      <b-spinner type="grow" variant="success" v-if="request.onRequest" />
    </transition>
  </b-form>
</template>

<script>
import LoginService from "../controller/LoginService";
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
      if (this.request.onRequest) return;
      this.request.onRequest = true;
      this.request.requested = false;

      this.request.onRequest = true;
      LoginService.do(this.username, this.password)
        .then((res) => {
          if (res) {
            this.request.success = res.success;
            this.request.msg = res.msg;
            if (res.success) {
              this.$router.push("/dashboard");
            }
          }
        })
        .finally(() => {
          this.request.requested = true;
          this.request.onRequest = false;
          this.$bvToast.toast(this.request.msg, {
            title: "Mensagem",
            autoHideDelay: 5000,
            appendToast: false,
            variant: this.request.success ? 'success' : 'danger',
          });
        });
    },
  },
};
</script>

<style scoped>
</style>