<template>
  <div>
    <b-container class="body-container">
      <b-row
        class="skills-wrapper justify-content-around align-content-center h-100"
        style="padding-top: 85px"
      >
        <span
          class="box-selected-close pointer "
          @click="selected = -1"
          :class="selected >= 0 ? '' : 'fade-out'"
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
            class="skill-set-square-btn position-relative pointer d-flex align-items-center justify-content-center flex-column"
            @click="
              !selected !== index && skill.title.length
                ? (selected = index)
                : null
            "
            :class="{
              pointer: selected !== index && skill.title.length,
              cluster: selected === index
            }"
            :style="{
              background: `url(${getBackground(skill.background)})`
            }"
          >
            <h5 :key="skill.title" v-html="skill.little"></h5>
            <small class="text-secondary" v-if="skill.title.length">{{
              $t(lang, "Click to Open")
            }}</small>
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
    </b-container>
    <transition mode="out-in" name="cluster-in">
      <div class="box-selected position-fixed" v-if="selected !== -1">
        <skill-set :skill="skills[selected]" @modal="openModal"></skill-set>
      </div>
    </transition>
  </div>
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
  computed: {
    lang() {
      return this.$root.lang;
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
@media screen and (min-width: 992px) {
  .skill-set-square-btn {
    height: 250px !important;
    width: 250px !important;
  }
  .skill-set-square-btn:not(.box-selected)::before {
    height: 250px !important;
    width: 250px !important;
  }
}
.skill-set-square-btn:not(.box-selected)::before {
  height: 200px;
  width: 100%;
  content: " ";
  border: 1px solid white;
  opacity: 1 !important;
  position: absolute;
  top: 0;
  left: 0;
  transition: ease-in-out 150ms;
}
.skills-wrapper {
  padding-top: 0 !important;
}
.skill-set-fullscreen {
  top: 0;
  left: 0;
}
.skill-set-square-btn {
  height: 200px;
  width: 100%;
  border: 2px solid rgb(255, 255, 255);
  margin: 0 auto;
}

.fade-in {
  opacity: 1 !important;
}
.fade-out {
  opacity: 0 !important;
}
.skill-set-square-btn:hover .hoverable {
  opacity: 1;
}
.cluster {
  background-color: black;
  transition: ease-in-out 1s !important;
  /* transform: translateX(-500px) translateY(-800px) !important; */
  transform: scale(0);
  opacity: 0;
  transition-delay: 0.5s !important;
}
.cluster::before {
  /* transform: translateX(-500px) translateY(-800px) !important; */
  transform: rotateZ(45deg) translate(0, 0) !important;
  opacity: 1;
  transition: ease-in-out 0.4s !important;
}
/* .skill-set-background-mask {
    filter: blur(6px);
  } */
.box-selected {
  position: fixed !important;
  min-height: calc(100%);
  width: 100%;
  top: 0;
  left: -1px;
  background: black;
  z-index: 1;
  padding-top: 90px;
  border: none;
  /* border: 1px solid white; */
}

.box-selected-close {
  z-index: 999;
  top: 90px;
  right: 25px;
  position: fixed;
  opacity: 0.3;
  transition: ease-in-out 200ms;
}
.box-selected-close:hover {
  opacity: 1;
  transform: rotate(90deg);
}

.skill-set-square-btn {
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