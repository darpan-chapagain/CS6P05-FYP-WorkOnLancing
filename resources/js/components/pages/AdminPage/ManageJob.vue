<template>
  <div style="margin: 150px 10px">
    <v-data-table
      :headers="headers"
      :items="jobs"
      sort-by="calories"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Manage Jobs</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      </template>
      <!-- <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Reset </v-btn>
      </template> -->
    </v-data-table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    headers: [
      {
        text: "ID",
        align: "start",
        value: "id",
      },
      {
        text: "Job Title",
        sortable: false,
        value: "title",
      },
      {
        text: "Posted By First Name",
        sortable: false,
        value: "user.first_name",
      },
      {
        text: "Last Name",
        sortable: false,
        value: "user.last_name",
      },
      { text: "Job Description", value: "description", sortable: false },
      { text: "Job Size", value: "size", sortable: false },
      { text: "Time", value: "time" },
      { text: "Experience", value: "experience", sortable: false },
      { text: "Project Rate", value: "project_rate" },
      { text: "Job Status", value: "status" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    jobs: [],
  }),

  computed: {},

  watch: {},

  async created() {
    this.initialize();
    this.jobs = await this.getJob();
    console.log(this.jobs);
  },

  methods: {
    initialize() {
      this.desserts = [
        {
          first_name: { name: "This is a Test" },
          number: 1,
          pre_pay: 2,
          pending_amount: 3,
          test: "Another Test",
        },
      ];
    },

    async getJob() {
      let res = await axios({
        methods: "GET",
        url: "/job",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      let data = await res.data;
      console.log(data);
      return data;
    },

    editItem(item) {
      this.$router
        .push({
          name: "jobEdit",
          params: {
            job: item,
          },
        })
        .then(() => {
          localStorage.setItem("job", JSON.stringify(item));
        });
    },

    deleteItem(item) {},
  },
  computed: {
    ...mapGetters({
      user: "auth/user",
      role: "auth/getRole",
      token: "auth/getToken",
    }),
  },
};
</script>