<template>
  <b-row class="main">
    <div class="left-bar">
      <TheSidebar />
    </div>
    <b-col cols="9" class="body-wrapper">
      <slot></slot>
    </b-col>
    <b-col cols="3" class="border">
      <TheSwap />
    </b-col>
  </b-row>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'TheLayout',
})
</script>

<style scoped>
.main {
  margin-left: 250px;
}
.main .body-wrapper {
  min-height: 100vh;
}
.left-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 250px;
  background-color: black;
  color: white;
}
</style>
