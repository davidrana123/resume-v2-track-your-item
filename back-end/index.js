import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import { Server } from 'socket.io';
import http from 'http'

import ItemRouter from "./server/ItemRoute.js";
import Routes from "./server/route.js";
import Auth from "./server/authRouter.js";
import secureRoutes from './server/secureRoutes.js';
import AppRouter from './server/appRouter.js';

const app = express();
dotenv.config({ path: "config.env" }); // Load the config.env file
const MainServer = http.createServer(app);
const io = new Server(MainServer, {
  cors: {
    origin: "*",
    // methods: ["GET", "POST"],
    // allowedHeaders: ["my-custom-header"],
    // credentials: true
  }
});

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/info", ItemRouter);
app.use("/record", Routes);
app.use("/auth", Auth);
app.use('/secure', secureRoutes);
app.use('/app', AppRouter);

const PORT = process.env.PORT || "8080";
const URL = process.env.DATABASE;

io.on('connection', (socket) => {
  socket.on('message', (data) => {
    io.emit('message', data);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    MainServer.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
  })
  .catch((error) => {
    console.log("Error:", error.message);
  });
