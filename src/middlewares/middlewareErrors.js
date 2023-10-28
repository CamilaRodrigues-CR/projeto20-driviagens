import httpStatus from "http-status";

export default async function handleErrors(err, req, res, next){

    if(err.type === "validateError") return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(err.message);

    if(err.type === "alreadyExistError") return res.status(httpStatus.CONFLICT).send(err.message);
    
    if(err.type === "notFoundError") return res.status(httpStatus.NOT_FOUND).send(err.message);

    if(err.type === "equalValuesError") return res.status(httpStatus.CONFLICT).send(err.message);

    if(err.type === "datesEqualsError") return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(err.message);


    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send("ops, houve um problema no servidor!!")
}