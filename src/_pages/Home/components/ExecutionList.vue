<template>
  <b-row>
    <b-col>
      <past-execution-table :data="data" />
    </b-col>
  </b-row>
</template>

<script>
import PastExecutionTable from "../../../components/PastExecutionTable/PastExecutionTable";
export default {
  name: "ExecutionList",
  data() {
    return {
     
    };
  },
  components: {
    PastExecutionTable,
  },
  props: ['data'],
  created() {
      //get
  }
};
</script>

<style scoped>
</style>