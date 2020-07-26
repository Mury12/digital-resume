<template>

    <list-users :items="users" />

</template>

<script>
import UserService from "../controller/UserService";
import ListUsers from "./ListUsers";
export default {
  data() {
    return {
      users: [],
    };
  },
  components: {
    ListUsers,
  },
  methods: {
    getUsers: async function () {
      await UserService.get().then((res) => {
        if (res.res) this.users = res.users;
      });
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.users = JSON.parse(sessionStorage.getItem('users'));
      this.getUsers();
    });
  },
};
</script>

<style scoped>
</style>