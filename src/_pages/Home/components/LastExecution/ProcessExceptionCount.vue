<template>
  <detail-card title="Exceções de Negócio">
    <template v-slot:body>
      <div class="number-lg-showcase d-flex my-5 justify-content-center">
        <b-badge :variant="exceptionBadgeColor">{{amount}}</b-badge>
      </div>
    </template>
  </detail-card>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    amount: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    exceptionBadgeColor() {
      return this.amount > 50
        ? "danger"
        : this.amount > 20
        ? "warning"
        : this.amount > 5
        ? "info"
        : this.amount === 0
        ? "success"
        : "info";
    },
  },
};
</script>

<style scoped>
.number-lg-showcase {
  font-size: 5em;
}
</style>