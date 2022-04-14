<template>
  <div class="chat">
    <div class="myself" v-if="message.user.id == user.id">
      <v-app-bar color="rgba(0,0,0,0)" flat class="mb-16">
        <v-spacer></v-spacer>
        <v-card class="mt-10 mr-2" max-width="350px" color="blue" dark>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="mb-4">
                <p>{{ message.message }}</p>
              </div>
              <v-list-item-subtitle
                >{{ this.getTime(message.created_at) }}
                <!-- <span class="ml-16">Seen 1:03PM</span> -->
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <v-avatar class="mt-n5" size="30" elevation="10">
          <img
            :src="'/' + message.user.profile_path"
            alt="John"
            style="object-fit: cover; object-position: center; width: 100%"
          />
        </v-avatar>
      </v-app-bar>
    </div>
    <div class="other" v-else>
      <v-app-bar color="rgba(0,0,0,0)" flat class="mb-16">
        <v-avatar class="mt-n5 mr-2" size="30" elevation="10">
          <img
            :src="'/' + message.user.profile_path"
            alt="John"
            style="object-fit: cover; object-position: center; width: 100%"
          />
        </v-avatar>
        <v-card class="mt-10" max-width="350px">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="mb-4">
                {{ message.message }}
              </div>
              <v-list-item-subtitle>{{
                this.getTime(message.created_at)
              }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <v-btn color="black" icon class="mb-n10">
          <v-icon>fas fa-ellipsis-h</v-icon>
        </v-btn>
      </v-app-bar>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { mapGetters } from "vuex";

export default {
  props: {
    message: [Object, Array],
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
      role: "auth/getRole",
    }),
  },
  methods: {
    getTime(time) {
      return moment(time).format("h:mm a");
    },
  },
};
</script>

<style lang="sss" scoped>
</style>