<script setup>
import { Job } from "../models/Job.js";



defineProps({
  job: Job
})
</script>


<template>
  <div class="col-6 card rounded p-3 mb-3">
    <section class="row justify-content-between">
      <div class="col-8">
        <h6 class="mb-1">{{ job.company }}</h6>
        <h2 class="fs-3">{{ job.jobTitle }}</h2>
        <hr>
        <p>{{ job.description }}</p>
      </div>
      <div class="col-4 text-center rounded p-2 bg-secondary">
        <div class="align-self-center">
          <h6 class="fw-medium">PAY</h6>
          <h3 class=""><sup class="fw-light fs-6">$</sup>{{ job.rate }}<span class="fs-6 fw-light">/year</span>
          </h3>
          <div class="mt-4">
            <button class="btn btn-outline-primary rounded rounded-pill p-2 w-75">APPLY</button>
          </div>

        </div>
      </div>
    </section>
    <hr>
    <div class="row justify-content-between">
      <small class="w-auto">Posted: {{ job.createdAt }}</small>
      <small class="w-auto">Revised: {{ job.updatedAt }}</small>

    </div>
  </div>

</template>


<style lang="scss" scoped></style>