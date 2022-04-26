<template>
  <div>
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
            </v-card>
          </v-col>
          <v-col cols="12" sm="12" md="6" lg="6">
            <v-card class="mx-auto mt-5" max-width="774" min-height="128vh">
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

              <v-card-text>
                <v-row class="">
                  <v-col cols="12" lg="4" sm="12" md="4">
                    <v-card-title
                      >{{ a_user.first_name }}
                      {{ a_user.last_name }}</v-card-title
                    >
                  </v-col>
                  <v-col cols="12" lg="6" xs="4" sm="6" md="6">
                    <div class="grey--text ms-4">
                      <v-chip outlined color="#FFCA28" class="m-1">
                        <v-icon class="p-1"
                          >mdi-star-four-points-outline</v-icon
                        >
                        {{ a_user.points }} points</v-chip
                      >
                    </div>
                  </v-col>
                  <v-col cols="12" xs="1" sm="1" md="1" lg="1">
                    <v-btn
                      color="deep-purple lighten-2"
                      text
                      @click="editProfile"
                    >
                      Edit
                    </v-btn>
                  </v-col>
                </v-row>

                <v-row class="">
                  <v-col cols="12" lg="4" xs="12" sm="12" md="4">
                    <div class="additional-user-detail">
                      <div class="attributes">
                        <h5 class="m-4 ml-0 my-0 p-3">Additional Details</h5>

                        <v-list-item two-line>
                          <v-list-item-content>
                            <v-list-item-title>Email</v-list-item-title>
                            <v-list-item-subtitle class="pb-2">
                              <div v-if="a_user.email != 'null'">
                                {{ a_user.email }}
                              </div>
                              <div v-else>Not entered</div>
                            </v-list-item-subtitle>

                            <v-list-item-title>Phone No</v-list-item-title>
                            <v-list-item-subtitle class="pb-2">
                              <div v-if="a_user.phone_no != 'null'">
                                {{ a_user.phone_no }}
                              </div>
                              <div v-else>Not entered</div>
                            </v-list-item-subtitle>

                            <v-list-item-title>Province</v-list-item-title>
                            <v-list-item-subtitle class="pb-2">
                              <div v-if="a_user.Province != 'null'">
                                {{ a_user.Province }}
                              </div>
                              <div v-else>Not entered</div>
                            </v-list-item-subtitle>

                            <v-list-item-title>City</v-list-item-title>
                            <v-list-item-subtitle class="pb-2">
                              <div v-if="a_user.City != 'null'">
                                {{ a_user.City }}
                              </div>
                              <div v-else>Not entered</div>
                            </v-list-item-subtitle>

                            <v-list-item-title>Address</v-list-item-title>

                            <v-list-item-subtitle class="pb-2">
                              <div v-if="a_user.Address != 'null'">
                                {{ a_user.Address }}
                              </div>
                              <div v-else>Not entered</div>
                            </v-list-item-subtitle>
                            <v-list-item-title>Gender</v-list-item-title>
                            <v-list-item-subtitle class="pb-2">
                              <div v-if="a_user.gender != 'null'">
                                {{ a_user.gender }}
                              </div>
                              <div v-else>Not entered</div>
                            </v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                      </div>
                    </div>
                  </v-col>

                  <v-col cols="12" lg="8" xs="12" sm="12" md="7">
                    <div class="">
                      <div class="job-title m-4 centre">
                        <h3>About!</h3>

                        <v-divider></v-divider>
                        <div>
                          {{a_user.about}}
                        </div>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-actions>
                <v-btn color="deep-purple lighten-2" text @click="visitProfile">
                  See Profile
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" sm="12" md="6" lg="6">
            <v-card class="mt-5" min-height="128vh">
              <v-tabs color="deep-purple accent-4" right>
                <v-tab>My Job Post</v-tab>
                <v-tab>Assigned Job</v-tab>
                <v-tab>Jobs in Progress</v-tab>

                <v-tab-item>
                  <v-card flat>
                    <v-card-text v-if="myJobs.length > 0">
                      <Jobs :allJobs="myJobs" :view="'all'" />
                    </v-card-text>
                    <v-card-text v-else>
                      <v-divider></v-divider>
                      <v-alert outlined type="warning" prominent border="left">
                        You have not posted any jobs yet
                      </v-alert>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card flat>
                    <v-card-text v-if="pendingJobs.length > 0">
                      <Jobs :allJobs="pendingJobs" :view="'pending'" />
                    </v-card-text>
                    <v-card-text v-else>
                      <v-divider></v-divider>
                      <v-alert outlined type="warning" prominent border="left">
                        You have no pending jobs
                      </v-alert>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card flat>
                    <v-card-text v-if="jobInProgress.length > 0">
                      <Jobs :allJobs="jobInProgress" :view="'assigned'" />
                    </v-card-text>
                    <v-card-text v-else>
                      <v-divider></v-divider>
                      <v-alert outlined type="warning" prominent border="left">
                        You have no pending jobs
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

import { mapGetters } from "vuex";
import axios from "axios";

export default {
  components: {
    Jobs,
  },
  data() {
    return {
      snackbar2: false,
      text2: "Error!",
      timeout: 2000,
      pendingJobs: [],
      myJobs: [],
      jobInProgress: [],
      img_path: "",
      profile: null,
      posting: false,
      certificate: false,
      certification: null,
      type: null,
      title: null,
      blog: null,
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
      let res = await axios({
        method: "POST",
        url: "/blog",
        data: this.getData(),
        headers: {
          "Content-Type": "multipart/form-data",
          "Header-Authorization": "Bearer " + localStorage.getItem("token"),
        },
      }).then(() => {
            this.snackbar2 = true;
            this.text2 = "Blog posted successfully";
            setTimeout(() => this.$router.push({ name: "dashboard" }), 2000);
          });
    },
    postCertification() {},
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
      this.$router
        .push({
          name: "userEdit",
          params: {
            a_user: this.a_user,
          },
        })
        .then(() => {
          localStorage.setItem("users", JSON.stringify(this.a_user));
        });
    },
    visitProfile() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);

      this.$router.push({
        name: "profile",
        params: {
          id: this.a_user.id,
          a_user: this.a_user,
        },
      });
    },
    async getPendingJobs() {
      let res = await axios({
        method: "get",
        url: "user/job/pending",
        headers: {
          Authorization: "Bearer " + this.token,
        },
      });
      let data = await res.data;
      return data;
    },
    async myJob() {
      let res = await axios({
        method: "get",
        url: "user/jobs/show",
        headers: {
          Authorization: "Bearer " + this.token,
        },
      });
      let data = await res.data;
      return data;
    },
    async startedJobs() {
      let res = await axios({
        method: "get",
        url: "user/job/started",
        headers: {
          Authorization: "Bearer " + this.token,
        },
      });
      let data = await res.data;
      return data;
    },
  },
  async created() {
    this.img_path = await this.a_user.profile_path;
    this.pendingJobs = await this.getPendingJobs();
    this.myJobs = await this.myJob();
    this.jobInProgress = await this.startedJobs();
  },
  computed: {
    ...mapGetters({
      a_user: "auth/user",
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