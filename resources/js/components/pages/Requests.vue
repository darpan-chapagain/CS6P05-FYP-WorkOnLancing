<template>
  <div style="margin: 150px">
    <v-sheet rounded="lg" min-height="500">
      <v-card elevation="6" class="p-3 mt-5" min-width="320px">
        <div class="proposal-title">
          <h3 class="text-center">Job Requests</h3>
        </div>
        <v-divider></v-divider>
        <div v-if="allRequests">
              <div v-for="request in allRequests" :key="request.id">
                <div>
                  <Requests
                    v-if="request"
                    :request="request"
                  />
                </div>
              </div>
            </div>
      </v-card>
    </v-sheet>
  </div>
</template>

<script>
import Requests from "../app_component/requests.vue";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  components: {
    Requests,
  },
  methods: {
    ...mapActions({
      fetchRequests: "requests/fetchRequest",
    }),
  },
    async created() {
    await this.fetchRequests();
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