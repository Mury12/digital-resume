<template>
  <b-row>
    <b-col>
      <past-execution-table @select="handle" :data="data" />
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
  methods: {
    handle: function(select) {
      this.$emit('select', select)
    }
  },
  created() {
      //get
  }
};
</script>

<style scoped>
</style>