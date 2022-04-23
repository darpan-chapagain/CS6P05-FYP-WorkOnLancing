<template>
  <div class="pt-5 m-6 main-container">
    <div class="p-5" style="display: flex; justify-content: center">
      <v-text-field
        label="Search"
        hide-details
        prepend-icon="mdi-magnify"
        single-line
        style="max-width: 600px"
        v-model="name"
        @keyup.enter="search"
      ></v-text-field>
    </div>
    <v-row class="dashboard-container">
      <v-col
        cols="12"
        sm="12"
        md="6"
        lg="3"
        order-md="1"
        order-sm="1"
        order-lg="1"
      >
        <v-sheet rounded="lg" min-height="268">
          <!--  -->
          <v-card elevation="6" class="p-3">
            <User
              :name="user.first_name + ' ' + user.last_name"
              :image="user.profile_path"
            />
            <v-divider></v-divider>
            <Availability class="test" />
            <v-divider></v-divider>
            <MyServices />
          </v-card>
        </v-sheet>
      </v-col>
      <v-col
        cols="12"
        sm="12"
        md="6"
        lg="3"
        class="right-contents"
        order-md="2"
        order-sm="2"
        order-lg="3"
      >
        <v-sheet rounded="lg" min-height="268">
          <v-card elevation="6" class="p-3">
            <h3>Filter Jobs</h3>
            <v-divider></v-divider>

            <FilterBy
              class="filter"
              @categoryChange="getCategory"
              @rangeChange="getRange"
            />
          </v-card>
        </v-sheet>
        <v-sheet rounded="lg" min-height="268">
          <v-card elevation="6" class="p-3 mt-5">
            <div class="proposal-title">
              <h3 class="text-center">Proposals</h3>
            </div>
            <v-divider></v-divider>
            <div v-if="allProposals">
              <div v-for="index in 3" :key="index">
                <Proposals
                  v-if="allProposals.job[index - 1]"
                  :proposals="allProposals.job[index - 1]"
                />
              </div>
              <v-btn width="100%" @click="seeAll">See All</v-btn>
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
                  <p>No Proposal yet!"</p>
                </div>
              </v-alert>
            </div>
          </v-card>
        </v-sheet>
      </v-col>
      <v-col
        cols="12"
        sm="12"
        md="12"
        lg="6"
        class="right-contents"
        order-md="3"
        order-sm="3"
        order-lg="2"
      >
        <v-sheet min-height="70vh" rounded="lg">
          <v-card elevation="6">
            <div class="title px-4 pt-5">
              <h1>Find Work</h1>
            </div>
            <v-divider />
            <div class="px-3 pt-4">
              View and apply to Jobs posted by recruiters
            </div>
            <Jobs :allJobs="filterJobs" />
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import FilterBy from "../app_component/filter.vue";
import Jobs from "../app_component/dashboardJob.vue";
import User from "../app_component/user.vue";
import Availability from "../app_component/availibility.vue";
import MyServices from "../app_component/myservices.vue";
import Proposals from "../app_component/proposals.vue";
import axios from "axios";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  components: {
    FilterBy,
    Jobs,
    User,
    Availability,
    MyServices,
    Proposals,
  },
  name: "dashboard",
  data() {
    return {
      category: "",
      name: "",
      min: "0",
      max: "70000",
      allJobs: [],
    };
  },
  methods: {
    search(){
      console.log(this.name);
    },
    getCategory(value) {
      if (value) {
        console.log(value);
        this.category = value;
      } else {
        this.category = [];
      }
    },
    getRange(value) {
      if (value) {
        console.log(value[0], value[1]);
        this.min = value[0];
        this.max = value[1];
      } else {
        this.min = "0";
        this.max = "70000";
      }
    },
    async fetchJobs() {
      const res = await axios.get("/jobs/all");

      const data = await res.data;

      return data;
    },
    ...mapActions({
      fetchProposals: "requests/fetchProposals",
    }),
    seeAll() {
      this.$router
        .push({
          name: "offer",
          params: {
            proposals: this.allProposals,
          },
        })
        .catch(() => {});
    },
    filterByCategory: function (allJobs) {
      return allJobs.filter(
        (allJobs) => !allJobs.job_category.category_name.indexOf(this.category)
      );
    },

    filterByName: function (allJobs) {
      return allJobs.filter(
        (allJobs) =>
          !allJobs.title.toLowerCase().indexOf(this.name.toLowerCase())
      );
    },

    filterByRange: function (allJobs) {
      return allJobs.filter((allJobs) =>
        allJobs.project_rate > this.min && allJobs.project_rate < this.max
          ? allJobs
          : ""
      );
    },
  },
  async created() {
    this.allJobs = await this.fetchJobs();
    await this.fetchProposals();
  },
  computed: {
    ...mapGetters({
      allProposals: "requests/job_Proposal",
      user: "auth/user",
    }),
    filterJobs: function () {
      return this.filterByRange(
        this.filterByCategory(this.filterByName(this.allJobs))
      );
    },
  },
};
</script>

<style scoped>
</style>
