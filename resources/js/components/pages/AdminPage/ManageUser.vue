<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
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
      <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize"> Reset </v-btn>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data: () => ({
    headers: [
      {
        text: "Employee Name",
        align: "start",
        sortable: false,
        value: "first_name.name",
      },
      { text: "Contact Number", value: "number", sortable: false },
      { text: "Paid", value: "pre_pay" },
      { text: "Pending Amount", value: "pending_amount" },
      { text: "Testing", value: "test" },
      { text: "Actions", value: "actions" },
    ],
    desserts: [],
  }),

  computed: {},

  watch: {},

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.desserts = [
        {
          first_name: { name: "This is a Test"} ,
          number: 1,
          pre_pay: 2,
          pending_amount: 3,
          test: "Another Test",
        },
      ];
    },

    editItem(item) {},

    deleteItem(item) {},
  },
};
</script>