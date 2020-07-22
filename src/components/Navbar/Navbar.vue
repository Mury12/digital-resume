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
          <b-row class="justify-content-left text-left pl-4 py-3" >
            <b-col cols="1">
              <fas class="text-white" :icon="item.icon" />
            </b-col>
            <b-col cols="10" class="ml-3 pl-0 text-white" of>{{item.name}}</b-col>
          </b-row>
        </router-link>
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
  width: 400px;
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
  text-decoration: none
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
}
</style>