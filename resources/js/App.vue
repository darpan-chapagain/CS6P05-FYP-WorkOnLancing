<template>
  <div>
    <v-app>
      <v-card class="overflow-hidden">
        <v-app-bar
          absolute
          color="#03befc"
          elevate-on-scroll
          scroll-target="#scrolling-techniques-7"
          height="70px"
        >
          <div v-if="this.authenticated">
            <v-app-bar-nav-icon
              v-if="this.role == 1"
              @click="drawer2 = !drawer2"
              class="drawer"
            ></v-app-bar-nav-icon>

            <v-app-bar-nav-icon
              v-else
              @click="drawer = !drawer"
              class="drawer d-flex d-sm-none"
            ></v-app-bar-nav-icon>
          </div>

          <v-toolbar-title class="white--text text-h5 d-none d-sm-flex"
            ><a href="/" class="white--text">WorkOnLancing</a></v-toolbar-title
          >

          <v-spacer></v-spacer>

          <div v-if="this.authenticated" class="d-none d-sm-flex">
            <div v-if="this.role != 1" class="d-flex">
              <div class="navbar-nav m-3">
                <a href="/dashboard" class="text-white ml-3">Dashboard</a>
              </div>
              <div class="navbar-nav m-3">
                <a href="/chat" class="text-white"
                  ><v-icon class="text-white">mdi-chat</v-icon> Chat</a
                >
              </div>
              <div class="navbar-nav m-3">
                <a href="/post/job" class="text-white">Post Jobs</a>
              </div>

              <div class="navbar-nav m-3">
                <a href="/job/requests" class="text-white">View Requests</a>
              </div>

              <div class="navbar-nav m-3" v-if="this.role == 3">
                <a href="/job/offers" class="text-white">View Proposals</a>
              </div>
            </div>
          </div>

          <div v-else class="d-flex">
            <div class="navbar-nav m-3">
              <a href="/login" class="text-white">Login</a>
            </div>
          </div>

          <v-menu left bottom v-if="this.authenticated">
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on" class="m-3">
                <v-avatar>
                  <img
                    v-if="user.profile_path"
                    :src="'/' + user.profile_path"
                    :alt="user.first_name"
                    style="
                      object-fit: cover;
                      object-position: center;
                      width: 100%;
                    "
                  />
                  <v-icon class="text-white" v-else>mdi-account</v-icon>
                </v-avatar>
              </v-btn>
            </template>

            <v-list @click="() => {}">
              <v-list-item v-if="this.role == 2">
                <v-list-item-title>
                  <v-btn
                    class="nav-item nav-link"
                    style="cursor: pointer"
                    text
                    @click="userPortal"
                    width="100%"
                    >User Portal</v-btn
                  >
                </v-list-item-title>
              </v-list-item>
              <v-list-item v-if="this.role == 3">
                <v-list-item-title>
                  <v-btn
                    class="nav-item nav-link"
                    style="cursor: pointer"
                    text
                    @click="employeePortal"
                    width="100%"
                    >Employee Portal</v-btn
                  >
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>
                  <v-btn
                    class="nav-item nav-link"
                    style="cursor: pointer"
                    text
                    @click="logOut"
                    width="100%"
                    >Logout</v-btn
                  >
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-app-bar>

        <v-navigation-drawer
          v-model="drawer"
          fixed
          temporary
          v-if="this.authenticated"
        >
          <!--  -->
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                WorkOnLancing
              </v-list-item-title>
              <v-list-item-subtitle
                >Where talent finds work</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-subtitle>View Home page</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list nav dense>
            <v-list-item-group>
              <v-list-item @click="home">
                <v-list-item-icon>
                  <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Home</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <v-divider></v-divider>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-subtitle>Use the application!</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list nav dense>
            <v-list-item-group>
              <v-list-item @click.native="dashboard">
                <v-list-item-icon>
                  <v-icon>mdi-file-tree</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Dashboard</v-list-item-title>
              </v-list-item>

              <v-list-item @click="request">
                <v-list-item-icon>
                  <v-icon>mdi-account</v-icon>
                </v-list-item-icon>
                <v-list-item-title>View Requests</v-list-item-title>
              </v-list-item>

              <v-list-item @click="postJob">
                <v-list-item-icon>
                  <v-icon>mdi-shape</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Post Jobs</v-list-item-title>
              </v-list-item>

              <v-list-item @click="chat">
                <v-list-item-icon>
                  <v-icon>mdi-star-shooting</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Chat</v-list-item-title>
              </v-list-item>

              <v-list-item @click="proposal" v-if="this.role == 3">
                <v-list-item-icon>
                  <v-icon>mdi-shield-star</v-icon>
                </v-list-item-icon>
                <v-list-item-title>View Proposals</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>

        <!-- admin nav -->
        <v-navigation-drawer v-model="drawer2" fixed temporary>
          <!--  -->
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img
                src="https://randomuser.me/api/portraits/men/85.jpg"
              ></v-img>
            </v-list-item-avatar>

            <v-list-item-title class="text-h6"
              >Darpan Chapagain</v-list-item-title
            >

            <v-divider></v-divider>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                WorkOnLancing
              </v-list-item-title>
              <v-list-item-subtitle>Manage Website</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-subtitle>Manage Payments</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list nav dense>
            <v-list-item-group>
              <v-list-item @click="payment">
                <v-list-item-icon>
                  <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Dashboard</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <v-divider></v-divider>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-subtitle>Manage Process</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list nav dense>
            <v-list-item-group>
              <v-list-item @click="job">
                <v-list-item-icon>
                  <v-icon>mdi-file-tree</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Manage Jobs</v-list-item-title>
              </v-list-item>

              <v-list-item @click="users">
                <v-list-item-icon>
                  <v-icon>mdi-account</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Manage Users</v-list-item-title>
              </v-list-item>

              <v-list-item @click="category">
                <v-list-item-icon>
                  <v-icon>mdi-shape</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Manage Category</v-list-item-title>
              </v-list-item>

              <v-list-item @click="skill">
                <v-list-item-icon>
                  <v-icon>mdi-star-shooting</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Manage Skill</v-list-item-title>
              </v-list-item>

              <v-list-item @click="badge">
                <v-list-item-icon>
                  <v-icon>mdi-shield-star</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Manage Badge</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>

        <v-sheet
          id="scrolling-techniques-7"
          class="overflow-y-auto"
          max-height="100vh"
        >
          <div style="min-height: 100vh; margin: 50px">
            <router-view />
          </div>
          <v-footer dark padless>
            <v-card
              flat
              tile
              class="indigo lighten-1 white--text text-center"
              width="100%"
            >
              <v-card-text>
                <v-btn
                  v-for="icon in icons"
                  :key="icon"
                  class="mx-4 white--text"
                  icon
                >
                  <v-icon size="24px">
                    {{ icon }}
                  </v-icon>
                </v-btn>
              </v-card-text>

              <v-card-text class="white--text pt-0">
                Visit our Socials
              </v-card-text>

              <v-divider></v-divider>

              <v-card-text class="white--text">
                {{ new Date().getFullYear() }} — <strong>WorkOnLancing</strong>
              </v-card-text>
            </v-card>
          </v-footer>
        </v-sheet>
      </v-card>
    </v-app>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import AdminNavigationDrawer from "./components/admin component/navigation drawer.vue";
export default {
  components: {
    AdminNavigationDrawer,
  },
  name: "App",
  data() {
    return {
      isLoggedIn: false,
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
      drawer: null,
      drawer2: null,
    };
  },
  methods: {
    ...mapActions({
      signOutAction: "auth/signOut",
    }),
    dashboard() {
      this.$router
        .push({
          path: "/dashboard",
          params: {
            job: this.allRequests,
          },
        })
        .catch(() => {});
    },

    chat() {
      this.$router
        .push({
          path: "/chat",
          params: {
            job: this.allRequests,
          },
        })
        .catch(() => {});
    },

    postJob() {
      this.$router
        .push({
          path: "/post/job",
          params: {
            job: this.allRequests,
          },
        })
        .catch(() => {});
    },

    home() {
      this.$router
        .push({
          name: "home",
          params: {
            job: this.allRequests,
          },
        })
        .catch(() => {});
    },

    request() {
      this.$router
        .push({
          name: "jobRequest",
          params: {
            job: this.allRequests,
          },
        })
        .catch(() => {});
    },

    proposal() {
      this.$router
        .push({
          name: "offer",
          params: {
            job: this.allRequests,
          },
        })
        .catch(() => {});
    },
    payment() {
      this.$router
        .push({
          name: "dashboard.admin",
        })
        .catch(() => {});
    },
    job() {
      this.$router
        .push({
          name: "adminJob",
        })
        .catch(() => {});
    },
    users() {
      this.$router
        .push({
          name: "adminUser",
        })
        .catch(() => {});
    },
    category() {
      this.$router
        .push({
          name: "adminCategory",
        })
        .catch(() => {});
    },
    skill() {
      this.$router
        .push({
          name: "adminSkill",
        })
        .catch(() => {});
    },
    badge() {
      this.$router
        .push({
          name: "adminBadge",
        })
        .catch(() => {});
    },
    test() {
      console.log("test");
    },
    logOut() {
      this.signOutAction().then(() => {
        this.$router
          .push({
            name: "login",
          })
          .catch(() => {});
      });
    },
    userPortal() {
      this.$router
        .push({
          path: "/user/portal",
        })
        .catch(() => {});
    },
    employeePortal() {
      this.$router
        .push({
          path: "/employee/portal",
        })
        .catch(() => {});
    },
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
      role: "auth/getRole",
    }),
  },
};
</script>

<style>
body::-webkit-scrollbar {
  display: none;
}
a {
  text-decoration: none;
}
</style>