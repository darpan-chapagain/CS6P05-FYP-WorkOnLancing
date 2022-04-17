<template>
  <div style="margin-top: 100px; margin-left: 0px">
    <div class="m-5">
      <PaymentTable />
    </div>
    <div id="chart" class="d-flex justify-content-center m-5">
      <h2>Total Users</h2>
    </div>
    <div id="chart" class="d-flex justify-content-center m-5">
      <apexchart
        type="pie"
        width="480"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
    <div id="chart" class="d-flex justify-content-center m-5">
      <h2>Total Job Status</h2>
    </div>
    <div id="chart" class="d-flex justify-content-center m-5">
      <apexchart
        type="donut"
        width="580"
        :options="chartOptions2"
        :series="series2"
      ></apexchart>
    </div>
  </div>
</template>

<script>
import PaymentTable from "../admin component/payment_table.vue";
import ApexCharts from "apexcharts";

export default {
  components: {
    PaymentTable,
    ApexCharts,
  },
  data() {
    return {
      series: [],
      chartOptions: {
        chart: {
          width: 380,
          type: "pie",
        },
        labels: ["Admin", "User", "Employee"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
      series2: [],
      chartOptions2: {
        chart: {
          width: 380,
          type: "pie",
        },
        labels: [
          "Jobs Requests",
          "Job Offered",
          "Job's accepted",
          "Jobs In Progress",
          "Jobs Completed by Employee",
          "Jobs Completed by Client",
        ],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  },
  methods: {
    async getRoles() {
      let res = await axios({
        method: "get",
        url: "admin/roles",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      let data = res.data;
      console.log(data);
      return data[0];
    },
    async getRequests() {
      let res = await axios({
        method: "get",
        url: "admin/requests",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      let data = res.data;

      return data[0];
    },

    
  },
  async mounted() {
    let roles = await this.getRoles();
    for (let i = 0; i < 3; i++) {
      this.series.push(roles[i]);
    }

    let requests = await this.getRequests();
    for (let i = 0; i < 6; i++) {
      this.series2.push(requests[i]);
    }


  },
};
</script>

<style>
</style>