import { travelsRepositories } from "../repositories/travelsRepositories.js";

async function existPassenger( passengerId, flightId){
    const resultPassenger = await travelsRepositories.findPassenger(passengerId); 
  
    const resultFlights = await travelsRepositories.findFlight(flightId)
    
    if (resultPassenger.rowCount === 0 || resultFlights.rowCount === 0) return null
}

export const travelsServices = {existPassenger }