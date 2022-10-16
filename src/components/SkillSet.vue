<template>
  <div
    class="skill-set d-flex align-items-center justify-content-center"
    :style="{
      height: currentElementHeight,
      minHeight: '100%',
    }"
  >
    <b-container :id="`container__${title.length + getTime()}`">
      <div :key="title" v-html="title"></div>
      <small class="text-secondary" v-if="selected === -1 && title.length">{{
        $t("Click to Open")
      }}</small>

      <div
        class="skill-content"
        ref="scrollable"
        :style="{
          height: contentHeight,
          opacity: opacity,
          transitionDelay: transitionDelay,
        }"
      >
        <transition name="fade" mode="out-in">
          <div v-if="selected === position">
            <div v-html="skill.description"></div>
            <div v-if="skill.abilities && skill.abilities.length">
              <h4 class="mt-5">{{ $t("Skills and levels") }}</h4>
              <div class="w-100 text-left pl-2">
                <b-button
                  type="button"
                  @click="order"
                  variant="none"
                  class="mt-4 text-white"
                >
                  {{ $t("Order by") }}
                  {{ orderBy === 0 ? $t("Proefficiency") : $t("Prefference") }}
                </b-button>
              </div>
              <transition mode="out-in" name="slide-fade">
                <b-row class="mt-1 pb-4" ref="scrollableContent" :key="orderBy">
                  <ability-description
                    @modal="$emit('modal', $event)"
                    v-for="(ability, index) in abilities"
                    :key="index"
                    :ability="ability"
                  />
                </b-row>
              </transition>
            </div>
          </div>
        </transition>
      </div>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AbilityDescription from "./AbilityDescription.vue";

export default Vue.extend({
  components: { AbilityDescription },
  name: "SkillSet",
  data() {
    return {
      transitionDelay: "0ms",
      offset: 85,
      orderBy: 0,
      original: [],
      abilities: [],
    };
  },
  props: ["skill", "selected", "position"],
  methods: {
    order: function () {
      if (this.orderBy === 0) {
        this.original = JSON.parse(JSON.stringify(this.abilities));
        const abilities = this.abilities.sort((a, b) =>
          a.level > b.level ? -1 : 1
        );
        this.orderBy = 1;
        this.abilities = abilities;
      } else {
        this.orderBy = 0;
        this.abilities = JSON.parse(JSON.stringify(this.original));
      }
    },
    scroll(direction = "down") {
      const variant = direction === "down" ? 1 : -1;
      this.$refs["scrollable"].scrollTop += variant * 50;
    },
    currentElementHeight() {
      if (this.$root.isMobile && this.$refs["scrollable"]) {
        const children = this.$refs["scrollable"].childNodes;
        if (Array.isArray(children)) {
          let height = 0;
          children.forEach((item) => {
            height += item.clientHeight + 10;
          });
          return height + "px";
        }
      }
      return "100%";
    },
    listener: function ($e) {
      if ($e.deltaY > 0) this.scroll("down");
      else this.scroll("up");
    },
    getTime: function () {
      return new Date().getUTCMilliseconds().toString();
    },
  },
  watch: {
    selected(n, o) {
      if (o === this.position) {
        this.transitionDelay = "0ms";
      } else {
        if (n === this.position && this.$root.isMobile) {
          setTimeout(() => {
            this.$scrollTo(`#container__${this.position}`);
            console.log(`#container__${this.position}`);
          }, 1000);
        }
        this.transitionDelay = "650ms";
      }
    },
  },
  computed: {
    lang() {
      return this.$root.lang;
    },
    minimumOffsetToMove() {
      return window.innerHeight - (window.innerHeight - 85) / 3;
    },
    currentlySelected() {
      return this.selected === this.position;
    },
    contentHeight() {
      if (!this.$root.isMobile) {
        return this.currentlySelected ? "86.5vh" : "0";
      } else {
        return this.currentlySelected ? this.currentElementHeight() : "0";
      }
    },
    opacity() {
      return this.currentlySelected ? 1 : 0;
    },
    title() {
      if (this.skill.title) {
        return this.selected !== this.position
          ? `<h5>${this.skill.little}</h5>`
          : `<h2>${this.skill.title}</h2>`;
      }
      return "";
    },
  },
  mounted() {
    this.abilities = this.skill.abilities;
    if (this.$refs["scrollable"]) {
      this.$refs["scrollable"].addEventListener("wheel", this.listener, {
        passive: true,
      });
    }
  },
  beforeDestroy() {
    if (this.$refs["scrollable"]) {
      this.$refs["scrollable"].removeEventListener("wheel", this.listener);
    }
  },
});
</script>
<style scoped>
@media screen and (min-width: 992px) {
  .skill-content {
    transition: ease-in-out 450ms;
    overflow-x: hidden !important;
    overflow-y: hidden !important;
  }
}
.skill-content {
  overflow-x: hidden;
  overflow-y: scroll;
}
.scrolldown-icon,
.scrollup-icon {
  opacity: 0.7;
}
.scrolldown-icon:hover,
.scrollup-icon:hover {
  opacity: 1;
}
.scrolldown-icon {
  background-color: rgba(0, 0, 0, 0.8);
  padding: 0 10px;
  position: absolute;
  bottom: 0px;
  left: calc(50% - 3em);
  cursor: pointer;
}
.scrollup-icon {
  background-color: rgba(0, 0, 0, 0.8);
  padding: 0 10px;
  position: absolute;
  bottom: 0px;
  left: calc(50%);
  cursor: pointer;
}
.flip-list-move {
  transition: transform 0.8s ease;
}
</style>
