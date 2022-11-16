import "dotenv/config.js";

import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import { router } from "./routes/index.js";
import { errorHandler } from "./middlewares/error-handler.js";

const {
  PORT = 4000,
  MONGO_HOST,
  MONGO_INITDB_DATABASE,
  MONGO_INITDB_ROOT_USERNAME,
  MONGO_INITDB_ROOT_PASSWORD,
} = process.env;

const app = express();

mongoose.connect(
  `mongodb://${MONGO_HOST}:27017/${MONGO_INITDB_DATABASE || ""}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    user: MONGO_INITDB_ROOT_USERNAME,
    pass: MONGO_INITDB_ROOT_PASSWORD,
  },
  (error) => {
    console.error(error);
  }
);

app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ limit: "2mb", extended: false }));
app.use(cors());
app.use(router);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server http://localhost:${PORT}`));
