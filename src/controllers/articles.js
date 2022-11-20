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

export const updateArticleById = async (req, res, next) => {
  try {
    const { _id } = req.params;
    const { body } = req;

    const article = await Article.findByIdAndUpdate(_id, body, {
      new: true,
      runValidators: true,
    });

    res.send({ article });
  } catch (error) {
    next(error);
  }
};

export const deleteArticleById = async (req, res, next) => {
  try {
    const { _id } = req.params;
    const article = await Article.findByIdAndRemove(_id);

    res.send({ article });
  } catch (error) {
    next(error);
  }
};
