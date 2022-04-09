<template>
  <!-- <UserCard /> -->
  <div>
    <div style="margin-top: 100px">
      <template>
        <v-row>
          <v-col cols="12">
            <JobDetail :a_job_detail="this.returnJob()" />
          </v-col>

          <v-col cols="12">
            <v-card class="mx-auto my-12" max-width="674">
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <img
                :src="'/images/202203291242DSC00425.JPG'"
                alt="image"
                class="img-fluid"
                style="object-fit: cover; object-position: center; width: 100%"
              />

              <v-card-text>
                <v-row align="center" class="">
                  <v-col cols="12">
                    <div
                      class="d-flex justify-content-center align-items-center"
                    >
                      <v-card-title>
                        {{ this.returnUser().user.first_name }}
                        {{ this.returnUser().user.last_name }}
                      </v-card-title>
                    </div>
                  </v-col>
                  <v-col cols="12">
                    <div
                      class="
                        d-flex
                        flex-column
                        justify-content-center
                        align-items-center
                      "
                    >
                      <h3>Rate this user</h3>
                      <p>
                        Help this user by rating them. Help others know what you
                        think of this user.
                      </p>
                    </div>
                  </v-col>
                </v-row>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>

              <v-card-text>
                <div class="text-center mt-3">
                  <v-rating
                    v-model="rating"
                    color="yellow darken-3"
                    background-color="grey darken-1"
                    empty-icon="$ratingFull"
                    hover
                    size="60"
                  ></v-rating>
                  <v-textarea
                    name="Description"
                    filled
                    label="Write a description"
                    :counter="200"
                    auto-grow
                    v-model="description"
                    value="Let us know more about this user"
                    clearable
                    class="mt-8"
                  ></v-textarea>
                </div>
              </v-card-text>
              <v-divider></v-divider>

              <v-card-actions class="justify-space-between">
                <v-btn text @click="route"> No Thanks </v-btn>
                <v-btn color="primary" text @click="rate"> Rate Now </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import JobDetail from "../app_component/cardJobDetails.vue";

export default {
  components: {
    JobDetail,
  },
  props: {
    a_job_detail: Object,
    a_user: [Object, Array],
  },
  data: () => ({
    rating: 4.9,
    description: null,
  }),
  methods: {
    route() {
      this.$router.push({
        name: "dashboard",
      });
    },
    rate() {
      let rateForm = new FormData();
      rateForm.append("rating", this.rating);
      rateForm.append("description", this.description);
      rateForm.append("job_id", this.returnJob().id);
      rateForm.append("user", this.returnUser().user.id);

      axios({
        method: "post",
        url: `user/rating/${this.returnUser().user.id}/${this.returnJob().id}`,
        data: rateForm,
        headers: {
          Authorization: "Bearer " + this.token,
          "Content-Type": "multipart/form-data",
        },
      })
        .then((res) => {
          this.$router.push({
            name: "dashboard",
          });
        })
        .catch((err) => {
          console.log(err);
        });

      console.log(
        this.rating,
        this.description,
        this.returnJob().id,
        this.returnUser().user.id
      );
    },
    returnJob() {
      if (this.a_job_detail) {
        return this.a_job_detail;
      } else {
        return JSON.parse(localStorage.getItem("a_job_detail"));
      }
    },
    returnUser() {
      if (this.a_user) {
        return this.a_user;
      } else {
        return JSON.parse(localStorage.getItem("a_user"));
      }
    },
  },
};
</script>

<style>
</style>