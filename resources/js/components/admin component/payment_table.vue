<template>
  <v-data-table
    :headers="headers"
    :items="pay"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>My CRUD</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="updateStatus(item)"
        v-if="item.status == 1"
      >
        mdi-account-check
      </v-icon>
      <p v-else class="mr-2">
        Payment Completed
        <v-icon small> mdi-account-multiple-check </v-icon>
      </p>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data: () => ({
    headers: [
      {
        text: "id",
        align: "start",
        sortable: true,
        value: "id",
      },
      { text: "Employee ID", value: "employee_id", sortable: true },
      { text: "Client ID", value: "user_id", sortable: true },
      { text: "Job ID", value: "job_id", sortable: true },
      { text: "Total Amount", value: "total", sortable: true },
      { text: "Discount", value: "discount", sortable: true },
      { text: "Sub Total", value: "sub_total", sortable: true },
      { text: "idx code", value: "idx", sortable: true },
      { text: "khalti token", value: "token", sortable: true },
      { text: "Product Payment Name", value: "product_name", sortable: true },
      { text: "Payment Status", value: "status", sortable: true },
      { text: "Action", value: "actions" },
    ],
    pay: [],
  }),

  computed: {},

  watch: {},

  async mounted() {
    this.initialize();
    this.pay = await this.getPayments();

    console.log(this.pay);
  },

  methods: {
    initialize() {
      this.desserts = [
        {
          first_name: { name: "This is a Test" },
          number: 1,
          pre_pay: 2,
          pending_amount: 3,
          test: "Another Test",
        },
      ];
    },
    
    async updateStatus(item) {
      axios({
        method: "POST",
        url: `admin/payment/update`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        data: {
          id: item.id,
        }
      }).then(() => {
        this.pay = [];
      });
      this.pay = await this.getPayments();
    },

    
    async getPayments() {
      let res = await axios({
        method: "get",
        url: "admin/payment",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      let data = res.data;

      return data;
    },
  },
};
</script>