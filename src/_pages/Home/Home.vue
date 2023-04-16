<template>
  <div>
    <b-container class="body-container">
      <b-row class="skills-wrapper justify-content-around align-content-center h-100" style="padding-top: 85px">
        <span class="box-selected-close pointer" @click="selected = -1" :class="selected >= 0 ? '' : 'fade-out'">
          <fas icon="times" class="fa-3x"></fas>
        </span>
        <skill-item @select="selected = $event" v-for="(skill, index) in $root.skills" :skill="skill" :selected="selected"
          :index="index" :key="index" />

        <b-col class="position-relative" hidden>
          <b-modal id="description-modal" :title="modal.title" hide-footer body-class="border-none"
            header-class="border-none" content-class="border-none">
            <div class="modal-content" v-html="modal.content"></div>
          </b-modal>
        </b-col>
      </b-row>
    </b-container>

    <transition mode="out-in" name="cluster-in">
      <div class="box-selected position-fixed" v-if="selected !== -1" :key="selected">
        <skill-set :skill="$root.skills[selected]" @modal="openModal"></skill-set>
      </div>
    </transition>
  </div>
</template>

<script>
import SkillItem from "@/components/SkillItem.vue";
import SkillSet from "@/components/SkillSet.vue";

export default {
  name: "Home",
  components: { SkillItem, SkillSet },
  data() {
    return {
      selected: -1,
      modal: {
        content: "",
        title: "",
      },
    };
  },

  methods: {
    openModal($e) {
      this.modal = $e;
      this.$bvModal.show("description-modal");
    },

    select: function (direction = "next") {
      if (direction === "next" && this.selected < this.skills.length - 1) {
        this.selected++;
      } else if (direction === "prev" && this.selected > -1) {
        this.selected--;
      } else if (this.selected === -1) {
        this.selected = this.skills.length - 1;
      } else {
        this.selected = -1;
      }
      if (this.selected > -1 && !this.skills[this.selected].title.length) {
        this.select(direction);
      }
    },
  },
  computed: {
    lang() {
      return this.$root.lang;
    },
    skills() {
      return this.$root.skills;
    },
  },
  mounted() {
    this.$nextTick(() => {
      document.body.addEventListener("keyup", (e) => {
        if (e.key === "ArrowRight") {
          this.select("next");
        } else if (e.key === "ArrowLeft") {
          this.select("prev");
        } else if (e.key === "Escape") {
          this.selected = -1;
        }
      });
    });
  },
};
</script>
<style scoped>
.fade-in {
  opacity: 1 !important;
}

.fade-out {
  opacity: 0 !important;
}
</style>
