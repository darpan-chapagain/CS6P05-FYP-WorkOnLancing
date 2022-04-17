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
                <v-dialog v-model="dialog" width="700">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      class="m-2 mt-4"
                      rounded
                      color="Green"
                      dark
                      width="100%"
                      v-bind="attrs"
                      v-on="on"
                      >Accept!</v-btn
                    >
                  </template>

                  <v-card>
                    <v-toolbar dark color="primary">
                      <v-toolbar-title>Job Detail</v-toolbar-title>
                    </v-toolbar>

                    <v-container
                      fluid
                      style="max-width: 400px; margin: 20px auto; display: flex"
                    >
                      <form ref="form" style="width: 100%; margin: 0 auto">
                        <h3>Pay for the Job to accept the Request</h3>

                        <v-card-text>
                          <div>Total</div>
                          <p class="text-h4 text--primary">
                            {{ this.a_job_detail.project_rate }}
                          </p>
                          <div>Your Points</div>
                          <p class="text-h4 text--primary">{{ this.points }}</p>
                          <div>Discount Rate</div>
                          <p class="text-h4 text--primary">
                            {{ this.discount }}%
                          </p>
                          <div>Sub Total after discount</div>
                          <p class="text-h4 text--primary">{{ this.total }}</p>
                          <p>Note:</p>
                          <div class="text--primary">
                            This is to insure that your employee does get paid
                            after they complete their work. Incase of
                            inconvenience please contact
                            support@workonlancing.com
                          </div>
                        </v-card-text>
                        <v-card-actions>
                          <vue-khalti
                            ref="khaltiCheckout"
                            v-bind="khaltiConfig"
                          >
                            <v-btn @click="onKhaltiClick">
                              Pay with Khalti
                            </v-btn>
                          </vue-khalti>
                        </v-card-actions>

                        <!-- <v-btn
                          class="m-2 mt-4"
                          rounded
                          color="Green"
                          dark
                          width="100%"
                          @click="action('accept')"
                          >Accept!</v-btn
                        > -->
                      </form>
                    </v-container>

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
import { mapGetters } from "vuex";
import VueKhalti from "vue-khalti";

export default {
  name: "ApplyJob",
  components: {
    User,
    VueKhalti,
  },
  data() {
    var self = this;
    return {
      a_user: [],
      loading: false,
      dialog: false,
      value: null,
      a_job_detail: [],
      total: 0,
      discount: 0,
      amount: 0,
      points: 0,
      khaltiConfig: {
        publicKey: "test_public_key_28ffbaeeb514468ca0a736669ca9d4b1",
        productIdentity: `${Math.floor(Math.random() * 10)}-${moment(
          this.date
        ).format("YYYY-MM-DD")}`,
        productName: "YOUR_PRODUCT_NAME",
        amount: 1000,
        eventHandler: {
          onSuccess(payload) {
            console.log(moment(this.date).format("YYYY-MM-DD"));
            const sendData = async () => {
              const res = await axios.post("/verify", payload);
              console.log(res);
            };
            sendData();
            self.accept(payload);
          },
          onClose() {
            console.log("widget is closing");
          },
        },
      },
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
    async accept(payload) {
      console.log("bhayo", payload);
      const res = await axios({
        method: "POST",
        url: `user/choose/${this.request_detail.employee_user.id}/${this.request_detail.job_id}`,
        data: {
          idx: payload.idx,
          token: payload.token,
          product_name: payload.product_name,
          discount: this.discount,
          amount: this.amount,
          sub_amount: this.total,
          project_rate : this.a_job_detail.project_rate,
        },
      }).then((res) => {
        console.log(res);
        alert("Accepted!");
        this.updateRequests();
        this.$router.push({ name: "dashboard.user" }).catch(() => {});
      });
    },
    async onKhaltiClick() {
      const khaltiCheckout = await this.$refs.khaltiCheckout;
      let res = khaltiCheckout.onClick();
      console.log(res, "bhayo!");
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
    async getJob() {
      let res = await axios.get(`job/${this.request_detail.job_id}/edit`);
      let data = res.data;
      return data;
    },
    getPayment(rate) {
      this.points = 100;
      if (this.points >= 100) {
        this.discount = 20;
        this.amount = rate;
        this.total = this.amount - this.amount * (this.discount / 100);
      } else {
        this.total = rate;
      }
      console.log(this.total);
    },
  },
  async mounted() {
    this.a_job_detail = await this.getJob();
    this.getPayment(this.a_job_detail.project_rate);
  },
  computed: {
    ...mapGetters({
      user: "auth/user",
    }),
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