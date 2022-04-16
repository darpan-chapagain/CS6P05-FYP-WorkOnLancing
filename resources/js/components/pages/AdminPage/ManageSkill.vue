<template>
  <div style="margin: 150px 10px">
    <v-data-table
      :headers="headers"
      :items="skill"
      sort-by="calories"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Manage Job Categories</v-toolbar-title>
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
                New Skill
              </v-btn>
            </template>

            <v-card>
              <v-toolbar dark color="primary">
                <v-toolbar-title>Add New Skill</v-toolbar-title>
              </v-toolbar>

              <v-container
                fluid
                style="max-width: 400px; margin: 20px auto; display: flex"
              >
                <form ref="form" style="width: 100%; margin: 0 auto">
                  <v-text-field
                    label="Add New Skill"
                    persistent-hint
                    outlined
                    v-model="newSkill"
                  ></v-text-field>

                  <v-btn
                    color="success"
                    @click.prevent="submit"
                    style="width: 100%; text-align: center"
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
import axios from 'axios';
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    newSkill: "",
    value: null,
    headers: [
      {
        text: "id",
        align: "start",
        sortable: false,
        value: "id",
      },
      {
        text: "Skill Name",
        align: "start",
        sortable: false,
        value: "skill",
      },
      { text: "Actions", value: "actions" },
    ],
    skill: [],
  }),

  computed: {},

  watch: {},

  async created() {
    this.skill = await this.getSkill(); // get category
  },

  methods: {
    async submit() {
      // console.log();
      axios({
        method: "POST",
        url: "skill",
        data: {
          skill: this.newSkill,
        },
        headers: { Authorization: `Bearer ${this.token}` },
      }).then(() => {
        this.skill = [];
      });
      this.skill = await this.getSkill();
      this.dialog = false;
    },
    async getSkill() {
      let res = await axios({
        method: "get",
        url: "skill",
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
        url: `skill/${item.id}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then(() => {
        this.skill = [];
      });
      this.skill = await this.getSkill();
    },
  },
};
</script>