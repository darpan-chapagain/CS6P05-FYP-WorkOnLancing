<template>
  <div style="margin-top: 100px;">
    <v-card>
      <v-form v-model="valid" ref="form1" lazy-validation style="padding: 50px">
        <div class="job-info">
          <h3>Give Some Info to your Project</h3>
          <v-text-field
            v-model="title"
            :rules="titleRules"
            label="Name"
            required
          ></v-text-field>
          <v-textarea
            name="description"
            filled
            label="Description"
            :rules="descriptionRule"
            auto-grow
            v-model="description"
            required
          ></v-textarea>
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
        </div>
        <div class="scope m-4">
          <h3>Scope of Work</h3>
          <v-radio-group
            v-model="scope"
            :rules="[(v) => !!v || 'Item is required']"
            row
            required
          >
            <v-radio label="Large" value="Large"></v-radio>
            <v-radio label="Medium" value="Medium"></v-radio>
            <v-radio label="Small" value="Small"></v-radio>
          </v-radio-group>
        </div>
        <div class="time m-4">
          <h3>Time Estimation</h3>
          <v-menu
            ref="menu1"
            v-model="menu2"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="dateFormatted"
                label="Date"
                hint="MM/DD/YYYY format"
                persistent-hint
                prepend-icon="mdi-calendar"
                :rules="[(v) => !!v || 'Date is required']"
                v-bind="attrs"
                @blur="date = parseDate(dateFormatted)"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date"
              no-title
              @input="menu2 = false"
            ></v-date-picker>
          </v-menu>
        </div>
        <div class="experience m-4">
          <h3>Experience</h3>
          <v-radio-group
            v-model="experience"
            :rules="[(v) => !!v || 'Please select experience']"
            row
            required
          >
            <v-radio label="Entry" value="Entry"></v-radio>
            <v-radio label="Intermediate" value="Intermediate"></v-radio>
            <v-radio label="Expert" value="Expert"></v-radio>
          </v-radio-group>
        </div>
        <div class="skills">
          <v-autocomplete
            v-model="skill"
            :items="items"
            clearable
            hide-selected
            persistent-hint
            label="Skills"
            :rules="[required]"
            dense
            multiple
            required
            small-chips
          ></v-autocomplete>
        </div>
        <div class="rates">

          <div class="payment-inputs m-2">
            <v-text-field
              v-model="projectRate"
              clearable
              label="Project Rate"
              placeholder="Enter Your Rate here"
              outlined
              type="number"
              :rules="[(v) => !!v || 'Please Enter a price']"
            ></v-text-field>
          </div>
        </div>
        <v-btn color="primary" @click="submit" width="100%" height="50px"
          >Save</v-btn
        ><v-btn color="error" @click="remove" width="100%" height="50px" class="mt-4"
          >Delete</v-btn
        >
      </v-form>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    job: [Array, Object],
  },
  data: () => ({
    valid: true,
    skill: null,
    categories: [],
    scope: null,
    experience: null,
    payment: true,
    items: [],
    skill: [],
    category: [],
    description: null,
    title: null,
    search: null,
    projectRate: null,
    titleRules: [
      (v) => !!v || "Job Title is required",
      (v) => (v && v.length <= 100) || "Name must be less than 100 characters",
    ],
    descriptionRule: [
      (v) => !!v || "Description required",
      (v) =>
        (v && v.length <= 1000) || "Description must be less than 1000 characters",

      // (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    categoryRule: [(v) => !!v || "Please select category"],
    scopeRule: [[(v) => !!v || "Scope is required"]],

    //for date
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    //   dateFormatted: vm.formatDate(
    //     new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
    //       .toISOString()
    //       .substr(0, 10)
    //   ),
    dateFormatted: null,
    menu1: false,
    menu2: false,
  }),
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    },
    ...mapGetters({
      token: "auth/getToken",
      auth: "auth/authenticated",
    }),
  },
  watch: {
    date(val) {
      this.dateFormatted = this.formatDate(this.date);
    },
    skill(val) {
      if (val.length > 5) {
        this.$nextTick(() => this.skill.pop());
      }
    },
  },
  methods: {
    async getJob() {
      console.log(this.job);
      let res = await axios.get(`/job/${this.job.id}/edit`);
      let data = await res.data;
      return data;
    },
    propose() {
      this.$router.push({
        name: "Propose",
        data: {
          user: this.user,
        },
      });
    },
    required(value) {
      if (value instanceof Array && value.length == 0) {
        return "Required.";
      }
      return !!value || "Required.";
    },
    async submit() {
      // console.log(this.token);
      if (this.validate()) {
        let res = await axios({
          method: "post",
          url: `update/job/${JSON.parse(localStorage.getItem("job")).id}`,
          headers: { Authorization: `Bearer ${this.token}` },
          data: this.formData(),
        }).then(() => {
          localStorage.removeItem("job");
          this.$router.push({
            name: "dashboard",
          });
          
        });
        // alert(res.data);
      }
    },
    async remove() {
      let res = await axios({
          method: "DELETE",
          url: `job/${JSON.parse(localStorage.getItem("job")).id}`,
          headers: { Authorization: `Bearer ${this.token}` },
          data: this.formData(),
        }).then(() => {
          localStorage.removeItem("job");
          this.$router.push({
            name: "dashboard",
          });
          
        });
    },
    validate() {
      return this.$refs.form1.validate();
    },
    //for date
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
    created() {
      console.log(moment(this.date).format("dd.mm.YYYY"));
    },
    //for skills
    async getSkill() {
      const res = await axios.get("/skill");
      let skill_data = [];
      for (let i = 0; i < res.data.length; i++) {
        // console.log(res.data[i].skill);
        this.items.push(res.data[i].skill);
      }
    },
    async getCategories() {
      const res = await axios.get("jobs/category");
      let skill_data = [];
      for (let i = 0; i < res.data.length; i++) {
        // console.log(res.data[i].skill);
        this.categories.push(res.data[i].category_name);
      }
    },
    async postSkill(val) {
      await axios.post(`/jobs_skill`, {
        skill: val,
      });
    },
    formData() {
      let jobForm = new FormData();

      jobForm.append("title", this.title);
      jobForm.append("description", this.description);
      jobForm.append("category", this.category);
      jobForm.append("size", this.scope);
      jobForm.append("experience", this.experience);
      jobForm.append("payment", this.payment);
      jobForm.append("project_rate", this.projectRate);
      jobForm.append("time", moment(this.date).format("MM/DD/YYYY"));
      for (let sk in this.skill) {
        jobForm.append("skill[]", this.skill[sk]);
      }
      return jobForm;
    },
  },
  async created() {
    this.id = this.$route.params.id;
    this.getSkill();
    this.getCategories();
  },

  mounted() {
    if (this.job) {
      this.title = this.job.title;
      this.description = this.job.description;
      this.category = this.job.job_category.category_name;
      this.scope = this.job.size;
      this.date = this.job.time;
      this.experience = this.job.experience;
      this.job.job_skill.forEach((skill, index) => {
        this.skill.push(skill.all_skill.skill);
      });
      this.projectRate = this.job.project_rate;
    } else {
      let jobs = JSON.parse(localStorage.getItem("job"));
      this.title = jobs.title;
      this.description = jobs.description;
      this.category = jobs.job_category.category_name;
      this.scope = jobs.size;
      this.date = jobs.time;
      this.experience = jobs.experience;
      jobs.job_skill.forEach((skill, index) => {
        this.skill.push(skill.all_skill.skill);
        console.log(skill.all_skill.skill);
      });
      this.projectRate = jobs.project_rate;
    }
  },
};
</script>

<style>
</style>