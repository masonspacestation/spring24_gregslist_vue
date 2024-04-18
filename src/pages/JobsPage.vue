<script setup>
import { computed, onMounted } from "vue";
import { AppState } from "../AppState.js";
import { Job } from "../models/Job.js";
import { jobsService } from "../services/JobsService.js";
import Pop from "../utils/Pop.js";
import JobCard from "../components/JobCard.vue";



const jobs = computed(() => AppState.jobs)
const account = computed(() => AppState.account)

onMounted(() => {
  getJobs()
})

async function getJobs() {
  try {
    await jobsService.getJobs()
  }
  catch (error) {
    Pop.toast('One does not simply ~ get ~ a job', 'error');
  }
}

</script>


<template>
  <div class="container">
    <h1>Welcome to the jobs page ✌️☮️</h1>
    <div class="row">
      <div class="col-md-6" v-for="job in jobs" :key="job.id">
        <JobCard :job="job" />
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>