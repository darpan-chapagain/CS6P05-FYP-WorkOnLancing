<template>
  <div class="proposals p-2">
    <v-snackbar
      v-model="snackbar1"
      :timeout="timeout"
      top
      color="red accent-2"
      right
    >
      {{ text1 }}

      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
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
                        :src="'/' + proposals.user.profile_path"
                        alt="image"
                        class="img-fluid"
                        style="
                          object-fit: cover;
                          object-position: center;
                          width: 100%;
                        "
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
              <v-toolbar-title>Proposals Detail</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn icon dark @click="dialog = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-toolbar-items>
            </v-toolbar>
            <div style="min-height: 100vh">
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
                    <h5 class="my-0">Do you accept this Offer?</h5>
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
                    <h5 class="my-0">Do not like the Offer?</h5>
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
    <div v-else>
      <v-alert outlined type="warning" prominent border="left">
        You do not have any job proposals yet
      </v-alert>
    </div>
  </div>
</template>

<script>
import JobDetail from "../app_component/cardJobDetails.vue";
import { mapActions } from "vuex";

export default {
  name: "Proposals",
  components: { JobDetail },
  props: {
    proposals: [Object, Array],
  },
  data() {
    return {
      snackbar1: false,
      text1: "Error!",
      snackbar2: false,
      text2: "Error!",
      timeout: 2000,
      dialog: false,
      value: null,
    };
  },
  methods: {
    ...mapActions({
      updateRequests: "requests/fetchProposals",
    }),
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
      const res = await axios({
        method: "post",
        url: `employee/accept/job/${this.proposals.id}/`,
        data: {
          status: "accept",
        },
      }).then((res) => {
        this.snackbar2 = true;
        this.text2 = "Offer Accepted";
        this.updateRequests();
        setTimeout(
          () =>
            this.$router.push({ name: "dashboard.employee" }).catch(() => {}),
          2000
        );
      });
    },
    async reject() {
      const res = await axios({
        method: "post",
        url: `employee/accept/job/${this.proposals.id}/`,
        data: {
          status: "reject",
        },
      }).then((res) => {
        console.log(res);
        this.snackbar1 = true;
        this.text1 = "Offer Rejected";
        this.updateRequests();
        setTimeout(
          () =>
            this.$router.push({ name: "dashboard.employee" }).catch(() => {}),
          2000
        );
      });
    },
  },
};
</script>

<style>
</style>