<template>
  <div>
    <v-text-field
      v-model="message"
      label="Outlined"
      outlined
      clearable
      @keyup.enter="sendMessage"
      placeholder="Say something...."
      :append-outer-icon="'mdi-send'"
      @click:append-outer="sendMessage"
    ></v-text-field>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    room: [Object, Array],
  },
  data: function () {
    return {
      message: "",
    };
  },
  methods: {
    sendMessage() {
      if (this.message == "") {
        return;
      }

      axios({
        method: "post",
        url: "/chat/rooms/" + this.room.id + "/message",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        data: {
          message: this.message,
        },
      })
        .then((response) => {
          this.$emit("message-sent", response.data);

          // this.getMessages();
        })
        .catch((error) => {
          console.log(error);
        });
      this.message = "";
    },
  },
};
</script>

<style>
</style>