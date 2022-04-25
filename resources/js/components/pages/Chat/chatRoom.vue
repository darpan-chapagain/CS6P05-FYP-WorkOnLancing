<template>
  <v-container fluid style="margin-top: 140px">
    <v-app-bar color="rgba(0,0,0,0)" flat>
        <v-avatar class="mt-n7" size="50" elevation="10">
          <img
                    :src="'/' + this.currentRoom.user.profile_path"
                    alt="John"
                    style="
                      object-fit: cover;
                      object-position: center;
                      width: 100%;
                    "
                />
        </v-avatar>
      <v-toolbar-title class="title pl-0 ml-2 mt-n4">
        {{ this.currentRoom.user.first_name }} {{ this.currentRoom.user.last_name }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-divider vertical inset class="mt-n1"></v-divider>
    </v-app-bar>
    <div v-chat-scroll>
      <div>{{ title }}</div>
      <div class="content scrollable" ref="msgContainer" v-chat-scroll>
        <MessageContainer :messages="messages" />
      </div>

      <InputMessage :room="currentRoom" v-on:message-sent="getMessages" />
    </div>
  </v-container>
</template>

<script>

import MessageContainer from "./messageContainer.vue";
import InputMessage from "./inputMessage.vue";
import MessageItem from "./messageItem.vue";
import ChatRoomSelection from "./chatRoomContainer.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    MessageContainer,
    InputMessage,
    MessageItem,
    ChatRoomSelection,
  },
  props: {
    title: String,
    currentRoom: [Object,Array],
    a_user: String,
  },
  data() {
    return {
      chatRooms: [],
    //   currentRoom: [],
      messages: [],
      count: 5,
    };
  },
  methods: {
    test() {
      console.log("test");
    },
    getRooms() {
      axios({
        method: "get",
        url: "/chat/rooms",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
        .then((response) => {
          this.chatRooms = response.data;
          this.setRoom(response.data[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getMessages() {
      axios({
        method: "get",
        url: "/chat/rooms/" + this.currentRoom.id + "/messages",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
        .then((response) => {
          this.messages = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    setRoom(room) {
      alert(room);
      this.currentRoom = room;
      this.getMessages();
    },
  },
  created() {
    this.getMessages();
    // this.currentRoom = this.$route.params.currentRoom;
    // console.log(this.$route.currentRoom);
  },
  watch: {
    count: function () {
      this.$nextTick(function () {
        var container = this.$refs.msgContainer;
        container.scrollTop = container.scrollHeight + 120;
      });
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
.scrollable {
  overflow: hidden;
  overflow-y: scroll;
  height: calc(90vh - 20vh);
}
</style>