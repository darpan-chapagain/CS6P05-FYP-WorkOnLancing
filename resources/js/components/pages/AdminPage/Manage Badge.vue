<template>
  <div style="margin: 150px 10px">
    <v-data-table
      :headers="headers"
      :items="badges"
      sort-by="calories"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Manage Work Badges</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" width="700">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                outlined
                color="indigo"
                dark
                class="mb-2"
              >
                New Badge
              </v-btn>
            </template>

            <v-card>
              <v-toolbar dark color="primary">
                <v-toolbar-title>Add New Badge</v-toolbar-title>
              </v-toolbar>

              <v-container
                fluid
                style="max-width: 400px; margin: 20px auto; display: flex"
              >
                <form ref="form" style="width: 100%; margin: 0 auto">
                  <h4 class="pb-5 pt-5">Job Category</h4>

                  <v-autocomplete
                    v-model="category"
                    :items="categories"
                    clearable
                    hide-selected
                    persistent-hint
                    label="Job Category"
                    :rules="[required]"
                    required
                    dense
                  ></v-autocomplete>

                  <v-text-field
                    label="Name of the Badge"
                    persistent-hint
                    outlined
                    v-model="badge_name"
                  ></v-text-field>

                  <v-text-field
                    label="Choose icon image"
                    hint="choose code from materialdesignicons.com "
                    persistent-hint
                    outlined
                    v-model="badge_icon"
                  ></v-text-field>

                  <v-btn
                    color="success"
                    @click.prevent="submit"
                    style="width: 100%; text-align: center; margin-top: 10px"
                  >
                    submit
                  </v-btn>
                </form>
              </v-container>

              <v-bottom-navigation
                :value="value"
                background-color="blue"
                grow
                class="mb-0"
              >
                <v-btn icon @click="dialog = false">
                  <v-icon color="white">mdi-close</v-icon>
                </v-btn>
              </v-bottom-navigation>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    newBadge: "",
    value: null,
    headers: [
      {
        text: "id",
        align: "start",
        value: "work_badge_id",
      },
      {
        text: "Badge Name",
        align: "start",
        sortable: false,
        value: "Badge_Name",
      },
      {
        text: "Job Category",
        align: "start",
        sortable: false,
        value: "job_categories.category_name",
      },

      { text: "Actions", value: "actions" },
    ],
    badges: [],
    categories: [],
  }),

  computed: {},

  watch: {},

  async created() {
    this.badges = await this.getBadges(); // get category
    await this.getCategories(); // get category
  },

  methods: {
    async submit() {
      // console.log();
      axios({
        method: "POST",
        url: "badges",
        data: {
          badge_name: this.badge_name,
          badge_icon: this.badge_icon,
          category: this.category,
        },
        headers: { Authorization: `Bearer ${this.token}` },
      }).then(() => {
        this.badges = [];
      });
      this.badges = await this.getBadges();
      this.dialog = false;
    },
    async getBadges() {
      let res = await axios({
        method: "get",
        url: "badges",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      let data = await res.data;
      return data;
    },

    async deleteItem(item) {
      axios({
        method: "DELETE",
        url: `badges/${item.work_badge_id}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then(() => {
        this.badges = [];
      });
      this.badges = await this.getBadges();
    },
    async getCategories() {
      const res = await axios.get("jobs/category");
      let skill_data = [];
      for (let i = 0; i < res.data.length; i++) {
        // console.log(res.data[i].skill);
        this.categories.push(res.data[i].category_name);
      }
    },
  },
};
</script>