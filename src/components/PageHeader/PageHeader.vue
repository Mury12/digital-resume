<template>
  <b-row id="page-header" class="m-0 w-100">
    <page-title :title="$route.name" :divisor="false"/>
    <div class="user-info px-3">
      <b-row class="h-100 align-items-center">
          
      </b-row>
    </div>
  </b-row>
</template>

<script>
export default {
  name: "PageHeader",
  data() {
    return {};
  },
  components:{
  },
  methods: {
    
  },
};
</script>

<style scoped>
@media screen and(min-width:962px) {
  #page-header{
    background-color: rgba(255,255,255,0.05);
  }  
}
#page-header {
  position: fixed;
  height: 85px;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2
}
.user-info:hover {
  cursor: default;
}
</style>