import dayjs from "dayjs";
import { flightsRepositories } from "../repositories/flightsRepositories.js";
import { citiesRepositories } from "../repositories/citiesRepositories.js";

async function existCities(origin, destination) {
    const resultOrigin = await citiesRepositories.findCitiesById(origin)
    const resultDestination = await citiesRepositories.findCitiesById(destination)
    if (resultOrigin.rowCount === 0 || resultDestination.rowCount === 0) return null;
}

async function equalCities(origin, destination) {
    if (origin === destination) return true
}

async function futureDate(date) { // recebo a dta em tipo string
    const arrData = date.split('-')
    const reversed = arrData.reverse()
    const joindata = reversed.join('-')

    const data = dayjs(joindata).format("YYYY-MM-DD")
    const today = dayjs();
    const compare = dayjs(data).isBefore(today);

    if (compare) return true
}

async function insertFlights(origin, destination, date){
   const formatData = date.split('-')
   const reverse = formatData.reverse()
   const toISOdata = reverse.join('-')

   const isoDate = dayjs(toISOdata).toISOString()
   console.log('data =>' ,isoDate)

    const result = await flightsRepositories.insertFlights(origin, destination, isoDate);
    return result
}

async function findFlights(origin, destination, date){
    const result = await flightsRepositories.findFlights(origin, destination, date)
    return result
}

async function getFlights(origin, destination){
    const result = await flightsRepositories.getFlights(origin, destination)
    return result
}


export const flightsServices = { 
    existCities, 
    equalCities, 
    futureDate,
    insertFlights,
    findFlights,
    getFlights
}

/* no Services:
    - [ ]  A cidades de origem e destino devem ser ids de cidades que existem na tabela `cities`. Caso não sejam, emita o erro `404 (Not Found)`.
    - [ ]  Origem e destino devem ser diferentes. Caso não seja, emita o erro `409 (Conflict)`.
    - [ ]  A data do vôo deve ser maior do que a data atual, caso não seja, emita o erro `422 (Unprocessable Entity)`
            dayjs().format('DD-MM-YYYY')
*/