<template>
  <b-row class="justify-content-center align-items-center text-center mx-0">
    <b-col xs=12 lg=6>
      <h1 v-if="h1">{{title}}</h1>
      <h2 v-else-if="h2">{{title}}</h2>
      <h3 v-else-if="h3">{{title}}</h3>
      <h4 v-else-if="h4">{{title}}</h4>
      <div class="divisor" :class="divisorClass" v-if="divisor"></div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  data(){
    return{
      divisorClass: 'w-50'
    }
  },
  props: {
    title: {
      type: String,
      default: "Page Title"
    },
    h1: {
      type: Boolean,
      default: false
    },
    h2: {
      type: Boolean,
      default: true
    },
    h3: {
      type: Boolean,
      default: false
    },
    h4: {
      type: Boolean,
      default: false
    },
    divisor: {
      type: Boolean,
      default: true
    },
    divisorWidth: {
      type: String,
      default: '50'
    }
  },
  created: function() {
    this.h1
      ? (this.h2 = this.h3 = this.h4 = false)
      : this.h2
      ? (this.h3 = this.h4 = false)
      : this.h3
      ? (this.h4 = false)
      : null;
      this.divisorClass = `w-${this.divisorWidth}`;
  }
};
</script>

<style scoped>
.divisor{
  height: 3px;
  background: var(--def-brand-light);
  margin: 0 auto;

}
</style>