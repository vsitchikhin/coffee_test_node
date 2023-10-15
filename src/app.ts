import express, { Express } from 'express';
import dotenv from 'dotenv';
import { db } from './database/db';
import getCoffeeMachinesRouter from "./routes/coffeMachinesRouter";
import cors from 'cors';

dotenv.config();

const expressJSONBody = express.json()
export const app: Express = express();


app.use(expressJSONBody)
app.use(cors({
  origin: '*'
}));
app.use('/machines', getCoffeeMachinesRouter(db))
