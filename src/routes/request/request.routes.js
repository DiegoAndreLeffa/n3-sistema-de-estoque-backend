import { Router } from "express";

import {
  createRequestController,
  listRequestController,
  listIdRequestController,
  updateRequestController,
  deleteRequestController,
} from "../../../../n2-desenvolvimento-back-end/controllers";

export const requestsRouter = Router();

requestsRouter.post("", createRequestController);
requestsRouter.get("", listRequestController);
requestsRouter.get("/:id", listIdRequestController);
requestsRouter.patch("/:id", updateRequestController);
requestsRouter.delete("", deleteRequestController);
