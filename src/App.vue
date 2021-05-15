<template>
  <div id="app" :class="{ hide: hide }">
    <div
      class="background-mask"
      :style="{
        backgroundColor: bgcolor,
      }"
    ></div>
    <!-- <navbar
      :items="navbar"
      @toggle="toggler"
      class="d-none d-md-block"
    />
    <mobile-navbar
      :items="navbar"
      class="d-block d-md-none"
    /> -->
    <div
      class="page-body"
      :class="{
        'navbar-is-open': navbarIsOpen,
        'navbar-is-closed': !navbarIsOpen,
      }"
    >
      <page-header />
      <div class="px-5" id="main">
        <transition mode="out-in" name="shrink-fade">
          <router-view :key="$route.name"></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from "./components/PageHeader/PageHeader.vue";
export default {
  name: "App",
  data() {
    return {
      navbarIsOpen: false,
      hide: false,
      dynamicBackgroundColor: {
        growing: true,
        r: 25,
        g: 0,
        b: 0,
      },
      iv: null,
    };
  },
  components: {
    PageHeader,
  },
  methods: {
    toggler: function (e) {
      this.navbarIsOpen = e;
    },
    closePage: function () {
      this.hide = true;
      window.location = "/";
      setTimeout(() => {}, 200);
      setTimeout(() => {
        this.hide = false;
      }, 1000);
    },
  },
  computed: {
    bgcolor() {
      return `rgb(${this.dynamicBackgroundColor.r}, ${this.dynamicBackgroundColor.g}, ${this.dynamicBackgroundColor.b})`;
    },
  },
  watch: {
    $route: {
      handler: function () {
        document.title = (this.$route.meta.title || "") + " | " + "Andre Mury";
      },
    },
  },
  beforeCreate() {
    clearInterval(this.iv);
    this.$session.start();
    document.title = (this.$route.meta.title || "") + " | " + "Andre Mury";
    this.iv = setInterval(() => {
      if (
        this.dynamicBackgroundColor.r <= 250 &&
        this.dynamicBackgroundColor.growing
      ) {
        this.dynamicBackgroundColor.growing = true;
        this.dynamicBackgroundColor.r += 5;
        this.dynamicBackgroundColor.g >= 255
          ? (this.dynamicBackgroundColor.g += 0)
          : (this.dynamicBackgroundColor.g += 3);
        this.dynamicBackgroundColor.b >= 200
          ? (this.dynamicBackgroundColor.b += 0)
          : (this.dynamicBackgroundColor.b += 2);
      } else if (
        this.dynamicBackgroundColor.r >= 25 &&
        !this.dynamicBackgroundColor.growing
      ) {
        this.dynamicBackgroundColor.growing = false;
        this.dynamicBackgroundColor.r -= 1;
        this.dynamicBackgroundColor.g <= 80
          ? (this.dynamicBackgroundColor.g -= 0)
          : (this.dynamicBackgroundColor.g -= 3);
        this.dynamicBackgroundColor.b <= 100
          ? (this.dynamicBackgroundColor.b -= 0)
          : (this.dynamicBackgroundColor.b -= 2);
      } else {
        this.dynamicBackgroundColor.growing = !this.dynamicBackgroundColor
          .growing;
      }
    }, 50);
  },
};
</script>
<style scoped>
</style>

