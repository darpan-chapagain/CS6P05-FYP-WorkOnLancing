<template>
  <div class="proposals p-2">
    <div v-if="request">
      <div class="dialog">
        <v-dialog
          v-model="dialog"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-card-actions>
              <a style="width: 100%" v-bind="attrs" v-on="on" text>
                <v-alert
                  border="left"
                  colored-border
                  color="deep-purple accent-4"
                  elevation="2"
                  style="width: 100%"
                >
                  <div class="d-flex">
                    <v-avatar size="40" class="mr-3">
                      <img
                        :src="'/' + request.employee_user.profile_path"
                        alt="image"
                        class="img-fluid"
                      />
                    </v-avatar>
                    <p>
                      {{ request.employee_user.first_name }} applied for "{{
                        request.title
                      }}"
                    </p>
                  </div>
                </v-alert>
                <v-divider></v-divider>
              </a>
            </v-card-actions>
          </template>
          <v-card>
            <v-toolbar dark color="primary">
              <v-toolbar-title>Request Detail</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn icon dark @click="dialog = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-toolbar-items>
            </v-toolbar>
            <div style="min-height: 100vh">
              <RequestDetail :request_detail="request" />
            </div>
            <v-bottom-navigation :value="value" background-color="blue" grow>
              <v-btn icon @click="dialog = false">
                <v-icon color="white">mdi-close</v-icon>
              </v-btn>
            </v-bottom-navigation>
          </v-card>
        </v-dialog>
      </div>
    </div>
    <div v-else>
      <v-alert outlined type="warning" prominent border="left">
        You have not received any job requests yet
      </v-alert>
    </div>
  </div>
</template>

<script>
import RequestDetail from "./requestDetail.vue";
export default {
  components: { RequestDetail },
  name: "Requests",
  props: {
    request: [Object, Array],
  },
  data() {
    return {
      dialog: false,
      value: null,
    };
  },
  methods: {
    test() {
      alert("yooo");
    },
  },
};
</script>

<style>
</style>