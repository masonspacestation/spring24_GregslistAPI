import { dbContext } from "../db/DbContext.js"




class HousesService {

  async getHouses() {
    const houses = await dbContext.House.find()
    return houses
  }


  async searchHouses(searchQuery) {
    const house = await dbContext.House.find(searchQuery)
    return house
  }



  async getHouseById(houseId) {
    const house = await dbContext.House.findById(houseId)
    if (!house) throw new Error(`Nobody is home with ID: ${houseId}`)
    return house
  }


}


export const housesService = new HousesService()