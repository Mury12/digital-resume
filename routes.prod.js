const env = {
  NODE_ENV: "production",
  VERSION: "v0.01",
  NAME: "Multilevel Network System",
  VUE_SESSION_TIMEOUT: 60,

  WS: {
    URL: "http://localhost:4200/",
    USER: {
      ALL: 'user/',
      LOGIN: 'login',
      LOGOUT: 'user/logout/',
      UPDATE: 'user/update/',
      CREATE: 'user/create/',
      DELETE: 'user/delete/',
    },
    BP: {
      SESSIONS: 'sessions/'
    }
  }
}
export default env;