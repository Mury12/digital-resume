<template>
  <b-row>
    <b-col xs="12" id="process-filters" class="mb-2">
      <process-filters :data="data" @filter="filter" />
    </b-col>
    <b-col cols="12">
      <b-table
        show-empty
        empty-text="Não encontramos nada para exibir aqui.."
        :items="filtered.length ? filtered : data"
        :fields="fields"
        striped
        hover
        bordered
        style="min-height: 60vh"
        sticky-header
        foot-clone
        sort-by.sync="start_date"
        @row-clicked="selectRow"
        tbody-tr-class="pointer"
        ref="executionTable"
      >
        <template v-slot:cell(statusID)="row">
          <status-text :status="row.item.statusID" />
        </template>
        <template v-slot:cell(laststage)="row">
          <small v-if="row.item.laststage">{{row.item.laststage}}</small>
        </template>
        <template v-slot:cell(start_date)="row">{{getDate(row.item.start_date)}}</template>
        <template v-slot:cell(end_date)="row">{{getDate(row.item.end_date)}}</template>
        <template v-slot:cell(processID)="row">{{duration(row.item.start_date, row.item.end_date)}}</template>
        <template v-slot:cell(exception)="row">
          <b-button
            type="button"
            variant="link"
            v-if="row.item.exception.length"
            @click="openExceptionsModal(row.index)"
          >{{row.item.exception.length}}</b-button>
          <span v-else>-</span>
        </template>
      </b-table>
    </b-col>
    <exceptions-modal :exceptions="exceptions" />
  </b-row>
</template>

<script>
import moment from "moment";
import StatusText from "../ProcessStatusText/ProcessStatusText";
import ExceptionsModal from "../ExceptionsModal/ExceptionsModal";
import ProcessFilters from "./ProcessFilter";
export default {
  data() {
    return {
      fields: [
        {
          key: "processName",
          label: "Processo",
          sortable: true,
        },
        {
          key: "statusID",
          label: "Estado",
          sortable: true,
        },
        {
          key: "laststage",
          label: "Último estágio",
          sortable: true,
        },
        {
          key: "start_date",
          label: "Início",
          sortable: true,
        },
        {
          key: "end_date",
          label: "Término",
          sortable: true,
        },
        {
          key: "processID",
          label: "Duração",
        },
        {
          key: "exception",
          label: "Exceções",
          sortable: false,
        },
      ],
      exceptions: [],
      filtered: [],
    };
  },
  props: ["data"],
  components: {
    ExceptionsModal,
    ProcessFilters,
    StatusText,
  },
  methods: {
    filter: function (filtered) {
      this.filtered = filtered;
    },
    selectRow: function (row) {
      this.$emit("select", row);
      this.$scrollTo("#details-title");
    },
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
  watch: {
    data() {
      this.filtered = this.data;
      this.$refs.executionTable.refresh();
    },
  },
};
</script>

<style scoped>
</style>