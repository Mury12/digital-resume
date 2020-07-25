<template>
  <b-row class="justify-content-space-between">
    <b-col sm="6" md="6" lg=4 xs=12 class="mb-2">
      <process-detail-card :data="{...data}" />
    </b-col>
    <b-col sm="6" md="6" lg=4 xs=12 class="mb-2">
      <process-impact-detail :exceptions="data.exception ? data.exception : 0" />
    </b-col>
    <b-col sm="6" md="6" lg=4 xs=12 class="mb-2">
      <process-exception-detail :amount="data.exception ? data.exception.lenght : 0" />
    </b-col>
  </b-row>
</template>

<script>
import ProcessDetailCard from "./ProcessDetailCard";
import ProcessImpactDetail from "./ProcessImpactDetail";
import ProcessExceptionDetail from "./ProcessExceptionCount";
export default {
  name: "LastExecutionDetails",
  components: {
    ProcessDetailCard,
    ProcessImpactDetail,
    ProcessExceptionDetail,
  },
  data() {
    return {};
  },
  props: ["data"],
  computed: {},
};
</script>

<style scoped>
</style>