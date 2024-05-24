const {CityRepository}=require('../repository/index');

class CityService{
    constructor(){
        this.cityRepository=new CityRepository();       //we are writing so that you can see different ways of writing class you can directly use CityRepository
    }

    async createCity(data){             //humko poora data milega
        try {
           const city=await this.cityRepository.createCity(data);
           return city; 
        } catch (error) {
            console.log("Something wrong at service layer");
            throw(error);
        }
    }

    async deleteCity(cityId){
        try {
            const response=await this.city_repository.deleteCity(cityId);
            return response;
        } catch (error) {
            console.log("Something wrong at service layer");
            throw(error);
        }
    }

    async updateCity(cityId,data){
        try {
            const city=await this.cityRepository.updateCity(cityId,data);
            return city;
        } catch (error) {
            console.log("Something wrong at service layer");
            throw(error);
        }
    }

    async getCity(cityId){
        try {
            const city=await this.cityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("Something wrong at service layer");
            throw(error);
        }
    }


}

module.exports=CityService;