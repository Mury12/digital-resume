<template>
  <b-row>
    <b-col cols="12">
      <b-table show-empty :items="data" :fields="fields" striped hover bordered>
        <template v-slot:cell(exception)="row">{{row.item.exception.length}}</template>
        <template v-slot:cell(start_date)="row">{{getDate(row.item.start_date)}}</template>
        <template v-slot:cell(end_date)="row">{{getDate(row.item.end_date)}}</template>
        <template v-slot:cell(processID)="row">{{duration(row.item.start_date, row.item.end_date)}}</template>
        <template v-slot:cell(laststage)="row">
          <b-badge variant="info" v-if="row.item.laststage">{{row.item.laststage}}</b-badge>
        </template>
      </b-table>
    </b-col>
  </b-row>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      fields: [
        {
          key: "processName",
          label: "Processo",
        },
        {
          key: "laststage",
          label: "Último estágio",
        },
        {
          key: "start_date",
          label: "Início",
        },
        {
          key: "end_date",
          label: "Término",
        },
        {
          key: "processID",
          label: "Duração",
        },
        {
          key: "exception",
          label: "Exceções",
        },
      ],
    };
  },
  props: ["data"],
  methods: {
    duration: function (start, end) {
      if (start && end) {
        const date1 = new Date(moment(start).format("YYYY/MM/DD hh:mm:ss"));
        const date2 = new Date(moment(end).format("YYYY/MM/DD hh:mm:ss"));
        let diffTime = Math.abs(date2 - date1);

          let seconds = Math.floor((diffTime / 1000) % 60)
          let minutes = Math.floor((diffTime / (1000 * 60)) % 60)
          let hours = Math.floor((diffTime / (1000 * 60 * 60)) % 24)

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        return hours + ":" + minutes + ":" + seconds;
        // return `${time.hours}h${time.minutes}`;
      }
      return 0;
    },
    getDate: function (date) {
      if (date) {
        return moment.utc(date).format("DD/MM/YYYY HH:mm");
      }
    },
  },
};
</script>

<style scoped>
</style>