import { db } from "../database/databaseConnection.js";

async function findCity(name){
    const resultCity = db.query(`SELECT * FROM cities WHERE name=$1;` , [name]);

    return resultCity;
}

async function insertCity(name){
    const resultInsert = db.query(`INSERT INTO cities (name) VALUES ($1);` , [name]);
    return resultInsert;
}
 
export const citiesRepositories = {findCity, insertCity}