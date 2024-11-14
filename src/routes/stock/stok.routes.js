import { Router } from "express";

import {
  createStockController,
  listStockController,
  listIdStockController,
  updateStockController,
  deleteStockController,
} from "../../controllers/index.js";

export const stocksRouter = Router();

stocksRouter.post("", createStockController);
stocksRouter.get("", listStockController);
stocksRouter.get("/:id", listIdStockController);
stocksRouter.patch("/:id", updateStockController);
stocksRouter.delete("", deleteStockController);
