<template>
  <b-modal no-close-on-backdrop out :id="`${name}_modal`" size="xl" ok-only ok-title="Voltar">
    <template v-slot:modal-header>
      <h4 v-if="!createUser">Alterar Usuário</h4>
      <h4 v-else>Novo Usuário</h4>
    </template>
    <b-form ref="userForm" @submit="submit">
      <b-row class="justify-content-center w-80">
        <b-col xs="12" md="4">
          <label class="w-100">
            Nome:
            <br />
            <b-input class type="text" required v-model="form.name" />
          </label>
          <label class="w-100" v-if="!self">
            Usuário:
            <br />
            <b-input class type="text" required v-model="form.username" />
          </label>
          <label class="w-100">
            E-mail:
            <br />
            <b-input class type="text" required v-model="form.email" />
          </label>
          <label>
            Receber relatório Logcomex?
            <b-form-checkbox v-model="report.maritime" switch>Marítimo</b-form-checkbox>
            <b-form-checkbox v-model="report.air" switch>Aéreo</b-form-checkbox>
          </label>
        </b-col>

        <b-col xs="12" md="4">
          <label class="w-100" v-if="!self">
            Grupo:
            <br />
            <b-select class type="text" :required="createUser" v-model="form.role">
              <option disabled value="none">Selecione um grupo</option>
              <option v-for="(role, idx) in userRoles" :key="idx" :value="role.value">{{role.name}}</option>
            </b-select>
          </label>
          <label class="w-100">
            Senha:
            <br />
            <b-input class type="password" :required="createUser" v-model="form.password" />
          </label>
          <label class="w-100">
            Confirme a senha:
            <br />
            <b-input class type="password" :required="createUser" v-model="form.confirm" />
          </label>

          <b-button
            :disabled="request.onRequest || form.password !== form.confirm"
            type="submit"
            variant="success"
          >Enviar</b-button>
          <b-spinner v-if="request.onRequest" small variant="success" class="ml-3" />

          <br />
          <b-badge
            variant="warning"
            v-if="form.password !== form.confirm"
            class="ml-0 font-weight-normal"
          >As senhas devem ser iguais!</b-badge>
        </b-col>
      </b-row>
    </b-form>
  </b-modal>
</template>

<script>
import UserService from "./controller/AlterUserService";
export default {
  data() {
    return {
      us: UserService,
      request: {
        success: false,
        onRequest: this.$onRequest,
        msg: "",
      },
      form: {},
      model: {
        email: "",
        emailer: [],
        id: "",
        name: "",
        role: "none",
        rolename: "",
        status: 1,
        username: "",
        password: "",
        confirm: "",
      },
      modified: false,
      report: {
        maritime: false,
        air: false,
      },
      resetForm: {},
      userRoles: [
        { name: "Admin. Yoobot", value: "YOOBOT_ADM" },
        { name: "Usuário Yoobot", value: "YOOBOT" },
        { name: "Admin. Craft", value: "CRAFT_ADM" },
        { name: "Usuário Craft", value: "CRAFT" },
      ],
    };
  },
  props: {
    user: Object,
    open: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: "my",
    },
    createUser: {
      type: Boolean,
      default: false,
    },
    self: {
      type: Boolean,
      deafult: false,
    },
  },
  methods: {
    submit: async function (e) {
      if (this.request.onRequest) return;
      this.request.onRequest = true;
      e.preventDefault();
      this.request.msg = "";
      this.request.success = false;
      this.form.emailer = [];
      if (this.report.maritime) this.form.emailer.push("maritime");
      if (this.report.air) this.form.emailer.push("air");

      if (!this.createUser) {
        UserService.update(this.form)
          .then((res) => {
            this.request.success = res.success;
            this.request.msg = res.msg;
            if (res.success) {
              this.$emit("update", this.form);

              this.$bvToast.toast(res.msg, {
                title: "Mensagem",
                autoHideDelay: 5000,
                appendToast: false,
                variant: "warning",
              });
            }
          })
          .finally(() => {
            this.request.onRequest = false;
          });
      } else {
        UserService.save(this.form, this.self)
          .then((res) => {
            if (res) {
              this.request.success = res.success;
              this.request.msg = res.msg;
              if (res.success) {
                this.form.id = res.id;
                this.form.new = true;
                this.$emit("update", this.form);

                if (this.self) {
                  this.form.password = "";
                  this.form.confirm = "";
                }

                this.$bvToast.toast(res.msg, {
                  title: "Mensagem",
                  autoHideDelay: 5000,
                  appendToast: false,
                  variant: "warning",
                });
              }
            }
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            this.request.onRequest = false;
          });
      }
      return;
    },
    checked: function (key) {
      return this.form.emailer.find((el) => String(el).toLowerCase() === key)
        ? true
        : false;
    },
    handleCheckbox: function (e) {
      console.log(e);
    },
    clearForm: function () {
      this.form = this.model
    },
    mapReports: function () {
      this.report = {
        maritime: this.form.emailer.find(
          (el) => String(el).toLowerCase() === "maritime"
        )
          ? true
          : false,
        air: this.form.emailer.find((el) => String(el).toLowerCase() === "air")
          ? true
          : false,
      };
    },
  },
  mounted() {
    this.$nextTick(() => {
      if (this.self) {
        this.form = {
          email: this.$profile().email,
          emailer: JSON.parse(this.$profile().emailer),
          id: this.$profile().id,
          name: this.$profile().name,
          role: this.$profile().role,
          username: this.$profile().username,
          password: "",
          confirm: "",
        };
        this.mapReports();
      }else{
        this.clearForm();
      }
    });
  },
  watch: {
    user: {
      handler() {
        this.form = { ...this.form, ...this.user };
        if (!this.createUser) this.mapReports();
      },
    },
  },
};
</script>

<style scoped>
</style>