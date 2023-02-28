import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import ItemRouter from "./server/ItemRoute.js";
import Routes from "./server/route.js";

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/info", ItemRouter);
app.use("/record", Routes);

const URL =
  "mongodb+srv://MERN-STACK:4g8fJ790cyf5CsBV@cluster0.4s7rg.mongodb.net/MERN-STACK";

const PORT = process.env.PORT || "8080";

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
