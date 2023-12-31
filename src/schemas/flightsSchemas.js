import Joi from "joi";
import JoiDate from "@joi/date";

const joi = Joi.extend(JoiDate)

export const flightsSchema = Joi.object ({
    origin: Joi.number().integer().required(),
    destination: Joi.number().integer().required(),
    date: joi.date().format("DD-MM-YYYY").required()
});