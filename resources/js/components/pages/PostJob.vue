<template>
  <!-- <div style="margin-top: 100px">
      
    <v-card class="mt-5">
        <div class="title p-3">
          <h2>Post Job</h2>
      </div>
        <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step
        :complete="e1 > 1"
        editable
        step="1"
      >
        Name of step 1
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        :complete="e1 > 2"
        editable
        step="2"
      >
        Name of step 2
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step editable step="3">
        Name of step 3
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px"
        ></v-card>

        <v-btn
          color="primary"
          @click="e1 = 2"
        >
          Continue
        </v-btn>

      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px"
        ></v-card>

        <v-btn
          color="primary"
          @click="e1 = 3"
        >
          Continue
        </v-btn>

        <v-btn text @click="e1 = 1">
          Back
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px"
        ></v-card>

        <v-btn
          color="primary"
          @click="e1 = 1"
        >
          Continue
        </v-btn>

        <v-btn text @click="e1 = 2">
          Cancel
        </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
    </v-card>
  </div> -->

  <div style="margin-top: 100px">
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
                      <Images />
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

                          <!-- <v-text-field
                        v-model="registration.email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                      ></v-text-field> -->
                          <v-textarea
                            name="description"
                            filled
                            label="Description"
                            :rules="descriptionRule"
                            :counter="1000"
                            auto-grow
                            v-model="description"
                            required
                            value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                          ></v-textarea>
                          <v-autocomplete
                            v-model="category"
                            :items="categories"
                            clearable
                            hide-selected
                            persistent-hint
                            label="Job Category"
                            :rules="categoryRule"
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
                  <!-- <v-form ref="form" v-model="valid" lazy-validation>
                      <h3>Scope of Work</h3>
                  <v-radio-group v-model="scope" row required :rules="scopeRule">
                    <v-radio label="Large" value="0"></v-radio>
                    <v-radio label="Medium" value="1"></v-radio>
                    <v-radio label="Small" value="2"></v-radio>
                  </v-radio-group>
                  <v-btn flat @click.native="step -= 1">Previous</v-btn>
                  <v-btn
                    :disabled="!valid"
                    color="success"
                    class="mr-4"
                    @click="validate"
                    @click.native="steps(step)"
                  >
                    Scoop of Work
                  </v-btn>
                  </v-form> -->
                  <!--                   
                  <v-row>
                    <v-col cols="12" md="6">
                      pic
                    </v-col>
                    <v-col cols="12" md="6">
                      
                    </v-col>
                  </v-row>

                   -->
                  <v-row>
                    <v-col cols="12" md="6"> <Images /> </v-col>
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
                    <v-col cols="12" md="6"> <Images /> </v-col>
                    <v-col cols="12" md="6">
                      <v-form
                        v-model="valid"
                        ref="form3"
                        lazy-validation
                        @submit.prevent=""
                      >
                        <!-- <v-autocomplete
                      v-model="skill"
                      :items="items"
                      clearable
                      hide-selected
                      persistent-hint
                      label="Add Skills"
                      :rules="categoryRule"
                      dense
                      hint="Maximum of 5 tags"
                      multiple
                      small-chips
                    >
                    </v-autocomplete> -->
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
                    <v-col cols="12" md="6"> <Images /> </v-col>
                    <v-col cols="12" md="6">
                      <v-form v-model="valid" ref="form4" lazy-validation>
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
                        <v-btn text @click.native="stepBack(step)"
                          >Previous</v-btn
                        >
                        <!-- <v-btn color="primary" @click.prevent="submit">Save</v-btn> -->
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

                      <!-- <v-text-field
                        v-model="registration.email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                      ></v-text-field> -->
                      <v-textarea
                        name="description"
                        filled
                        label="Description"
                        :rules="descriptionRule"
                        :counter="1000"
                        auto-grow
                        v-model="description"
                        required
                        value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                      ></v-textarea>
                      <v-autocomplete
                        v-model="category"
                        :items="categories"
                        clearable
                        hide-selected
                        persistent-hint
                        label="Job Category"
                        :rules="categoryRule"
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
                    <v-btn color="primary" @click.prevent="submit">Save</v-btn>
                    <!-- <KhaltiButton
                      :title="this.title"
                      :id2="this.user_id"
                      :jobForm="this.formData()"
                      :type="`posting`"
                      
                      :key="componentKey"
                    /> -->
                    <vue-khalti
                      ref="khaltiCheckout"
                      v-bind="khaltiConfig"
                      :key="componentKey"
                    >
                      <v-btn @click="onKhaltiClick"> Pay with Khalti </v-btn>
                    </vue-khalti>
                    <!-- <v-btn><vue-khalti v-bind="khaltiConfig" /> </v-btn> -->
                  </v-form>
                </v-stepper-content>
              </v-stepper-items>
            </v-stepper>
          </v-container>
        </v-main>
      </v-app>

      <!-- <br /><br />Debug: {{ registration }} -->
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
      //Khalti Payment

      //----------

      valid: true,
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

      //for date

      //Payment
      khaltiConfig: {
        publicKey: "test_public_key_28ffbaeeb514468ca0a736669ca9d4b1",
        productIdentity: `${Math.floor(Math.random() * 10)}-${moment(
          this.date
        ).format("YYYY-MM-DD")}`,
        productName: "YOUR_PRODUCT_NAME",
        amount: 1000,
        eventHandler: {
          onSuccess(payload) {
            console.log(moment(this.date).format("YYYY-MM-DD"));
            self.test(payload);
            const sendData = async () => {
              const res = await axios.post("/verify", payload);
              console.log(res);
            };
            sendData();
          },
          onClose() {
            console.log("widget is closing");
          },
        },
      },

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
      // console.log(this.token);
      let res = await axios({
        method: "post",
        url: "job",
        headers: { Authorization: `Bearer ${this.token}` },
        data: this.formData(),
      }).then(() => {
        this.$router.push("/dashboard");
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
      // this.valid = !this.valid
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
  created() {
    this.getSkill();
    this.getCategories();
    console.log(this.thisUser.id);
    this.user_id = this.thisUser.id;
  },

  //for budget
};
</script>

<style>
</style>