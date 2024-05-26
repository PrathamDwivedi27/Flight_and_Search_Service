const {FlightService}=require('../services/index');

const flightService=new FlightService();

const create=async(req,res)=>{
    try {
        const flight=await flightService.createFlight(req.body);
        return res.status(201).json({
        data:flight,
        success:true,
        message:"Successfully created a flight"
    })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
        success: false,
        data: {},
        err: error,
        message: "Not able to create a flight",
    });
    }
    
}

module.exports={
    create
}