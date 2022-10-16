<template>
  <b-col cols="12" md="4" lg="3" class="p-3 m-3">
    <div
      class="
        skill-set-square-btn
        position-relative
        pointer
        d-flex
        align-items-center
        justify-content-center
        flex-column
      "
      @click="
        !selected !== index && skill.title.length
          ? $emit('select', index)
          : null
      "
      :class="{
        pointer: selected !== index && skill.title.length,
        cluster: selected === index,
      }"
      :style="{
        background: `url(${getBackground(skill.background)})`,
      }"
    >
      <h5 :key="skill.title" v-html="skill.little"></h5>
      <small class="text-secondary" v-if="skill.title.length">{{
        $t("Click to Open")
      }}</small>
    </div>
  </b-col>
</template>

<script>
export default {
  name: "SkillItem",
  props: {
    skill: {
      type: Object,
      default: () => {},
    },
    selected: {
      type: Number,
      default: -1,
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    getBackground: function (img) {
      if (img) {
        return require(`@/assets/images/${img}`);
      }
      return "";
    },
  },
};
</script>

<style>
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
.skill-set-square-btn:hover .hoverable {
  opacity: 1;
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
