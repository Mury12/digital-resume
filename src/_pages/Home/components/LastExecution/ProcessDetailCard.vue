<template>
  <detail-card footer :title="data.processName">
    <template v-slot:header>
      <b-badge :variant="data.statusID == 4 ? 'success' : 'warn' ">{{status}}</b-badge>
    </template>

    <template v-slot:body>
      <b-row>
        <b-col cols="12">
          <label>
            Último estágio:
            <br />
            <b-badge variant="info">{{data.lastStage || ' - '}}</b-badge>
          </label> 
          <br />
          <label>
            Tempo de Execução:
            <br />
            <b-badge variant="info">{{duration}}</b-badge>
          </label>
        </b-col>
      </b-row>
    </template>

    <template v-slot:footer>
      <b-row>
        <b-col cols="6">
          <b>Início</b>
          <br />
          {{startDate}}
        </b-col>
        <b-col cols="6">
          <b>Fim</b>
          <br />
          {{endDate}}
        </b-col>
      </b-row>
    </template>
  </detail-card>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {};
  },
  props: ["data"],
  computed: {
    startDate() {
      return moment.utc(this.data.start_date).format("DD/MM/YYYY HH:mm:ss");
    },
    endDate() {
      if (this.data.end_date) {
        return moment.utc(this.data.end_date).format("DD/MM/YYYY HH:mm:ss");
      }
      return ' - '
    },
   duration () {
        return this.$dateDiff(this.data.start_date, this.data.end_date)
    },
    status() {
      switch (Number(this.data.statusID)) {
        case 1:
          return "Em andamento";
        case 2:
          return "Terminated";
        case 3:
          return "Sei la";
        case 4:
          return "Finalizado";
        case 5:
          return "Depuração";
        default:
          return "Iniciando..";
      }
    },
  },
};
</script>

<style scoped>
</style>