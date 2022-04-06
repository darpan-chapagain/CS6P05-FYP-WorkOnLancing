<template>
  <div>
    <div style="margin-top: 150px">
      <template>
        <v-row>
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
                :src="'/images/202203291242DSC00425.JPG'"
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
                        1234 points</v-chip
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
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Expedita nesciunt, ab, voluptatum culpa numquam
                          aliquid facilis autem vero, quos praesentium atque!
                          Nam a quaerat neque unde natus voluptas quas ex
                          perspiciatis magni ut corporis deleniti, ipsum
                          molestias explicabo eos, repudiandae itaque
                          necessitatibus! Id itaque, laudantium consectetur
                          maxime officiis labore beatae!
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
                    <v-card-text v-if="myJobs">
                      <Jobs :allJobs="myJobs" :view="'all'" />
                    </v-card-text>
                    
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card flat>
                    <v-card-text v-if="pendingJobs != null">
                      <Jobs :allJobs="pendingJobs" :view="'pending'" />
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
                    <v-card-text>
                      <Jobs :allJobs="jobInProgress" :view="'assigned'" />
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
      pendingJobs: [],
      myJobs: [],
      jobInProgress: [],
    };
  },
  methods: {
    editProfile() {},
    visitProfile() {},
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
    this.pendingJobs = await this.getPendingJobs();
    this.myJobs = await this.myJob();
    this.jobInProgress = await this.startedJobs();
  },
  computed: {
    ...mapGetters({
      a_user: "auth/user",
      token: "auth/getToken",
    }),
  },
};
</script>

<style>
</style>