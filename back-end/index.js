import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import ItemRouter from "./server/ItemRoute.js";
import Routes from "./server/route.js";
import Auth from "./server/authRouter.js";
import secureRoutes from './server/secureRoutes.js';

const app = express();
dotenv.config({ path: "config.env" }); // Load the config.env file

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/info", ItemRouter);
app.use("/record", Routes);
app.use("/auth", Auth);
app.use('/secure', secureRoutes);

const PORT = process.env.PORT || "8080";
const URL = process.env.DATABASE;

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
  })
  .catch((error) => {
    console.log("Error:", error.message);
  });
