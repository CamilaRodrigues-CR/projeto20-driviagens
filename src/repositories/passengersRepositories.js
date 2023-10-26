import { db } from "../database/databaseConnection.js";

export function insertPassager( firstName, lastName ){
   const resultInsert = db.query(`INSERT INTO passengers ("firstName" , "lastName") VALUES ($1, $2);` , [ firstName, lastName ])
   return resultInsert;
}

export function findPassager( firstName, lastName ){
    const resultPassenger = db.query(`SELECT * FROM passengers WHERE "firstName"=$1 AND "lastName"=$2;` , [ firstName, lastName ])
    return resultPassenger;
 }