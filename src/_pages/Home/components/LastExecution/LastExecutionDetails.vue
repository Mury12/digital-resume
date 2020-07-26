<template>
  <b-row class="justify-content-space-between">
    <b-col sm="6" md="6" lg=4 xs=12 class="mb-2">
      <process-detail-card :data="{...data}" />
    </b-col>
    <b-col sm="6" md="6" lg=4 xs=12 class="mb-2">
      <process-duration :duration="duration" />
    </b-col>
    <b-col sm="6" md="6" lg=4 xs=12 class="mb-2">
      <process-exception-detail :amount="data.exception ? data.exception.lenght : 0" />
    </b-col>
  </b-row>
</template>

<script>
import ProcessDetailCard from "./ProcessDetailCard";
import ProcessDuration from "./ProcessDuration";
import ProcessExceptionDetail from "./ProcessExceptionCount";
export default {
  name: "LastExecutionDetails",
  components: {
    ProcessDetailCard,
    ProcessDuration,
    ProcessExceptionDetail,
  },
  data() {
    return {};
  },
  props: ["data"],
  computed: {
    duration() {
      return this.$dateDiff(this.data.start_date, this.data.end_date)
    }
  },
};
</script>

<style scoped>
</style>