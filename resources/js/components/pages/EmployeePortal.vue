<template>
  <div>
    <div style="margin-top: 150px">
      <template>
        <v-row>
          <v-col cols="12">
            <v-card rounded outlined>
              <v-card-title>
                <v-layout>
                  <v-btn
                    text
                    class="questrial font-weight-bold text-none"
                    @click.prevent="changePosting"
                    >Make Post</v-btn
                  >
                  <v-btn
                    text
                    class="questrial text-none"
                    @click.prevent="changeCertificate"
                    >Post a certificate</v-btn
                  >
                </v-layout>
              </v-card-title>
              <div class="post" v-if="posting">
                <div class="img-input p-5">
                  <v-text-field
                    label="Title"
                    hide-details
                    single-line
                    v-model="title"
                  ></v-text-field>
                  <v-file-input
                    cols="8"
                    :rules="[(v) => !!v || 'Please select an image']"
                    accept="image/png, image/jpeg, image/bmp"
                    placeholder="Pick an avatar"
                    prepend-icon="mdi-camera"
                    label="Banner Picture"
                    v-model="profile"
                  ></v-file-input>
                  <v-img
                    v-if="profile"
                    max-height="500"
                    width="100%"
                    :src="urlProfile"
                  ></v-img>
                </div>

                <div class="p-5">
                  <v-layout>
                    <v-flex xs12>
                      <v-textarea
                        label="Write about your Blog!"
                        outlined
                        rows="15"
                        row-height="15"
                        prepend-icon="mdi-comment"
                        v-model="blog"
                      ></v-textarea>
                    </v-flex>
                  </v-layout>
                </div>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="deep-purple lighten-2" text @click="postBlog">
                    Post
                  </v-btn>
                </v-card-actions>
              </div>
              <div class="certification" v-if="certificate">
                <div class="img-input p-5">
                  <v-text-field
                    label="Title"
                    hide-details
                    single-line
                    v-model="title"
                  ></v-text-field>
                  <v-file-input
                    cols="8"
                    :rules="[(v) => !!v || 'Please input a certificate pic']"
                    accept="image/png, image/jpeg, image/bmp"
                    placeholder="Upload a certificate picture"
                    prepend-icon="mdi-camera"
                    label="Certification pic"
                    v-model="certification"
                  ></v-file-input>
                  <v-img
                    v-if="certification"
                    max-height="500"
                    width="100%"
                    :src="url"
                  ></v-img>
                </div>

                <div class="p-5">
                  <v-layout>
                    <v-flex xs12>
                      <v-textarea
                        label="Write an announcement!"
                        outlined
                        rows="5"
                        row-height="15"
                        prepend-icon="mdi-comment"
                        v-model="blog"
                      ></v-textarea>
                    </v-flex>
                  </v-layout>
                </div>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="deep-purple lighten-2" text @click="postBlog">
                    Post
                  </v-btn>
                </v-card-actions>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" sm="12" md="12" lg="6">
            <v-card :loading="loading" class="mx-auto my-5" max-width="674">
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <img
                :src="'/' + this.img_path"
                alt="image"
                class="img-fluid"
                style="object-fit: cover; object-position: center; width: 100%"
              />

              <v-card-title
                >{{ user.first_name }} {{ user.last_name }}</v-card-title
              >

              <v-card-text>
                <v-row align="center" class="">
                  <v-col cols="12">
                    <div class="grey--text ms-4 d-flex justify-content-between">
                      <v-chip outlined color="#FFCA28" class="m-1">
                        <v-icon class="p-1"
                          >mdi-star-four-points-outline</v-icon
                        >
                        1234 points</v-chip
                      >
                      <v-btn
                        color="deep-purple lighten-2"
                        text
                        @click.prevent="editProfile"
                      >
                        Edit
                      </v-btn>
                    </div>
                  </v-col>
                  <v-col cols="4">
                    <v-rating
                      :value="this.rating"
                      color="amber"
                      dense
                      readonly
                      size="14"
                      class="p-1"
                    ></v-rating>
                    <div class="p-1">{{ this.avgRate }} ({{ this.count }})</div>
                  </v-col>
                  <!-- <v-col cols="4">
          <div class="grey--text ms-4">4</div>
        </v-col> -->

                  <v-col cols="8">
                    <div class="grey--text ms-4">
                      <v-chip outlined color="green" class="m-1">
                        <v-icon class="p-1">mdi-cash</v-icon>
                        ${{ employee.project_rate }}/pr</v-chip
                      >
                      
                    </div>
                  </v-col>
                </v-row>

                <div class="my-4 text-subtitle-1">
                  {{ employee.job_categories.category_name }}
                </div>

                <div>
                  {{ user.about }}
                </div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>

              <v-card-title>Skills</v-card-title>

              <v-card-text>
                <v-chip-group v-model="selection" column>
                  <div v-for="skill in employee.employee_skill" :key="skill.id">
                    <v-chip>{{ skill.all_skill.skill }}</v-chip>
                  </div>
                </v-chip-group>
              </v-card-text>
              <v-card-actions>
                <v-btn color="deep-purple lighten-2" text @click="visitProfile">
                  Visit Profile
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" sm="12" md="12" lg="6">
            <v-card class="mt-5" min-height="115vh">
              <v-tabs color="deep-purple accent-4" right>
                <v-tab>Completed Job</v-tab>
                <v-tab>Requested Jobs</v-tab>
                <v-tab>Assigned Job</v-tab>
                <v-tab>Jobs in Progress</v-tab>

                <v-tab-item>
                  <v-card flat>
                    <v-card-text v-if="completedJob.length > 0">
                      <Jobs :allJobs="completedJob" :view="'completed'" />
                    </v-card-text>
                    <v-card-text v-else>
                      <v-divider></v-divider>
                      <v-alert outlined type="warning" prominent border="left">
                        You have not completed any jobs yet
                      </v-alert>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card flat>
                    <v-card-text v-if="requestedJob.length > 0">
                      <Jobs :allJobs="requestedJob" :view="'requested'" />
                    </v-card-text>
                    <v-card-text v-else>
                      <v-divider></v-divider>
                      <v-alert outlined type="warning" prominent border="left">
                        You have not requested any jobs yet
                      </v-alert>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card flat>
                    <v-card-text v-if="assignedJob.length > 0">
                      <Jobs :allJobs="assignedJob" :view="'assigned'" />
                    </v-card-text>
                    <v-card-text v-else>
                      <v-divider></v-divider>
                      <v-alert outlined type="warning" prominent border="left">
                        You have are not assigned any jobs yet.
                      </v-alert>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card flat>
                    <v-card-text v-if="progressJob.length > 0">
                      <Jobs :allJobs="progressJob" :view="'progress'" />
                    </v-card-text>
                    <v-card-text v-else>
                      <v-divider></v-divider>
                      <v-alert outlined type="warning" prominent border="left">
                        You are not doing any jobs yet.
                      </v-alert>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </div>
  </div>
</template>

<script>
import Jobs from "../app_component/dashboardJob.vue";
import User from "../app_component/userCard.vue";
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  components: {
    Jobs,
    User,
  },
  data() {
    return {
      title: null,
      loading: false,
      selection: null,
      completedJob: [],
      requestedJob: [],
      progressJob: [],
      assignedJob: [],
      progressJob: [],
      employee: null,
      img_path: "",
      profile: null,
      posting: false,
      certificate: false,
      certification: null,
      type: null,
      blog: null,
      rating: 0,
      avgRate: 0,
      count: 0,
    };
  },
  methods: {
    getData() {
      let blogData = new FormData();

      if (this.posting) {
        blogData.append("profile", this.profile);
      } else {
        blogData.append("profile", this.certification);
      }

      blogData.append("title", this.title);
      blogData.append("description", this.blog);
      blogData.append("type", this.type);

      return blogData;
    },
    async postBlog() {
      alert(this.blog);
      let res = await axios({
        method: "POST",
        url: "/blog",
        data: this.getData(),
        headers: {
          "Content-Type": "multipart/form-data",
          "Header-Authorization": "Bearer " + localStorage.getItem("token"),
        },
      });
    },
    goProfile() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);

      this.$router.push({
        name: "profile",
        params: {
          id: this.user.id,
          //   a_user: this.a_user,
        },
      });
    },
    changeCertificate() {
      if (!this.certificate) {
        this.type = "certificate";
        this.certificate = true;
        this.posting = false;
      } else {
        this.certificate = false;
      }
    },
    changePosting() {
      if (!this.posting) {
        this.type = "Blog";
        this.posting = true;
        this.certificate = false;
      } else {
        this.posting = false;
      }
    },
    editProfile() {
      console.log("test");
    },
    visitProfile() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);

      this.$router.push({
        name: "profile",
        params: {
          id: this.user.id,
          a_user: this.user,
        },
      });
    },
    async getRating() {
      console.log(this.id);
      let res = await axios.get(`/user/rating/${this.a_user.user.id}`);

      let data = res.data;

      data.ratings.forEach((ratings, index) => {
        this.count++;
      });
      this.avgRate = data.average;
    },
    async jobRequested() {
      let res = await axios({
        method: "get",
        url: "employee/get/job/requested",
        headers: {
          Authorization: "Bearer " + this.token,
        },
      });
      let data = await res.data;
      return data;
    },
    async jobCompleted() {
      let res = await axios({
        method: "get",
        url: "employee/get/job/completed",
        headers: {
          Authorization: "Bearer " + this.token,
        },
      });
      let data = await res.data;
      return data;
    },
    async jobAssigned() {
      let res = await axios({
        method: "get",
        url: "employee/get/job/assigned",
        headers: {
          Authorization: "Bearer " + this.token,
        },
      });
      let data = await res.data;
      return data;
    },
    async jobInProgress() {
      let res = await axios({
        method: "get",
        url: "employee/get/job/progress",
        headers: {
          Authorization: "Bearer " + this.token,
        },
      });
      let data = await res.data;
      return data;
    },
    async getEmployee() {
      let res = await axios({
        method: "get",
        url: `employee/${this.user.id}}/edit`,
        headers: {
          Authorization: "Bearer " + this.token,
        },
      });

      let data = res.data;

      return data;
    },
  },
  async created() {
    this.completedJob = await this.jobCompleted();
    this.requestedJob = await this.jobRequested();
    this.assignedJob = await this.jobAssigned();
    this.progressJob = await this.jobInProgress();
    this.employee = await this.getEmployee();
    this.img_path = await this.user.profile_path;
  },
  computed: {
    ...mapGetters({
      user: "auth/user",
      token: "auth/getToken",
    }),
    urlProfile() {
      if (!this.profile) return;
      return URL.createObjectURL(this.profile);
    },
    url() {
      if (!this.certification) return;
      return URL.createObjectURL(this.certification);
    },
  },
};
</script>

<style>
</style>