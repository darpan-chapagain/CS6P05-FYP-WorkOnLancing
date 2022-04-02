<template>
  <div>
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
                <b-card-sub-title
                  >Apply or talk to the client!</b-card-sub-title
                >
                <v-divider></v-divider>
              </div>

              <div class="m-4">
                <v-container fluid>
                  <v-textarea
                    filled
                    counter
                    label="Write your application here!"
                    small
                    :rules="[(v) => v.length <= 25 || 'Max 25 characters']"
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
                <!-- <div v-if="this.applied">
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
                    @click="apply"
                    >Send application!</v-btn
                  >
                </div> -->
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
    rules: [(v) => v.length <= 5000 || "Max 25 characters"],
    value: "Application",
    pageJob: null,
    applied: false,
  }),
  methods: {
    async apply() {
      let res = await axios.post(`employee/request/${this.returnJob().id}`);
      // console.log(this.returnJob().id);
      console.log(res.data);
      this.applied = true;
      this.$router.push({ name: "dashboard.employee" });
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
  // async created() {
  //   let check = await this.checkApplication();
  //   check == "Already requested"
  //     ? (this.applied = true)
  //     : (this.applied = false);
  // },
};
</script>

<style>
</style>