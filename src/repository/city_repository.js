const {City} =require('../models/index');

class CityRepository{
    async createCity({Name} ){           //ek object milega aur humko name chahiye to whi destructure kar liya
        try{
            const city=await City.create( {Name} );
            return city;
        } catch(error){
            console.log("Something went wrong at repository level");
            throw(error);
        }
    }

    async deleteCity(cityId){
        try{
            await City.destroy({
                where:{
                    id:cityId
                },
            });
            return true;
        } catch(error){
            throw(error);
        }
    }

    async updateCity(cityId,data){              //data is some kind of object
        try {
            const city=await City.update(data,{         //data contains key value pair
                where:{
                    id:cityId
                }
            });
            return city;
        } catch (error) {
            console.log("Something went wrong at repository level");
            throw(error);
        }
    }



    async getCity(cityId){
        try{
            const city=await City.findOne({
                where:{
                    id:cityId
                },
            });
            return city;
        } catch(error){
            console.log("Something went wrong at repository level");
            throw(error);
        }

    }


}

module.exports=CityRepository;       //ye class hai to jha import karoge wha object banana padega pehle