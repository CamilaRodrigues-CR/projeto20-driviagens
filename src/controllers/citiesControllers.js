import httpStatus from "http-status";
import { citiesServices } from "../services/citiesServices.js";
import { citiesRepositories } from "../repositories/citiesRepositories.js";
import { errors } from "../errors/typeErrors.js";


export async function postcities(req, res){
    const { name } = req.body;

// verificar se existe a cidade
   const existCity = await citiesServices.ExistCity(name)
   if (existCity !== null) throw errors.alreadyExistError("cidade")
   
   await citiesRepositories.insertCity(name)
   
   const city = await citiesRepositories.findCity(name);

    return res.status(httpStatus.CREATED).send(city.rows[0])
};
