import { db } from "../database/databaseConnection.js";

async function insertPassager( firstName, lastName ){
   const resultInsert = db.query(`INSERT INTO passengers ("firstName" , "lastName") VALUES ($1, $2);` , [ firstName, lastName ])
   return resultInsert;
}

async function findPassager( firstName, lastName ){
    const resultPassenger = db.query(`SELECT * FROM passengers WHERE "firstName"=$1 AND "lastName"=$2;` , [ firstName, lastName ])
    return resultPassenger;
 }

export const passengersRepositories = { insertPassager, findPassager}
