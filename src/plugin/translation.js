const translationObject = require("@/assets/translation.js").default;

export default {
  install: function (Vue) {
    Vue.prototype.$t = (value) => {
      const lang = Vue.prototype.$session.get("lang");
      if (lang) {
        if (translationObject[value]) {
          return translationObject[value][lang] || value;
        }
      } else return "";
    };
  },
};
