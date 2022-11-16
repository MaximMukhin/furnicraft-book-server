import express from "express";
import {
  createArticle,
  getArticles,
  getArticleById,
} from "../controllers/articles.js";

export const articlesRoutes = express.Router();

articlesRoutes.post("/", createArticle);
articlesRoutes.get("/", getArticles);
articlesRoutes.get("/:_id", getArticleById);
