import Vue from '../../../prototype';

const LoginService = new Vue({
  data: {
    vm: this
  },
  methods: {
    do: async function (user, password) {
      return await this.$post(this.$getWsUrl('user', 'login'), {
        user,
        password,
        _: 'auth_request'
      }).then(async (r) => {

        if ("err" in r.data) {
          return {
            success: false,
            msg: r.data.err
          }
        } else if ("session_token" in r.data) {
          this.$setSessionToken(r.data.session_token);
          const user = await this.getProfile();
          sessionStorage.setItem('usuario', JSON.stringify(user));
          return {
            success: true,
            msg: "Você entrou. Estamos carregando seus dados."
          }
        }
      }).catch(() => {
        return {
          success: false,
          msg: 'Houve um erro ao realizar login.'
        }
      });
    }
  }
})
export default LoginService;