import httpStatus from "http-status";
import { passengersRepositories } from "../repositories/passengersRepositories.js";

export async function postPassenger(req, res) {
    const { firstName, lastName } = req.body;

    await passengersRepositories.insertPassager(firstName, lastName);

    const passenger = await passengersRepositories.findPassager(firstName, lastName)

    return res.status(httpStatus.CREATED).send(passenger.rows[0])
};

export async function getPassengersTravels(req, res) {
    const { name } = req.query
    const getPassengersTravels = await passengersRepositories.getPassengersTravels(name)

    return res.status(httpStatus.OK).send(getPassengersTravels.rows)
}