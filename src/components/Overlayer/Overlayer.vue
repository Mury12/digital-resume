<template>
  <transition mode="out-in" name="fade">
    <div class="overlayer" v-if="isShowing">
      <b-row class="justify-content-center">
        <b-col cols="12" class="text-center">
          <b-spinner></b-spinner>
          <p>Carregando..</p>
        </b-col>
      </b-row>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Overlayer",
  data() {
    return {
      isShowing: false,
    };
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    show: {
      handler: function () {
        this.isShowing = this.show;
        setTimeout(() => {
          if (this.show) {
            this.isShowing = false;
          }
        }, 10000);
      },
    },
  },
};
</script>

<style scoped>
.overlayer {
  position: fixed;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.225);
  top: 0;
  left: 0;
  z-index: 99999;
  overflow: hidden;
}
</style>