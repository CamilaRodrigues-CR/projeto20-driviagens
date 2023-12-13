import httpStatus from "http-status";
import { citiesServices } from "../services/citiesServices.js";
import { errors } from "../errors/typeErrors.js";


export async function postcities(req, res) {
    const { name } = req.body;

    const existCity = await citiesServices.existCity(name)
    if (existCity !== null) throw errors.alreadyExistError("cidade")

    await citiesServices.insertCity(name)

    const city = await citiesServices.findCity(name);

    return res.status(httpStatus.CREATED).send(city.rows[0])
};
