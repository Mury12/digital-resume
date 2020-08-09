<template>
  <b-row>
    <!-- <overlayer :show="onRequest" /> -->
    <transition mode="out-in" name="shrink-fade">
      <b-col cols="12" v-if="(!onRequest && !history.length) || onRequest" key="nothing">
        <nothing-to-show :title="onRequest ? 'Quase lá': 'Nada para exibir'" :starting="onRequest" />
      </b-col>

      <b-col cols="12" v-else key="fullfilledbody">
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
    </transition>
  </b-row>
</template>

<script>
import NothingToShow from "../../../components/NothingToShow/NothingToShow";
import io from "socket.io-client";
export default {
  name: "PageBody",
  components: {
    NothingToShow,
  },
  data() {
    return {
      socket: null,
      history: [],
      row_limit: 10,
      onRequest: false,
      curProcess: null,
    };
  },
  methods: {
    handleSelect: function (process) {
      this.curProcess = process;
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
          this.$session.set(
            "processHistory",
            data.sessions ? data.sessions : []
          ) || [];
          this.history = data.sessions ? data.sessions : [];
          if (this.onRequest) this.onRequest = false;
        }
      });
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.history = this.$session.getI("@app:processHistory") || [];
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