import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { travelsSchema } from "../schemas/travelsSchemas.js";
import { postTravel } from "../controllers/travelsControllers.js";

const travelsRouter = Router()

travelsRouter.post('/travels', validateSchema(travelsSchema), postTravel);

export default travelsRouter;