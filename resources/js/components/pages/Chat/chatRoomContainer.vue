<template>
  <div>
    <v-main>
      <v-container class="py-8 px-6" fluid>
        <v-card style="min-height: 50vh">
          <v-subheader>Your messages</v-subheader>

          <v-list two-line>
            <template>
              <v-list-item
                v-for="room in rooms"
                :key="room.id"
                @click="gotoRoom(room)"
              >
                <v-list-item-avatar color="grey darken-1" size="55"
                  ><img
                    :src="'/' + room.user.profile_path"
                    alt="John"
                    style="
                      object-fit: cover;
                      object-position: center;
                      width: 100%;
                    "
                /></v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ room.user.first_name }}
                    {{ room.user.last_name }}</v-list-item-title
                  >

                  <v-list-item-subtitle>
                    
                    Talk with {{ room.user.first_name }}!
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
        </v-card>
      </v-container>
    </v-main>
  </div>
</template>

<script>
export default {
  props: {
    rooms: [Object, Array],
    // currentRoom: [Object, Array],
  },
  data: function () {
    return {
      selected: "",
    };
  },
  methods: {
    gotoRoom(room) {
      this.$router.push({
        name: "ChatRoom",
        params: {
          currentRoom: room,
        },
      });
    },
  },
  created() {
    console.log(this.rooms);
    // this.selected = this.currentRoom;
  },
};
</script>

<style >
</style>