import Article from "../models/article.js";

export const createArticle = async (req, res, next) => {
  try {
    const { body } = req;
    const article = await Article.create(body);
    res.send({ article });
  } catch (error) {
    next(error);
  }
};

export const getArticles = async (req, res, next) => {
  try {
    const articles = await Article.find({});
    res.send({ articles });
  } catch (error) {
    next(error);
  }
};

export const getArticleById = async (req, res, next) => {
  try {
    const { _id } = req.params;
    const article = await Article.findById(_id);
    res.send({ article });
  } catch (error) {
    next(error);
  }
};
