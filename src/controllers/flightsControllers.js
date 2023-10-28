import httpStatus from "http-status";
import { errors } from "../errors/typeErrors.js";
import { flightsRepositories } from "../repositories/flightsRepositories.js";
import { flightsServices } from "../services/flightsServices.js";


export async function postFlights(req, res) {
    const { origin, destination, date } = req.body;

    //verificar se as cidades existem:
    const exist = await flightsServices.existCities(origin, destination);
    if (exist === null) throw errors.notFoundError("A cidade de origem e/ou de destino não está cadastrada")

    //verificar se as cidades são iguais:
    const equals = await flightsServices.equalCities(origin, destination);
    if (equals == true) throw errors.equalValuesError("As cidades de origem e destino não podem ser iguais")

    //verificar as datas:
    const datesEquals = await flightsServices.futureDate(date);
    if (datesEquals == true) throw errors.datesEqualsError("data inserida")

    //inserir o voo
    await flightsRepositories.insertFlights(origin, destination, date);

    //buscar o retorno
    const flight = await flightsRepositories.findFlights(origin, destination, date)

    //formatar a data
    const data = flight.rows[0].date.toISOString().slice(0, 10)
    const arrData = data.split('-')
    const reversed = arrData.reverse()
    const joindata = reversed.join('-')

    const formatedFlight = {
        ...flight.rows[0],
        date: joindata
    };

    return res.status(httpStatus.CREATED).send(formatedFlight);
};