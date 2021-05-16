<template>
  <div>
    <div id="app" :class="{ hide: hide }" ref="app">
      <div class="background-mask"></div>
      <div class="page-body">
        <page-header />
        <div
          class="px-5"
          id="main"
          :style="{
            minWidth: minAppWidth + 'px',
            transform: `translate(${translated}px)`,
          }"
        >
          <transition mode="out-in" name="shrink-fade">
            <router-view :key="$route.name"></router-view>
          </transition>
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
</template>

<script>
import PageHeader from "./components/PageHeader/PageHeader.vue";
export default {
  name: "App",
  data() {
    return {
      navbarIsOpen: false,
      hide: false,
      minAppWidth: 1450,
      windowWidth: window.innerWidth,
      translated: 0,
      buttons: {
        right: false,
        left: false,
      },
    };
  },
  components: {
    PageHeader,
  },
  methods: {
    scroll: function (side = "right") {
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
    windowWidth: {
      handler() {},
    },
  },
  beforeCreate() {
    clearInterval(this.iv);
    this.$session.start();
    document.title = (this.$route.meta.title || "") + " | " + "Andre Mury";
  },
  mounted() {
    this.$nextTick(() => {
      window.onresize = ($e) => {
        this.windowWidth = $e.target.innerWidth;
        this.buttons = {
          right: this.windowWidth < this.minAppWidth,
          left: this.translated > 0,
        };
      };
      this.buttons = {
        right: this.windowWidth < this.minAppWidth,
        left: this.translated > 0,
      };
    });
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
.background-mask {
  animation: bg-vary 20s infinite;
}

@keyframes bg-vary {
  0%,
  100% {
    background-color: rgb(14, 0, 145);
  }
  25%,
  75% {
    background-color: rgb(60, 14, 134);
  }
  50% {
    background-color: rgb(52, 38, 88);
  }
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

