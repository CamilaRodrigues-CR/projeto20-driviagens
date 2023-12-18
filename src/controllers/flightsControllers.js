import httpStatus from "http-status";
import { errors } from "../errors/typeErrors.js";
import { flightsServices } from "../services/flightsServices.js";
import dayjs from "dayjs";



// *******   ARRUMAR A INSERÇÃO E O GET NO DEPLOY  ********

export async function postFlights(req, res) {
    const { origin, destination, date } = req.body;
    console.log(date)

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
   console.log(insertedFlight.rows[0])

    const flight = await flightsServices.findFlights(insertedFlight.rows[0].id)
    console.log("variavel flight - " , flight.rows[0])
    
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

/*

O resultado sempre deve vir ordenado por datas, da mais próxima para a mais distante.

query para a busca (USAR ALIASES PARA CONSEGUIR REPETIR A BUSCA PELO NOME DA CIDADE) :
para buscar a origem => cities_origin.name <= fará com que a coluna cities.name tenha esse nome temporáriamente para a consulta
para buscar o destino  => cities_destination.name <= 

buscar SQL LIKE operator para entender
*/