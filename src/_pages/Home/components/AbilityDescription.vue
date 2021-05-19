<template>
  <b-col md="6" lg="4" class="ability-wrapper p-3">
    <b-row
      class="ability-content default-transition m-2 h-100 pt-2 rounded"
      :class="{ pointer: extendDescription }"
      @click="openDescription"
    >
      <b-col cols="12">
        <p class="h4">{{ ability.name }}</p>
      </b-col>
      <b-col class="text-center" style="height: 120px">
        <div
          class="round d-flex justify-content-center align-items-center w-100"
          style="height: 100%"
        >
          <img
            class="lazy"
            :src="picture"
            height="100"
            :style="{ filter: imageFilter }"
          />
        </div>
      </b-col>
      <b-col cols="12">
        Proefficiency
        <ability-chart :level="ability.level || 0" />
      </b-col>
      <b-col cols="12" class="text-center">
        <p class="description pt-3">
          {{ abstract }}
          <b-button
            type="button"
            variant="link"
            @click="openDescription"
            v-if="extendDescription"
          >
            See more
          </b-button>
        </p>
      </b-col>
    </b-row>
  </b-col>
</template>
<script lang="ts">
import Vue from "vue";
import AbilityChart from "./AbilityChart";
export default Vue.extend({
  name: "AbilityDescription",
  components: { AbilityChart },
  props: ["ability"],
  methods: {
    openDescription: function() {
      if (this.ability.description && this.extendDescription) {
        this.$emit("modal", {
          title: this.ability.name,
          content: this.ability.description
        });
      }
    }
  },
  computed: {
    extendDescription() {
      return this.ability.description && this.ability.description.length >= 30;
    },
    picture() {
      if (this.ability.image.length) {
        return require(`@/assets/images/${this.ability.image}`);
      }
      return "";
    },
    abstract() {
      if (this.ability.description && this.ability.description.length > 30) {
        return (
          String(
            this.ability.description.replace(/<.+>/gim, "").substring(0, 30)
          ).trim() + "..."
        );
      }
      return this.ability.description || "";
    },
    imageFilter() {
      return this.ability.imageFilter || "";
    }
  }
});
</script>
<style scoped>
.ability-content {
  border: 1px solid rgba(255, 255, 255, 0.325);
  background-color: rgba(255, 255, 255, 0.05);
}
.ability-content:hover {
  background-color: rgba(0, 0, 0, 0.199);
  transform: translateY(-10px) translateX(5px) scale(1.01);
  box-shadow: -5px 10px 1em rgba(255, 255, 255, 0.162);
}
.description {
  min-height: 105px;
}
</style>