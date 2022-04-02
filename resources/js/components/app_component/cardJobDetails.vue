<template>
  <v-sheet elevation="6" class="p-1 m-4">
    <div class="job-title m-4 centre">
      <h3>{{ a_job_detail.title }}</h3>
      <b-card-sub-title>User looking for employee</b-card-sub-title>
      <v-divider></v-divider>
    </div>

    <div class="job-description m-4">
      <div class="d-flex flex-row align-items-center">
        <h5 class="text-center my-0 p-3">Description</h5>
        <v-chip class="ma-2" color="blue" text-color="white">
          category: {{ a_job_detail.job_category_id }}
          <v-icon right> mdi-star </v-icon>
        </v-chip>
      </div>
      <div class="description-attributes d-flex flex-row align-items-center">
        <p class="description p-2">
          {{ a_job_detail.description }}
        </p>
      </div>
      <div class="attributes">
        <v-chip outlined color="green" class="m-1">
          <v-icon class="p-1">mdi-cash</v-icon>
          ${{ a_job_detail.salary_offered }}</v-chip
        >
        <v-chip outlined class="m-1">
          <v-icon class="p-1">mdi-brain</v-icon>
          {{ a_job_detail.experience }}
        </v-chip>
        <v-chip outlined class="m-1">
          <v-icon class="p-1">mdi-clock-time-four-outline</v-icon>
          Est. Time</v-chip
        >
      </div>
      <v-divider></v-divider>
    </div>
    <div class="status m-4">
      <div class="status-detail d-flex flex-row align-items-center">
        <h5 class="text-center my-0 p-3">Status:</h5>
        <v-chip color="green"> Active </v-chip>
        <!-- <v-chip color="red">
                    Not Taking Work
                  </v-chip> -->
      </div>
      <div class="m-3">
        <b-card-sub-title>Proposals: 2</b-card-sub-title>
      </div>

      <v-divider></v-divider>
    </div>
    <div class="status m-4">
      <div class="status-detail">
        <h5 class="my-0 p-3">Skills Required</h5>
        <div class="attributes">
          <v-chip class="m-1"> Skill</v-chip>
          <v-chip class="m-1"> Skill </v-chip>
          <v-chip class="m-1"> Skill</v-chip>
          <v-chip class="m-1"> Skill</v-chip>
          <v-chip class="m-1"> Skill </v-chip>
          <v-chip class="m-1"> Skill</v-chip>
        </div>
      </div>
    </div>
  </v-sheet>
</template>

<script>
export default {
  name: "JobCard",
  props: {
    a_job_detail: Object,
  },
};
</script>

<style>
</style>