<template>
  <b-row>
    <b-col cols="12" md="12">
      <p class="text-left">
        <b-button v-b-toggle.filtersCollapse>Filtros</b-button>
      </p>
      <b-collapse id="filtersCollapse" class="bg-light border rounded p-3">
        <b-row class="justify-content-left text-left">
          <b-col cols="12" lg="3">
            <label class="mt-w-100">
              <b>Filtrar por nome</b>
              <br />
              <b-input
                type="text"
                placeholder="Digite o nome de um processo"
                v-model="processName"
              />
            </label>
            <b-button @click="clearFilters">Limpar</b-button>
          </b-col>
          <b-col cols="12" lg="6">
            <b>Filtros</b>
            <b-row>
              <b-col cols="6" md="6">
                <b-checkbox switch @change="filter()" v-model="showOnly.statuses[0]">Iniciando</b-checkbox>
                <b-checkbox switch @change="filter()" v-model="showOnly.statuses[1]">Executando</b-checkbox>
                <b-checkbox
                  switch
                  @change="filter()"
                  v-model="showOnly.statuses[2]"
                  v-if="$hasRole('YOOBOT')"
                >Erro</b-checkbox>
                <b-checkbox
                  switch
                  v-model="showOnly.statuses[3]"
                  v-if="$hasRole('YOOBOT')"
                >Interrompido</b-checkbox>
              </b-col>
              <b-col cols="6" md="6">
                <b-checkbox switch @change="filter()" v-model="showOnly.statuses[4]">Sucesso</b-checkbox>
                <b-checkbox
                  switch
                  @change="filter()"
                  v-model="showOnly.statuses[2]"
                  v-if="!$hasRole('YOOBOT')"
                >Erro</b-checkbox>
                <b-checkbox
                  switch
                  v-model="showOnly.statuses[5]"
                  v-if="$hasRole('YOOBOT')"
                >Debugging</b-checkbox>
                <b-checkbox
                  switch
                  v-model="showOnly.statuses[6]"
                  v-if="$hasRole('YOOBOT')"
                >Arquivando</b-checkbox>
                <b-checkbox
                  switch
                  v-model="showOnly.statuses[7]"
                  v-if="$hasRole('YOOBOT')"
                >Finalizando</b-checkbox>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-collapse>
    </b-col>
  </b-row>
</template>

<script>
export default {
  data() {
    return {
      processName: "",
      showOnly: {
        statuses: [false, false, false, false, false, false, false],
        roles: [],
      },
      debounce: null,
      filtering: false,
      filtered: [],
    };
  },
  props: {
    data: Array,
  },
  methods: {
    clearFilters() {
      (this.processName = ""),
        this.showOnly.statuses.map((el, idx) => {
          if (el === true) this.showOnly.statuses[idx] = false;
        });
      this.$forceUpdate();
      this.search();
    },
    filter: function () {
      setTimeout(() => {
        this.search();
      }, 100);
    },
    search: function () {
      this.filtered.splice(0, this.filtered.length);
      this.filtered = this.data.filter((el) => {
        return el.processName
          .toLowerCase()
          .match(this.processName.toLowerCase())
          ? true
          : false;
      });
      if (this.isFiltering())
        this.filtered = this.filtered.filter(
          (el) => this.showOnly.statuses[el.statusID]
        );
      this.$emit("filter", this.filtered);
    },
    isFiltering: function () {
      for (let i = 0; i < this.showOnly.statuses.length; i++) {
        if (this.showOnly.statuses[i] === true) return true;
      }
      return false;
    },
  },
  watch: {
    processName() {
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        this.search();
      }, 150);
    },

    data() {
      this.search();
    },
  },
};
</script>
<style scoped>
.custom-control-label {
  cursor: pointer !important;
}
.bg-light {
  background-color: rgb(221, 221, 221);
}
</style>