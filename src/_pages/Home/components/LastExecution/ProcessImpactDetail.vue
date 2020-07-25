<template>
  <detail-card title="Registros Afetados">
    <template v-slot:body>
      <div class="number-lg-showcase d-flex my-5 justify-content-center">
        <b-badge variant="info">{{rowsAffected}}</b-badge>
      </div>
    </template>
  </detail-card>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["exceptions"],
  computed: {
    rowsAffected() {
      if (this.exceptions && this.exceptions.rowsAffected) {
        return this.data.rowsAffected;
      }
      return 0;
    },
  },
};
</script>

<style scoped>
.number-lg-showcase {
  font-size: 5em;
}
</style>