<template>
  <div>
    <div class="background-mask"></div>
    <div class="page-body">
      <page-header @lang="$emit('lang', $event, 0)" :key="$root.lang" />
      <div class="" id="main">
        <router-view :key="$route.name"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from "./PageHeader/PageHeader.vue";

export default {
  name: "TheLayout",
  components: { PageHeader },
  props: {
    skills: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style>
</style>
