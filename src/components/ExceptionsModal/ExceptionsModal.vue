<template>
  <b-modal id="exceptions_modal" size="xl" title="Exceções de Negócio" ok-only ok-title="Voltar">
    <b-tabs>
      <b-tab title="Aéreo"  v-if="exceptionList && exceptionList.air.length" >
        <b-table ref="exceptionTable" :fields="fields" :items="exceptionList.air"></b-table>
      </b-tab>
      <b-tab title="Marítimo"  v-if="exceptionList && exceptionList.maritime.length" >
        <b-table ref="exceptionTable" :fields="fields" :items="exceptionList.maritime"></b-table>
      </b-tab>
      <b-tab title="Banco de Dados"  v-if="exceptionList && exceptionList.database.length" >
        <b-table ref="exceptionTable" :fields="fields" :items="exceptionList.database"></b-table>
      </b-tab>
    </b-tabs>
  </b-modal>
</template>

<script>
export default {
  name: "ExceptionsModal",
  data() {
    return {
      exceptionList: {
        maritime: [],
        air: [],
        database: [],
      },
      fields: [
          {
              key: 'itemKey',
              label: 'ID'
          },
          {
              key: 'status',
              label: 'Mensagem'
          }
      ]
    };
  },
  props: ["exceptions"],
  watch: {
    exceptions() {
      this.exceptionList.air = [];
      this.exceptionList.maritime = [];
      this.exceptionList.database = [];
      this.exceptions.map((item) => {
        if (item.importType === "air") this.exceptionList.air.push(item);
        if (item.importType === "lcl") this.exceptionList.maritime.push(item);
        if (item.importType === "banco") this.exceptionList.database.push(item);
      });
      this.$refs.exceptionTable.refresh()
    },
  },
};
</script>