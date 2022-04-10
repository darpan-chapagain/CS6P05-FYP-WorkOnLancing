<template>
  <div style="margin-top: 150px">
      <h3>
          <ChatRoomSelection v-if="currentRoom.id" :rooms="chatRooms" :currentRoom="currentRoom" v-on:room-changed="setRoom($event)"/>
      </h3>
    <div>Container</div>
    <MessageContainer :messages="messages"/>
    <InputMessage :room="currentRoom" v-on:message-sent="getMessages"/>
    <!-- <MessageItem /> -->
  </div>
</template>

<script>
import MessageContainer from "../pages/Chat/messageContainer.vue";
import InputMessage from "../pages/Chat/inputMessage.vue";
import MessageItem from "../pages/Chat/messageItem.vue"
import ChatRoomSelection from "../pages/Chat/chatRoomContainer.vue";

export default {
    components: {
    MessageContainer,
    InputMessage,
    MessageItem,
    ChatRoomSelection,
  },
  data() {
    return {
      chatRooms: [],
      currentRoom: [],
      messages: [],
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
          // this.getMessages();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getMessages(){
        axios(
            {
                method: "get",
                url: "/chat/rooms/" + this.currentRoom.id + "/messages",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
            }
        ).then((response) => {
            this.messages = response.data;
        }).catch((error) => {
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
      this.getRooms();
  },
};
</script>

<style>
</style>