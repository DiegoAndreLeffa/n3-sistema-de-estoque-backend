import { Router } from "express";

import { authenticationController } from "../../controllers";

export const authRouter = Router();

authRouter.post("", authenticationController);
