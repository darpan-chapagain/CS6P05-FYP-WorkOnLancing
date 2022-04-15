<template>
  <div>
    <v-navigation-drawer fixed temporary>
      <v-list nav dense>
        <v-list-item-group
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title
              >Test</v-list-item-title
            >
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-dashboard</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <a href="/dashboard" class="text-white ml-3"
                >Dashboard</a
              ></v-list-item-title
            >
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-work-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title
              ><a href="/post/job" class="text-white"
                >Post Jobs</a
              ></v-list-item-title
            >
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'AdminNavigationDrawer',
  data: () => ({
    items: [
      ["mdi-email", "Inbox"],
      ["mdi-account-supervisor-circle", "Supervisors"],
      ["mdi-clock-start", "Clock-in"],
    ],
  }),
};
</script>

<style>
</style>