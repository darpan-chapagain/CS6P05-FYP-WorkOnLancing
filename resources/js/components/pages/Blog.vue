<template>
  <v-row>
    <v-col cols="12">
      <v-parallax
        dark
        src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      >
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12" v-if="this.blogs">
            <h1 class="text-h4 font-weight-thin mb-4">
              {{ this.blogs.blog.title }}
            </h1>
            <h4 class="subheading">{{ this.time }}</h4>
          </v-col>
        </v-row>
      </v-parallax>
    </v-col>
    <v-col cols="12">
      <div class="mt-5">
        <v-card>
          <div v-if="this.blogs" class="m-5 ">
            <v-card-title class="headline pt-5 px-5"> {{ this.blogs.blog.title }} </v-card-title>
            <v-card-subtitle class="px-5">
              <span>
                {{ this.blogs.blog.user.first_name }}
                {{ this.blogs.blog.user.last_name }}, {{ this.time }}
              </span>
            </v-card-subtitle>
            <div class="m-5">
              <v-img
                :src="'/' + this.blogs.blog.img_path"
                height="600px"
              ></v-img>

              <v-card-text>
                <pre style="white-space: pre-line">
                {{ this.blogs.blog.detail }}
                  </pre
                >
              </v-card-text>
            </div>
          </div>
        </v-card>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      time: null,
      id: null,
      blogs: null,
    };
  },
  methods: {
    async getBlogs() {
      let res = await axios({
        method: "get",
        url: `blog/get/${this.id}`,
        Headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      let data = await res.data;

      return data;
    },
  },
  async mounted() {
    this.id = this.$route.params.id;
    this.blogs = await this.getBlogs();
    this.time = moment(this.blogs.blog.updated_at).format("MMMM Do YYYY");
  },
};
</script>

<style>
</style>