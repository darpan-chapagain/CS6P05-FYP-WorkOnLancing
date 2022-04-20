<template>
  <div style="margin-top: 150px" v-chat-scroll>
    <v-row>
      <v-col>

      </v-col>
    </v-row>
    <ChatRoomSelection
      
      :rooms="chatRooms"
      :currentRoom="currentRoom"
      v-on:room-changed="setRoom($event)"
    />
    <!-- <MessageRoom :title="'test'" /> -->
  </div>
</template>

<script>
import MessageRoom from "../pages/Chat/chatRoom.vue";
import MessageContainer from "../pages/Chat/messageContainer.vue";
import InputMessage from "../pages/Chat/inputMessage.vue";
import MessageItem from "../pages/Chat/messageItem.vue";
import ChatRoomSelection from "../pages/Chat/chatRoomContainer.vue";

export default {
  components: {
    MessageContainer,
    InputMessage,
    MessageItem,
    ChatRoomSelection,
    MessageRoom,
  },
  data() {
    return {
      chatRooms: [],
      currentRoom: [],
      messages: [],
      count: 5,
    };
  },
  methods: {
    getRooms() {
      axios({
        method: "get",
        url: "/chat/my/rooms",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
        .then((response) => {
          this.chatRooms = response.data;
          this.setRoom(response.data[0]);
          // this.getMessages();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    setRoom(room) {
      this.currentRoom = room;
      // this.getMessages();
    },
  },
  created() {
    this.getRooms();
  },
  watch: {
    count: function () {
      this.$nextTick(function () {
        var container = this.$refs.msgContainer;
        container.scrollTop = container.scrollHeight + 120;
      });
    },
  },
};
</script>

<style>
.scrollable {
  overflow: hidden;
  overflow-y: scroll;
  height: calc(90vh - 20px);
}
</style>