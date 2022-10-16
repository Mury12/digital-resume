<template>
  <div class="d-flex justify-content-center">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="level-box"
      :style="{
        backgroundColor: item,
      }"
    ></div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "AbilityChart",
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
<style>
:root {
  --alpha-white: rgba(255, 255, 255, 0.125);
}
</style>
<style scoped>
.level-box {
  height: 10px;
  width: 15px;
  border-top: 1px solid var(--alpha-white);
  border-bottom: 1px solid var(--alpha-white);
  border-left: 1px solid var(--alpha-white);
}
.level-box:last-of-type {
  border-right: 1px solid var(--alpha-white);
}
</style>
