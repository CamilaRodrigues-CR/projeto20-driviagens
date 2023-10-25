import Joi from "joi";

export const flightsSchema = Joi.object ({
    origin: Joi.number().integer().required(),
    destination: Joi.number().integer().required(),
    date: Joi.date().required()
});