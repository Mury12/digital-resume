import Vue from "./setup";
import App from "./App.vue";
import router from "./router.js";

new Vue({
  data: {
    isMobile: false,
    lang: null,
    skills: [],
  },
  watch: {
    lang(n, o) {
      if (n != o) {
        this.mountSkills(n);
      }
    },
  },
  methods: {
    mountSkills: function ($lang) {
      this.skills = require(`@/assets/skills-${$lang}.js`).default;
    },
  },
  router,
  render: (h) => h(App),
}).$mount("#app");
