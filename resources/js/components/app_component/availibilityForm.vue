<template>
  <v-container style="max-width: 400px; margin: 20px auto; display:flex">
    <v-form ref="form" style="width:100%; margin: 0 auto;">
      <v-autocomplete
        v-model="select"
        :items="items"
        :rules="[(v) => !!v || 'Please enter a value']"
        label="Choose how many assignment you can do at a time!"
        required
      ></v-autocomplete>
      <v-btn color="success" type="submit" @click.prevent="submit" style="width: 100%; text-align:center">
        Save
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "AvailabilityForm",
  props: {
    select: Number,
  },
  data: () => ({
    items: [1, 2, 3, 4],
    dialog: true,
  }),
  methods: {
    async submit() {
      let res = await axios({
        method: "get",
        url: "employee/update/job/",
        headers: {
          Authorization: "Bearer " + this.token,
        },
      });
      alert(res.data);
    },
  },
  // async mounted() {
  //   let data = await this.getNum();
  //   this.select = await data.num;
  //   // alert(this.select);
  // },
  computed: {
    ...mapGetters({
      a_user: "auth/user",
      token: "auth/getToken",
    }),
  },
};
</script>

<style scoped>

</style>