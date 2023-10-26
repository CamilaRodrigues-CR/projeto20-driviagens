import httpStatus from "http-status";
import { findPassager, insertPassager } from "../repositories/passengersRepositories.js";

export async function postPassenger(req, res){
    const { firstName, lastName } = req.body;

    await insertPassager(firstName, lastName);

    const passenger = await findPassager(firstName, lastName)

    return res.status(httpStatus.CREATED).send(passenger.rows[0])
};