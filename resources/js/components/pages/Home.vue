<template>
  <div>
    <v-container fluid fill-height class="home-hero">
      <v-layout justify-center align-center column pa-5>
        <div class="display-4 font-weight-black white--text text-xs-center">
          WHERE TALENT
        </div>
        <div
          class="display-4 font-weight-black white--text text-xs-center mb-3"
        >
          FINDS WORK
        </div>
        <div class="display-1 font-weight-bold white--text text-xs-center">
          Find a perfect employee for your task!
        </div>
      </v-layout>
    </v-container>
    <div class="m-4">
      <v-container>
        <v-card color="#385F73" dark>
          <div class="d-flex justify-content-center p-5">
            <img src="images/signin.png" class="white--text align-end center" />
          </div>
          <v-card-title class="text-h5"> Find new Talents now! </v-card-title>

          <v-card-subtitle
            >Looking someone reliable for you task? Login and find talents
            now!</v-card-subtitle
          >

          <v-card-actions>
            <v-btn text @click="register"> Find Talent </v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHero",
  methods: {
    register() {
      this.$router.push("/register");
    },
  },
};
</script>

<style scoped>
.home-hero {
  background: url("https://wallpaperaccess.com/full/99840.jpg");
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>