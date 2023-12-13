import { db } from "../database/databaseConnection.js";

async function findCityByName(name){
    const result = db.query(`SELECT * FROM cities WHERE name=$1;` , [name]);
    return result;
}


async function findCitiesById(id) {
    const resultCity = db.query(`SELECT * FROM cities WHERE id=$1;`, [id]);
    return resultCity;
}


async function insertCity(name){
    const result = db.query(`INSERT INTO cities (name) VALUES ($1);` , [name]);
    return result;
}
 
export const citiesRepositories = {
    findCityByName, 
    findCitiesById,
    insertCity,
}