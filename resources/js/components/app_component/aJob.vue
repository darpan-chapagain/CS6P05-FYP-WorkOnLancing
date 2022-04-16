<template>
  <div>
    <v-divider />
    <div class="jobs p-5">
      <h5>{{ a_job.title }}</h5>
      <div class="attributes">
        <v-chip outlined color="green" class="m-1">
          <v-icon class="p-1">mdi-cash</v-icon>
          ${{ a_job.project_rate }}</v-chip
        >
        <v-chip outlined class="m-1">
          <v-icon class="p-1">mdi-brain</v-icon>
          {{ a_job.experience }}
        </v-chip>
        <v-chip outlined class="m-1">
          <v-icon class="p-1">mdi-clock-time-four-outline</v-icon>
          Est. Time</v-chip
        >
      </div>
      <v-divider></v-divider>
      <div class="description">
        {{ a_job.description }}
      </div>

      <div class="dialog">
        <v-dialog
          v-model="dialog"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" dark v-bind="attrs" v-on="on">
                See Details
              </v-btn>
            </v-card-actions>
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

            <div v-if="role == 3">
              <ApplyJob :a_job_detail="a_job" :message="view" />
            </div>
            <div v-else>
              <div v-if="view == 'all'">
                <div v-if="a_job.status == 1">
                  <v-alert
                    border="top"
                    colored-border
                    type="info"
                    elevation="2"
                    class="p-3 mx-5 my-4"
                  >
                    Job is Still active and still open for applications.<v-btn
                      class="ml-10"
                      outlined
                      color="indigo"
                      mid
                      text
                      @click.prevent="edit"
                    >
                      Edit the job
                    </v-btn>
                  </v-alert>
                </div>
                <div v-if="a_job.status == 2">
                  <div v-if="a_job.request_job">
                    <div v-for="req in a_job.request_job" :key="req.id">
                      <div v-if="req.status == 2">
                        <v-alert
                          border="top"
                          colored-border
                          type="info"
                          elevation="2"
                          class="p-3 mx-5 my-4"
                        >
                          Job is offered offered to
                          {{ req.req_employee.user.first_name }}
                          {{ req.req_employee.user.last_name }}
                        </v-alert>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div v-if="a_job.request_job">
                <div v-for="req in a_job.request_job" :key="req.id">
                  <div v-if="req.status == 4">
                    {{ req.status }}
                    <v-alert
                      border="top"
                      colored-border
                      type="info"
                      elevation="2"
                      class="p-3 m-2"
                    >
                      Job is already assigned to
                      {{ req.req_employee.user.first_name }}
                      {{ req.req_employee.user.last_name }}
                    </v-alert>
                  </div>
                </div>
              </div>

              <div v-if="a_job.request_job">
                <div v-for="req in a_job.request_job" :key="req.id">
                  <div v-if="req.status == 5">
                    <v-alert
                      border="top"
                      colored-border
                      type="info"
                      elevation="2"
                      class="p-3 m-2"
                    >
                      Job is currently being done by
                      {{ req.req_employee.user.first_name }}
                      {{ req.req_employee.user.last_name }}
                      <v-btn
                        class="ml-10"
                        outlined
                        color="indigo"
                        mid
                        text
                        @click.prevent="submit(req.req_employee)"
                      >
                        Complete the job!
                      </v-btn>
                      <v-btn
                        class="ml-10"
                        outlined
                        color="indigo"
                        mid
                        text
                        @click.prevent="stop(req.req_employee.user.id)"
                      >
                        Stop the job!
                      </v-btn>
                    </v-alert>
                  </div>
                </div>
              </div>

              <div v-if="a_job.request_job">
                <div v-for="req in a_job.request_job" :key="req.id">
                  <div v-if="req.status == 6">
                    <v-alert
                      border="top"
                      colored-border
                      type="info"
                      elevation="2"
                      class="p-3 mx-5 my-4"
                    >
                      Job is completed by
                      {{ req.req_employee.user.first_name }}
                      {{ req.req_employee.user.last_name }}

                      <v-btn
                        class="ml-10"
                        outlined
                        color="indigo"
                        mid
                        text
                        @click.prevent="submit(req.req_employee)"
                      >
                        Complete the job!
                      </v-btn>
                    </v-alert>
                  </div>
                </div>
              </div>

              <div v-if="a_job.request_job">
                <div v-for="req in a_job.request_job" :key="req.id">
                  <div v-if="req.status == 7">
                    <v-alert
                      border="top"
                      colored-border
                      type="info"
                      elevation="2"
                      class="p-3 mx-5 my-4"
                    >
                      Job was completed by
                      {{ req.req_employee.user.first_name }}
                      {{ req.req_employee.user.last_name }}

                      <v-btn
                        v-if="!rated"
                        class="ml-10"
                        outlined
                        color="indigo"
                        mid
                        text
                        @click.prevent="rate(req.req_employee)"
                      >
                        Rate Employee!
                      </v-btn>
                      <v-btn
                        v-else
                        class="ml-10"
                        outlined
                        color="indigo"
                        mid
                        text
                        :disabled="true"
                      >
                        Oops you've already rated
                      </v-btn>
                    </v-alert>
                  </div>
                </div>
              </div>

              <v-col cols="12" sm="12" class="min-height:100vh">
                <JobDetail :a_job_detail="a_job" />
              </v-col>
            </div>

            <v-bottom-navigation
              :value="value"
              background-color="blue"
              grow
              class="mb-0"
            >
              <v-btn icon @click="dialog = false">
                <v-icon color="white">mdi-close</v-icon>
              </v-btn>
            </v-bottom-navigation>
          </v-card>
        </v-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import ApplyJob from "./applyJob.vue";
import JobDetail from "../app_component/cardJobDetails.vue";
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "AJob",
  components: {
    ApplyJob,
    JobDetail,
  },
  props: {
    a_job: [Object, Array],
    view: String,
  },
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      value: null,
      time: 0,
      rated: false,
    };
  },
  methods: {
    edit() {
      this.$router
        .push({
          name: "jobEdit",
          params: {
            job: this.a_job,
          },
        })
        .then(() => {
          localStorage.setItem("job", JSON.stringify(this.a_job));
        });
    },
    async submit(users) {
      let res = await axios({
        method: "post",
        url: `/job/complete/${this.a_job.id}`,
        Authorization: "Bearer " + this.token,
      }).then(() => {
        localStorage.setItem("a_job_detail", JSON.stringify(this.a_job));
        localStorage.setItem("a_user", JSON.stringify(users));
        this.$router.push({
          path: "rating",
          params: {
            a_job: this.a_job,
            a_user: users.user,
          },
        });
      });
    },
    async stop() {
      console.log("stop");
    },
    async rate(employee) {
      // console.log(this.a_job);
      let res = await axios({
        method: "get",
        url: `/user/rating/${this.user.id}/${employee.user.id}/${this.a_job.id}`,
        Authorization: "Bearer " + this.token,
        data: {
          employee_id: employee.id,
        },
      });
      let data = res.data;
      if (data.status == "Rated") {
        this.rated = true;
      } else {
        this.$router
          .push({
            name: "userRating",
            params: {
              a_job_detail: this.a_job,
              a_user: user,
            },
          })
          .then(() => {
            localStorage.setItem("a_job_detail", JSON.stringify(this.a_job));
            localStorage.setItem("a_user", JSON.stringify(employee));
          });
      }
    },
  },
  computed: {
    ...mapGetters({
      user: "auth/user",
      role: "auth/getRole",
      token: "auth/getToken",
    }),
  },
};
</script>

<style>
</style>