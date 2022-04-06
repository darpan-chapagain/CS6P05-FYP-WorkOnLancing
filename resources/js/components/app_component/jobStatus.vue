<template>
  <div class="status">

  </div>
</template>

<script>
import AJob from "./aJob.vue";

export default {
  name: "Jobs",
  props: {
    allJobs: Array,
  },
  components: {
    AJob,
  },
  
};
</script>

<style>
</style>