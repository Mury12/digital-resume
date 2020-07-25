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
            <b-badge variant="info">{{data.lastStage}}</b-badge>
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
      return moment(this.data.start_date).format("DD/MM/YYYY HH:mm:ss");
    },
    endDate() {
      if (this.data.end_date) {
        return moment(this.data.end_date).format("DD/MM/YYYY HH:mm:ss");
      }
      return 'Em execução'
    },
   duration: function (start, end) {
        const date1 = new Date(moment(start).format("YYYY/MM/DD hh:mm:ss"));
        let date2;
        if(end){
          date2 = new Date(moment(end).format("YYYY/MM/DD hh:mm:ss"));
        }else{
          date2 = new Date()
        }
        let diffTime = Math.abs(date2 - date1);

          let seconds = Math.floor((diffTime / 1000) % 60)
          let minutes = Math.floor((diffTime / (1000 * 60)) % 60)
          let hours = Math.floor((diffTime / (1000 * 60 * 60)) % 24)

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        return hours + ":" + minutes + ":" + seconds;
        // return `${time.hours}h${time.minutes}`;
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