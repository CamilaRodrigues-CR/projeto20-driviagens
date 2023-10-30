import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { passengersSchema } from "../schemas/passengersSchemas.js";
import { getPassengersTravels, postPassenger } from "../controllers/passengersControllers.js";

const passengersRouter = Router()

passengersRouter.post('/passengers', validateSchema(passengersSchema), postPassenger);
passengersRouter.get('/passengers/travels', getPassengersTravels);

export default passengersRouter;