import { Router } from "express";

import {
  createCategorieController,
  listCategorieController,
  listIdCategorieController,
  updateCategorieController,
  deleteCategorieController,
} from "../../../../n2-desenvolvimento-back-end/controllers";

export const categoriesRouter = Router();

categoriesRouter.post("", createCategorieController);
categoriesRouter.get("", listCategorieController);
categoriesRouter.get("/:id", listIdCategorieController);
categoriesRouter.patch("/:id", updateCategorieController);
categoriesRouter.delete("", deleteCategorieController);
