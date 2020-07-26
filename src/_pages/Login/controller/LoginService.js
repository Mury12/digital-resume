import Vue from '../../../prototype';

const LoginService = new Vue({
  data: {
    vm: this
  },
  methods: {
    do: async function (username, password) {
      return await this.$post(this.$getWsUrl('USER', 'LOGIN'), {
        username,
        password,
      }).then((res) => {
        console.log(res);
        if ("token" in res.data) {
          this.$setSessionToken(res.data.token);
          sessionStorage.setItem('usuario', JSON.stringify(res.data));
          return {
            success: true,
            msg: "Você entrou. Estamos carregando seus dados."
          }
        }
      }).catch(() => {
        return {
          success: false,
          msg: 'Usuário ou senha incorretos.'
        }
      });
    },
    done: function () {
      this.$setSessionToken('');
      sessionStorage.clear();
      return true;
    }
  }
})
export default LoginService;