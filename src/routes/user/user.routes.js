import { Router } from "express";

import {
  createUserController,
  listUserController,
  listIdUserController,
  updateUserController,
  deleteUserController,
} from "../../controllers";

export const userRouter = Router();

userRouter.post("", createUserController);
userRouter.get("", listUserController);
userRouter.get("/:id", listIdUserController);
userRouter.patch("/:id", updateUserController);
userRouter.delete("", deleteUserController);
