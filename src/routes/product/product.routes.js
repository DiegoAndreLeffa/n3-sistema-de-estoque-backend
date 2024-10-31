import { Router } from "express";

import {
  createProductController,
  listProductController,
  listIdProductController,
  updateProductController,
  deleteProductController,
} from "../../../../n2-desenvolvimento-back-end/controllers";

export const productsRouter = Router();

productsRouter.post("", createProductController);
productsRouter.get("", listProductController);
productsRouter.get("/:id", listIdProductController);
productsRouter.patch("/:id", updateProductController);
productsRouter.delete("", deleteProductController);
