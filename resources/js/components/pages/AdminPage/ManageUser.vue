<template>
  <div style="margin: 150px 10px">
    <v-data-table
      :headers="headers"
      :items="all_users"
      sort-by="calories"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Manage Users</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    headers: [
      {
        text: "ID",
        align: "start",
        sortable: true,
        value: "id",
      },
      {
        text: "First Name",
        sortable: false,
        value: "first_name",
      },
      {
        text: "Last Name",
        sortable: false,
        value: "last_name",
      },
      {
        text: "Phone number",
        sortable: false,
        value: "phone_no",
      },
      {
        text: "Email",
        sortable: false,
        value: "email",
      },
      {
        text: "Email",
        sortable: false,
        value: "email",
      },
      {
        text: "Address",
        sortable: false,
        value: "Address",
      },
      {
        text: "City",
        sortable: false,
        value: "City",
      },
      {
        text: "Province",
        sortable: false,
        value: "Province",
      },
      {
        text: "Gender",
        sortable: false,
        value: "gender",
      },
      {
        text: "Status",
        sortable: false,
        value: "status",
      },
      {
        text: "Role",
        sortable: false,
        value: "roles.role+id",
      },
      { text: "Actions", value: "actions" },
    ],
    all_users: [],
  }),

  computed: {},

  watch: {},

  async created() {
    this.all_users = await this.getUser();
  },

  methods: {
    async getUser() {
      let res = await axios({
        methods: "GET",
        url: "/user",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      let data = await res.data;
      return data;
    },
    editItem(item) {
      this.$router
        .push({
          name: "userEdit",
          params: {
            a_user: item,
          },
        })
        .then(() => {
          localStorage.setItem("users", JSON.stringify(item));
        });
    },

    deleteItem(item) {},
  },
};
</script>