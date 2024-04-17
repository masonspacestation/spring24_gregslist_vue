/* eslint-disable no-console */
import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"



class HousesService {
  async createHouse(houseData) {
    const response = await api.post('api/houses', houseData)
    console.log('added house', response.data);
    const newHouse = new House(response.data)

    AppState.houses.push(newHouse)
  }
  async removeHouse(houseId) {

    const response = await api.delete(`api/houses/${houseId}`)
    console.log('deleting', response.data);
    const houses = AppState.houses

    const houseIndex = houses.findIndex(house => house.id == houseId)
    if (houseIndex == -1) throw new Error(`Found wrong index`)

    houses.splice(houseIndex, 1)
  }
  async getHouses() {
    const response = await api.get(`api/houses`)
    console.log(response.data);
    AppState.houses = response.data.map(house => new House(house))
    console.log('appstate', AppState);
  }

}


export const housesService = new HousesService