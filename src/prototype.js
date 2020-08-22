import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue';
import VueTheMask from 'vue-the-mask';
import VueSession from 'vue-session';
import PageTitle from './components/PageTitle/PageTitle.vue';
import VueScrollTo from 'vue-scrollto'
import moment from 'moment'

let wsr = require('../ws-routes.js').default;

Vue
  .use(VueSession, { persist: true })
  .use(VueTheMask)
  .use(BootstrapVue)
  .use(VueScrollTo, {
    container: "body",
    duration: 500,
    easing: "ease",
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
  })



import $user from './models/user';
import Axios from 'axios';

Vue.component('page-title', PageTitle);

Vue.prototype.$post = async (url, data) => {
  if (Vue.$onRequest) return;

  let form_data = new FormData();

  for (var key in data) {
    form_data.append(key, data[key]);
  }

  Vue.$onRequest = true;
  return await Axios.post(url, form_data, {
    headers: {
      'Content-Type': 'multipart/form-data; charset=utf-8; boundary=' + Math.random().toString().substr(2),
      Accept: 'application/json',
      'User-Addr': Vue.$userIp,
      'Authorization': Vue.prototype.$sessionToken || 'none'
    }
  }, 'json').then(r => {
    return r;
  }).catch(e => {
    return e;
  }).finally(() => {
    Vue.$onRequest = false
  });
}

Vue.prototype.$user = $user;

Vue.prototype.$getMedia = media => {
  return require('@/assets/images/' + media);
}

Vue.prototype.$money = (amount, currency = 'BRL') => {
  switch (currency) {
    case 'BRL':
      return `R$ ${String(Number(amount).toFixed(2)).replace('.', ',')}`
    case 'COIN':
      return `${String(Number(amount).toFixed(2)).replace('.', ',')} Coins`
  }
}

Vue.prototype.$authenticated = () => {
  return Vue.prototype.$getSessionToken() ? true : false;
}

Vue.prototype.$profile = (data = null) => {
  if (data) {
    Vue.prototype.$user = data;
  } else {
    return Vue.prototype.$user;
  }
}

Vue.prototype.$dashboard = (data) => {
  if (data) {
    Vue.prototype.$dash = data
  } else {
    return Vue.prototype.$dash;
  }
}
Vue.prototype.$awaiting = (data) => {
  if (data) {
    Vue.prototype.$waiters = data
  } else {
    return Vue.prototype.$waiters;
  }
}

Vue.prototype.$uplines = (data) => {
  if (data) {
    Vue.prototype.$upline = data
  } else {
    return Vue.prototype.$upline;
  }
}

Vue.prototype.$downlines = (data) => {
  if (data) {
    Vue.prototype.$downline = data
  } else {
    return Vue.prototype.$downline;
  }
}

Vue.prototype.$uplines = (data) => {
  if (data) {
    Vue.prototype.$upline = data
  } else {
    return Vue.prototype.$upline;
  }
}

Vue.prototype.$orionPriceOf = coinAmount => {
  return coinAmount * 0.7;
}

Vue.prototype.$getWsUrl = (domain, name = "BASE") => {
  domain = domain.toUpperCase();
  name = name.toUpperCase() || "";
  if (domain === 'BASE') {
    return wsr.WS.URL
  }
  return wsr.WS.URL + wsr.WS[domain][name]
}

Vue.prototype.$setCookie = (name, value) => {
  document.cookie = `${name}=${value}`
}

Vue.prototype.$getCookie = (name) => {
  var c = document.cookie;
  var r = c.split(name)[1];
  if (r) {
    r = (r.split(';')[0]).split('=');
    return r[1];
  }
  return false
}

Vue.prototype.$unsetCookie = (name) => {
  document.cookie = `${name}=${null}`
}

Vue.prototype.$onRequest = false;

Vue.prototype.$userIp = '';

Axios.get('https://api.ipify.org?format=json').then(r => {
  Vue.$userIp = r.data.ip
});

Vue.prototype.$get = async (url, params = {}) => {
  return await Axios.get(url, {
    headers: {
      'Authorization': Vue.prototype.$sessionToken
    },
    params
  }).then((res) => {
    return res
  }).catch(err => {
    return err
  })
}
Vue.prototype.$delete = async (url, params = {}) => {
  return await Axios.delete(url, {
    headers: {
      'Authorization': Vue.prototype.$sessionToken
    },
    params
  }).then((res) => {
    return res
  }).catch(err => {
    return err
  })
}

Vue.prototype.$post = async (url, data) => {
  if (Vue.prototype.$onRequest) return;

  Vue.prototype.$onRequest = true;
  try {
    const res = await Axios.post(url, data, {
      headers: {
        'Authorization': Vue.prototype.$sessionToken
      }
    }, 'json')
    Vue.prototype.$onRequest = false;
    return res;
  } catch (err) {
    Vue.prototype.$onRequest = false;
    if (err.response) {
      return err.response.data
    }
  }
}

Vue.prototype.$patch = (url, data) => {
  if (Vue.prototype.$onRequest) return;

  Vue.prototype.$onRequest = true;
  return Axios.patch(url, data, {
    headers: {
      'Authorization': Vue.prototype.$sessionToken
    }
  }, 'json').then(r => {
    return r;
  }).catch(e => {
    return e;
  }).finally(() => {
    Vue.prototype.$onRequest = false
  });
}

Vue.prototype.$setSessionToken = (token) => {
  Vue.$sessionToken = token;
}

Vue.prototype.$getSessionToken = () => {
  return Vue.$sessionToken;
}

Vue.prototype.$hasRole = (type) => {
  const user = Vue.prototype.$user;
  return user.role.match(type)
}

Vue.prototype.$dateDiff = (start, end) => {
  const date1 = new Date(moment(start).format("YYYY/MM/DD hh:mm:ss"));
  let date2 = new Date(moment().subtract(3, 'hours'));
  if (end)
    date2 = new Date(moment(end).format("YYYY/MM/DD hh:mm:ss"));

  let diffTime = Math.abs(date2 - date1);

  let seconds = Math.floor((diffTime / 1000) % 60)
  let minutes = Math.floor((diffTime / (1000 * 60)) % 60)
  let hours = Math.floor((diffTime / (1000 * 60 * 60)))

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds;
}

Vue.prototype.$respond = function (message, error = false) {
  return {
    success: !error,
    data: message
  }
}

new Vue({
  beforeCreate() {
    if (this.$session.exists()) {
      this.$setSessionToken(JSON.parse(this.$session.get('@app:token')));
      this.$profile(JSON.parse(this.$session.get('@app:user')));
    }
  }
})

export default Vue;


