import express, { Express } from 'express';
import dotenv from 'dotenv';
import { db } from './database/db';
import getCoffeeMachinesRouter from "./routes/coffeMachinesRouter";

dotenv.config();

const expressJSONBody = express.json()
export const app: Express = express();


app.use(expressJSONBody)
app.use('/machines', getCoffeeMachinesRouter(db))
