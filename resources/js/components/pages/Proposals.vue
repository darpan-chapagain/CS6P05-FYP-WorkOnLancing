<template>
  <div style="margin: 150px">
    <v-sheet rounded="lg" min-height="500">
      <!--  -->
      <v-card elevation="6" class="p-3 mt-5">
        <div class="proposal-title">
          <h3 class="text-center">Proposals</h3>
        </div>
        <div v-if="allProposals">
          <div v-for="a_proposal in allProposals.job" :key="a_proposal.id">
            <Proposals :proposals="a_proposal" />
          </div>
        </div>
      </v-card>
    </v-sheet>
  </div>
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
    // this.allRequests = await this.fetchRequests()
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