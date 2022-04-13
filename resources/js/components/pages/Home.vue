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
            <v-btn text> Find Talent </v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </div>
    <div class="m-4">
      <v-container>
        <v-card color="#952175" dark>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="text-h5"
                >WorkOnLancing Saved My life</v-card-title
              >

              <v-card-text class="text-h5 font-weight-bold">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, aliquid. Voluptatibus soluta alias harum incidunt nihil! Facilis, numquam? Similique doloremque molestiae officia vero totam saepe illo atque, eos repellat quidem, beatae eveniet ipsa consequuntur fuga qui quasi tempora modi reprehenderit suscipit voluptatum aut nisi quas incidunt quaerat? Et, explicabo quo.."
              </v-card-text>

              <v-card-actions>
                <v-btn class="ml-2 mt-5" outlined rounded small>
                  See Profile!
                </v-btn>
              </v-card-actions>
            </div>

            <v-avatar class="ma-3" size="125" tile>
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
              ></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHero",
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