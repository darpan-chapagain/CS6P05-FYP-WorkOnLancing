<template>
  <div>
    <!-- <v-btn><vue-khalti v-bind="khaltiConfig" /></v-btn> -->
    <vue-khalti ref="khaltiCheckout" v-bind="khaltiConfig" :key="componentKey">
      <v-btn @click="submit"> Pay with Khalti </v-btn>
    </vue-khalti>
  </div>
</template>

<script>
import axios from "axios";
import VueKhalti from "vue-khalti";
export default {
  name: "KhaltiButton",
  props: {
    id1: String,
    id2: Number,
    type: String,
    jobForm: FormData,
    title: String,
  },
  components: {
    VueKhalti,
  },
  methods: {
    async submit() {
      await this.onKhaltiClick();
      console.log(`yoo`);
    },
    test() {
      console.log('lol');
    },
    async onKhaltiClick() {
      const khaltiCheckout = await this.$refs.khaltiCheckout;
      let res = khaltiCheckout.onClick();
      console.log(res, "bhayo!");
    },
    forceRerender() {
    this.componentKey += 1;
  },
  },
  data() {
    return {
      componentKey: 0,
      lol: null,
      test2: "ypyp",
      khaltiConfig: {
        publicKey: "test_public_key_8eb595f6a93e4956952dd9f29cb4842d",
        productIdentity: `${this.type}-${Math.floor(
          Math.random() * 10
        )}-${moment(this.date).format("YYYY-MM-DD")}-${this.id2}`,
        productName: "YOUR_PRODUCT_NAME",
        amount: 1000,
        eventHandler: {
          onSuccess(payload) {
            // console.log(payload);
            console.log(this.lol);
            console.log(this.test2);
            const sendData = async () => {
              const res = await axios.post("/verify", payload);
              console.log(this.type);
              console.log(res);
              this.test();
            };
            sendData();
            
          },
          onError(error) {
            console.log(error);
          },
          onClose() {
            console.log("widget is closing");
          },
        },
      },
    };
  },
  
  mounted() {
    console.log(this.title);
    console.log(this.jobForm);
    this.lol = this.id2;
    this.forceRerender();
  },
};
</script>

<style>
</style>