<template>
  <b-col md="6" lg="4" class="abillity-wrapper p-3">
    <b-row class="abillity-content m-2 h-100 pt-2 rounded">
      <b-col cols="12">
        <p class="h2">{{ abillity.name }}</p>
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
        <abillity-chart :level="abillity.level || 0" />
      </b-col>
      <b-col cols="12" class="text-center">
        <p class="description pt-3">
          {{ abstract }}
          <b-button
            type="button"
            variant="link"
            @click="openDescription"
            v-if="abillity.description.length > 50"
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
import AbillityChart from "./AbillityChart.vue";
export default Vue.extend({
  name: "AbillityDescription",
  components: { AbillityChart },
  props: ["abillity"],
  methods: {
    openDescription: function () {
      this.$emit("modal", {
        title: this.abillity.name,
        content: this.abillity.description,
      });
    },
  },
  computed: {
    picture() {
      if (this.abillity.image.length) {
        return require(`@/assets/images/${this.abillity.image}`);
      }
      return "";
    },
    abstract() {
      if (this.abillity.description) {
        return (
          String(this.abillity.description.substring(0, 30)).trim() + "..."
        );
      }
      return "";
    },
    imageFilter() {
      return this.abillity.imageFilter || "";
    },
  },
});
</script>
<style scoped>
.abillity-content {
  border: 1px solid rgba(255, 255, 255, 0.325);
}

</style>