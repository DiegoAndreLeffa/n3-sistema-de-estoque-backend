import { Router } from "express";

import { authenticationController } from "../../controllers/index.js";

export const authRouter = Router();

authRouter.post("", authenticationController);
