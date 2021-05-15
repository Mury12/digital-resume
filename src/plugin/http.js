let wsr = require('../../ws-routes.js').default;
import Axios from 'axios';

export default {
  install: function (Vue) {
    /** AXIOS HTTP REQUESTS */
    /**
     * Performs a POST http request
     * @param {string} url url
     * @param {*} data body
     */
    Vue.prototype.$http = {
      post: async (url, data) => {
        try {
          const result = await Axios.post(url, data);
          return result.data;
        } catch (error) {
          return error.response;
        }
      },

      /**
       * Performs a PUT http request
       * @param {string} url url
       * @param {*} data body
       */
      put: async (url, data) => {
        try {
          const result = await Axios.put(url, data,);
          return result.data;
        } catch (error) {
          return error.response;
        }
      },

      /**
       * Performs a GET http request
       * @param {string} url url
       * @param {*} params query params
       */
      get: async (url, params = {}) => {
        try {
          const result = await Axios.get(url, {
            params
          });
          return result.data;
        } catch (error) {
          return error.response;
        }
      },

      /**
       * Performs a DELETE http request
       * @param {string} url url
       * @param {*} params query params
       */
      del: async (url, params = {}) => {
        try {
          const result = await Axios.delete(url, {
            params
          });
          return result.data;
        } catch (error) {
          return error.response.data;
        }
      },

      /**
       * Performs a PATCH http request
       * @param {string} url url
       * @param {*} data body
       */
      patch: async (url, data) => {
        try {
          const result = await Axios.patch(url, data);
          return result.data;
        } catch (error) {
          return error.response;
        }
      },

      /**
       * Loads and mounts URIs based in ws-routes.js file
       * @param {string} domain Route domain such as USER, COMPANY, etc.
       * @param {string} name route name
       * @param {*} opts route options if dynamic
       */
      ws: (domain, name = "BASE", opts) => {
        domain = domain.toUpperCase();
        name = name.toUpperCase() || "";
        if (domain === 'BASE') {
          return wsr.WS.URL
        }
        if (opts && opts.length) {
          const route = wsr.WS[domain][name];
          if (typeof route === 'function')
            return wsr.WS.URL + route(...opts)
        }
        return wsr.WS.URL + wsr.WS[domain][name]
      },

      /**
       * Sets cookie
       * @param {string} name 
       * @param {string} value 
       */
      setCookie: (name, value) => {
        document.cookie = `${name}=${value}`
      },

      /**
       * Gets cookies
       * @param {string} name 
       */
      getCookie: (name) => {
        var c = document.cookie;
        var r = c.split(name)[1];
        if (r) {
          r = (r.split(';')[0]).split('=');
          return r[1];
        }
        return false
      },

      /**
       * Unset a cookie
       * @param {string} name 
       */
      unsetCookie: (name) => {
        document.cookie = `${name}=${null}`
      },
    }
  }
}
