<template>
  <div style="margin-top: 100px">
    <v-snackbar
      v-model="snackbar2"
      :timeout="timeout"
      top
      color="success"
      right
    >
      {{ text2 }}

      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar2 = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <div class="user-found" v-if="this.user">
      <v-row>
        <v-col cols="12" lg="12">
          <v-sheet min-height="268">
            <v-sheet
              elevation="3"
              class="p-1 m-4 profile-card"
              min-height="650"
            >
              <v-card
                class="mx-auto"
                style="margin-top: 20px"
                width="100%"
                tile
              >
                <v-img
                  height="200"
                  src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
                ></v-img>
                <v-row style="margin: 1.5%; position: absolute; top: 130px">
                  <v-col cols="12" lg="12">
                    <v-list-item
                      class="profile-detail"
                      style="display: flex; flex-direction: column"
                    >
                      <v-list-item-avatar size="150">
                        <img
                          :src="'/' + this.user.profile_path"
                          alt="John"
                          style="
                            object-fit: cover;
                            object-position: center;
                            width: 100%;
                          "
                        />
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title
                          class="title"
                          style="margin-top: 20px"
                          >{{ this.user.first_name }}
                          {{ this.user.last_name }}</v-list-item-title
                        >
                        <v-list-item-subtitle v-if="this.user.employee"
                          >{{ this.user.employee.job_categories.category_name }}
                        </v-list-item-subtitle>
                        <v-list-item-subtitle v-else
                          >Client</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>
                  </v-col>
                  <v-col cols="12" lg="12">
                    <div v-if="this.auth">
                      <div
                        class="profile-btn mx-auto"
                        style="
                          max-width: 150px;
                          display: flex;
                          flex-direction: column;
                        "
                        v-if="this.user.id != this.authUser.id"
                      >
                        <v-btn
                          class="m-2 mt-4"
                          rounded
                          color="primary"
                          dark
                          @click="contact"
                          >Contact!</v-btn
                        >
                        <div v-if="this.user.roles.role_id == 3">
                          <div v-if="this.getNum()">
                            <v-dialog v-model="dialog" width="600px">
                              <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                  class="m-2 mt-4"
                                  rounded
                                  color="primary"
                                  dark
                                  v-bind="attrs"
                                  v-on="on"
                                  >Propose Job!</v-btn
                                >
                              </template>
                              <v-card>
                                <v-toolbar dark color="primary">
                                  <v-toolbar-title>Job Detail</v-toolbar-title>
                                  <v-spacer></v-spacer>
                                  <v-toolbar-items>
                                    <v-btn icon dark @click="dialog = false">
                                      <v-icon>mdi-close</v-icon>
                                    </v-btn>
                                  </v-toolbar-items>
                                </v-toolbar>
                                <v-form
                                  v-model="valid"
                                  ref="form1"
                                  lazy-validation
                                  style="padding: 50px"
                                >
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
                                      value="Write a description for your Job."
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
                                      :rules="[
                                        (v) => !!v || 'Item is required',
                                      ]"
                                      row
                                      required
                                    >
                                      <v-radio
                                        label="Large"
                                        value="Large"
                                      ></v-radio>
                                      <v-radio
                                        label="Medium"
                                        value="Medium"
                                      ></v-radio>
                                      <v-radio
                                        label="Small"
                                        value="Small"
                                      ></v-radio>
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
                                      <template
                                        v-slot:activator="{ on, attrs }"
                                      >
                                        <v-text-field
                                          v-model="dateFormatted"
                                          label="Date"
                                          hint="MM/DD/YYYY format"
                                          persistent-hint
                                          prepend-icon="mdi-calendar"
                                          :rules="[
                                            (v) => !!v || 'Date is required',
                                          ]"
                                          v-bind="attrs"
                                          @blur="
                                            date = parseDate(dateFormatted)
                                          "
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
                                      :rules="[
                                        (v) =>
                                          !!v || 'Please select experience',
                                      ]"
                                      row
                                      required
                                    >
                                      <v-radio
                                        label="Entry"
                                        value="Entry"
                                      ></v-radio>
                                      <v-radio
                                        label="Intermediate"
                                        value="Intermediate"
                                      ></v-radio>
                                      <v-radio
                                        label="Expert"
                                        value="Expert"
                                      ></v-radio>
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
                                        :rules="[
                                          (v) => !!v || 'Please Enter a price',
                                        ]"
                                      ></v-text-field>
                                    </div>
                                  </div>
                                  <v-btn
                                    color="primary"
                                    @click="submit"
                                    width="100%"
                                    height="50px"
                                    >Offer Job</v-btn
                                  >
                                </v-form>
                              </v-card>
                            </v-dialog>
                          </div>
                          <div v-else>
                            <v-btn
                              class="m-2 mt-4"
                              rounded
                              color="primary"
                              disabled
                            >
                              User busy!
                            </v-btn>
                          </div>
                        </div>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </v-card>
            </v-sheet>
          </v-sheet>
        </v-col>
        <v-col cols="12" lg="4">
          <v-sheet min-height="268">
            <v-sheet elevation="3" class="p-1 m-4" min-height="700">
              <div class="job-title m-4 centre">
                <h3>Client's Details</h3>
                <b-card-sub-title
                  >{{ this.user.first_name }}
                  {{ this.user.last_name }}</b-card-sub-title
                >
                <v-divider></v-divider>
              </div>

              <div class="m-4">
                <div class="additional-user-detail">
                  <h5 class="my-0 p-3">Additional Details</h5>
                  <div class="attributes">
                    <v-list-item two-line>
                      <v-list-item-content>
                        <v-list-item-title>Email</v-list-item-title>
                        <v-list-item-subtitle class="pb-2">{{
                          this.user.email
                        }}</v-list-item-subtitle>

                        <v-list-item-title>Phone No</v-list-item-title>
                        <v-list-item-subtitle class="pb-2">{{
                          this.user.phone_no
                        }}</v-list-item-subtitle>

                        <v-list-item-title>Province</v-list-item-title>
                        <v-list-item-subtitle class="pb-2">{{
                          this.user.Province
                        }}</v-list-item-subtitle>

                        <v-list-item-title>City</v-list-item-title>

                        <v-list-item-subtitle class="pb-2">{{
                          this.user.City
                        }}</v-list-item-subtitle>

                        <v-list-item-title>Address</v-list-item-title>

                        <v-list-item-subtitle class="pb-2">{{
                          this.user.Address
                        }}</v-list-item-subtitle>

                        <v-list-item-title>Gender</v-list-item-title>
                        <v-list-item-subtitle class="pb-2">{{
                          this.user.gender
                        }}</v-list-item-subtitle>

                        <div v-if="this.user.roles.role_id == 3">
                          <v-list-item-title>Total Job Slots</v-list-item-title>
                          <v-list-item-subtitle class="pb-2">{{
                            this.user.employee.assignment_no
                          }}</v-list-item-subtitle>

                          <v-list-item-title
                            >Total Jobs Working</v-list-item-title
                          >
                          <v-list-item-subtitle class="pb-2">{{
                            this.user.employee.total_job
                          }}</v-list-item-subtitle>
                          <v-list-item-title
                            >Total Work Badges</v-list-item-title
                          >
                          <v-list-item-subtitle class="pb-2">
                            <v-chip-group v-model="badge" column multiple>
                              <v-chip v-for="tag in tags.badges" :key="tag.id">
                                <v-icon>{{ tag.badge_image }}</v-icon>
                                {{ tag.Badge_Name }} ({{ tag.count }})
                              </v-chip>
                            </v-chip-group>
                          </v-list-item-subtitle>
                        </div>
                      </v-list-item-content>
                    </v-list-item>
                  </div>
                </div>
              </div>
            </v-sheet>
          </v-sheet>
        </v-col>

        <v-col cols="12" lg="8">
          <v-sheet min-height="668">
            <v-sheet elevation="3" class="p-1 m-4" min-height="700">
              <div class="job-title m-4 centre">
                <h3>About!</h3>

                <div v-if="this.user.employee" class="d-flex">
                  <b-card-sub-title
                    v-for="aSkill in this.user.employee.employee_skill"
                    :key="aSkill.id"
                    >| {{ aSkill.all_skill.skill }} |&nbsp;
                  </b-card-sub-title>
                </div>

                <v-divider></v-divider>
              </div>

              <div class="m-4">
                <div class="additional-user-detail">
                  <pre style="white-space: pre-line">
                    {{ this.user.about }}
                  </pre>
                </div>
              </div>
            </v-sheet>
          </v-sheet>
        </v-col>

        <v-col cols="12" lg="6" v-if="this.user.roles.role_id == 3">
          <v-sheet min-height="268">
            <v-sheet elevation="3" class="p-1 m-4" min-height="400">
              <div class="job-title m-4 centre">
                <h3>User's Experience!</h3>

                <b-card-sub-title>
                  Lean about this user's experience!
                </b-card-sub-title>

                <v-divider></v-divider>
              </div>

              <div class="m-4">
                <div class="additional-user-detail">
                  <pre style="white-space: pre-line">
                    {{ this.user.employee.education }}
                  </pre>
                </div>
              </div>
            </v-sheet>
          </v-sheet>
        </v-col>

        <v-col cols="12" lg="6" v-if="this.user.roles.role_id == 3">
          <v-sheet min-height="268">
            <v-sheet elevation="3" class="p-1 m-4" min-height="400">
              <div class="job-title m-4 centre">
                <h3>User's Education!</h3>

                <b-card-sub-title>
                  Lean about this user's education!
                </b-card-sub-title>

                <v-divider></v-divider>
              </div>

              <div class="m-4">
                <div class="additional-user-detail">
                  <pre style="white-space: pre-line">
                    {{ this.user.employee.education }}
                  </pre>
                </div>
              </div>
            </v-sheet>
          </v-sheet>
        </v-col>

        <v-col cols="12" v-if="this.user.roles.role_id == 3">
          <v-sheet min-height="268">
            <v-sheet elevation="3" class="p-1 m-4" min-height="600">
              <div class="job-title m-4 centre">
                <h3>User's Rating!</h3>

                <b-card-sub-title>
                  <div class="d-flex flex-row align-items-center">
                    <div>Average Rating:</div>
                    <v-rating
                      :value="this.avgRate"
                      color="amber"
                      dense
                      readonly
                      half-increments
                      size="14"
                      class="p-3"
                    ></v-rating>
                    <div class="p-1">
                      {{ this.avgRate.toFixed(1) }}({{ this.rating.length }})
                    </div>
                  </div>
                </b-card-sub-title>

                <v-divider></v-divider>
                <v-virtual-scroll
                  :items="this.rating"
                  height="500"
                  item-height="200"
                >
                  <template v-slot:default="{ item }">
                    <v-list-item class="p-2 mb-5" :key="item.id">
                      <v-list-item-content class="mb-5">
                        <div>
                          <div class="d-flex flex-column">
                            <h5 class="mx-1">
                              {{ item.rated_by.first_name }}
                              {{ item.rated_by.last_name }}
                            </h5>
                            <v-rating
                              :value="item.rating"
                              color="amber"
                              dense
                              readonly
                              size="24"
                            ></v-rating>
                          </div>
                          <div style="font-size: 15px; margin-top: 20px">
                            <pre style="white-space: pre-line"
                              >{{ item.description }}                    </pre
                            >
                          </div>
                        </div>
                      </v-list-item-content>
                    </v-list-item>
                    <v-divider></v-divider>
                  </template>
                </v-virtual-scroll>
              </div>
            </v-sheet>
          </v-sheet>
        </v-col>

        <v-col cols="12">
          <v-row>
            <v-col v-for="blog in this.blogs.blog" :key="blog.id" cols="12">
              <Blogs :blog="blog" />
              <br />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import axios from "axios"; // importing the axios (a HTTP library) to connects the app with the News API
import Blogs from "../app_component/blogs.vue";
import { mapGetters } from "vuex";

export default {
  components: { Blogs },
  name: "UserProfile",
  props: {
    a_user: Object,
  },
  data: () => ({
    snackbar2: false,
    text2: "Error!",
    timeout: 2000,
    tags: [],
    badge: [],
    rating: [],
    blogs: [],
    avgRate: 0,
    count: 0,
    id: null,
    job_num: 0,
    first_name: null,
    last_name: null,
    user: null,
    show: false,
    dialog: false,
    drawer: false,
    articles: [],
    errors: [],
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
  }),
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    },
    ...mapGetters({
      token: "auth/getToken",
      auth: "auth/authenticated",
      authUser: "auth/user",
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
    async getBadges() {
      let res = await axios.get(
        `badges/employee/${this.user.employee.employee_id}`
      );
      let data = await res.data;
      return data;
    },
    async getBlogs() {
      let res = await axios({
        method: "get",
        url: `user/blogs/all/${this.id}`,
      });
      let data = await res.data;

      return data;
    },
    async getRating() {
      console.log(this.id);
      let res = await axios.get(`/user/rating/${this.id}`);

      let data = res.data;

      data.ratings.forEach((ratings, index) => {
        this.rating.push(ratings);
      });
      this.avgRate = data.average;
    },
    async getUser() {
      let res = await axios.get(`/user/${this.id}`);
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
      if (this.validate()) {
        let res = await axios({
          method: "post",
          url: `user/offer/${this.id}`,
          headers: { Authorization: `Bearer ${this.token}` },
          data: this.formData(),
        });
        this.dialog = false;
        this.snackbar2 = true;
        this.text2 = "Job Offered";
      }
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
    getNum() {
      if (this.user.employee.status == "1") {
        if (this.user.employee.assignment_no > this.user.employee.total_job) {
          return true;
        }
      } else {
        return false;
      }
    },
    contact() {
      axios({
        method: "post",
        url: `/chat/start/`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        data: {
          user_id: this.id,
        },
      }).then((res) => {
        let data = res.data;
        let room = data;
        console.log(room);
        this.$router.push({
          name: "ChatRoom",
          params: {
            currentRoom: room[0],
          },
        });
      });
    },
  },
  async created() {
    this.id = this.$route.params.id;
    this.user = await this.getUser();
    this.getSkill();
    this.getCategories();
    this.getRating();
    this.blogs = await this.getBlogs();
    let badges = await this.getBadges();
    this.tags = await badges;
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
@import url("//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css");

@media only screen and (min-width: 769px) {
  .profile-btn,
  .profile-detail {
    flex-direction: row !important;
    margin: 0 !important;
  }
  .profile-card {
    min-height: 450px !important;
  }
}

@media only screen and (min-width: 1025px) {
  .profile-btn,
  .profile-detail {
    flex-direction: row !important;
    margin: 0 !important;
  }
  .profile-card {
    min-height: 450px !important;
  }
}
</style> 