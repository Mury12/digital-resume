<template>
  <b-row>
    <overlayer :show="onRequest" />
    <b-col cols="12">
      <page-title title="Última execução" divisorWidth="25" class="mt-5" />
      <p class="mb-3">Este é o último processo executado ou em execução.</p>

      <last-execution-details :data="curProcess ? curProcess : history.length ? history[0] : {}" />

      <page-title title="Histórico" divisorWidth="25" class="mt-5" />
      <p class="mb-3">Esta é a lista dos processos já executados.</p>
      <execution-history @select="handleSelect" :data="history.length ? history : []" />
      <b-button
        type="button"
        :disabled="onRequest || row_limit < 20"
        @click="decreaseRowLimit"
        variant="info"
      >Mostrar menos</b-button>
      <b-button
        type="button"
        :disabled="onRequest"
        class="ml-2"
        @click="increaseRowLimit"
        variant="info"
      >Mostrar mais</b-button>
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
    ExecutionHistory,
  },
  data() {
    return {
      socket: null,
      history: [],
      row_limit: 10,
      onRequest: false,
      curProcess: null
    };
  },
  methods: {
    handleSelect: function(process) {
      this.curProcess = process
    },
    increaseRowLimit: function () {
      this.onRequest = true;
      this.row_limit += 10;
      this.restartSocket();
    },
    decreaseRowLimit: function () {
      this.onRequest = true;
      if (this.row_limit >= 20) {
        this.row_limit -= 10;
        this.restartSocket();
      } else {
        this.row_limit = 10;
      }
    },
    restartSocket: function () {
      if (!this.history.length) this.onRequest = true;
      if (this.socket) {
        this.socket.disconnect();
        this.socket = null;
      }
      this.socket = io(this.$getWsUrl("BASE"));
      this.socket.emit("Authorization", {
        token: this.$getSessionToken(),
        row_limit: this.row_limit,
      });
      this.socket.on("latest_sessions", (data) => {
        if (data.sessions) {
          sessionStorage.setItem(
            "processHistory",
            JSON.stringify(data.sessions ? data.sessions : [])
          ) || [];
          this.history = data.sessions ? data.sessions : [];
          if (this.onRequest) this.onRequest = false;
        }
      });
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.history = JSON.parse(sessionStorage.getItem("processHistory")) || [];
      this.row_limit = this.history.length >= 10 ? this.history.length : 10;
      this.restartSocket();
    });
  },
  beforeDestroy() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  },
};
</script>

<style scoped>
</style>