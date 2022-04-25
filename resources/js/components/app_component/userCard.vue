<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="674">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <img
      :src="'/' + this.img_path"
      alt="image"
      class="img-fluid"
      style="object-fit: cover; object-position: center; width: 100%"
    />

    <v-card-title
      >{{ a_user.user.first_name }} {{ a_user.user.last_name }}</v-card-title
    >

    <v-card-text>
      <v-row align="center" class="">
        <v-col cols="4">
          <v-rating
            :value="this.avgRate"
            color="amber"
            dense
            readonly
            half-increments
            size="14"
          ></v-rating>
          {{ this.avgRate.toFixed(1) }} ({{ this.count }})
        </v-col>

        <v-col cols="8">
          <div class="grey--text ms-4">
            <v-chip outlined color="green" class="m-1">
              <v-icon class="p-1">mdi-cash</v-icon>
              ${{ a_user.project_rate }}/pr</v-chip
            >
          </div>
        </v-col>
      </v-row>

      <div class="my-4 text-subtitle-1">
        {{ a_user.job_categories.category_name }}
      </div>

      <div>
        {{ a_user.user.about }}
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Skills</v-card-title>

    <v-card-text>
      <v-chip-group v-model="selection" column>
        <div v-for="skill in a_user.employee_skill" :key="skill.id">
          <v-chip>{{ skill.all_skill.skill }}</v-chip>
        </div>
      </v-chip-group>
    </v-card-text>
    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text @click="profile">
        Visit Profile
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "UserCard",
  props: {
    a_user: [Array, Object],
  },
  data: () => ({
    loading: false,
    selection: null,
    img_path: "",
    rating: 0,
    avgRate: 0,
    count: 0,
  }),

  methods: {
    profile() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);

      this.$router.push({
        name: "profile",
        params: {
          id: this.a_user.user.id,
          a_user: this.a_user,
        },
      });
    },
    async getRating() {
      console.log(this.id);
      let res = await axios.get(`/user/rating/${this.a_user.user.id}`);

      let data = res.data;

      data.ratings.forEach((ratings, index) => {
        this.count++;
      });
      this.avgRate = data.average;
    },
  },
  async created() {
    this.img_path = await this.a_user.user.profile_path;
    await this.getRating();
  },
};
</script>

<style>
</style>