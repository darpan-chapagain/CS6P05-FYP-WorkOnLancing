<template>
  <v-card elevation="6" class="p-3" style="margin-top: 150px">
    <div class="proposal-title">
      <h2 class="text-center">These are your Job Requests</h2>
    </div>
    <v-divider></v-divider>
    <div v-if="allRequests">
      <div v-for="a_request in allRequests" :key="a_request.id">
        <Requests :request="a_request" />
      </div>
    </div>
    <div v-else>
      <v-alert
        border="left"
        colored-border
        color="red accent-4"
        elevation="2"
        style="width: 100%"
      >
        <div class="d-flex ml-5">
          <p>No requests yet!"</p>
        </div>
      </v-alert>
    </div>

    <!-- <v-btn width="100%">See All</v-btn> -->
  </v-card>
</template>

<script>
import Requests from "../app_component/requests.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    Requests,
  },
  name: "JobRequest",
  data() {
    return {
      // allRequests: [],
    };
  },
  methods: {
    ...mapActions({
      fetchRequests: "requests/fetchRequest",
    }),
    // async fetchRequests() {
    //   const res = await axios.get("user/job/requests");

    //   const data = await res.data;
    //   return data;
    // },
  },
  async created() {
    this.fetchRequests();
  },
  computed: {
    ...mapGetters({
      allRequests: "requests/job_Request",
    }),
  },
};
</script>

<style>
</style>