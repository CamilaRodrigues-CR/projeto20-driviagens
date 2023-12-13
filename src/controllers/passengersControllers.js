import httpStatus from "http-status";
import { passengersService } from "../services/passengersServices.js";

export async function postPassenger(req, res) {
    const { firstName, lastName } = req.body;

    await passengersService.insertPassager(firstName, lastName);

    const passenger = await passengersService.findPassager(firstName, lastName)

    return res.status(httpStatus.CREATED).send(passenger.rows[0])
};

export async function getPassengersTravels(req, res) {
    // TO DO: retornar o nome completo do passageiro
    const { name } = req.query
    const getPassengersTravels = await passengersService.findPassagersTravels(name)
    

    return res.status(httpStatus.OK).send(getPassengersTravels.rows)
}