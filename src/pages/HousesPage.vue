<script setup>
import { computed, onMounted } from 'vue';
import { housesService } from "../services/HousesService.js";
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';
import HouseCard from '../components/HouseCard.vue'


const houses = computed(() => AppState.houses)
const account = computed(() => AppState.account)


onMounted(() => {
  getHouses()
})

async function getHouses(){
try {
  await housesService.getHouses()
}
catch (error){
  Pop.toast('Sorry, could not get houses','error');
}
}
</script>



<template>
  <section class="container">
    <div class="row">
      <button v-if="account" class="btn btn-outline-dark" title="List a house for sale!" data-bs-toggle="modal"
          data-bs-target="#houseFormModal">
          <i class="mdi mdi-plus"></i>
        </button>
    </div>

    <div class="row">
    <div class="col-6 p-2" v-for="house in houses" :key="house.id">
      <HouseCard :house="house"/>
    </div>
    </div>
  </section>
  <HouseFormModal/>
</template>


<style scoped></style>