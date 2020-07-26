<template>
  <detail-card :title="data.processName">

    <template v-slot:body>
        <b-row class="number-lg-showcase d-flex my-5 justify-content-center">
          <b-col cols="6" style="border-right: 1px solid rgba(0,0,0,0.125)">
            <b>Início</b>
            <br />
            <small>{{startDate}}</small>
          </b-col>
          <b-col cols="6" style="">
            <b>Término</b>
            <br />
            <small>{{endDate}}</small>
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
      return " - ";
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
.number-lg-showcase {
  font-size: 1.4em;
}
</style>