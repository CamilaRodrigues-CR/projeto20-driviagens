import { passengersRepositories } from "../repositories/passengersRepositories.js";

async function insertPassager(firstName, lastName){
    const result = await passengersRepositories.insertPassager(firstName, lastName)
    return result
};

async function findPassager(firstName, lastName){
    const result = await passengersRepositories.findPassager(firstName, lastName)
    return result
};

async function findPassagersTravels(name){
    const result = await passengersRepositories.getPassengersTravels(name)
    return result
};

export const passengersService = {
    insertPassager,
    findPassager,
    findPassagersTravels
}