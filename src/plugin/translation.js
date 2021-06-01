let translationObject = require('@/assets/translation.js').default;

export default {
  install: function (Vue) {
    Vue.prototype.$t = (lang = 'en', value) => {
      console.log(translationObject, lang, value)
      if (translationObject[value]) {
        return translationObject[value][lang] || value;
      } else return '';
    }
  }
}
