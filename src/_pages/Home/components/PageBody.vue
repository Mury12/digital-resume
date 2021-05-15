<template>
  <b-row>
    <!-- <overlayer :show="onRequest" /> -->
    <transition mode="out-in" name="shrink-fade">
      <b-col
        cols="12"
        v-if="(!onRequest && !history.length) || onRequest"
        key="nothing"
      >
        <nothing-to-show
          :title="onRequest ? 'Quase lá' : 'Nada para exibir'"
          :starting="onRequest"
        />
      </b-col>

      <b-col cols="12" v-else key="fullfilledbody">
        <b-button
          type="button"
          :disabled="onRequest || row_limit < 20"
          @click="decreaseRowLimit"
          variant="info"
          >Mostrar menos</b-button
        >
        <b-button
          type="button"
          :disabled="onRequest"
          class="ml-2"
          @click="increaseRowLimit"
          variant="info"
          >Mostrar mais</b-button
        >
      </b-col>
    </transition>
  </b-row>
</template>

<script>
import NothingToShow from "../../../components/NothingToShow/NothingToShow";
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
    
  },

};
</script>

<style scoped>
</style>