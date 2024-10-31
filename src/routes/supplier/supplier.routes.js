import { Router } from "express";

import {
  createSupplierController,
  listSupplierController,
  listIdSupplierController,
  updateSupplierController,
  deleteSupplierController,
} from "../../controllers";

export const suppliersRouter = Router();

suppliersRouter.post("", createSupplierController);
suppliersRouter.get("", listSupplierController);
suppliersRouter.get("/:id", listIdSupplierController);
suppliersRouter.patch("/:id", updateSupplierController);
suppliersRouter.delete("", deleteSupplierController);
