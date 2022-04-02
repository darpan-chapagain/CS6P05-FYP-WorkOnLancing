<template>
  <div>
    <v-container>
      <v-row class="dashboard-container">
        <v-col cols="12" sm="12" md="12" lg="8">
          <v-sheet min-height="768">
            <v-sheet elevation="3" class="p-1 m-4" min-height="700">
              <div class="job-title m-4 centre">
                <h3>About!</h3>
                <b-card-sub-title
                  >Learn more about the
                  {{ request_detail.title }}</b-card-sub-title
                >
                <v-divider></v-divider>
              </div>

              <div class="m-4">
                <div class="additional-user-detail">
                  <pre style="white-space: pre-line">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, aliquid?

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, doloribus quos. Facilis obcaecati quos repellendus corporis dolorem, quo vitae harum!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ex porro, cupiditate obcaecati esse saepe provident consequatur voluptate inventore? Alias atque aliquam id reiciendis voluptates ipsam ipsum odit tempora nihil eius dolore corporis modi, voluptatum animi, sint hic ducimus omnis, porro molestiae vero quod labore exercitationem delectus temporibus! Tenetur, amet!
                    <!-- {{ request_detail.employee }} -->
                  </pre>
                </div>
              </div>
            </v-sheet>
          </v-sheet>
        </v-col>
        <v-col cols="12" sm="12" xs="12" md="4">
          <User :a_user="request_detail.employee" />

          k ho sala
        </v-col>
        <v-col cols="12" sm="12" xs="12" md="12">
          <div
            class="btns"
            style="
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
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
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import User from "../app_component/userCard.vue";
import { mapActions } from "vuex";

export default {
  name: "ApplyJob",
  components: {
    User,
  },
  data() {
    return {
      a_user: [],
      loading: false,
    };
  },
  props: {
    request_detail: Object,
  },
  methods: {
    ...mapActions({
      updateRequests: "requests/fetchRequest",
    }),
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
@media only screen and (min-width: 769px) {
  .btns {
    display: flex;
    flex-direction: row !important;
    justify-content: space-around !important;
  }
}

@media only screen and (min-width: 1025px) {
  .btns {
    display: flex;
    flex-direction: row !important;
    justify-content: space-around !important;
  }
}
</style>