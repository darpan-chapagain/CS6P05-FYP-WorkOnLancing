<template>
  <div>
    <v-container>
      <v-row class="dashboard-container">
        <v-col cols="12" sm="12">
          <JobDetail />
        </v-col>
        <v-col cols="12" sm="12" xs="12" md="6">
          <v-sheet rounded="lg" min-height="268">
            <v-sheet elevation="6" class="p-1 m-4" min-height="500">
              <div class="job-title m-4 centre">
                <h3>Client's Details</h3>
                <b-card-sub-title>Darpan Chapagain</b-card-sub-title>
                <v-divider></v-divider>
              </div>

              <div class="m-4">
                <div class="additional-user-detail">
                  <h5 class="my-0 p-3">Additional Details</h5>
                  <div class="attributes">
                    <v-list-item two-line>
                      <v-list-item-content>
                        <v-list-item-title>Qualification</v-list-item-title>
                        <v-list-item-subtitle>School</v-list-item-subtitle>

                        <v-list-item-title>Project Rate</v-list-item-title>
                        <v-list-item-subtitle>2$ 0</v-list-item-subtitle>

                        <v-list-item-title>Experience</v-list-item-title>
                        <v-list-item-subtitle>1 year employed</v-list-item-subtitle>

                        <v-list-item-title>Type</v-list-item-title>
                        <v-list-item-subtitle
                          >Individual</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>
                    <v-btn class="m-2 mt-4" rounded color="primary" dark
                      >Contact!</v-btn
                    >
                  </div>
                </div>
              </div>
            </v-sheet>
          </v-sheet>
        </v-col>
        <v-col cols="12" sm="12" xs="12" md="6">
          <v-sheet rounded="lg" min-height="268">
            <v-sheet elevation="6" class="p-1 m-4" min-height="500">
              <div class="job-title m-4 centre">
                <h3>Additional Details</h3>
                <v-divider></v-divider>
              </div>

              <div class="m-4">
                <v-container fluid>
                  <div class="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut distinctio itaque numquam unde et sit dolores ratione at repellendus architecto, aperiam eaque est veniam doloribus corporis inventore delectus iusto culpa, natus assumenda quos laboriosam tempora quia. Ipsum aliquid voluptatum soluta, molestiae ullam sint minus blanditiis voluptates non quas, pariatur beatae?
                  </div>
                  <v-divider class="mx-3"></v-divider>
                  <v-list-item two-line>
                      <v-list-item-content>
                        <v-list-item-title>Phone No</v-list-item-title>
                        <v-list-item-subtitle>9843590522</v-list-item-subtitle>

                        <v-list-item-title>Address</v-list-item-title>
                        <v-list-item-subtitle>Sinamangle</v-list-item-subtitle>

                        <v-list-item-title>Gender</v-list-item-title>
                        <v-list-item-subtitle>Male</v-list-item-subtitle>

                        <v-list-item-title>Email</v-list-item-title>
                        <v-list-item-subtitle
                          >chapagaindarpan11@gmail.com</v-list-item-subtitle
                        >
                      </v-list-item-content>
                      
                    </v-list-item>
                    <v-btn class="m-2 mt-4" rounded color="primary" dark
                      >Accept Request!</v-btn
                    >
                    <v-btn class="m-2 mt-4" rounded color="primary" dark
                      >Reject Request!</v-btn
                    >
                </v-container>
                <br />
              </div>
            </v-sheet>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import JobDetail from "../app_component/cardJobDetails.vue";
export default {
  components: { JobDetail },
  data: () => ({
    rules: [(v) => v.length <= 5000 || "Max 25 characters"],
    value: "Write a message here!",
  }),
};
</script>

<style>
</style>