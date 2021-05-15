<template>
  <div
    class="skill-set d-flex align-items-center justify-content-center h-100 w-100"
    style="padding-top: 85px"
  >
    <b-container>
      <transition mode="out-in" name="slide-fade">
        <div :key="title" v-html="title"></div>
      </transition>
      <div
        class="skill-content"
        ref="scrollable"
        :style="{
          height: contentHeight,
          opacity: opacity,
          transitionDelay: transitionDelay,
        }"
      >
        {{ skill.description }}
        <div v-if="skill.abillities && skill.abillities.length">
          <h4 class="mt-5">Skills and levels</h4>
          <div class="w-100 text-left pl-2">
            <b-button type="button" @click="order" variant="info" class="mt-4">
              Order by {{ orderBy === 0 ? "Proefficiency" : "Prefference" }}
            </b-button>
          </div>
          <transition mode="out-in" name="slide-fade">
            <b-row class="mt-1" ref="scrollableContent" :key="orderBy">
              <abillity-description
                @modal="$emit('modal', $event)"
                v-for="(abillity, index) in abillities"
                :key="index"
                :abillity="abillity"
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
import AbillityDescription from "./AbillityDescription.vue";
export default Vue.extend({
  components: { AbillityDescription },
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
      abillities: [],
    };
  },
  props: ["skill", "selected", "position"],
  methods: {
    order: function () {
      if (this.orderBy === 0) {
        this.original = JSON.parse(JSON.stringify(this.abillities));
        const abillities = this.abillities.sort((a, b) =>
          a.level > b.level ? -1 : 1
        );
        this.orderBy = 1;
        this.abillities = abillities;
      } else {
        this.orderBy = 0;
        this.abillities = JSON.parse(JSON.stringify(this.original));
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
        console.log(ch, this.skill.title);
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
    this.abillities = this.skill.abillities;
  },
});
</script>
<style scoped>
.skill-content {
  transition: ease-in-out 450ms;
  overflow: hidden;
}
.scrolldown-icon {
  position: absolute;
  bottom: 20px;
  left: calc(50% - 3em);
  cursor: pointer;
}
.scrollup-icon {
  position: absolute;
  bottom: 20px;
  left: calc(50%);
  cursor: pointer;
}
.flip-list-move {
  transition: transform 0.8s ease;
}
</style>