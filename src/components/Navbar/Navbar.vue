<template>
  <b-row id="navbar-left" class="text-white">
    <b-col lg="12">
      <b-row class="justify-content-center">
        <b-col cols="10" class="yoobot-logo">
          <img src="../../assets/logo.png" />
        </b-col>
      </b-row>
      <div class="menu-list mt-5">
        <router-link class="nav-item" :to="item.route" v-for="(item, idx) in items" :key="idx">
          <div class="position-relative item-wrapper ">
          <b-row class="justify-content-left text-left position-relative pl-4 py-3  default-transition">
            <b-col cols="1">
              <fas class="text-white" :icon="item.icon" />
            </b-col>
            <b-col cols="10" class="ml-3 pl-0 text-white" of>{{item.name}}</b-col>
          </b-row>
          </div>
        </router-link>
      </div>
      <div id="sidebar-logout" class=" default-transition">
        <b-row class="justify-content-left text-left pl-4 py-3">
          <b-col cols="1">
            <fas icon="power-off" />
          </b-col>
          <b-col cols="10">Sair</b-col>
        </b-row>
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["items"],
};
</script>

<style scoped>
#navbar-left {
  width: var(--def-sidebar-size);
  position: fixed;
  height: 100vh;
  background-color: var(--def-brand-darker);
  font-size: 1.3em;
}
.yoobot-logo img {
  max-width: 100%;
  margin-top: 20px;
}
.nav-item {
  cursor: pointer;
  text-decoration: none;
}
.nav-item .row{
  left: 0
}
.nav-item:hover {
  text-decoration: none;
}
.nav-item a {
  text-decoration: none;
  color: white;
}
.nav-item:hover .row {
  background-color: var(--def-brand-lighter);
  box-shadow: -1em 0.5em 0.3em rgba(0,0,0,0.125);
  position: relative;
  left: 10px
}
#sidebar-logout:hover {
  background-color: rgb(252, 186, 64);
  box-shadow: -1em 0.5em 0.3em rgba(0,0,0,0.125);
  left: 15px
}

#sidebar-logout {
  position: absolute;
  bottom: 45px;
  width: 100%;
  cursor: pointer;
  left: 10px
}
</style>