<template>
  <div class="h-100 d-block d-flex align-items-between flex-column justify-content-between">
    <detail-card height="h-45" title="Estado">
      <template v-slot:body>
        <div class="text-lg sm-flex pt-3 justify-content-center">
          <status-text :status="status" />
        </div>
      </template>
    </detail-card>

    <detail-card height="h-45" title="Ultimo Estágio">
      <template v-slot:body>
        <div class="text-lg sm-flex pt-2 justify-content-center">
          <p class="text-success">{{lastStage}}</p>
        </div>
      </template>
    </detail-card>
  </div>
</template>

<script>
import StatusText from "../../../../components/ProcessStatusText/ProcessStatusText";
export default {
  data() {
    return {

    };
  },
  props: ["lastStage", "status"],
  components: {
    StatusText,
  },
  computed: {
   
  },
  methods: {
  }
};
</script>

<style scoped>
.number-lg-showcase {
  font-size: 2.5em;
}
.text-lg{
  font-size: 1.4em
}
</style>