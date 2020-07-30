<template>
  <b-modal :id="name" size="xl" title="Exceções de Negócio" ok-only ok-title="Voltar">
    <b-tabs>
      <b-tab title="Aéreo" v-if="exceptionList && exceptionList.air.length">
        <b-pagination
          v-model="curPage.air"
          :total-rows="exceptionList.air.length"
          :per-page="perPage"
          aria-controls="airtable"
        ></b-pagination>
        <b-table
          id="airtable"
          ref="airtable"
          :fields="fields"
          :items="exceptionList.air"
          sticky-header
          bordered
          :per-page="perPage"
          :current-page="curPage.air"
          style="min-height: 40vh"
        ></b-table>
      </b-tab>
      <b-tab title="Marítimo" v-if="exceptionList && exceptionList.maritime.length">
        <b-pagination
          v-model="curPage.lcl"
          :total-rows="exceptionList.maritime.length"
          :per-page="perPage"
          aria-controls="lcltable"
        ></b-pagination>
        <b-table
          id="lcltable"
          ref="lcltable"
          :fields="fields"
          :items="exceptionList.maritime"
          sticky-header
          bordered
          :per-page="perPage"
          :current-page="curPage.lcl"
          style="min-height: 40vh"
        ></b-table>
      </b-tab>
      <b-tab title="Banco de Dados" v-if="exceptionList && exceptionList.database.length">
        <b-pagination
          v-model="curPage.database"
          :total-rows="exceptionList.database.length"
          :per-page="perPage"
          aria-controls="airtable"
        ></b-pagination>
        <b-table
          id="dbtable"
          ref="dbtable"
          :fields="fields"
          :items="exceptionList.database"
          sticky-header
          bordered
          :per-page="perPage"
          :current-page="curPage.database"
          style="min-height: 40vh"
        ></b-table>
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
      curPage: {
        air: 0,
        lcl: 0,
        database: 0,
      },
      perPage: 100,
      fields: [
        {
          key: "itemKey",
          label: "ID",
        },
        {
          key: "status",
          label: "Mensagem",
        },
      ],
    };
  },
  props: {
    exceptions: Array,
    name: {
      type: String,
      default: "exceptions_modal",
    },
  },
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
      if (this.$refs.airtable) this.$refs.airtable.refresh();
      if (this.$refs.dbtable) this.$refs.dbtable.refresh();
      if (this.$refs.lcltable) this.$refs.lcltable.refresh();
    },
  },
};
</script>