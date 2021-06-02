<template>
  <b-row
    class="skills-wrapper w-100 justify-content-around align-content-center h-100"
    style="padding-top: 85px"
  >
    <span
      class="box-selected-close pointer position-absolute"
      @click="selected = -1"
      :class="selected >= 0 ? 'fade-in' : 'fade-out'"
    >
      <fas icon="times" class="fa-2x"></fas>
    </span>
    <b-col
      cols="12"
      md="4"
      lg="3"
      v-for="(skill, index) in skills"
      :key="index"
      class="p-3 m-3"
    >
      <div
        class="skill-set-wrapper position-relative"
        @click="
          !selected !== index && skill.title.length ? (selected = index) : null
        "
        :class="{
          pointer: selected !== index && skill.title.length,
          'box-selected': selected === index
        }"
        :style="{
          background: `url(${getBackground(skill.background)})`
        }"
      >
        <skill-set
          :skill="skill"
          :selected="selected"
          :position="index"
          @select="selected = index"
          @modal="openModal"
        ></skill-set>
      </div>
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

export default {
  name: "Home",
  components: { SkillSet },
  data() {
    return {
      selected: -1,
      modal: {
        content: "",
        title: ""
      }
    };
  },
  props: {
    skills: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    openModal($e) {
      this.modal = $e;
      this.$bvModal.show("description-modal");
    },
    getBackground: function(img) {
      if (img) {
        return require(`@/assets/images/${img}`);
      }
      return "";
    },
    select: function(direction = "next") {
      if (direction === "next" && this.selected < this.skills.length - 1) {
        this.selected++;
      } else if (direction === "prev" && this.selected > -1) {
        this.selected--;
      }
    }
  },

  mounted() {
    this.$nextTick(() => {
      document.body.addEventListener("keyup", e => {
        if (e.key === "ArrowRight") {
          this.select("next");
        } else if (e.key === "ArrowLeft") {
          this.select("prev");
        }
      });
    });
  }
};
</script>
<style scoped>
.skills-wrapper {
  padding-top: 0 !important;
}
.skill-set-wrapper {
  height: 300px;
  width: 300px;
  border: 2px solid rgb(255, 255, 255);
}
.fade-in {
  opacity: 1 !important;
}
.fade-out {
  opacity: 0 !important;
}
.skill-set-wrapper:hover .hoverable {
  opacity: 1;
}
/* .skill-set-background-mask {
    filter: blur(6px);
  } */
.box-selected {
  position: fixed !important;
  height: calc(100% - 85px);
  width: 100%;
  top: 0;
  left: 0;
  background: black;
  z-index: 1;
  margin-top: 90px;
  border: none;
}

.box-selected-close {
  z-index: 999;
  top: 90px;
  right: 25px;
  opacity: 0.3;
  transition: ease-in-out 200ms;
}
.box-selected-close:hover {
  opacity: 1;
  transform: rotate(90deg);
}

.skill-set-wrapper {
  background-color: black !important;
  transition: ease-in-out 600ms;
  box-sizing: border-box;
  background-position: top !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
}
.skills-wrapper {
  padding-top: 90px;
}
.skill-set-background-mask {
  position: absolute;
  top: 0;
  left: 0;
  height: 110%;
  width: 100%;
  z-index: -1;
  opacity: 0.1;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: top !important;
}
</style>