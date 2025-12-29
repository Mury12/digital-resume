import translationObject from '~/shared/translation';

export default (context, inject) => {
  const t = (lang = 'en', value) => {
    if (translationObject[value]) {
      return translationObject[value][lang] || value;
    } else return '';
  };
  inject('t', t);
  context.$t = t;
};
