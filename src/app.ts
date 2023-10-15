import express, { Express } from 'express';
import dotenv from 'dotenv';
import { db } from './database/db';
import getCoffeeMachinesRouter from "./routes/coffeMachinesRouter";

dotenv.config();

const expressJSONBody = express.json()
export const app: Express = express();


app.use(expressJSONBody)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/machines', getCoffeeMachinesRouter(db))
