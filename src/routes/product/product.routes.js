import { Router } from "express";

import {
  createProductController,
  listProductController,
  listIdProductController,
  updateProductController,
  deleteProductController,
} from "../../controllers/index.js";

export const productsRouter = Router();

productsRouter.post("", createProductController);
productsRouter.get("", listProductController);
productsRouter.get("/:id", listIdProductController);
productsRouter.put("/:id", updateProductController);
productsRouter.delete("/:id", deleteProductController);
