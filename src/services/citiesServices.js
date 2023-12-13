import { citiesRepositories } from "../repositories/citiesRepositories.js"

async function existCity(name) {
    const city = await citiesRepositories.findCity(name);
    if (city.rowCount === 0) return null
}

async function insertCity(name) {
    const result = await citiesRepositories.insertCity(name);
    return result
}

async function findCity(name) {
    const result = await citiesRepositories.findCityByName(name);
    return result
}


export const citiesServices = {
    existCity,
    insertCity,
    findCity
}