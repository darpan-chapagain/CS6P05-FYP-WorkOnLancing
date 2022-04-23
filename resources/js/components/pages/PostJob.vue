<template>
  <div style="margin-top: 100px">
    <v-snackbar v-model="snackbar" :timeout="timeout" top color="success" right>
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <div id="app">
      <v-app>
        <v-main>
          <v-container>
            <v-stepper v-model="step">
              <v-stepper-header>
                <v-stepper-step step="1" :complete="step > 1"
                  >Job Info</v-stepper-step
                >

                <v-stepper-step step="2" :complete="step > 2"
                  >Skill</v-stepper-step
                >

                <v-stepper-step step="3" :complete="step > 3"
                  >Scope of Work</v-stepper-step
                >

                <v-stepper-step step="4" :complete="step > 4"
                  >Budget</v-stepper-step
                >
                <v-stepper-step step="5">Final</v-stepper-step>
              </v-stepper-header>
              <v-stepper-items>
                <v-stepper-content step="1">
                  <v-row>
                    <v-col cols="12" md="6">
                      <Images
                        :image="'/logos/133-1337353_work-with-us-work-with-us-illustration-hd.png'"
                      />
                    </v-col>
                    <v-col cols="12" md="6">
                      <div class="job-info">
                        <h3>Give Some Info to your Project</h3>
                        <v-form ref="form1" v-model="valid" lazy-validation>
                          <v-text-field
                            v-model="title"
                            :counter="100"
                            :rules="titleRules"
                            label="Name"
                            required
                          ></v-text-field>
                          <v-textarea
                            name="description"
                            filled
                            label="Description"
                            :rules="descriptionRule"
                            :counter="1000"
                            auto-grow
                            v-model="description"
                            required
                            value="Write description for your Job."
                          ></v-textarea>
                          <v-autocomplete
                            v-model="category"
                            :items="categories"
                            clearable
                            hide-selected
                            persistent-hint
                            label="Job Category"
                            :rules="[
                              (v) =>
                                !!(v && v.length) || 'Please select a category',
                            ]"
                            dense
                          ></v-autocomplete>
                          <v-btn
                            :disabled="!valid"
                            color="success"
                            class="mr-4"
                            @click="validate('info')"
                            @click.native="steps(step)"
                          >
                            Choose Skill
                          </v-btn>
                        </v-form>
                      </div>
                    </v-col>
                  </v-row>
                </v-stepper-content>
                <v-stepper-content step="2">
                  <v-row>
                    <v-col cols="12" md="6">
                      <Images :image="'/logos/artboard_42-100_4x.png'" />
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-form v-model="valid" ref="form2" lazy-validation>
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
                            v-model="menu1"
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
                              @input="menu1 = false"
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
                            <v-radio
                              label="Intermediate"
                              value="Intermediate"
                            ></v-radio>
                            <v-radio label="Expert" value="Expert"></v-radio>
                          </v-radio-group>
                        </div>
                        <v-btn
                          :disabled="!valid"
                          color="success"
                          class="mr-4"
                          @click="validate('scopes')"
                          @click.native="steps(step)"
                        >
                          Choose Skill
                        </v-btn>
                        <v-btn text @click.native="stepBack(step)"
                          >Previous</v-btn
                        >
                      </v-form>
                    </v-col>
                  </v-row>
                </v-stepper-content>
                <v-stepper-content step="3">
                  <v-row>
                    <v-col cols="12" md="6">
                      <Images
                        :image="'/logos/istockphoto-1252249414-612x612.png'"
                      />
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-form
                        v-model="valid"
                        ref="form3"
                        lazy-validation
                        @submit.prevent=""
                      >
                        <div class="skills" style="margin-top: 100px">
                          <h3>What are the skills required?</h3>
                          <v-autocomplete
                            v-model="skill"
                            :items="items"
                            clearable
                            hide-selected
                            persistent-hint
                            label="Skills"
                            :rules="[
                              (v) =>
                                !!(v && v.length) || 'Please select a category',
                            ]"
                            dense
                            multiple
                            required
                            small-chips
                          ></v-autocomplete>
                        </div>
                        <v-btn
                          :disabled="!valid"
                          color="success"
                          class="mr-4"
                          @click="validate('skills')"
                          @click.native="steps(step)"
                        >
                          Choose Budget
                        </v-btn>
                        <v-btn text @click.native="stepBack(step)"
                          >Previous</v-btn
                        >
                      </v-form>
                    </v-col>
                  </v-row> </v-stepper-content
                ><v-stepper-content step="4">
                  <v-row>
                    <v-col cols="12" md="6">
                      <Images
                        :image="'/logos/istockphoto-959212324-612x612.png'"
                      />
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-form v-model="valid" ref="form4" lazy-validation>
                        <div class="rates">
                          <div class="payment-inputs m-2">
                            <h3>
                              How much rate are you offering for this project?
                            </h3>
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
                        <v-btn text @click.native="stepBack(step)"
                          >Previous</v-btn
                        >
                        <v-btn
                          :disabled="!valid"
                          color="success"
                          class="mr-4"
                          @click="validate('budget')"
                          @click.native="steps(step)"
                        >
                          Verify
                        </v-btn>
                      </v-form>
                    </v-col>
                  </v-row> </v-stepper-content
                ><v-stepper-content step="5">
                  <v-form v-model="valid" ref="form5" lazy-validation>
                    <div class="job-info">
                      <h3>Give Some Info to your Project</h3>
                      <v-text-field
                        v-model="title"
                        :counter="100"
                        :rules="titleRules"
                        label="Name"
                        required
                      ></v-text-field>

                      <v-textarea
                        name="description"
                        filled
                        label="Description"
                        :rules="descriptionRule"
                        :counter="1000"
                        auto-grow
                        v-model="description"
                        required
                        value="Write your description here"
                      ></v-textarea>
                      <v-autocomplete
                        v-model="category"
                        :items="categories"
                        clearable
                        hide-selected
                        persistent-hint
                        label="Job Category"
                        :rules="[
                          (v) =>
                            !!(v && v.length) || 'Please select a category',
                        ]"
                        dense
                      ></v-autocomplete>
                    </div>
                    <div class="scope m-4">
                      <h3>Scope of Work</h3>
                      <v-radio-group
                        v-model="scope"
                        :rules="[(v) => !!v || 'Scope of work is required']"
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
                        <v-radio
                          label="Intermediate"
                          value="Intermediate"
                        ></v-radio>
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
                    <v-btn color="primary" @click.prevent="submit"
                      >Post Job</v-btn
                    >
                  </v-form>
                </v-stepper-content>
              </v-stepper-items>
            </v-stepper>
          </v-container>
        </v-main>
      </v-app>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Images from "../app_component/bannerImage.vue";
import { mapGetters } from "vuex";
import VueKhalti from "vue-khalti";
import KhaltiButton from "../Khalti/KhaltiButton.vue";

export default {
  components: {
    Images,
    VueKhalti,
    KhaltiButton,
  },
  data(vm) {
    var self = this;

    return {
      snackbar: false,
      text: "Error!",
      valid: true,
      timeout: 2000,
      e1: 1,
      step: 1,
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
        (v) => (v && v.length <= 100) || "Name must be less than 20 characters",
      ],
      descriptionRule: [
        (v) => !!v || "Description required",
        (v) =>
          (v && v.length <= 1000) ||
          "Description must be less than 1000 characters",
      ],
      categoryRule: [(v) => !!v || "Please select category"],
      scopeRule: [[(v) => !!v || "Scope is required"]],

      //for date
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      dateFormatted: null,
      menu1: false,
      menu2: false,

      //for date

      user_id: null,
      componentKey: 0,
    };
  },

  //for date
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    },
    ...mapGetters({
      token: "auth/getToken",
      thisUser: "auth/user",
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
  //end for date
  methods: {
    forceRerender() {
      this.componentKey += 1;
    },
    async onKhaltiClick() {
      const khaltiCheckout = await this.$refs.khaltiCheckout;
      let res = khaltiCheckout.onClick();
      console.log(res, "bhayo!");
    },
    test(payload) {
      alert(`sucess masala`);
      console.log(payload);
    },
    required(value) {
      if (value instanceof Array && value.length == 0) {
        return "Required.";
      }
      return !!value || "Required.";
    },
    async submit() {
      let res = await axios({
        method: "post",
        url: "job",
        headers: { Authorization: `Bearer ${this.token}` },
        data: this.formData(),
      }).then((res) => {
        this.snackbar = true;
        this.text = "Job Posted Successfully!";
        setTimeout(() => this.$router.push("/dashboard"), 2000);
      });
    },
    validate(type) {
      if (type == "info") {
        this.$refs.form1.validate();
      }
      if (type == "scopes") {
        this.$refs.form2.validate();
      }
      if (type == "skills") {
        this.$refs.form3.validate();
      }
      if (type == "budget") {
        this.$refs.form4.validate();
      }
    },
    steps(step) {
      if (this.valid) {
        this.step += 1;
        this.valid = false;
        this.forceRerender();
      }
    },
    stepBack(step) {
      this.valid = true;
      if (this.valid) {
        this.step -= 1;
      }
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
    async sendDate(value) {
      await axios.post(`/job`, {
        time: value,
      });
    },
    created() {
      console.log(moment(this.date).format("dd.mm.YYYY"));
    },
    //for skills
    async getSkill() {
      const res = await axios.get("/skill");
      let skill_data = [];
      for (let i = 0; i < res.data.length; i++) {
        this.items.push(res.data[i].skill);
      }
    },
    async getCategories() {
      const res = await axios.get("jobs/category");
      let skill_data = [];
      for (let i = 0; i < res.data.length; i++) {
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
  created() {
    this.getSkill();
    this.getCategories();
    console.log(this.thisUser.id);
    this.user_id = this.thisUser.id;
  },
};
</script>

<style>
</style>