const {FlightService}=require('../services/index');
const {SuccessCodes}=require('../utils/error-codes');

const flightService=new FlightService();

const create=async(req,res)=>{
    try {
        const flight=await flightService.createFlight(req.body);
        return res.status(SuccessCodes.CREATED).json({
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

const getAll=async(req,res)=>{
    try {
        const response=await flightService.getAllFlightData(req.query);
        return res.status(SuccessCodes.OK).json({ 
        data:response,
        success:true,
        message:"Successfully fetched the flights"
    })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
        success: false,
        data: {},
        err: error,
        message: "Not able to fetch the flights",
    });
    }
}

module.exports={
    create,
    getAll
}