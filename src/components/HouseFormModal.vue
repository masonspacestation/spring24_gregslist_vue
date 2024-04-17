<!-- eslint-disable no-console -->
<script setup>
import { logger } from '../utils/Logger.js';
import { ref } from 'vue'
import Pop from '../utils/Pop.js';
import { housesService } from '../services/HousesService.js'
import { Modal } from 'bootstrap';


const liveHouseData = ref({
  bedrooms: 0,
  bathrooms: 0,
  levels: 0,
  year: 0,
  price: 0,
  imgUrl: '',
  description: ''
})

async function createHouse() {
  try {
    console.log('Adding house 🏡');

    await housesService.createHouse(liveHouseData.value)

    liveHouseData.value = {
      bedrooms: 0,
      bathrooms: 0,
      levels: 0,
      year: 0,
      price: 0,
      imgUrl: '',
      description: ''
    }

    Modal.getOrCreateInstance('#houseFormModal').hide()

  }
  catch (error) {
    Pop.error(error);
  }
}

</script>


<template>
  <div class="modal fade" id="houseFormModal" tabindex="-1" aria-labelledby="houseFormModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="houseFormModalLabel">List a house!</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="createHouse()">
            <section class="container">
              <div class="form-row">
                <div class="form-floating mb-3">
                  <input v-model="liveHouseData.imgUrl" type="url" class="form-control" id="houseImage"
                    placeholder="House Image" required maxlength="500">
                  <label for="houseImage">House Image</label>
                </div>
              </div>

              <div class="form-row">

                <div class="col-3">
                  <div class="block form-floating mb-3">
                    <input v-model="liveHouseData.bedrooms" type="number" class="form-control" id="houseBedrooms"
                      placeholder="Bedrooms" required>
                    <label for="houseBedrooms">Bedrooms</label>
                  </div>
                </div>

                <div class="col-3">
                  <div class="block form-floating mb-3">
                    <input v-model="liveHouseData.bathrooms" type="number" class="form-control" id="houseBathrooms"
                      placeholder="House Bathrooms" required>
                    <label for="houseBathrooms">House Bathrooms</label>
                  </div>
                </div>

                <div class="col-3">
                  <div class="block form-floating mb-3">
                    <input v-model="liveHouseData.year" type="number" class="form-control" id="houseYear"
                      placeholder="House Year" required>
                    <label for="houseYear">House Year</label>
                  </div>
                </div>

                <div class="col-3">
                  <div class="block form-floating mb-3">
                    <input v-model="liveHouseData.price" type="number" class="form-control" id="housePrice"
                      placeholder="House Price" required>
                    <label for="housePrice">House Price</label>
                  </div>
                </div>

              </div>

              <div class="form-row">
                <div class="form-floating mb-3">
                  <textarea v-model="liveHouseData.description" class="form-control"
                    placeholder="Leave a description here" id="houseDescription" maxlength="5000"></textarea>
                  <label for="houseDescription">House Description</label>
                </div>
              </div>


              <div class="text-end">
                <button class="btn btn-success" type="submit">Submit</button>
              </div>
            </section>
          </form>

        </div>
      </div>
    </div>
  </div>

</template>


<style lang="scss" scoped></style>