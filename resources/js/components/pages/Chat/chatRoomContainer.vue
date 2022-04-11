<template>
  <div>
    <div>
      {{ selected.name }} Chat
    </div>
    <div>
      <select v-model="selected" @change="$emit('room-changed', selected)">
        <option v-for="(room,index) in rooms" :key="index" :value="room">
          {{ room.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rooms: [Object, Array],
    currentRoom: [Object, Array],
  },
  data: function () {
    return {
      selected: "",
    };
  },
  created(){
    this.selected = this.currentRoom;
  }
}
</script>

<style>

</style>