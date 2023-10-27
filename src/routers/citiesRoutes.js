import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { citieSchema } from "../schemas/citiesSchemas.js";
import { postcities } from "../controllers/citiesControllers.js";

const citiesRouter = Router()

citiesRouter.post('/cities', validateSchema(citieSchema), postcities);

export default citiesRouter;