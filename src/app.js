import express from "express";
import "express-async-errors";
import cors from "cors";
import router from "./routers/indexRoutes.js";
import handleErrors from "./middlewares/middlewareErrors.js";
import dotenv from "dotenv"


const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(handleErrors);
dotenv.config()



const PORT = process.env.PORT || 5000
app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)});