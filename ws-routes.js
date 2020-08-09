const env = {
  NODE_ENV: "production",
  VERSION: "v0.0.1-alpha",
  NAME: "Vue Start",
  VUE_SESSION_TIMEOUT: 60,

  WS: {
    URL: "http://localhost/fake-api/login.js",
    USER: {
      BASE: 'user/',
      LOGIN: 'login',
    },
    BP: {
      SESSIONS: 'sessions/'
    }
  }
}
export default env;