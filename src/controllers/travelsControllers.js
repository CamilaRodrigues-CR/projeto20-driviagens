import httpStatus from "http-status";
import { errors } from "../errors/typeErrors.js";
import { travelsServices } from "../services/travelsServices.js";
import { travelsRepositories } from "../repositories/travelsRepositories.js";


export async function postTravel(req, res){
    const { passengerId, flightId } = req.body;

// verificar se os ids existem
const existIds = await travelsServices.existPassenger(passengerId, flightId)
    if(existIds === null) throw errors.notFoundError("O id do passageiro ou o id do vôo é inexistente")
  
//inserir os dados na tabela
    await travelsRepositories.insertTravel(passengerId, flightId);

    const travel = await travelsRepositories.findTravels(passengerId, flightId);

    return res.status(httpStatus.CREATED).send(travel.rows[0]);
};