import express from "express";
import {
  createArticle,
  getArticles,
  getArticleById,
  updateArticleById,
  deleteArticleById,
} from "../controllers/articles.js";

export const articlesRoutes = express.Router();

articlesRoutes.post("/", createArticle);
articlesRoutes.get("/", getArticles);
articlesRoutes.get("/:_id", getArticleById);
articlesRoutes.put("/:_id", updateArticleById);
articlesRoutes.delete("/:_id", deleteArticleById);
