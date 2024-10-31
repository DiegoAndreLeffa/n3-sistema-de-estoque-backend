import { Router } from "express";

import {
  createStockController,
  listStockController,
  listIdStockController,
  updateStockController,
  deleteStockController,
} from "../../../../n2-desenvolvimento-back-end/controllers";

export const stoksRouter = Router();

stoksRouter.post("", createStockController);
stoksRouter.get("", listStockController);
stoksRouter.get("/:id", listIdStockController);
stoksRouter.patch("/:id", updateStockController);
stoksRouter.delete("", deleteStockController);
