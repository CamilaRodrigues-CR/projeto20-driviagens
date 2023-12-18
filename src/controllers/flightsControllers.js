import httpStatus from "http-status";
import { errors } from "../errors/typeErrors.js";
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

    const insertedFlight = await flightsServices.insertFlights(origin, destination, date);

    const flight = await flightsServices.findFlights(insertedFlight.rows[0].id)

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

export async function getFlights(req, res) {
    const { origin, destination } = req.query

    // TO DO: passar o acesso ao repository para a service
    const resultFlights = await flightsServices.getFlights(origin, destination)

    const flights = resultFlights.rows.map(f => {
        const obj = {
            ...f,
            date: f.date.toISOString().slice(0, 10).split('-').reverse().join('-')
        }
        return obj;
    })

    res.status(httpStatus.OK).send(flights)
}