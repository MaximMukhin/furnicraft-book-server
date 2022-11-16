import mongoose from "mongoose";

import { ARTICLE_TYPE } from "../constants.js";

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 255,
    },
    description: {
      type: String,
    },
    content: {
      type: String,
      required: true,
    },
    position: {
      type: Number,
      default: 0,
    },
    type: {
      type: String,
      enum: [ARTICLE_TYPE.PRODUCT, ARTICLE_TYPE.GLOBAL],
      default: ARTICLE_TYPE.GLOBAL,
    },
    createdAt: {
      type: Date,
      default: () => Date.now(),
    },
    updatedAt: {
      type: Date,
      default: null,
    },
  },
  { versionKey: false }
);

export default mongoose.model("article", articleSchema);
