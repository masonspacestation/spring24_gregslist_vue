<script setup>
import { computed } from 'vue';
import { House } from '../models/House.js';
import { housesService } from '../services/HousesService.js'
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';

defineProps({
  house: House
})

const account = computed(() => AppState.account)

async function removeHouse(house) {
  try {
    const wantsToDestroy = await Pop.confirm('Do you really want to remove this listing?')
    if (!wantsToDestroy) return
    await housesService.removeHouse(house)
  }
  catch (error) {
    Pop.toast(`Sorry, could not delete this house.`, 'error');
  }
}

</script>



<template>

  <div class="card p-3 mb-4">
    <img :src="house.imgUrl" alt="house photo" class="card-img-top">
    <div class="card-body">
      <p>{{ house.description }}</p>
      <div class="mt-3 row text-center justify-items-around align-items-middle">
        <div class="col-3 p-3">
          <p class="fw-bold fs-3"><i class="mdi mdi-bed-king-outline"></i> {{ house.bedrooms }}</p>
        </div>
        <div class="col-3 p-3">
          <p class="fw-bold fs-3"><i class="mdi mdi-shower"></i> {{ house.bathrooms }}</p>
        </div>
        <div class="col-6 p-3">
          <p class="fw-bold fs-3"><i class="mdi mdi-currency-usd"></i> {{ house.price }}</p>
        </div>
      </div>
      <!-- <div class="row p-3">
          <button class="btn btn-primary rounded rounded-2" @click="buyHouse(house)">${{house.price}}</button>
        </div> -->
      <div v-if="house.creatorId == account?.id" class="row justify-content-end text-end">
        <div class="col-3">
          <button class="btn btn-outline-danger rounded rounded-2" @click="removeHouse(house.id)"><i
              class="fs-3 mdi mdi-home-off"></i></button>
        </div>
      </div>
    </div>
  </div>

</template>


<style lang="scss" scoped></style>