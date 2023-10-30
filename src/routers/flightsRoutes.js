import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { flightsSchema } from "../schemas/flightsSchemas.js";
import { getFlights, postFlights } from "../controllers/flightsControllers.js";

const flightsRouter = Router()

flightsRouter.post('/flights', validateSchema(flightsSchema), postFlights);
flightsRouter.get('/flights', getFlights);

export default flightsRouter;