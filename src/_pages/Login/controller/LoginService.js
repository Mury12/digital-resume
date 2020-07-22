import Vue from '../../../prototype';

const LoginService = new Vue({
  data: {
    vm: this
  },
  methods: {
    do: function (user, password) {
      return this.$post(this.$getWsUrl('user', 'login'), {
        user,
        password,
        _: 'auth_request'
      }).then( async (r) => {

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
    },
    getProfile: function() {
      return this.$post(this.$getWsUrl('user', 'profile'), {
        _: 'get_profile'
      }).then(r => {
        if(r){
          this.$profile(r.data);
          sessionStorage.setItem("usuario", JSON.stringify(this.$profile()));
          return r.data;
        }     
      })
    },
    getLoginPrincipal: function() {
      return this.$post(this.$getWsUrl('user', 'getprincipal'), {
        _: 'get_principal',
        document_number: this.$profile().document_number
      }).then(r => {
        if(r){
          return r.data
        }
      })
    },
    getLogins: function() {
      return this.$post(this.$getWsUrl('user', 'getlogins'), {
        _: 'get_logins',
        document_number: this.$profile().document_number
      }).then(r => {
        if(r){
          return r.data
        }
      })
    },
    setLogin: function(user) {
      return this.$post(this.$getWsUrl('user', 'setlogin'), {
        _: 'set_login',
        userID: user,
      }).then(r => {
        if(r){
          return r.data
        }
      })
    }
  },
})
export default LoginService;