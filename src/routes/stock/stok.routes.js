import { Router } from "express";

import {
  createStockController,
  listStockController,
  listIdStockController,
  updateStockController,
  deleteStockController,
} from "../../controllers";

export const stoksRouter = Router();

stoksRouter.post("", createStockController);
stoksRouter.get("", listStockController);
stoksRouter.get("/:id", listIdStockController);
stoksRouter.patch("/:id", updateStockController);
stoksRouter.delete("", deleteStockController);
