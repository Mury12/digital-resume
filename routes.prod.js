const env = {
  NODE_ENV: "production",
  VERSION: "v0.01",
  NAME: "Multilevel Network System",
  VUE_SESSION_TIMEOUT: 60,

  WS: {
    URL: "http://yoobot.eastus.cloudapp.azure.com:4200/",
    USER: {
      LOGIN: 'login/',
      LOGOUT: 'logout/',
      USER: 'user/',

    },
    BP: {
      SESSIONS: 'sessions/'
    }
  }
}
export default env;