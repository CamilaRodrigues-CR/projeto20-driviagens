import { db } from "../database/databaseConnection.js";

async function insertPassager( firstName, lastName ){
   const resultInsert = db.query(`INSERT INTO passengers ("firstName" , "lastName") VALUES ($1, $2);` , [ firstName, lastName ])
   return resultInsert;
};

async function findPassager( firstName, lastName ){
    const resultPassenger = db.query(`SELECT * FROM passengers WHERE "firstName"=$1 AND "lastName"=$2;` , [ firstName, lastName ])
    return resultPassenger;
 };


async function getPassengersTravels(name){
   const  StringQuery= `SELECT passengers."firstName", passengers."lastName", COUNT(travels."passengerId") AS travels
   FROM travels
   RIGHT JOIN passengers ON passengers.id = travels."passengerId"`

   let queryComplement = ` GROUP BY passengers.id ORDER BY travels DESC;`
    let values = [];

    if( name ){
        queryComplement = ` WHERE passengers."firstName" LIKE $1 OR passengers."lastName" LIKE $2
        GROUP BY passengers.id
        ORDER BY travels DESC;`

        values.push(`%${name}%`, `%${name}%`)

        const result = await db.query(StringQuery+queryComplement, values)
       
       return result;
    } 

   
    const result = await db.query(StringQuery + queryComplement)

   return result;
};

export const passengersRepositories = { insertPassager, findPassager , getPassengersTravels}
