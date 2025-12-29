<template>
  <div class="the-sidebar">
    <b-row class="mx-0">
      <b-col cols="12" class="logo d-flex justify-content-center mt-3 mb-5">
        <NuxtLogo />
      </b-col>
      <b-col
        v-for="(item, idx) in items"
        :key="idx"
        cols="12"
        class="d-flex py-2 menu-item"
        @click="selected = idx"
      >
        <div class="icon mx-2">{{ item.icon }}</div>
        <div>{{ item.name }}</div>
      </b-col>
    </b-row>
    <div
      class="marker"
      :style="{
        transform: `translateY(${selected * 40}px)`,
      }"
    >
      <div class="marker-triangle" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'TheSidebar',
  data() {
    return {
      selected: 0,
      items: [
        {
          icon: '→',
          name: 'Dashboard',
        },
        {
          icon: '↑',
          name: 'Organizations',
        },
        {
          icon: '↓',
          name: 'Teams',
        },
        {
          icon: '?',
          name: 'Help',
        },
      ],
    }
  },
})
</script>

<style scoped>
.the-sidebar {
  overflow-x: hidden;
  border-right: 3px solid var(--info);
  height: 100%;
  position: relative;
}
.the-sidebar .logo svg {
  height: 50px;
}
.the-sidebar .icon {
  width: 20px;
}
.menu-item {
  height: 40px;
}
.menu-item:hover {
  background: var(--info);
}
.marker {
  position: absolute;
  top: 125px;
  right: -10px;
  height: 20px;
  width: 20px;
  transition: 200ms ease-in-out;
}
.marker .marker-triangle {
  background-color: var(--info);
  transform: rotateZ(45deg);
  height: inherit;
  width: inherit;
}
</style>
