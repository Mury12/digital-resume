<template>
  <b-row class="skills-wrapper">
    <b-col
      class="skill-set-wrapper h-100"
      v-for="(skill, index) in skills"
      :lg="selected === index ? '7' : colSize"
      :key="index"
      @click="!selected !== index ? (selected = index) : null"
      :class="{ pointer: selected !== index }"
    >
      <div
        class="skill-set-background-mask"
        :class="{ hoverable: selected !== index }"
        :style="{
          background: `url(${getBackground(skill.background)})`,
        }"
      ></div>
      <skill-set
        :skill="skill"
        :selected="selected"
        :position="index"
        @select="selected = index"
        @modal="openModal"
      ></skill-set>
    </b-col>
    <b-col class="position-relative" hidden>
      <b-modal
        id="description-modal"
        :title="modal.title"
        hide-footer
        body-class="border-none"
        header-class="border-none"
        content-class="border-none"
      >
        <div class="modal-content" v-html="modal.content"></div>
      </b-modal>
    </b-col>
  </b-row>
</template>

<script>
import SkillSet from "./components/SkillSet.vue";
import skills from "./util/skills.js";
export default {
  name: "Home",
  components: { SkillSet },
  data() {
    return {
      selected: -1,
      modal: {
        content: "",
        title: "",
      },
      skills,
    };
  },
  methods: {
    openModal($e) {
      this.modal = $e;
      this.$bvModal.show("description-modal");
    },
    getBackground: function (img) {
      if (img) {
        return require(`@/assets/images/${img}`);
      }
      return "";
    },
    select: function (direction = "next") {
      if (direction === "next" && this.selected < this.skills.length - 1) {
        this.selected++;
      } else if (direction === "prev" && this.selected > -1) {
        this.selected--;
      }
    },
  },
  computed: {
    colSize() {
      if (this.selected === -1) {
        return Number.parseInt(12 / this.skills.length);
      }
      return Number.parseInt((12 - 7) / (this.skills.length - 1));
    },
  },
  mounted() {
    this.$nextTick(() => {
      document.body.addEventListener("keyup", (e) => {
        if (e.key === "ArrowRight") {
          this.select("next");
        } else if (e.key === "ArrowLeft") {
          this.select("prev");
        }
      });
    });
    setTimeout(() => {
      // this.selected = 0;
    }, 500);
  },
};
</script>
<style scoped>
.skills-wrapper {
  height: 100vh;
}
.skill-set-wrapper {
  transform: skew(-5deg);
  transition: ease-in-out 600ms;
  box-sizing: border-box;
  border-right: 5px solid rgba(76, 76, 219, 0.425);
}
.skill-set-wrapper .skill-set {
  transform: skew(5deg);
}
.skill-set-wrapper:hover .hoverable {
  opacity: 0.3;
}
.skill-set-background-mask {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0.1;
  filter: blur(6px);
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: top !important;
}
</style>