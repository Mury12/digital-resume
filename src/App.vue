<template>
  <div id="app" :class="{ hide: hide }" ref="app">
    <transition mode="out-in" name="fade">
      <div :key="$root.lang" class="">
        <select-language v-if="!$root.lang" @select="setLanguage" />
        <div v-else>
          <TheLayout @lang="setLanguage" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import SelectLanguage from "./components/SelectLanguage.vue";
import TheLayout from "./components/TheLayout.vue";

export default {
  name: "App",
  components: {
    TheLayout,
    SelectLanguage,
  },
  data() {
    return {
      navbarIsOpen: false,
      hide: false,
      minAppWidth: 0,
      windowWidth: window.innerWidth,
      translated: 0,
      buttons: {
        right: false,
        left: false,
      },
    };
  },
  methods: {
    setLanguage: function (e) {
      this.$root.lang = e;
      this.$session.set("lang", e);
    },
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

  watch: {
    $route: {
      handler: function () {
        document.title = (this.$route.meta.title || "") + " | " + "Andre Mury";
      },
    },
  },
  beforeCreate() {
    this.$session.start();
    document.title = (this.$route.meta.title || "") + " | " + "Andre Mury";
  },
};
</script>
<style scoped>
.scrollleft-icon {
  left: 10px;
  animation: arrow-pulse-left 10s infinite;
}
.scrollleft-icon:hover,
.scrollright-icon:hover {
  opacity: 0.8;
  animation: none;
}
.scrollleft-icon,
.scrollright-icon {
  position: fixed;
  top: calc(50% - 1.5em);
  opacity: 0.3;
}
.scrollright-icon {
  right: 10px;
  animation: arrow-pulse-right 10s infinite;
}
.under-construction {
  height: 100vh;
}

@keyframes arrow-pulse-right {
  20% {
    transform: translateX(0);
    opacity: 0.3;
  }
  30% {
    transform: translateX(13px) scaleY(0.8);
    opacity: 1;
  }
  33% {
    transform: translateX(20px) scaleY(0.6);
    opacity: 0;
  }
  40% {
    transform: translateX(-20px) scaleY(0.4);
    opacity: 0;
  }
  55%,
  100% {
    transform: translateX(-0px);
    opacity: 0.3;
  }
}
@keyframes arrow-pulse-left {
  20% {
    transform: translateX(0);
    opacity: 0.3;
  }
  30% {
    transform: translateX(-13px) scaleY(0.8);
    opacity: 1;
  }
  33% {
    transform: translateX(-20px) scaleY(0.6);
    opacity: 0;
  }
  40% {
    transform: translateX(+20px) scaleY(0.4);
    opacity: 0;
  }
  55%,
  100% {
    transform: translateX(+0px);
    opacity: 0.3;
  }
}
</style>

