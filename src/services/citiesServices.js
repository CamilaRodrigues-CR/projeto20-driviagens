import { citiesRepositories } from "../repositories/citiesRepositories.js"

async function ExistCity(name){
    const city = await citiesRepositories.findCity(name); 

    if (city.rowCount === 0 ) return null
}

export const citiesServices = { ExistCity }