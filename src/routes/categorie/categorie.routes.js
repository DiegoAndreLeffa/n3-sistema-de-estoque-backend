import { Router } from "express";

import {
  createCategorieController,
  listCategorieController,
  listIdCategorieController,
  updateCategorieController,
  deleteCategorieController,
} from "../../controllers/index.js";

export const categoriesRouter = Router();

categoriesRouter.post("", createCategorieController);
categoriesRouter.get("", listCategorieController);
categoriesRouter.get("/:id", listIdCategorieController);
categoriesRouter.delete("/:id", deleteCategorieController);

categoriesRouter.patch("/:id", updateCategorieController);
