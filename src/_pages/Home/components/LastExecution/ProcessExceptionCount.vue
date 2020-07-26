<template>
  <div class="h-100 d-flex align-items-between flex-column justify-content-between">
    <detail-card height="h-45" title="Exceções de Negócio">
      <template v-slot:body>
        <div class="number-lg-showcase sm-flex pt-2 justify-content-center">
          <p class="text-success pointer" @click="showExceptions">{{exceptions.length}}</p>
        </div>
      </template>
    </detail-card>

    <detail-card height="h-45" title="Retorno Logcomex">
      <template v-slot:body>
        <b-tabs>
          <b-tab title="LCL" v-if="$hasType('maritime')">
            <div class="number-md-showcase sm-flex pt-2 justify-content-center">
              <p class="text-success">{{lclLog}} registros</p>
            </div>
          </b-tab>
          <b-tab title="AIR" v-if="$hasType('air')">
            <div class="number-md-showcase sm-flex pt-2 justify-content-center">
              <p class="text-success">{{airLog}} registros</p>
            </div>
          </b-tab>
        </b-tabs>
      </template>
    </detail-card>
    <exceptions-modal :exceptions="exceptions" name="last-process" />
  </div>
</template>

<script>
import ExceptionsModal from '../../../../components/ExceptionsModal/ExceptionsModal';

export default {
  data() {
    return {
      exc: {
        api: {
          lcl: 0,
          air: 0,
        },
      },
    };
  },
  props: {

    logcomex: {
      type: Number,
      default: 0,
    },
    exceptions: Array,
  },
  components: {
    ExceptionsModal
  },
  computed: {
    exceptionBadgeColor() {
      return this.amount > 50
        ? "danger"
        : this.amount > 20
        ? "warning"
        : this.amount > 5
        ? "info"
        : this.amount === 0
        ? "success"
        : "info";
    },
    lclLog() {
      let log = 0;
      this.exceptions.map((exc, idx) => {
        if (exc.itemKey.match("API Log") && exc.importType === "lcl") {
          log = Number(exc.status.split(": ")[1]);
          this.exceptions.splice(idx, 1);
        }
      });
      return log;
    },
    airLog() {
      let log = 0;
      this.exceptions.map((exc, idx) => {
        if (exc.itemKey.match("API Log") && exc.importType === "air") {
          log = Number(exc.status.split(": ")[1]);
          this.exceptions.splice(idx, 1);
        }
      });
      return log;
    },
  },
  methods: {
    rollup: function () {
      let grow = 31;
      for (let i = 0; i < this.goal - grow; i += grow) {
        // setTimeout(() => {
        this.registers += grow;
        // }, 1);
      }
      this.registers += this.goal % grow;
    },
    showExceptions: function() {
      this.$bvModal.show('last-process')
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.rollup();
    });
  },
};
</script>

<style scoped>
.number-lg-showcase {
  font-size: 2.5em;
}
.number-md-showcase {
  font-size: 1.6em;
}
</style>