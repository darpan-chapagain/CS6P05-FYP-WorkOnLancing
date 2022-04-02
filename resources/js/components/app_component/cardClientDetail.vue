<template>
  <v-sheet rounded="lg" min-height="268">
    <v-sheet elevation="6" class="p-1 m-4" min-height="500">
      <div class="job-title m-4 centre">
        <h3>Client's Details</h3>
        <b-card-sub-title
          >{{ this.client.first_name }}
          {{ this.client.last_name }}</b-card-sub-title
        >
        <v-divider></v-divider>
      </div>

      <div class="m-4">
        <div class="additional-user-detail">
          <h5 class="my-0 p-3">Additional Details</h5>
          <div class="attributes">
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>Phone No</v-list-item-title>
                <v-list-item-subtitle>{{
                  this.client.phone_no
                }}</v-list-item-subtitle>

                <v-list-item-title>Address</v-list-item-title>
                <v-list-item-subtitle>{{
                  this.client.address
                }}</v-list-item-subtitle>

                <v-list-item-title>Gender</v-list-item-title>
                <v-list-item-subtitle>{{
                  this.client.gender
                }}</v-list-item-subtitle>

                <v-list-item-title>Email</v-list-item-title>
                <v-list-item-subtitle>{{
                  this.client.email
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </div>
        </div>
      </div>
    </v-sheet>
  </v-sheet>
</template>

<script>
export default {
  name: "JobCard",
  props: {
    client: Object,
  },
  created() {},
};
</script>

<style>
</style>