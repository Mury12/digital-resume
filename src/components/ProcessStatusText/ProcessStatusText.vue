<template>
    <b-badge :variant="bind.variant">{{bind.label}}</b-badge>
</template>

<script>
export default {
  name: "ProcessStatusText",
  data() {
    return {};
  },
  props: {
    status: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    bind() {
      let status = { label: "", variant: "" };
      switch (this.status) {
        case 0:
          status = { label: "Iniciando", variant: "primary" };
          break;
        case 1:
          status = { label: "Executando", variant: "primary" };
          break;
        case 2:
          status = { label: "Erro durante a execução", variant: "danger" };
          break;
        case 3:
          status = { label: "Interrompido manualmente", variant: "warning" };
          break;
        case 4:
          status = { label: "Sucesso", variant: "success" };
          break;
        case 5:
          status = { label: "Debugging", variant: "primary" };
          break;
        case 6:
          status = { label: "Arquivando", variant: "info" };
          break;
        case 7:
          status = { label: "Finalizando manualmente", variant: "primary" };
          break;
      }
      return status;
    },
  },
};
</script>
<style scoped>
</style>