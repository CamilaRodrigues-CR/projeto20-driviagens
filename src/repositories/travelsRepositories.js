import { db } from "../database/databaseConnection.js";

async function findPassenger(passengerId){
    const resultCity = db.query(`SELECT * FROM passengers WHERE id=$1;` , [passengerId]);

    return resultCity;
}

async function findFlight(flightId){
    const resultCity = db.query(`SELECT * FROM flights WHERE id=$1;` , [flightId]);

    return resultCity;
}

async function insertTravel(passengerId,flightId){
    const resultInsert = db.query(`INSERT INTO travels ("passengerId" ,"flightId") VALUES ($1 , $2);` , [passengerId,flightId]);
    return resultInsert;
}

async function findTravels(passengerId,flightId){
    const resultTravels = db.query(`SELECT * FROM travels WHERE "passengerId"=$1 AND "flightId"=$2;` , [passengerId,flightId])
    return resultTravels;
 }
 
export const travelsRepositories = {findPassenger, findFlight, insertTravel, findTravels}