<template>
  <div class="job-post">
        <div v-for="a_job in allJobs" :key="a_job.id">
            
            <AJob 
                :a_job="a_job"
                :view="view"
            />
        </div>
    </div>
</template>

<script>
 import AJob from './aJob.vue'

export default {
    name: 'Jobs',
    props: {
        allJobs: [Array, Object],
        view: String,
    },
    components: {
        AJob,
    }
}
</script>

<style>

</style>