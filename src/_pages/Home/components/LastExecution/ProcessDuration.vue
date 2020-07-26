<template>
  <detail-card title="Tempo de Execução">
    <template v-slot:body>
      <div class="number-lg-showcase d-flex my-5 pt-3 justify-content-center">
        <p class="text-success">{{duration}}</p>
      </div>
    </template>
  </detail-card>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ['duration'],
  computed: {
    rowsAffected() {
      if (this.exceptions && this.exceptions.rowsAffected) {
        return this.data.rowsAffected;
      }
      return 0;
    },
  },
  methods:{

  }
};
</script>

<style scoped>
.number-lg-showcase {
  font-size: 3.5em;
}
</style>