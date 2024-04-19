import express from 'express'
import ErrorMiddleWare from './middleware/Error.js';


const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

import fruits from './routes/fruitsRoute.js'
import { urlencoded } from 'express';
app.use("/api/v1",fruits)



export default app;



app.use(ErrorMiddleWare)