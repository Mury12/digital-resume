<template>
  <b-row>
    <b-col cols="12">
      <b-table show-empty :items="data" :fields="fields" striped hover bordered>
        <template v-slot:cell(start_date)="row">{{getDate(row.item.start_date)}}</template>
        <template v-slot:cell(end_date)="row">{{getDate(row.item.end_date)}}</template>
        <template v-slot:cell(processID)="row">{{duration(row.item.start_date, row.item.end_date)}}</template>
        <template v-slot:cell(laststage)="row">
          <b-badge variant="info" v-if="row.item.laststage">{{row.item.laststage}}</b-badge>
        </template>
        <template v-slot:cell(exception)="row">
          <b-button
            type="button"
            @click="openExceptionsModal(row.index)"
          >{{row.item.exception.length}}</b-button>
        </template>
      </b-table>
    </b-col>
    <exceptions-modal :exceptions="exceptions" />
  </b-row>
</template>

<script>
import moment from "moment";
import ExceptionsModal from "../ExceptionsModal/ExceptionsModal";
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
      exceptions: [],
    };
  },
  props: ["data"],
  components: {
    ExceptionsModal,
  },
  methods: {
    duration: function (start, end) {
      return this.$dateDiff(start, end);
    },
    getDate: function (date) {
      if (date) {
        return moment.utc(date).format("DD/MM/YYYY HH:mm");
      }
    },
    openExceptionsModal: function (idx) {
      this.exceptions = this.data[idx].exception;
      this.$bvModal.show("exceptions_modal");
    },
  },
};
</script>

<style scoped>
</style>