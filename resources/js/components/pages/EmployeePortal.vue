<template>
  <div>
    <div style="margin-top: 150px">
      <template>
        <v-row>
          <v-col cols="12" sm="12" md="6" lg="6">
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
                        @click="editProfile"
                      >
                        Edit
                      </v-btn>
                    </div>
                  </v-col>
                  <v-col cols="4">
                    <v-rating
                      :value="4.5"
                      color="amber"
                      dense
                      readonly
                      size="14"
                      class="p-1"
                    ></v-rating>
                    <div class="p-1">4(11111)</div>
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
                      <v-chip outlined color="green" class="m-1">
                        <v-icon class="p-1">mdi-cash</v-icon>
                        ${{ employee.hourly_rate }} /hr</v-chip
                      >
                    </div>
                  </v-col>
                </v-row>

                <div class="my-4 text-subtitle-1">
                  {{ employee.job_categories.category_name }}
                </div>

                <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ullam, minima!.
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
                <v-btn color="deep-purple lighten-2" text @click="profile">
                  Visit Profile
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" sm="12" md="6" lg="6">
            <v-card class="mt-5" min-height="115vh">
              <v-tabs color="deep-purple accent-4" right>
                <v-tab>Completed Job</v-tab>
                <v-tab>Requested Jobs</v-tab>
                <v-tab>Assigned Job</v-tab>
                <v-tab>Jobs in Progress</v-tab>

                <v-tab-item>
                  <v-card flat>
                    <v-card-text v-if="completedJob">
                      <Jobs :allJobs="completedJob" :view="'completed'" />
                    </v-card-text>
                    <v-card-text v-else>
                      <v-divider></v-divider>
                      <v-alert outlined type="warning" prominent border="left">
                        No Jobs found
                      </v-alert>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card flat>
                    <v-card-text v-if="requestedJob">
                      <Jobs :allJobs="requestedJob" :view="'requested'" />
                    </v-card-text>
                    <v-card-text v-else>
                      <v-divider></v-divider>
                      <v-alert outlined type="warning" prominent border="left">
                        No Jobs found
                      </v-alert>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card flat>
                    <v-card-text v-if="assignedJob">
                      <Jobs :allJobs="assignedJob" :view="'assigned'" />
                    </v-card-text>
                    <v-card-text v-else>
                      <v-divider></v-divider>
                      <v-alert outlined type="warning" prominent border="left">
                        No Jobs found
                      </v-alert>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card flat>
                    <v-card-text v-if="progressJob">
                      <Jobs :allJobs="progressJob" :view="'progress'" />
                    </v-card-text>
                    <v-card-text v-else>
                      <v-divider></v-divider>
                      <v-alert outlined type="warning" prominent border="left">
                        No Jobs found
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
      loading: false,
      selection: null,
      completedJob: [],
      requestedJob: [],
      progressJob: [],
      assignedJob: [],
      progressJob: [],
      employee: null,
      img_path: "",
    };
  },
  methods: {
    profile() {
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
    editProfile() {},
    visitProfile() {},
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
        url: "user/job/started",
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
  },
};
</script>

<style>
</style>