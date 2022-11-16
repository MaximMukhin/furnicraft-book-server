import express from "express";
import { articlesRoutes } from "./articles.js";

export const router = express.Router();

router.use("/articles", articlesRoutes);
