<template>
  <div id="app" :class="{ hide: hide }" ref="app">
    <transition mode="out-in" name="fade">
      <div :key="lang" class="">
        <div v-if="!lang">
          <div
            class="position-absolute w-100 h-100 d-flex flex-column justify-content-center"
          >
            <h2>Welcome! Please, select a language</h2>
            <div class="mt-3 d-md-flex m-auto m-md-0 justify-content-center">
              <div
                ref="lang-en"
                class="pointer langselector-btn d-flex align-items-center my-2 justify-content-center"
                @click="select('en')"
              >
                English
              </div>
              <div
                ref="lang-pt"
                class="pointer langselector-btn d-flex align-items-center my-2 justify-content-center"
                @click="select('pt')"
              >
                Português
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="background-mask"></div>
          <div class="page-body">
            <page-header @lang="lang = $event" :lang="lang" />
            <div class="" id="main">
              <router-view :key="$route.name" :skills="skills"></router-view>
            </div>
          </div>
          <div class="scrollleft-icon pointer" v-if="buttons.left">
            <fas icon="chevron-left" class="fa-3x" @click="scroll('right')" />
          </div>
          <div class="scrollright-icon pointer" v-if="buttons.right">
            <fas icon="chevron-right" class="fa-3x" @click="scroll('left')" />
          </div>
        </div>
      </div>
    </transition>
    <!-- <div
      class="under-construction w-100 d-flex align-items-center bg-dark d-flex d-md-none"
    >
      <h3 class="">Sorry, we're under construction.</h3>
      <h3>Please check computer version :)</h3>
    </div> -->
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
      minAppWidth: 0,
      windowWidth: window.innerWidth,
      translated: 0,
      buttons: {
        right: false,
        left: false
      },
      lang: null,
      skills: []
    };
  },
  components: {
    PageHeader
  },
  methods: {
    select: function(lang) {
      if (lang === "en") {
        this.$refs["lang-en"].className += " selected ";
        this.$refs["lang-pt"].className += " unselected ";
      } else if (lang === "pt") {
        this.$refs["lang-en"].className += " unselected ";
        this.$refs["lang-pt"].className += " selected ";
      }
      document.removeEventListener("keyup", this.listener);
      setTimeout(() => {
        this.lang = lang;
      }, 3000);
    },
    scroll: function(side = "right") {
      const maxTranslation = -(this.minAppWidth - this.windowWidth);
      const amountToTranslate = 2;
      if (side === "left") {
        for (let i = 0; i < 100; i++) {
          this.buttons.left = true;
          setTimeout(() => {
            if (this.translated - amountToTranslate >= maxTranslation) {
              this.translated -= amountToTranslate;
            } else if (this.translated - 1 >= maxTranslation) {
              this.translated -= 1;
            } else {
              this.buttons.right = false;
            }
          }, 50 + i);
        }
      } else if (side === "right") {
        for (let i = 0; i < 100; i++) {
          this.buttons.right = true;
          setTimeout(() => {
            if (this.translated + amountToTranslate <= 0) {
              this.translated += amountToTranslate;
            } else if (this.translated + 1 <= 0) {
              this.translated += 1;
            } else {
              this.buttons.left = false;
            }
          }, 50 + i);
        }
      }
    },
    toggler: function(e) {
      this.navbarIsOpen = e;
    },
    closePage: function() {
      this.hide = true;
      window.location = "/";
      setTimeout(() => {}, 200);
      setTimeout(() => {
        this.hide = false;
      }, 1000);
    },
    mountSkills: function($lang) {
      this.lang = $lang;
      this.skills = require(`@/assets/skills-${$lang}.js`).default;
    },
    listener: function(e) {
      if (e.key === "1") {
        this.select("en");
      } else if (e.key === "2") {
        this.select("pt");
      }
    }
  },

  watch: {
    $route: {
      handler: function() {
        document.title = (this.$route.meta.title || "") + " | " + "Andre Mury";
      }
    },
    lang(n, o) {
      if (n != o) {
        this.mountSkills(n);
        this.$root.lang = n;
      }
    }
  },
  beforeCreate() {
    clearInterval(this.iv);
    this.$session.start();
    document.title = (this.$route.meta.title || "") + " | " + "Andre Mury";
  },
  mounted() {
    this.$nextTick(() => {
      document.addEventListener("keyup", this.listener);
    });
  }
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
.langselector-btn:nth-of-type(2n + 1).unselected {
  transition: 1s;
  opacity: 0;
  transform: rotate(-20deg);
  margin-left: -315px;
}
.langselector-btn:nth-of-type(2n).unselected {
  transition: 1s;
  opacity: 0;
  transform: rotate(20deg);
  margin-right: -315px;
}

.langselector-btn.selected {
  transition: 1s;
  transition-delay: 0.8s;
  transform: scale(2);
  background-color: black;
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

