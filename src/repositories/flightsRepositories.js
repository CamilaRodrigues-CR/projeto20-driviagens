import { db } from "../database/databaseConnection.js";

async function findCities(id){
    const resultCity = db.query(`SELECT * FROM cities WHERE id=$1;` , [id]);
    return resultCity;
}

async function insertFlights(origin, destination, date){

    const resultInsert = db.query(`INSERT INTO flights ("origin" , "destination", "date") VALUES ($1, $2, $3);` , [origin, destination, date]);
    return resultInsert;
}

async function findFlights( origin, destination, date){
    const resultPassenger = db.query(`SELECT * FROM flights WHERE "origin"=$1 AND "destination"=$2 AND "date"=$3;` , [origin, destination, date])
    return resultPassenger;
 }

export const flightsRepositories = {findCities, insertFlights, findFlights}