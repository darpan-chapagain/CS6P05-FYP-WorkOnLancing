<template>
  <div class="my-services">
    <div
      class="
        title-btn
        manage-job
        d-flex
        flex-row
        align-items-center
        justify-content-around
      "
    >
      <h6>My Job Skills</h6>
      <v-dialog v-model="dialog" width="700">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" outlined color="indigo" small fab>
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </template>

        <v-card>
          <v-toolbar dark color="primary">
            <v-toolbar-title>Job Detail</v-toolbar-title>
          </v-toolbar>

          <v-container
            fluid
            style="max-width: 400px; margin: 20px auto; display: flex"
          >
            <form ref="form" style="width: 100%; margin: 0 auto">
              <v-autocomplete
                v-model="skill"
                :items="items"
                clearable
                hide-selected
                persistent-hint
                label="Skills"
                dense
                multiple
                required
                small-chips
              ></v-autocomplete>
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
    </div>
    <!-- <div class="services mt-5 ml-5">
      <div class="skills" style="margin: 0 5%; display: flex">
        <div v-for="skills in mySkills" :key="skills.id">
          <v-chip class="m-1"> {{ skills.all_skill.skill }} </v-chip>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import MyJobCategory from "../app_component/jobCategoryForm.vue";
import { mapGetters } from "vuex";

export default {
  name: "MyServices",
  components: {
    MyJobCategory,
  },
  data() {
    return {
      dialog: false,
      mySkills: [],
      value: null,
      items: [],
      skill: [],
    };
  },
  methods: {
    async getMySkills() {
      let res = await axios({
        method: "get",
        url: "/employee/get/skill",
        headers: {
          Authorization: "Bearer " + this.token,
        },
      });
      let data = await res.data;
      return data;
    },
    async postSkill(val) {
      let userForm = new FormData();

      for (let sk in this.skill) {
        userForm.append("skill[]", this.skill[sk]);
      }

      let res = await axios({
        method: "post",
        url: "/employee/update/skill",
        data: userForm,
        headers: {
          Authorization: "Bearer " + this.token,
          "Content-Type": "multipart/form-data",
        },
      });

      let data = await res;
      return data;
    },
    async submit() {
      let data = await this.postSkill();
      await this.getMySkills();
      console.log(data);
    },
    async getSkill() {
      const res = await axios.get("skill");
      let skill_data = [];
      for (let i = 0; i < res.data.length; i++) {
        this.items.push(res.data[i].skill);
      }
    },
  },

  async created() {
    this.mySkills = await this.getMySkills();
    await this.getSkill();
    this.mySkills.forEach((skill, index) => {
      this.skill.push(skill.all_skill.skill);
      console.log(skill.all_skill.skill);
    });
  },
  computed: {
    ...mapGetters({
      a_user: "auth/user",
      token: "auth/getToken",
    }),
  },
  watch: {
    model(val) {
      if (val.length > 5) {
        this.$nextTick(() => this.model.pop());
      }
    },
  },
};
</script>

<style>
</style>