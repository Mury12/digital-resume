<template>
  <b-row>
    <b-col cols="12">
      <last-execution-details :data="history.length ? history[0] : {}" />
      <execution-history :data="history.length ? history : []" class="mt-5"/>
    </b-col>
  </b-row>
</template>

<script>
import LastExecutionDetails from "./LastExecution/LastExecutionDetails";
import ExecutionHistory from "./ExecutionList";
import io from "socket.io-client";
export default {
  name: "PageBody",
  components: {
    LastExecutionDetails,
    ExecutionHistory
  },
  data() {
    return {
      socket: null,
      history: [],
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.socket =  io(this.$getWsUrl("BASE"));
      this.socket.emit("Authorization", {
        token:
          "27eda4d5e1aa16d34a4a61b16aab46bd2dbe5aa13b7c94aa66f36a3650a14355",
      });
      this.socket.on("latest_sessions", (data) => {
        if (data.sessions) {
          this.history = data.sessions ? data.sessions : [];
        }
        console.log(data);
      });
    });
  },
  beforeDestroy() {
    this.socket = null;
  },
};
</script>

<style scoped>
</style>