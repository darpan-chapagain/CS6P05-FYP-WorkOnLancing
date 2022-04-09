<template>
  <div>
    <v-container>
      <v-row class="dashboard-container">
        <v-col cols="12" sm="12">
          <JobDetail :a_job_detail="a_job_detail" />
        </v-col>
        <v-col cols="12" sm="12" xs="12" md="6">
          <Client :client="a_job_detail.user" />
        </v-col>
        <v-col cols="12" sm="12" xs="12" md="6">
          <div v-if="message">
            <v-sheet rounded="lg" min-height="268">
              <v-sheet
                elevation="6"
                class="p-1 m-4"
                min-height="400"
                v-if="!this.my"
              >
                <div v-if="message == 'completed'">
                  <div class="job-title m-4 centre">
                    <h3>You have completed this job</h3>
                    <b-card-sub-title>Review the client!</b-card-sub-title>
                    <v-divider></v-divider>
                    <div class="m-4">
                      <div class="apply">
                        <h3>You have completed this job</h3>
                        <b-card-sub-title>Review the client!</b-card-sub-title>
                        <v-divider></v-divider>
                        <h5 class="my-0">Review the client!</h5>
                        <b-card-sub-title>Review!</b-card-sub-title>
                      </div>
                      <div v-if="this.apply">
                        <v-btn
                          class="m-2 mt-4"
                          rounded
                          color="primary"
                          disabled
                        >
                          Already Already Reviewed!
                        </v-btn>
                      </div>
                      <div v-else>
                        <v-btn
                          class="m-2 mt-4"
                          rounded
                          color="primary"
                          dark
                          @click="route"
                          >Send application!</v-btn
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="message == 'requested'">
                  <div class="m-4">
                    <h3>You have requested for this job</h3>
                    <b-card-sub-title
                      >Complete the given task!</b-card-sub-title
                    >
                    <v-divider></v-divider>
                  </div>
                  <div class="m-4">
                    <div class="message">
                      <h5 class="my-0">You've requested this job!</h5>
                      <b-card-sub-title
                        >Send a message to client and discuss about the
                        job!</b-card-sub-title
                      >
                      <v-btn class="m-2 mt-4" rounded color="primary" dark
                        >Send a message!</v-btn
                      >
                    </div>
                  </div>
                </div>

                <div v-if="message == 'assigned'">
                  <div class="m-4">
                    <h3>Do you have what it takes to start the job?</h3>
                    <b-card-sub-title
                      >Complete the given task!</b-card-sub-title
                    >
                    <v-divider></v-divider>
                  </div>
                  <div class="m-4">
                    <div class="message">
                      <h5 class="my-0">Talk to the client!</h5>
                      <b-card-sub-title
                        >Send a message to client and discuss about the
                        job!</b-card-sub-title
                      >
                      <v-btn class="m-2 mt-4" rounded color="primary" dark
                        >Send a message!</v-btn
                      >
                    </div>
                    <div class="mt-4">
                      <div class="message">
                        <h5 class="my-0">Start the job!</h5>
                        <b-card-sub-title>Start the job!</b-card-sub-title>
                        <v-btn
                          class="m-2 mt-4"
                          rounded
                          color="primary"
                          dark
                          @click="start"
                          >Start the job!</v-btn
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="message == 'progress'">
                  <div class="m-4">
                    <h3>Have you completed the job yet?</h3>
                    <b-card-sub-title
                      >Or you can talk to the client!</b-card-sub-title
                    >
                    <v-divider></v-divider>
                  </div>

                  <div class="m-4">
                    <div class="message">
                      <h5 class="my-0">Talk to the client!</h5>
                      <b-card-sub-title
                        >Send a message to client and discuss about the
                        job!</b-card-sub-title
                      >
                      <v-btn class="m-2 mt-4" rounded color="primary" dark
                        >Send a message!</v-btn
                      >
                    </div>
                    <div class="">
                      <div class="message">
                        <h5 class="my-0">Ready to complete it!</h5>
                        <b-card-sub-title>Finish the given task!</b-card-sub-title>
                        <v-btn class="m-2 mt-4" rounded color="primary" dark @click.prevent="finish">Finish the job!</v-btn>
                          >Finish the job 
                        
                        
                      </div>
                      
                    </div>
                    
                  </div>
                </div>
              </v-sheet>
              <v-sheet elevation="6" class="p-1 m-4" min-height="400" v-else>
                <div class="job-title m-4 centre">
                  <h3>This is your posted Job</h3>
                  <b-card-sub-title
                    >Wait until you have requests</b-card-sub-title
                  >
                  <v-divider></v-divider>
                </div>

                <div class="m-4">
                  <div class="apply">
                    <h5 class="my-0">See all requests?</h5>
                    <b-card-sub-title>View Requests!</b-card-sub-title>
                  </div>

                  <v-btn
                    class="m-2 mt-4"
                    rounded
                    color="primary"
                    dark
                    @click="goRequest"
                    >Requests!</v-btn
                  >
                </div>
                <div class="m-4">
                  <div class="message">
                    <h5 class="my-0">Post a job!</h5>
                    <b-card-sub-title>Post another Job?</b-card-sub-title>
                    <v-btn
                      class="m-2 mt-4"
                      rounded
                      color="primary"
                      dark
                      @click="job"
                      >Post a job</v-btn
                    >
                  </div>
                </div>
              </v-sheet>
            </v-sheet>
          </div>
          <div v-else>
            <v-sheet rounded="lg" min-height="268">
              <v-sheet
                elevation="6"
                class="p-1 m-4"
                min-height="400"
                v-if="!this.my"
              >
                <div class="job-title m-4 centre">
                  <h3>Think you have what it takes?</h3>
                  <b-card-sub-title
                    >Apply or talk to the client!</b-card-sub-title
                  >
                  <v-divider></v-divider>
                </div>

                <div class="m-4">
                  <div class="apply">
                    <h5 class="my-0">Send an application!</h5>
                    <b-card-sub-title>Send your application!</b-card-sub-title>
                  </div>
                  <div v-if="this.apply">
                    <v-btn class="m-2 mt-4" rounded color="primary" disabled>
                      Already Applied!
                    </v-btn>
                  </div>
                  <div v-else>
                    <v-btn
                      class="m-2 mt-4"
                      rounded
                      color="primary"
                      dark
                      @click="route"
                      >Send application!</v-btn
                    >
                  </div>
                </div>
                <div class="m-4">
                  <div class="message">
                    <h5 class="my-0">Talk to the client!</h5>
                    <b-card-sub-title
                      >Send a message to client and discuss about the
                      job!</b-card-sub-title
                    >
                    <v-btn class="m-2 mt-4" rounded color="primary" dark
                      >Send a message!</v-btn
                    >
                  </div>
                </div>
              </v-sheet>
              <v-sheet elevation="6" class="p-1 m-4" min-height="400" v-else>
                <div class="job-title m-4 centre">
                  <h3>This is your posted Job</h3>
                  <b-card-sub-title
                    >Wait until you have requests</b-card-sub-title
                  >
                  <v-divider></v-divider>
                </div>

                <div class="m-4">
                  <div class="apply">
                    <h5 class="my-0">See all requests?</h5>
                    <b-card-sub-title>View Requests!</b-card-sub-title>
                  </div>

                  <v-btn
                    class="m-2 mt-4"
                    rounded
                    color="primary"
                    dark
                    @click="goRequest"
                    >Requests!</v-btn
                  >
                </div>
                <div class="m-4">
                  <div class="message">
                    <h5 class="my-0">Post a job!</h5>
                    <b-card-sub-title>Post another Job?</b-card-sub-title>
                    <v-btn
                      class="m-2 mt-4"
                      rounded
                      color="primary"
                      dark
                      @click="job"
                      >Post a job</v-btn
                    >
                  </div>
                </div>
              </v-sheet>
            </v-sheet>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import JobDetail from "../app_component/cardJobDetails.vue";
import Client from "../app_component/cardClientDetail.vue";
import { mapGetters } from "vuex";

export default {
  name: "ApplyJob",
  components: { JobDetail, Client },
  props: {
    a_job_detail: Object,
    message: String,
  },
  data() {
    return {
      apply: false,
      my: false,
    };
  },
  methods: {
    finish() {
      let res = axios({
        method: "post",
        url: `employee/complete/job/${this.a_job_detail.id}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then(() => {
        this.$router.push({
          name: "dashboard",
        });
      });
    },
    start() {
      let res = axios({
        method: "post",
        url: `employee/start/job/${this.a_job_detail.id}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then(() => {
        this.$router.push({
          name: "dashboard",
        });
      });
    },
    route() {
      this.$router
        .push({
          name: "application",
          params: {
            job: this.a_job_detail,
          },
        })
        .then(() => {
          localStorage.setItem("job", JSON.stringify(this.a_job_detail));
        });
    },
    goRequest() {
      this.$router.push({
        path: "/requests",
      });
    },
    job() {
      this.$router.push({
        path: "/post/job",
      });
    },
    async checkApplication() {
      let res = await axios.get(`employee/check/${this.a_job_detail.id}`);
      let data = res.data.message;
      return data;
    },
  },
  async created() {
    let check = await this.checkApplication();
    check == "Already requested" ? (this.apply = true) : (this.apply = false);
    check == "Unauthorized" ? (this.my = true) : (this.my = false);
  },
  computed: {
    ...mapGetters({
      token: "auth/getToken",
      auth: "auth/authenticated",
    }),
  },
};
</script>

<style>
</style>