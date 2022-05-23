
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import {readdirSync} from 'fs'; // from nodejs or destruct readdirSync
require("dotenv").config();
const morgan = require("morgan");


const app = express();
app.use(morgan("dev")); // use morgan in dev get req post to show terminal
app.use(cors());
app.use(express.json()); // to get data as json



// route middleware
readdirSync('./routes').map((r) => app.use("/api",require(`./routes/${r}`)));

mongoose
.connect(process.env.DATABASE, {})
.then(() => console.log("DB connected"))
.catch((err) => console.log("DB Error => ", err));

const port = process.env.PORT || 4000;
app.listen(port,() =>{
   console.log(`Server is runnning on ${port}`);
});