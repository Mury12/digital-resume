<template>
  <b-row class="justify-content-space-between" id="last_exec_cards">
    <b-col sm="12" lg="4" xs="12" class="mb-2">
      <process-detail-card :data="{...data}" />
    </b-col>
    <b-col sm="6" md="6" lg="4" xs="12" class="mb-md-2">
      <process-state-detail :status="data.statusID" :lastStage="data.laststage || ' - '" />
    </b-col>
    <b-col sm="6" md="6" lg="4" xs="12" class="mb-md-2">
      <process-exception-detail :exceptions="data.exception ? data.exception : []" />
    </b-col>
  </b-row>
</template>

<script>
import ProcessDetailCard from "./ProcessDetailCard";
import ProcessStateDetail from "./ProcessStateDetail";
import ProcessExceptionDetail from "./ProcessExceptionCount";
export default {
  name: "LastExecutionDetails",
  components: {
    ProcessDetailCard,
    ProcessStateDetail,
    ProcessExceptionDetail,
  },
  data() {
    return {};
  },
  props: ["data"],
  computed: {
    duration() {
      return this.$dateDiff(this.data.start_date, this.data.end_date);
    },
  },
};
</script>

<style scoped>
</style>