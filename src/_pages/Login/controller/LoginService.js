import Vue from '../../../prototype';

const LoginService = new Vue({
  data: {
    vm: this
  },
  methods: {
    do: async function (username, password) {

      try {
        const result = await this.$post(this.$getWsUrl('USER', 'LOGIN'), {
          username,
          password,
        });

        if ("token" in result.data) {
          this.$setSessionToken(result.data.token);
          this.$session.set('@app:user', result.data);
          this.$session.set('@app:token', result.data.token);
          return {
            success: true,
            msg: "Você entrou. Estamos carregando seus dados."
          }
        }
      } catch (err) {
        return {
          success: false,
          msg: err.response.data.msg
        }


      }
    },
    done: function () {
      this.$setSessionToken('');
      this.$session.clear().destroy();
      return true;
    }
  },
});

export default LoginService;
