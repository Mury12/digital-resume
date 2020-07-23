<template>
  <div id="app">
    <navbar :items="navbar" />
    <div class="page-body" :class="opened ? 'opened' : 'closed'">
      <page-header />
      <b-container id="main">
        <b-row>
          <b-col cols="12">
            <transition mode="out-in" name="shrink-fade">
              <router-view :key="$route.params.name"></router-view>
            </transition>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar/Navbar";
import PageHeader from "./components/PageHeader/PageHeader";
export default {
  name: "App",
  data() {
    return {
      navbar: [
        {
          name: "Início",
          route: "/",
          icon: "home",
        },
        {
          name: "Painel Administrativo",
          route: "/painel-administrativo",
          icon: "cog",
        },
      ],
      opened: true,
    };
  },
  components: {
    Navbar,
    PageHeader,
  },
  //  beforeCreate: function() {
  //   if (
  //     (!this.$authenticated() && this.$route.meta.protected) ||
  //     (this.$route.name == "Other" && !this.$authenticated())
  //   )
  //     this.$router.push("/auth/login");
  //   else if (this.$authenticated()) {
  //     this.$router.push("/");
  //   }
  // },
  watch: {
    $route: {
      handler: function () {
        document.title = this.$route.meta.title + " | Dashboard Yoobot";
      },
    },
  },
  beforeCreate() {
    document.title = this.$route.meta.title + " | Dashboard Yoobot";
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,200;0,300;0,400;0,700;1,200;1,400&display=swap");
#app {
  font-family: "Roboto";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: lighter;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
#main {
  min-height: 70vh;
  margin-top: 25px;
  border: 1px dashed var(--def-brand) ;
}
.opened {
  margin-left: 305px;
  transition: ease-in 200ms;
}

.closed {
  margin-left: 45px;
  transition: ease-in 200ms;
}

.default-transition{
  transition: ease-in-out 150ms;
}

/**Vue Transitions */
.slide-fade-enter-active {
  transition: 0.3s ease-in-out;
}
.slide-fade-leave-active {
  transition: 0.3s ease-in-out;
}
.slide-fade-leave-to {
  transform: translateX(-5px);
  opacity: 0;
}
.slide-fade-enter {
  transform: translateX(5px);
  opacity: 0;
}
.shrink-fade-enter-active {
  transition: 0.3s ease-in-out;
}
.shrink-fade-leave-active {
  transition: 0.3s ease-in-out;
}
.shrink-fade-leave-to {
  transform: scale(0.95);
  opacity: 0;
}
.shrink-fade-enter {
  transform: scale(0.95);
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.inactive {
  opacity: 0.4;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.flip-list-move {
  transition: transform 1s;
}
.list-complete-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
:root {
  --def-brand-lighter: #3589bd;
  --def-brand-light: #40a4e3;
  --def-brand: #3b9bd5;
  --def-brand-dark: #2a6d96;
  --def-brand-darker: #183f57;
  --def-darker-alpha: #183f5752;
  --def-lightblue: #6b579b;
  --def-lightgray: #e7e7e7;
  --def-sidebar-size: 320px;
}
.spin {
  animation: spin 1s forwards;
}
</style>
