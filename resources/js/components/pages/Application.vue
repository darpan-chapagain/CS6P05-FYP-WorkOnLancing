<template>
  <div>
    <v-snackbar v-model="snackbar" :timeout="timeout" top color="success" right>
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-container>
      <v-row class="dashboard-container">
        <v-col cols="12" sm="12">
          <JobDetail :a_job_detail="this.returnJob()" />
        </v-col>
        <v-col cols="12" sm="12" xs="12" md="6">
          <Client :client="this.returnJob().user" />
          <!-- 400 -->
        </v-col>
        <v-col cols="12" sm="12" xs="12" md="6">
          <v-sheet rounded="lg" min-height="268">
            <v-sheet elevation="6" class="p-1 m-4" min-height="400">
              <div class="job-title m-4 centre">
                <h3>Think you have what it takes?</h3>
                <b-card-sub-title>Send a application letter!</b-card-sub-title>
                <v-divider></v-divider>
              </div>

              <div class="m-4">
                <v-container fluid>
                  <v-textarea
                    filled
                    counter
                    v-model="application"
                    label="Write your application here!"
                    small
                    :rules="[(v) => v.length <= 1000 || 'Max 1000 characters']"
                    :value="value"
                  ></v-textarea>
                </v-container>
                <br />
                <v-btn
                  class="m-2 mt-4"
                  rounded
                  color="primary"
                  dark
                  @click="apply"
                  >Send application!</v-btn
                >
              </div>
            </v-sheet>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import JobDetail from "../app_component/cardJobDetails.vue";
import Client from "../app_component/cardClientDetail.vue";
import axios from "axios";

export default {
  components: { JobDetail, Client },
  props: {
    job: Object,
  },
  data: () => ({
    rules: [(v) => v.length <= 5000 || "Max 1000 characters"],
    value: "Application",
    pageJob: null,
    applied: false,
    application: "",
    snackbar: false,
    text: "Error!",
    valid: true,
    timeout: 2000,
  }),
  methods: {
    async apply() {
      let res = await axios({
        method: "post",
        url: `employee/request/${this.returnJob().id}`,
        data: {
          application: this.application,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then(() => {
        this.snackbar = true;
        this.text = "Application Sent!";
        this.applied = true;
        setTimeout(
          () => this.$router.push({ name: "dashboard.employee" }),
          2000
        );
      });
      // console.log(res.data);
      this.applied = true;
    },
    returnJob() {
      if (this.job) {
        return this.job;
      } else {
        return JSON.parse(localStorage.getItem("job"));
      }
    },
    async checkApplication() {
      alert(this.returnJob().id);
      let res = await axios.get(`employee/check/${this.returnJob().id}`);
      let data = res.data.message;
      return data;
    },
  },
};
</script>

<style>
</style>