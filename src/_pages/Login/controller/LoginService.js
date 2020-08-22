import Vue from '../../../prototype';
import { user } from '../../../models/user'
const LoginService = new Vue({
  data: {
    vm: this
  },
  methods: {
    do: async function (username, password) {
      /** Delete this when your webservice is set */
      this.$profile(user);
      this.$session.set('@app:user', JSON.stringify(user))
      this.$setSessionToken(username + password);
      this.$session.set('@app:token', JSON.stringify(username + password));
      return {
        success: true,
        msg: 'You\'re logged in. Loading..'
      };
      /* Uncoment this when your webservice is set
      try {
        const result = await this.$post(this.$getWsUrl('USER', 'LOGIN'), {
          username,
          password,
        });

        if ("token" in result.data) {
          this.$setSessionToken(result.data.token);
          this.$profile(result.data);
          this.$session.set('@app:user', JSON.stringify(result.data));
          this.$session.set('@app:token', JSON.stringify(result.data.token));
          
          return this.$respond("Você entrou. Estamos carregando seus dados.")
        }
      } catch (err) {
        return this.$respond(err.response.data, true)


      }
      */
    },
    done: function () {
      this.$setSessionToken('');
      this.$session.clear().destroy();
      return this.$respond("Saindo..");
    },
    
  },
});

export default LoginService;
