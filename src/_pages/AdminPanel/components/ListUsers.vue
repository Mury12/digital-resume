<template>
  <div>
    <overlayer :show="request.onRequest" />
    <b-row>
      <b-col cols="12">
        <b-table
          ref="usertable"
          class
          show-empty
          :items="tableData"
          :fields="fields"
          striped
          hover
          bordered
          foot-clone
        >
          <template v-slot:cell(emailer)="row">
            <div v-for="(item, idx) in row.item.emailer" :key="idx">
              <fas :icon="bindIcon(item)" />
            </div>
          </template>
          <template v-slot:cell(action)="row">
            <fas
              icon="edit"
              class="mr-2 pointer hover default-transition"
              @click="alterUser(row.item)"
            />
            <fas
              icon="trash"
              class="pointer hover default-transition"
              @click="removeUser(row.index)"
            />
          </template>
        </b-table>
        <alter-user
          :createUser="newUser"
          @update="updateTable"
          name="alterUser"
          :user="selectedUser"
        />
      </b-col>
    </b-row>
    <div class="btn-wrap d-flex justify-content-center">
      <div
        class="add-user-btn shadow pointer d-flex align-items-center justify-content-center"
        v-b-tooltip.hover.left
        title="Novo Usuário"
      >
        <fas icon="plus" class="fa-2x" @click="createUser"></fas>
      </div>
    </div>
  </div>
</template>

<script>
import AlterUser from "../../../components/AlterUser/AlterOrCreateUser";
import UserService from "../controller/UserService";
export default {
  data() {
    return {
      selectedUser: {},
      newUser: false,
      fields: [
        {
          key: "name",
          label: "Nome",
          sortable:true,
        },
        {
          key: "username",
          label: "Nome de Usuário",
          sortable:true,

        },
        {
          key: "email",
          label: "Email",
        },
        {
          key: "role",
          label: "Grupo",
          sortable:true,

        },
        {
          key: "emailer",
          label: "Relatório",
        },
        {
          key: "action",
          label: "Ações",
        },
      ],
      tableData: [],
      request: {
        onRequest: this.$onRequest,
        success: false,
        msg: "",
      },
    };
  },
  props: ["items"],
  components: {
    AlterUser,
  },
  methods: {
    alterUser: function (user) {
      this.selectedUser = user;
      this.newUser = false;
      this.$bvModal.show("alterUser_modal");
    },
    createUser: function () {
      this.$bvModal.show("alterUser_modal");
      this.newUser = true;
      this.selectedUser = {};
    },
    removeUser: async function (idx, confirm = false) {
      if (confirm) {
        if (this.request.onRequest) return;
        this.request.onRequest = true;
        const username = this.tableData[idx].username;

        return await UserService.remove(this.tableData[idx].id)
          .then((res) => {
            if (res && res.success) {
              this.tableData.splice(idx, 1);
              this.$refs.usertable.refresh();
              this.$bvToast.toast(`Usuário ${username} removido.`, {
                title: "Usuário removido",
                autoHideDelay: 5000,
                appendToast: false,
                variant: "success",
              });
            }
          })
          .finally(() => {
            this.request.onRequest = false;
          });
      }
      this.$bvModal
        .msgBoxConfirm(
          `Por favor, confirme que deseja remover o usuário ${this.tableData[idx].username}`,
          {
            title: "Está certo disso?",
            size: "sm",
            buttonSize: "sm",
            okVariant: "danger",
            okTitle: "Sim",
            cancelTitle: "Não, me enganei",
            footerClass: "p-2",
            hideHeaderClose: false,
            centered: true,
          }
        )
        .then((value) => {
          if (value) this.removeUser(idx, value);
        });
    },
    bindIcon: function (type) {
      switch (String(type).toLowerCase()) {
        case "maritime":
          return "ship";
        case "air":
          return "plane";
        default:
          return "times-circle";
      }
    },
    updateTable: function (user) {
      console.log(user);
      if (this.newUser) {
        this.tableData.push(user);
      } else {
        console.log("updating table");
        this.tableData.map((row, idx) => {
          console.log(row);
          if (row.id === user.id) {
            this.tableData[idx] = { ...user };
          }
        });
        this.$refs.usertable.refresh();
      }
    },
  },
  watch: {
    items() {
      this.tableData = this.items;
      this.$refs.usertable.refresh();
    },
  },
};
</script>

<style scoped>
.hover:hover {
  color: var(--def-brand-lighter);
  transform: scale(1.3);
  text-shadow: 0 1em 1em rgba(0, 0, 0, 0.125);
}
.btn-wrap {
  position: absolute;
  top: -25px;
  right: -10px;
}
.add-user-btn {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: var(--def-brand-light);
  color: white;
  border: 1px solid white;
  transition: ease-in-out 100ms;
}
.add-user-btn:hover {
  background-color: var(--def-brand-lighter);
}
.add-user-btn:active {
  transform: scale(0.95);
}
</style>