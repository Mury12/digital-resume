<template>
  <div class="d-flex justify-content-center">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="level-box border"
      :style="{
        backgroundColor: item,
      }"
    ></div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "AbillityChart",
  props: ["level"],
  methods: {
    bindColor: function (level) {
      const normalizedLevel = Math.floor(level);
      switch (normalizedLevel) {
        case 1:
          return "#00C227";
        case 2:
          return "#35E600";
        case 3:
          return "#F2EA00";
        case 4:
          return "#F09C00";
        case 5:
          return "#E64201";
      }
    },
  },
  computed: {
    items() {
      const items = [];
      for (let i = 1; i <= 5; i += 0.5) {
        items.push(i <= this.level ? this.bindColor(Math.floor(i)) : "black");
      }
      return items;
    },
  },
});
</script>
<style scoped>
.level-box {
  height: 10px;
  width: 15px;
}
</style>