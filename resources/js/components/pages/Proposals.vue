<template>
  <v-card elevation="6" class="p-3" style="margin-top: 150px">
    <div class="proposal-title">
      <h2 class="text-center">Proposals</h2>
    </div>
    <v-divider></v-divider>
    <div v-if="allProposals">
      <div v-for="a_proposal in allProposals.job" :key="a_proposal.id">
        <Proposals :proposals="a_proposal" />
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

  </v-card>
</template>

<script>
import Proposals from "../app_component/proposals.vue";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  components: {
    Proposals,
  },
  name: "ProposalPage",
  methods: {
    ...mapActions({
      fetchProposals: "requests/fetchProposals",
    }),
  },
  async created() {
    await this.fetchProposals();
  },
  computed: {
    ...mapGetters({
      allProposals: "requests/job_Proposal",
    }),
  },
};
</script>

<style>
</style>