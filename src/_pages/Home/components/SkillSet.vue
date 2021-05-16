<template>
  <div
    class="skill-set d-flex align-items-center justify-content-center h-100 w-100"
    style="padding-top: 85px"
  >
    <b-container>
      <transition mode="out-in" name="slide-fade">
        <div :key="title" v-html="title"></div>
      </transition>
      <small class="text-secondary" v-if="selected === -1 && position === 0"
        >Click to open</small
      >

      <div
        class="skill-content"
        ref="scrollable"
        :style="{
          height: contentHeight,
          opacity: opacity,
          transitionDelay: transitionDelay,
        }"
      >
        <div v-html="skill.description"></div>
        <div v-if="skill.abilities && skill.abilities.length">
          <h4 class="mt-5">Skills and levels</h4>
          <div class="w-100 text-left pl-2">
            <b-button type="button" @click="order" variant="info" class="mt-4">
              Order by {{ orderBy === 0 ? "Proefficiency" : "Prefference" }}
            </b-button>
          </div>
          <transition mode="out-in" name="slide-fade">
            <b-row class="mt-1" ref="scrollableContent" :key="orderBy">
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
    </b-container>
    <transition mode="out-in" name="fade">
      <div v-if="shouldShowButtons && this.currentlySelected">
        <div class="scrolldown-icon" @click="scroll('down')">
          <fas icon="chevron-down" class="fa-2x"></fas>
        </div>
        <div class="scrollup-icon" @click="scroll('up')">
          <fas icon="chevron-up" class="fa-2x"></fas>
        </div>
      </div>
    </transition>
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
      shouldShowButtonDown: false,
      shouldShowButtonUp: false,
      shouldShowButtons: false,
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
      if (direction === "down") {
        for (let i = 0; i < 200; i++) {
          setTimeout(() => {
            this.$refs["scrollable"].scrollTop += 1;
          }, 50 + i * 2);
          this.shouldShowButtonUp = true;
        }
      } else {
        for (let i = 0; i < 200; i++) {
          setTimeout(() => {
            this.$refs["scrollable"].scrollTop -= 1;
          }, 50 + i * 2);
          this.shouldShowButtonDown = true;
        }
      }
    },
    shouldShowScrollButtons() {
      if (this.$refs["scrollableContent"]) {
        const ch =
          this.$refs["scrollableContent"].clientHeight +
          this.$refs["scrollable"].offsetTop;
        this.shouldShowButtons =
          ch > window.innerHeight && this.currentlySelected;
      }
    },
  },
  watch: {
    selected(n, o) {
      if (o === this.position) {
        this.transitionDelay = "0ms";
      } else {
        setTimeout(() => {
          this.shouldShowScrollButtons();
        }, 700);
        this.transitionDelay = "650ms";
      }
    },
  },
  computed: {
    minimumOffsetToMove() {
      return window.innerHeight - (window.innerHeight - 85) / 3;
    },
    currentlySelected() {
      return this.selected === this.position;
    },
    contentHeight() {
      return this.currentlySelected ? "80vh" : "0";
    },
    opacity() {
      return this.currentlySelected ? 1 : 0;
    },
    title() {
      if (this.skill.title) {
        return this.selected !== -1 && this.selected !== this.position
          ? `<h5>${this.skill.little}</h5>`
          : `<h2>${this.skill.title}</h2>`;
      }
      return "";
    },
  },
  mounted() {
    this.abilities = this.skill.abilities;
  },
});
</script>
<style scoped>
.skill-content {
  transition: ease-in-out 450ms;
  overflow: hidden;
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