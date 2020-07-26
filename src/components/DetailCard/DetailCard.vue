<template>
  <b-card :class="height" class="bg-white detail-card" body-class="border-none">
    <b-card-header style="max-height: 35%; border: none">
      <h6>{{title}}</h6>
      <slot name="header"></slot>
    </b-card-header>
    <slot name="body"></slot>
    <b-card-footer class="bg-white" v-if="footer">
      <slot name="footer"></slot>
    </b-card-footer>
  </b-card>
</template>

<script>
export default {
  name: "Detail-Card",
  props: {
    title: {
      type: String,
      default: "",
    },
    footer: {
      type: Boolean,
      default: false,
    },
    height: {
      type: String,
      default: "h-100",
    },
  },
};
</script>
<style scoped>
@media screen and (min-width: 576px) {
  .h-40 {
    height: 39.5%;
  }
  .h-45 {
    height: 44.5%;
  }
}
@media screen and (max-width: 575px) {
    .detail-card{
        height: 100%;
        margin: 5px 0;
    }
}
</style>