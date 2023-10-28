import dayjs from "dayjs";
import { flightsRepositories } from "../repositories/flightsRepositories.js";

async function existCities(origin, destination) {
    const resultOrigin = await flightsRepositories.findCities(origin)

    const resultDestination = await flightsRepositories.findCities(destination)

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

    if (compare) {
        return true;
    }
}

export const flightsServices = { existCities, equalCities, futureDate }

/* no Services:
    - [ ]  A cidades de origem e destino devem ser ids de cidades que existem na tabela `cities`. Caso não sejam, emita o erro `404 (Not Found)`.
    - [ ]  Origem e destino devem ser diferentes. Caso não seja, emita o erro `409 (Conflict)`.
    - [ ]  A data do vôo deve ser maior do que a data atual, caso não seja, emita o erro `422 (Unprocessable Entity)`
            dayjs().format('DD-MM-YYYY')
*/