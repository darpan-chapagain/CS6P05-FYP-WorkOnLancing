<template>
  <!-- <UserCard /> -->
  <div style="margin-top: 100px">
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

      <v-card-title>
        <!-- {{ a_user.user.first_name }} {{ a_user.user.last_name }} -->
      </v-card-title>

      <v-card-text>
        <v-row align="center" class="">
          <v-col cols="12">
            <div class="d-flex justify-content-center align-items-center">
              <h3>
                Rate this user
              </h3>
            </div>
          </v-col>
          <v-col cols="12">
            <div class="d-flex justify-content-center align-items-center">
              Help this user by rating them. Help others know what you think of
              this user.
            </div>
          </v-col>
        </v-row>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-text>
        <div class="text-center mt-8">
          <v-rating
            v-model="rating"
            color="yellow darken-3"
            background-color="grey darken-1"
            empty-icon="$ratingFull"
            hover
            large
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
            class="mt-4"
          ></v-textarea>
        </div>
      </v-card-text>
      <v-divider></v-divider>

      <v-card-actions class="justify-space-between">
        <v-btn text> No Thanks </v-btn>
        <v-btn color="primary" text> Rate Now </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import UserCard from "../../app_component/userCard.vue";
export default {
  components: {
    UserCard,
  },
  data: () => ({
    rating: 4.9,
    description: null,
  }),
};
</script>

<style>
</style>