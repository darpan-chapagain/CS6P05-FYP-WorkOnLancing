<template>
  <div>
    <h6 class="text-center">Availability</h6>
    <div
      class="
        manage-time
        d-flex
        flex-row
        align-items-center
        justify-content-around
        mx-5
      "
    >
      <v-switch v-model="available" inset @change="statusChange"></v-switch>
      <div class="time-chip">
        <v-chip v-if="available" color="green"> Available For Work </v-chip>
        <v-chip v-if="!available" color="red"> Not Taking Work </v-chip>
      </div>
    </div>

    <div
      class="
        manage-job
        d-flex
        flex-row
        align-items-center
        justify-content-around
      "
    >
      <h6 class="text-center my-0">Edit number of jobs at same time</h6>
      <v-dialog v-model="dialog" width="600">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" outlined color="indigo" mid icon text>
            {{ select }}
          </v-btn>
        </template>

        <v-card>
          <v-toolbar dark color="primary">
            <v-toolbar-title>Job Detail</v-toolbar-title>
          </v-toolbar>

          <v-container
            style="max-width: 400px; margin: 20px auto; display: flex"
          >
            <v-form ref="form" style="width: 100%; margin: 0 auto">
              <v-autocomplete
                v-model="select"
                :items="items"
                :rules="[(v) => !!v || 'Please enter a value']"
                label="Choose how many assignment you can do at a time!"
                required
              ></v-autocomplete>
              <v-btn
                color="success"
                type="submit"
                @click.prevent="submit"
                style="width: 100%; text-align: center"
              >
                Save
              </v-btn>
            </v-form>
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
</template>

<script>
import AvailabilityForm from "../app_component/availibilityForm.vue";
import { mapGetters } from "vuex";
export default {
  name: "Availability",
  props: {},
  components: {
    AvailabilityForm,
  },
  data() {
    return {
      user: this.$store.state.auth.user,
      available: true,
      dialog: false,
      status: 2, // 1 = available, 2 = not available
      select: null,
      value: null,
      items: [1, 2, 3, 4],
    };
  },
  methods: {
    async statusChange() {
      this.status = this.available ? 1 : 2;
      await this.updateStatus(this.status);
    },
    async updateStatus(status) {
      let res = await axios({
        method: "post",
        url: "employee/update/status/",
        headers: {
          Authorization: "Bearer " + this.token,
        },
      });
      let data = await res.data;
      console.log(data);
      return data;
    },
    async getStatus() {
      let res = await axios({
        method: "get",
        url: "employee/get/status/",
        headers: {
          Authorization: "Bearer " + this.token,
        },
      });
      let data = await res.data;
      return data.status;
    },
    async getNum() {
      let res = await axios({
        method: "get",
        url: "employee/get/job/",
        data: {
          num: this.select,
        },
        headers: {
          Authorization: "Bearer " + this.token,
        },
      });
      let data = await res.data;
      return data;
    },
    async submit() {
      let res = await axios({
        method: "post",
        url: "employee/update/job/",
        data: {
          job: this.select,
        },
        headers: {
          Authorization: "Bearer " + this.token,
          "Content-type": "application/json",
        },
      });
    },
  },
  computed: {
    ...mapGetters({
      a_user: "auth/user",
      token: "auth/getToken",
    }),
  },
  async created() {
    this.status = await this.getStatus();
    let data = await this.getNum();
    this.select = await data.num;
    console.log(this.select);
    if (this.status == 1) {
      this.available = true;
    } else {
      this.available = false;
    }
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