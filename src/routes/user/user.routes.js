import { Router } from "express";

import {
  createUserController,
  listUserController,
  listIdUserController,
  updateUserController,
  deleteUserController,
} from "../../controllers/index.js";

export const userRouter = Router();

userRouter.post("", createUserController);
userRouter.get("", listUserController);
userRouter.get("/:id", listIdUserController);
userRouter.put("/:id", updateUserController);
userRouter.delete("", deleteUserController);
