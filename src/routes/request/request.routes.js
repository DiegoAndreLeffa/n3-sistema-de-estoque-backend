import { Router } from "express";

import {
  createRequestController,
  listRequestController,
  listIdRequestController,
  updateRequestController,
  deleteRequestController,
} from "../../controllers/index.js";

export const requestsRouter = Router();

requestsRouter.post("", createRequestController);
requestsRouter.get("", listRequestController);
requestsRouter.get("/:id", listIdRequestController);
requestsRouter.patch("/:id", updateRequestController);
requestsRouter.delete("", deleteRequestController);
