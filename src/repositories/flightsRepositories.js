import { db } from "../database/databaseConnection.js";

//post flights

async function insertFlights(origin, destination, date) {

    console.log("dados do flight inseridos na repository => ",origin, destination, date)
    const resultInsert = db.query(`INSERT INTO flights (origin , destination, date) VALUES ($1, $2, $3);`, [origin, destination, date]);
    return resultInsert;
}

async function findFlights(origin, destination, date) {
    const resultPassenger = db.query(`SELECT * FROM flights WHERE "origin"=$1 AND "destination"=$2 AND "date"=$3;`, [origin, destination, date])
    return resultPassenger;
}


//get flights
async function getFlights(origin, destination) {
    
    const StringQuery =`SELECT flights.id, cities_origin.name AS origin, cities_destination.name AS destination, flights.date
    FROM flights
    JOIN cities AS cities_origin ON flights.origin = cities_origin.id
    JOIN cities AS cities_destination ON flights.destination = cities_destination.id`;

    let queryComplement = ` ORDER BY date;`
    let values = [];

    if( origin && destination){
        queryComplement = ` WHERE cities_origin.name=$1 AND cities_destination.name=$2 ORDER BY date;`
        values.push(origin, destination)
    } else if( origin ){
        queryComplement = ` WHERE cities_origin.name=$1 ORDER BY date;`
        values.push(origin)
    } else if(destination){
        queryComplement = ` WHERE cities_destination.name=$1 ORDER BY date;`
        values.push(destination)
    }

    const result = await db.query(StringQuery + queryComplement, values)

    return result;
}

export const flightsRepositories = {
    insertFlights, 
    findFlights, 
    getFlights 
}