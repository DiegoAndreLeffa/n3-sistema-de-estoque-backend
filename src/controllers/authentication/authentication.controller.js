import { authenticationService } from "../../services/index.js";

export const authenticationController = async (Request, Response) => {
  try {
    const result = await authenticationService(Request.body);
    Response.status(201).json(result);
  } catch (err) {
    Response.status(400).json(err);
  }
};
