<template>
  <div class="proposals p-2">
    <div v-if="proposals">
      <div class="dialog">
        <v-dialog
          v-model="dialog"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-card-actions>
              <a style="width: 100%" v-bind="attrs" v-on="on" text>
                <v-alert
                  border="left"
                  colored-border
                  color="deep-purple accent-4"
                  elevation="2"
                  style="width: 100%"
                >
                  <div class="d-flex">
                    <v-avatar size="40" class="mr-3">
                      <img
                        :src="'/images/202203281818DSC00425.jpg'"
                        alt="image"
                        class="img-fluid"
                      />
                    </v-avatar>
                    <p>{{ proposals.title }} Job</p>
                  </div>
                </v-alert>
                <v-divider></v-divider>
              </a>
            </v-card-actions>
          </template>
          <v-card>
            <v-toolbar dark color="primary">
              <v-toolbar-title>Proposal Detail</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn icon dark @click="dialog = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-toolbar-items>
            </v-toolbar>
            <div style="min-height: 100vh">
              <!-- <RequestDetail 
                :request_detail="request"
              /> -->
              <JobDetail :a_job_detail="proposals" />
              <div
                class="btns"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  margin-top: 50px;
                "
              >
                <div class="m-4">
                  <div class="message">
                    <h5 class="my-0">Do not like the client?</h5>
                    <v-btn
                      class="m-2 mt-4"
                      rounded
                      color="Green"
                      dark
                      width="100%"
                      @click="action('accept')"
                      >Accept!</v-btn
                    >
                  </div>
                </div>
                <div class="m-4">
                  <div class="message">
                    <h5 class="my-0">Do you have questions?</h5>
                    <v-btn
                      class="m-2 mt-4"
                      rounded
                      color="primary"
                      dark
                      width="100%"
                      @click="action('message')"
                      >Contact!</v-btn
                    >
                  </div>
                </div>
                <div class="m-4">
                  <div class="message">
                    <h5 class="my-0">Do not like the client?</h5>
                    <v-btn
                      class="m-2 mt-4"
                      rounded
                      color="red"
                      dark
                      width="100%"
                      @click="action('reject')"
                      >Reject!</v-btn
                    >
                  </div>
                </div>
              </div>
            </div>
            <v-bottom-navigation :value="value" background-color="blue" grow>
              <v-btn icon @click="dialog = false">
                <v-icon color="white">mdi-close</v-icon>
              </v-btn>
            </v-bottom-navigation>
          </v-card>
        </v-dialog>
      </div>
    </div>
    <div v-else>No Requests</div>
  </div>
</template>

<script>
import JobDetail from "../app_component/cardJobDetails.vue";

export default {
  name: "Proposals",
  components: { JobDetail },
  props: {
    proposals: [Object, Array],
  },
  data() {
    return {
      dialog: false,
      value: null,
    };
  },
  methods: {
    test() {
      alert("yooo");
    },
    action(ac) {
      if (ac == "accept") {
        this.accept();
      } else if (ac == "reject") {
        this.reject();
      } else if (ac == "message") {
      }
    },
    async accept() {
      const res = await axios
        .post(
          `user/choose/${this.request_detail.employee_user.id}/${this.request_detail.job_id}`
        )
        .then((res) => {
          console.log(res);
          alert("Accepted!");
          this.updateRequests();
          this.$router.push({ name: "dashboard.user" }).catch(() => {});
        });
    },
    async reject() {
      const res = await axios
        .post(
          `user/reject/${this.request_detail.employee_user.id}/${this.request_detail.job_id}`
        )
        .then((res) => {
          console.log(res);
          alert("Rejected!");
          this.updateRequests();
          this.$router.push({ name: "dashboard.user" }).catch(() => {});
        });
    },
  },
};
</script>

<style>
</style>