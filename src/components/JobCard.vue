<script setup>
import { computed } from "vue";
import { AppState } from "../AppState.js";
import { Job } from "../models/Job.js";
import Pop from "../utils/Pop.js";
import { jobsService } from "../services/JobsService.js";



defineProps({
  job: Job
})

const account = computed(() => AppState.account)

async function removeJob(job) {
  try {
    const wantsToDestroy = await Pop.confirm('Do you really want to remove this job?')
    if (!wantsToDestroy) return
    await jobsService.removeJob(job)
  }
  catch (error) {
    Pop.toast('Could not delete job.', 'error');
  }
}

</script>


<template>
  <div class="card rounded shadow p-3 mb-3">
    <section class="row justify-content-between">
      <div class="col-8">
        <div v-if="job.creatorId == account?.id">
          <i role="button" @click="removeJob(job.id)" class="text-danger fs-6 mdi mdi-delete-outline"></i>
        </div>

        <h6 class="mb-1">{{ job.company }}</h6>
        <h2 class="fs-3">{{ job.jobTitle }}</h2>
        <hr>
        <p>{{ job.description }}</p>
      </div>
      <div class="col-4 text-center rounded p-2 bg-secondary">
        <div class="align-self-center">
          <h6 class="fw-medium">PAY</h6>
          <h3 class=""><sup class="fw-light fs-6">$</sup>{{ job.rate }}<span class="fs-6 fw-light">/yr</span>
          </h3>
          <div class="mt-4">
            <button class="btn btn-outline-primary rounded rounded-pill p-2 w-75">APPLY</button>
          </div>
        </div>
      </div>
    </section>
    <hr>
    <div class="row justify-content-between">
      <small class="w-auto">Posted: {{ job.createdAt.toDateString() }}</small>
      <small class="w-auto">Revised: {{ job.updatedAt.toDateString() }}</small>
    </div>
  </div>


</template>


<style lang="scss" scoped></style>