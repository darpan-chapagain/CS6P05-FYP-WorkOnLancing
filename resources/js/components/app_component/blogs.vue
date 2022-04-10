<template>
  <v-layout row wrap align-center>
    <v-flex xs12 md8 lg8 offset-md2>
      <!-- <div v-for="article in articles" :key="article.title"> -->
      <v-card class="my-3" hover>
        <v-img height="350px" :src="'/' + this.blog.img_path"></v-img>
        <v-container fill-height fluid>
          <v-layout>
            <v-flex xs12 align-end d-flex>
              <span class="headline" v-if="blog.type == 'Blog'"
                >Blog Title: {{ blog.title }}</span
              >
              <span class="headline" v-else
                >Certification: {{ blog.title }}</span
              >
            </v-flex>
          </v-layout>
        </v-container>
        <v-card-text>
          {{ blog.detail.substring(0, 200) }}...
        </v-card-text>
        <v-card-actions>
          <v-chip big color="secondary" class="white--text">
            {{ this.time }}
          </v-chip>
          <v-spacer></v-spacer>
          <!-- <v-btn icon class="red--text">
                    <v-icon small>fa-reddit</v-icon>
                  </v-btn>
                  <v-btn icon class="light-blue--text">
                    <v-icon small>fa-twitter</v-icon>
                  </v-btn>
                  <v-btn icon class="blue--text text--darken-4">
                    <v-icon small>fa-facebook</v-icon>
                  </v-btn>
                  <v-btn icon class="red--text">
                    <v-icon small>fa-google-plus</v-icon>
                  </v-btn>
                  <v-btn icon class="blue--text text--darken-4">
                    <v-icon small>fa-linkedin</v-icon>
                  </v-btn>
                  <v-spacer></v-spacer> -->

          <div v-if="this.blog.type == 'Blog'">
            <v-btn small replace color="info" target="_blank" class="p-4" @click.prevent="read"
              >Read More</v-btn
            >
          </div>
          <div v-else>
            <v-dialog v-model="dialog" fullscreen hide-overlay>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  small
                  replace
                  color="info"
                  target="_blank"
                  class="p-4"
                  v-bind="attrs"
                  v-on="on"
                  >View Certificate</v-btn
                >
              </template>
              <v-card>
                <v-toolbar dark color="primary">
                  <v-toolbar-title>Certificate Details</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-toolbar-items>
                    <v-btn icon dark @click="dialog = false">
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                  </v-toolbar-items>
                </v-toolbar>
                <div class="m-5 pb-5">
                  <v-img :src="'/' + this.blog.img_path" height="100%"></v-img>
                </div>
                <v-bottom-navigation
                  :value="value"
                  background-color="blue"
                  grow
                  class="mb-0"
                >
                  <v-btn icon @click="dialog = false">
                    <v-icon color="white">mdi-close</v-icon>
                  </v-btn>
                </v-bottom-navigation>
              </v-card>
            </v-dialog>
          </div>
        </v-card-actions>
      </v-card>
      <!-- </div> -->
    </v-flex>
  </v-layout>
</template>

<script>
import moment from "moment";

export default {
  name: "Blogs",
  data() {
    return {
      value: null,

      time: null,
      articles: [],
      dialog: false,
    };
  },
  props: {
    blog: [Array, Object],
  },
  methods: {
    read() {
      this.$router.push({
        path: "/blog/" + this.blog.id,
        params: {
          id: this.blog.id,
        },
      });
    },
  },
  created() {
    this.time = moment().format("MMMM Do YYYY, h:mm:ss a");
    this.articles = this.blog;
  },
};
</script>
