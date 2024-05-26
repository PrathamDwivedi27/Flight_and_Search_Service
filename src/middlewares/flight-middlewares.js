const validCreateFlight=(req,res,next)=>{
    if(
        !req.body.flightNumber||
        !req.body.airplaneId||
        !req.body.departureId||
        !req.body.arrivalId||
        !req.body.departureTime||
        !req.body.arrivalTime||
        !req.body.price
    ){
        return res.status(400).json({
            data:{},
            success:false,
            message:"Invalid request body to create flight",
            err:"Missing mandatory properties to create a flight"
        })
    }
    next();
}

module.exports={
    validCreateFlight
}